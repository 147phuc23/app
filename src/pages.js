App._Pages = function (window, document, Clickable, Scrollable, utils, metrics) {
	var PAGE_NAME  = 'data-page',
		PAGE_CLASS = 'app-page',
		APP_LOADED = 'app-loaded',
		EVENTS = {
			SHOW    : 'appShow'    ,
			HIDE    : 'appHide'    ,
			BACK    : 'appBack'    ,
			FORWARD : 'appForward' ,
			LAYOUT  : 'appLayout'  ,
			ONLINE  : 'appOnline'  ,
			OFFLINE : 'appOffline'
		};

	var preloaded       = false,
		hasCustomEvents = null,
		customEvents    = null,
		forceIScroll    = !!window['APP_FORCE_ISCROLL'],
		pages           = {},
		populators      = [],
		unpopulators    = [];

	return {
		EVENTS : EVENTS        ,
		fire   : firePageEvent ,

		add   : addPage   ,
		has   : hasPage   ,
		clone : clonePage ,

		addPopulator   : addPopulator   ,
		addUnpopulator : addUnpopulator ,
		populate       : populatePage   ,
		unpopulate     : unpopulatePage ,

		generate          : generatePage          ,
		destroy           : destroyPage           ,
		startGeneration   : startPageGeneration   ,
		finishGeneration  : finishPageGeneration  ,
		startDestruction  : startPageDestruction  ,
		finishDestruction : finishPageDestruction ,

		fixTitle   : fixPageTitle     ,
		fixContent : fixContentHeight ,

		saveScrollPosition    : savePageScrollPosition    ,
		saveScrollStyle       : savePageScrollStyle       ,
		restoreScrollPosition : restorePageScrollPosition ,
		restoreScrollStyle    : restorePageScrollStyle
	};



	/* Page elements */

	function preloadPages () {
		if (preloaded) {
			return;
		}
		preloaded = true;

		var pageNodes = document.getElementsByClassName(PAGE_CLASS);

		for (var i=pageNodes.length; i--;) {
			addPage( pageNodes[i] );
		}

		document.body.className += ' ' + APP_LOADED;
	}

	function addPage (page, pageName) {
		if ( !pageName ) {
			pageName = page.getAttribute(PAGE_NAME);
		}

		if ( !pageName ) {
			throw TypeError('page name was not specified');
		}

		page.setAttribute(PAGE_NAME, pageName);
		if (page.parentNode) {
			page.parentNode.removeChild(page);
		}
		pages[pageName] = page.cloneNode(true);
	}

	function hasPage (pageName) {
		preloadPages();
		return (pageName in pages);
	}

	function clonePage (pageName) {
		if ( !hasPage(pageName) ) {
			throw TypeError(pageName + ' is not a known page');
		}
		return pages[pageName].cloneNode(true);
	}



	/* Page populators */

	function addPopulator (pageName, populator) {
		if ( !populators[pageName] ) {
			populators[pageName] = [ populator ];
		}
		else {
			populators[pageName].push(populator);
		}
	}

	function addUnpopulator (pageName, unpopulator) {
		if ( !unpopulators[pageName] ) {
			unpopulators[pageName] = [ unpopulator ];
		}
		else {
			unpopulators[pageName].push(unpopulator);
		}
	}

	function populatePage (pageName, pageManager, page, args) {
		var pagePopulators = populators[pageName] || [];
		pagePopulators.forEach(function (populator) {
			populator.call(pageManager, page, args);
		});
	}

	function unpopulatePage (pageName, pageManager, page, args) {
		var pageUnpopulators = unpopulators[pageName] || [];
		pageUnpopulators.forEach(function (unpopulator) {
			unpopulator.call(pageManager, page, args);
		});
	}



	/* Page generation */

	function generatePage (pageName, args) {
		var pageManager = {},
			page        = startPageGeneration(pageName, pageManager, args);

		finishPageGeneration(pageName, pageManager, page, args);

		return page;
	}

	function destroyPage (page) {
		var pageName = page.getAttribute(PAGE_NAME);
		startPageDestruction(pageName, {}, page, {});
		finishPageDestruction(pageName, {}, page, {});
	}

	function startPageGeneration (pageName, pageManager, args) {
		var page = clonePage(pageName);

		insureCustomEventing(page);

		metrics.watchPage(page, pageName, args);

		fixContentHeight(page);

		utils.forEach(
			page.querySelectorAll('.app-button'),
			function (button) {
				Clickable(button);

				var target = button.getAttribute('data-target'),
					back   = button.getAttribute('data-back');

				if (back) {
					Clickable.sticky(button, function (callback) {
						//TODO: make this nicer
						return App.back({}, callback);
					});
				}
				else if (target) {
					Clickable.sticky(button, function (callback) {
						//TODO: make this nicer
						return App.load(target, {}, {}, callback);
					});
				}
			}
		);

		populatePage(pageName, pageManager, page, args);

		firePageEvent(page, EVENTS.LAYOUT);

		page.addEventListener('DOMNodeInsertedIntoDocument', function () {
			fixPageTitle(page);
			firePageEvent(page, EVENTS.LAYOUT);
		}, false);

		return page;
	}

	function finishPageGeneration (pageName, pageManager, page, args) {
		setupScrollers(page);
	}

	function startPageDestruction (pageName, pageManager, page, args) {
		if (!utils.os.ios || utils.os.version < 6) {
			disableScrolling(page);
		}
	}

	function finishPageDestruction (pageName, pageManager, page, args) {
		unpopulatePage(pageName, pageManager, page, args);
	}



	/* Page layout */

	function fixContentHeight (page) {
		var topbar  = page.querySelector('.app-topbar'),
			content = page.querySelector('.app-content');

		if ( !content ) {
			return;
		}

		var height = window.innerHeight;

		if ( !topbar ) {
			content.style.height = height + 'px';
			return;
		}

		var topbarStyles = document.defaultView.getComputedStyle(topbar, null),
			topbarHeight = utils.os.android ? 48 : 44;

		if (topbarStyles.height) {
			topbarHeight = parseInt(topbarStyles.height) || 0;
		}

		content.style.height = (height - topbarHeight) + 'px';
	}

	function fixPageTitle (page) {
		var topbar = page.querySelector('.app-topbar');

		if ( !topbar ) {
			return;
		}

		var title = topbar.querySelector('.app-title');

		if (!title || !title.getAttribute('data-autosize') ) {
			return;
		}

		var margin      = 0,
			leftButton  = topbar.querySelector('.left.app-button'),
			rightButton = topbar.querySelector('.right.app-button');

		if (leftButton) {
			var leftStyles = utils.getStyles(leftButton),
				leftPos    = utils.getTotalWidth(leftStyles) + parseInt(leftStyles.left || 0) + 4;
			margin = Math.max(margin, leftPos);
		}

		if (rightButton) {
			var rightStyles = utils.getStyles(rightButton),
				rightPos    = utils.getTotalWidth(rightStyles) + parseInt(rightStyles.right || 0) + 4;
			margin = Math.max(margin, rightPos);
		}

		title.style.width = (window.innerWidth-margin*2) + 'px';
	}



	/* Page scrolling */

	function setupScrollers (page) {
		utils.forEach(
			page.querySelectorAll('.app-content'),
			function (content) {
				if ( !content.getAttribute('data-no-scroll') ) {
					setupScroller(content);
				}
			}
		);

		utils.forEach(
			page.querySelectorAll('[data-scrollable]'),
			function (content) {
				setupScroller(content);
			}
		);
	}

	function setupScroller (content) {
		Scrollable(content, forceIScroll);
		content.className += ' app-scrollable';
		if (!forceIScroll && utils.os.ios && utils.os.version < 6) {
			content.className += ' app-scrollhack';
		}
	}

	function disableScrolling (page) {
		utils.forEach(
			page.querySelectorAll('*'),
			function (elem) {
				elem.style['-webkit-overflow-scrolling'] = '';
			}
		);
	}

	function getScrollableElems (page) {
		var elems = [];

		if (page) {
			utils.forEach(
				page.querySelectorAll('.app-scrollable'),
				function (elem) {
					if (elem._scrollable) {
						elems.push(elem);
					}
				}
			);
		}

		return elems;
	}

	function savePageScrollPosition (page) {
		utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = elem._scrollTop();
				elem.setAttribute('data-last-scroll', scrollTop+'');
			}
		);
	}

	function savePageScrollStyle (page) {
		utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.style['-webkit-overflow-scrolling'] || '';
				elem.style['-webkit-overflow-scrolling'] = '';
				elem.setAttribute('data-scroll-style', scrollStyle);
			}
		);
	}

	function restorePageScrollPosition (page, noTimeout) {
		utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = parseInt( elem.getAttribute('data-last-scroll') );

				if (scrollTop) {
					if ( !noTimeout ) {
						setTimeout(function () {
							elem._scrollTop(scrollTop);
						}, 0);
					}
					else {
						elem._scrollTop(scrollTop);
					}
				}
			}
		);
	}

	function restorePageScrollStyle (page) {
		utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.getAttribute('data-scroll-style') || '';

				if (scrollStyle) {
					elem.style['-webkit-overflow-scrolling'] = scrollStyle;
				}

			}
		);

		restorePageScrollPosition(page, true);
	}



	/* Page eventing */

	function supportsCustomEventing () {
		if (hasCustomEvents === null) {
			try {
				var elem = document.createElement('div'),
					evt  = document.createEvent('CustomEvent');
				evt.initEvent('fooBarFace', false, true);
				elem.dispatchEvent(evt);
				hasCustomEvents = true;
			}
			catch (err) {
				hasCustomEvents = false;
			}
		}

		return hasCustomEvents;
	}

	function getCustomEvents () {
		if ( !customEvents ) {
			customEvents = [];
			for (var eventKey in EVENTS) {
				customEvents.push( EVENTS[eventKey] );
			}
		}

		return customEvents;
	}

	function insureCustomEventing (page) {
		if (page._brokenEvents || supportsCustomEventing()) {
			return;
		}

		page._brokenEvents = true;
		page._addEventListener    = page.addEventListener;
		page._removeEventListener = page.removeEventListener;

		var listeners = {},
			names     = getCustomEvents();

		names.forEach(function (name) {
			listeners[name] = [];
		});

		page.addEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._addEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name];

			if (eventListeners.indexOf(listener) === -1) {
				eventListeners.push(listener);
			}
		};

		page.removeEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._removeEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name],
				index          = eventListeners.indexOf(listener);

			if (index !== -1) {
				eventListeners.splice(index, 1);
			}
		};

		page._trigger = function (name) {
			if (names.indexOf(name) === -1) {
				return;
			}

			listeners[name].forEach(function (listener) {
				setTimeout(function () {
					listener.call(page, {});
				}, 0);
			});
		};
	}

	function firePageEvent (page, eventName) {
		if (page._brokenEvents) {
			page._trigger(eventName);
			return;
		}

		var event = document.createEvent('CustomEvent');
		event.initEvent(eventName, false, true);
		page.dispatchEvent(event);
	}
}(window, document, Clickable, Scrollable, App._utils, App._metrics);
