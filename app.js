var ImageLoader=function(p,k,f,h){function l(a,b){a.style["-webkit-transition"]=b;a.style["-moz-transition"]=b;a.style["-ms-transition"]=b;a.style["-o-transition"]=b;a.style.transition=b}function i(a,b,d,e){function f(){h||(h=!0,m[b]=!0,a.src=b,a.style.opacity="1",setTimeout(function(){l(a,"");setTimeout(function(){a.style.opacity=g.opacity;a.style["-webkit-transition"]=g["-webkit-transition"];a.style["-moz-transition"]=g["-moz-transition"];a.style["-ms-transition"]=g["-ms-transition"];a.style["-o-transition"]=
g["-o-transition"];a.style.transition=g.transition;e()},0)},n),k.body.removeChild(c))}var j;a:if(a){try{j=a instanceof Node||a instanceof HTMLElement;break a}catch(i){}j="object"!==typeof a||"number"!==typeof a.nodeType||"string"!==typeof a.nodeName?!1:!0}else j=!1;if(!j)throw TypeError("image must be a DOM element, got "+a);if("string"!==typeof b)throw TypeError("url must be a string, got "+b);switch(typeof d){case "function":e=d;case "undefined":d=0;case "number":break;default:throw TypeError("minimum wait time must be a number if deinfed, got "+
d);}switch(typeof e){case "undefined":e=function(){};case "function":break;default:throw TypeError("callback must be a function if defined, got "+e);}if(!0===m[b])a.src=b;else{var h=!1,o=+new Date+(d||0),g={opacity:a.style.opacity,"-webkit-transition":a.style["-webkit-transition"],"-moz-transition":a.style["-moz-transition"],"-ms-transition":a.style["-ms-transition"],"-o-transition":a.style["-o-transition"],transition:a.style.transition};a.style.opacity="0";setTimeout(function(){l(a,"opacity "+n/
1E3+"s ease-in-out")},0);var c=new Image;c.style.opacity="0";c.style.position="fixed";c.style.top="-100%";c.style.left="-100%";c.style.height="1px";c.style.width="1px";k.body.appendChild(c);c.onload=function(){var a=+new Date;a>=o?f():setTimeout(f,o-a)};c.onerror=c.onload;c.src=b}}var n=300,m={};f&&f.extend(f.fn,{imageLoader:function(a,b,d){this.forEach(function(e){i(e,a,b,d)});return this}});h&&(h.fn.imageLoader=function(a,b,d){this.each(function(){i(this,a,b,d)});return this});return i}(window,
document,window.Zepto,window.jQuery);

var Swapper=function(A,t,h,j){function u(a,b){var c=b.parentNode;c.lastchild===b?c.appendChild(a):c.insertBefore(a,b.nextSibling)}function r(a){a.parentNode&&a.parentNode.removeChild(a)}function k(a,b){a.style["-webkit-transform"]=b;a.style["-moz-transform"]=b;a.style["-ms-transform"]=b;a.style["-o-transform"]=b;a.style.transform=b}function o(a,b){b?(a.style["-webkit-transition"]="-webkit-"+b,a.style["-moz-transition"]="-moz-"+b,a.style["-ms-transition"]="-ms-"+b,a.style["-o-transition"]="-o-"+b,
a.style.transition=b):(a.style["-webkit-transition"]="",a.style["-moz-transition"]="",a.style["-ms-transition"]="",a.style["-o-transition"]="",a.style.transition="")}function p(a,b){var c;c=b?a.style:t.defaultView.getComputedStyle(a,null);return{display:c.display,opacity:c.opacity,top:c.top,left:c.left,height:c.height,width:c.width,position:c.position}}function v(a){var b;a:if(a){try{b=a instanceof Node||a instanceof HTMLElement;break a}catch(c){}b="object"!==typeof a||"number"!==typeof a.nodeType||
"string"!==typeof a.nodeName?!1:!0}else b=!1;if(!b)throw TypeError("element must be a DOM node, got "+a);}function i(a,b,c,n){function h(){d.addEventListener("webkitTransitionEnd",f,!1);d.addEventListener("transitionend",f,!1);d.addEventListener("oTransitionEnd",f,!1);d.addEventListener("otransitionend",f,!1);d.addEventListener("MSTransitionEnd",f,!1);d.addEventListener("transitionend",f,!1)}function f(){w||(w=!0,d&&(d.removeEventListener("webkitTransitionEnd",f),d.removeEventListener("transitionend",
f),d.removeEventListener("oTransitionEnd",f),d.removeEventListener("otransitionend",f),d.removeEventListener("MSTransitionEnd",f),d.removeEventListener("transitionend",f)),r(a),o(a,""),o(b,""),setTimeout(function(){k(a,"");k(b,"");if(e[0].fade)b.style.opacity=l.opacity;if(e[1].fade)a.style.opacity=z.opacity;b.style.position=l.position;b.style.top=l.top;b.style.left=l.left;b.style.height=l.height;b.style.width=l.width;a._swapper=false;b._swapper=false;n()},0))}v(a);v(b);"function"===typeof c&&(n=c,
c={});switch(typeof c){case "string":c={transition:c};break;case "undefined":c={};break;case "object":break;default:throw TypeError("options must be an object if defined, got "+c);}switch(typeof c.transition){case "string":if(!(c.transition in x)&&"instant"!==c.transition)throw TypeError(c.transition+" is not a valid transition");break;case "undefined":break;default:throw TypeError("transition must be a string if defined, got "+c.transition);}switch(typeof c.duration){case "number":if(0>c.duration)throw TypeError("duration must be a non-negative integer, got "+
c.duration);break;case "undefined":break;default:throw TypeError("duration must be a number if defined, got "+c.duration);}switch(typeof c.easing){case "string":if(!(c.easing in y))throw TypeError(c.easing+" is not a valid easing");break;case "undefined":break;default:throw TypeError("easing must be a string if defined, got "+c.easing);}var g=n;switch(typeof g){case "undefined":g=function(){};break;case "function":break;default:throw TypeError("callback must be a function if defined, got "+g);}n=
g;if(a._swapper)throw Error("elem1 is currently being swapped");if(b._swapper)throw Error("elem2 is currently being swapped");a:{for(g=a;g=g.parentNode;)if(g===t){g=!0;break a}g=!1}if(!g)throw Error("elem1 must be in the DOM to be swapped");a._swapper=!0;b._swapper=!0;r(b);if("instant"===c.transition)u(b,a),r(a),a._swapper=!1,b._swapper=!1,setTimeout(function(){n()},0);else{var e=x[c.transition||"fade"],j=y[c.easing||"ease-in-out"],i=c.duration||300;u(b,a);var c=a.getBoundingClientRect(),q=p(a),s=
p(b),z=p(a,!0),l=p(b,!0);"none"!==q.display&&(b.style.position="fixed",b.style.top=c.top+"px",b.style.left=c.left+"px");b.style.height=s.height||q.height;b.style.width=s.width||q.width;e[2]&&a.parentNode.insertBefore(b,a);k(a,m);k(b,e[0].transform||m);e[0].fade&&(b.style.opacity="0");e[1].fade&&(a.style.opacity="1");setTimeout(function(){var c="transform "+i/1E3+"s "+j+", opacity "+i/1E3+"s "+j;o(a,c);o(b,c);setTimeout(function(){k(a,e[1].transform||m);k(b,m);if(e[0].fade)b.style.opacity="1";if(e[1].fade)a.style.opacity=
"0";if(s.display!=="none"&&(e[0].fade||e[0].transform&&e[0].transform!==m)){d=b;h()}else if(q.display!=="none"&&(e[1].fade||e[1].transform&&e[1].transform!==m)){d=a;h()}else setTimeout(f,i)},0)},0);var w=!1,d}}var m="translate3d(0,0,0) scale(1)";/\bandroid\b/i.test(navigator.userAgent);var x={fade:[{fade:!0},{fade:!0}],"fade-on":[{fade:!0},{}],"fade-off":[{},{fade:!0},!0],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},!0],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",
fade:!0},{transform:"rotateY( 180deg) perspective(360px)",fade:!0}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:!0},{transform:"rotateY(-180deg) perspective(360px)",fade:!0}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],
"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:!0,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:!0,transform:"scale(1.25)"},!0],"implode-in":[{},{fade:!0,transform:"scale(0.60)"},!0],"implode-out":[{fade:!0,transform:"scale(0.80)"},
{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},!0],"slideon-right":[{transform:"translate3d(100%,0,0)"},
{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},!0],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},!0],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},!0]},y={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};h&&h.extend(h.fn,{swapper:function(a,b,c){a=h(a)[0];this.forEach(function(h){i(h,
a,b,c)});return this}});j&&(j.fn.swapper=function(a,b,c){a=j(a)[0];this.each(function(){i(this,a,b,c)});return this});return i}(window,document,window.Zepto,window.jQuery);

var Clickable=function(q,u,n,l,o){function g(a,h){function e(){a.addEventListener("touchstart",n,!1);a.addEventListener("touchmove",p,!1);a.addEventListener("touchend",o,!1);a.addEventListener("touchcancel",p,!1)}function i(){a.removeEventListener("touchstart",n);a.removeEventListener("touchmove",p);a.removeEventListener("touchend",o);a.removeEventListener("touchcancel",p)}function g(){var b=a,c;c=a.className.replace(w,"");c=String(c).replace(x,"");b.className=c}function j(a,c){do{if(a===c)return!0;
if(a._clickable)break}while(a=a.parentNode);return!1}function k(b){c=!1;a.disabled||!j(b.target,a)?(b.preventDefault(),f=!1):(f=!0,a.className+=" "+h)}function r(a){a.preventDefault();c=f=!1;g()}function l(b){a.disabled?(b.preventDefault(),c=f=!1):(f?c=!0:(b.preventDefault(),c=!1),f=!1,g())}function n(b){c=!1;if(a.disabled||!j(b.target,a))f=!1;else{f=!0;var d=s=+new Date;setTimeout(function(){f&&d===s&&(a.className+=" "+h)},v)}}function p(){f=c=!1;a.disabled||g()}function o(b){function d(){c=!0;var b=
u.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,q,1,0,0,0,0,!1,!1,!1,!1,0,null);a.dispatchEvent(b)}var e=f;p();e&&!a.disabled&&(b.stopImmediatePropagation?+new Date-s>v?d():(a.className+=" "+h,setTimeout(function(){g();d()},1)):c=!0)}function t(b){b=b||q.event;if(!a.disabled&&c)c=!1;else return b.stopImmediatePropagation&&b.stopImmediatePropagation(),b.preventDefault(),b.stopPropagation(),b.cancelBubble=!0,b.returnValue=!1}var d;a:if(a){try{d=a instanceof Node||a instanceof HTMLElement;
break a}catch(y){}d="object"!==typeof a||"number"!==typeof a.nodeType||"string"!==typeof a.nodeName?!1:!0}else d=!1;if(!d)throw TypeError("element "+a+" must be a DOM element");if(!a._clickable){a._clickable=!0;switch(typeof h){case "undefined":h="active";case "string":break;default:throw TypeError("active class "+h+" must be a string");}a.setAttribute("data-clickable-class",h);var w=RegExp("\\b"+h+"\\b"),f=!1,c=!1,s;if(m.ios||m.android)if(a.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)",
a.addEventListener("click",t,!1),m.ios){a.addEventListener("DOMNodeInsertedIntoDocument",e,!1);a.addEventListener("DOMNodeRemovedFromDocument",i,!1);a:{for(d=a;d=d.parentNode;)if(d===u){d=!0;break a}d=!1}d&&e()}else e();else a.addEventListener?(a.addEventListener("mousedown",k,!1),a.addEventListener("mousemove",r,!1),a.addEventListener("mouseout",r,!1),a.addEventListener("mouseup",l,!1),a.addEventListener("click",t,!1)):a.attachEvent&&(a.attachEvent("onmousedown",k),a.attachEvent("onmousemove",r),
a.attachEvent("onmouseout",r),a.attachEvent("onmouseup",l),a.attachEvent("onclick",t))}}var x=/^\s+|\s+$/g,v=40,m,i=q.navigator.userAgent,e,j,k;if(k=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i))e="ios",j=k[1].replace("_",".");else if(k=/\bAndroid (\d+(\.\d+)?)/.exec(i))e="android",j=k[1];i={name:e,version:j&&q.parseFloat(j)};i[e]=!0;m=i;e=function(){g.apply(this,arguments)};n&&n.plugin("clickable",function(){g.apply(this,arguments)});l&&l.extend(l.fn,{clickable:function(a){this.forEach(function(e){g(e,a)});
return this}});o&&(o.fn.clickable=function(a){this.each(function(){g(this,a)});return this});e.touchable=function(){return m.ios||m.android};return e}(window,document,window.clik,window.Zepto,window.jQuery);

var Dialog=function(f,h,l){var j=h.querySelector("head"),d=[],k,a,g;if(match=/\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)){a="ios";g=parseFloat(match[1])}else{if(match=/\bAndroid (\d+(\.\d+(\.\d+)?)?)/.exec(navigator.userAgent)){a="android";g=parseFloat(match[1])}}function e(o){o.preventDefault()}function c(p){var o=d.splice(0);setTimeout(function(){o.forEach(function(q){try{j.removeChild(q)}catch(r){}})},p||0)}function m(r){var o=h.createElement("div");o.style.margin="0 4%";o.style.padding="12px 0";o.style.border="1px solid #060607";o.style["-webkit-border-radius"]="3px";o.style["-moz-border-radius"]="3px";o.style["border-radius"]="3px";o.style["-webkit-box-sizing"]="border-box";o.style["-moz-box-sizing"]="border-box";o.style["box-sizing"]="border-box";o.style.color="#FFF";o.style.fontSize="18px";o.style.fontWeight="bold";o.style.lineHeight="20px";o.style.textShadow="0 -1px 0 #1C1C1C";o.style.textAlign="center";var q="color: #EEE !important;background-image: -webkit-gradient(linear, left top, left bottom, from(#15171D), to(#1D1E25)) !important;background-image: -webkit-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -moz-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -ms-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -o-linear-gradient(top, #15171D, #1D1E25) !important;background-image: linear-gradient(top, #15171D, #1D1E25) !important;";if(a==="ios"){o.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(#3D3E45), to(#191A22))";o.style.backgroundImage="-webkit-linear-gradient(top, #3D3E45, #191A22)";o.style.backgroundImage="-moz-linear-gradient(top, #3D3E45, #191A22)";o.style.backgroundImage="-ms-linear-gradient(top, #3D3E45, #191A22)";o.style.backgroundImage="-o-linear-gradient(top, #3D3E45, #191A22)";o.style.backgroundImage="linear-gradient(top, #3D3E45, #191A22)";o.style["-webkit-box-shadow"]="inset 0 1px 1px #5C5E63";o.style["-moz-box-shadow"]="inset 0 1px 1px #5C5E63";o.style["box-shadow"]="inset 0 1px 1px #5C5E63";o.style["-webkit-border-radius"]="6px";o.style["-moz-border-radius"]="6px";o.style["border-radius"]="6px";q+="-webkit-box-shadow: inset 0 1px 2px #070814 !important;-moz-box-shadow: inset 0 1px 2px #070814 !important;box-shadow: inset 0 1px 2px #070814 !important;"}else{o.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(#3D3E45), to(#15171D))";o.style.backgroundImage="-webkit-linear-gradient(top, #3D3E45, #15171D)";o.style.backgroundImage="-moz-linear-gradient(top, #3D3E45, #15171D)";o.style.backgroundImage="-ms-linear-gradient(top, #3D3E45, #15171D)";o.style.backgroundImage="-o-linear-gradient(top, #3D3E45, #15171D)";o.style.backgroundImage="linear-gradient(top, #3D3E45, #15171D)"}o.id=("x"+Math.random()).replace(/\-|\./g,"");var p=h.createElement("link");p.rel="stylesheet";p.href="data:text/css,#"+o.id+".active{"+q+"}";j.appendChild(p);d.push(p);l&&l(o);o.addEventListener("click",r,false);return o}function n(x,v){var s=h.createElement("div");s.style.position="fixed";s.style.zIndex="5000";s.style.top="0";s.style.left="0";s.style.margin="0";s.style.padding="0";s.style.height="100%";s.style.width="100%";s.style.background="rgba(0,0,0, 0.8)";s.style.overflow="hidden";s.addEventListener("touchstart",e,false);var r=h.createElement("div");r.style.position="absolute";r.style.bottom="0";r.style.left="0";r.style.margin="0";r.style.padding="0";r.style.width="100%";r.style.background="#000";r.style.borderTop="1px solid rgba(124,125,127, 0.2)";r.style["-webkit-box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";r.style["-moz-box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";r.style["box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";r.style.color="#FFF";if(a==="android"){r.style.fontFamily='"Roboto", sans-serif'}else{r.style.fontFamily='"Helvetica Neue", Helvetica, Arial, sans-serif'}s.appendChild(r);if(x.title){var u=h.createElement("div");u.textContent=x.title;u.style.position="relative";u.style.padding="12px 8px";u.style.margin="0";u.style.background="rgba(26,27,31, 0.97)";u.style.borderBottom="1px solid rgba(18,18,21, 0.97)";u.style["-webkit-box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";u.style["-moz-box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";u.style["box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";u.style.fontSize="17px";u.style.fontWeight="bold";u.style.lineHeight="18px";u.style.textAlign="center";r.appendChild(u)}if(x.text){var w=h.createElement("div");w.textContent=x.text;w.style.padding="12px 32px 0";w.style.margin="0";w.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(rgba(27,29,34, 0.97)), to(rgba(24,26,31, 0.97)))";w.style.backgroundImage="-webkit-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";w.style.backgroundImage="-moz-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";w.style.backgroundImage="-ms-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";w.style.backgroundImage="-o-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";w.style.backgroundImage="linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";w.style.color="#A6A7A9";w.style.fontSize="16px";w.style.lineHeight="17px";w.style.textAlign="center";r.appendChild(w)}if(x.success||x.cancel){var t=h.createElement("div");t.style.padding="12px 0";t.style.margin="0";t.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(rgba(24,26,31, 0.97)), to(rgba(20,22,28, 0.97)))";t.style.backgroundImage="-webkit-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";t.style.backgroundImage="-moz-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";t.style.backgroundImage="-ms-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";t.style.backgroundImage="-o-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";t.style.backgroundImage="linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";r.appendChild(t);if(x.success){var p=m(function(){v(true)});p.textContent=x.success||"Ok"}if(x.cancel){var o=m(function(){v(false)});o.textContent=x.cancel||"Cancel"}if(x.success&&x.cancel){p.style.width="44%";p.style["float"]="right";p.style.marginLeft="0";o.style.width="44%";o.style["float"]="left";o.style.marginRight="0"}if(x.cancel){t.appendChild(o)}if(x.success){t.appendChild(p)}var q=h.createElement("div");q.style.margin="0";q.style.padding="0";q.style.clear="both";t.appendChild(q)}return s}function i(p,t,r){if(!r&&k){k.push([p,t]);return}k=k||[];var s=false;var q=n(p,function(u){if(s){return}s=true;if(a==="ios"){q.style.background="rgba(0,0,0, 0)";o.style["-webkit-transform"]="translate3d(0,100%,0)";o.style["-moz-transform"]="translate3d(0,100%,0)";o.style["-ms-transform"]="translate3d(0,100%,0)";o.style["-o-transform"]="translate3d(0,100%,0)";o.style.transform="translate3d(0,100%,0)"}else{q.style.opacity="0"}c(600);setTimeout(function(){b();t(u)},0);setTimeout(function(){try{h.body.removeChild(q)}catch(v){}},600)});var o=q.firstChild;if(a==="ios"){q.style.background="rgba(0,0,0, 0)";o.style["-webkit-transform"]="translate3d(0,100%,0)";o.style["-moz-transform"]="translate3d(0,100%,0)";o.style["-ms-transform"]="translate3d(0,100%,0)";o.style["-o-transform"]="translate3d(0,100%,0)";o.style.transform="translate3d(0,100%,0)"}else{q.style.opacity="0"}h.body.appendChild(q);setTimeout(function(){if(a==="ios"){q.style["-webkit-transition"]="background 0.2s ease-in-out";q.style["-moz-transition"]="background 0.2s ease-in-out";q.style["-ms-transition"]="background 0.2s ease-in-out";q.style["-o-transition"]="background 0.2s ease-in-out";q.style.transition="background 0.2s ease-in-out";o.style["-webkit-transition"]="-webkit-transform 0.2s ease-in-out";o.style["-moz-transition"]="-moz-transform 0.2s ease-in-out";o.style["-ms-transition"]="-ms-transform 0.2s ease-in-out";o.style["-o-transition"]="-o-transform 0.2s ease-in-out";o.style.transition="transform 0.2s ease-in-out"}else{q.style["-webkit-transition"]="opacity 0.2s ease-in-out";q.style["-moz-transition"]="opacity 0.2s ease-in-out";q.style["-ms-transition"]="opacity 0.2s ease-in-out";q.style["-o-transition"]="opacity 0.2s ease-in-out";q.style.transition="opacity 0.2s ease-in-out"}},0);setTimeout(function(){if(a==="ios"){q.style.background="rgba(0,0,0, 0.8)";o.style["-webkit-transform"]="translate3d(0,0,0)";o.style["-moz-transform"]="translate3d(0,0,0)";o.style["-ms-transform"]="translate3d(0,0,0)";o.style["-o-transform"]="translate3d(0,0,0)";o.style.transform="translate3d(0,0,0)"}else{q.style.opacity="1"}},10)}function b(){if(!k){return}if(!k.length){k=null;return}var o=k.shift();o.push(true);i.apply(f,o)}return function(o,p){switch(typeof o){case"string":o={text:o};break;case"object":break;default:throw TypeError("dialog options must be an object, got "+o)}switch(typeof o.title){case"string":break;case"undefined":o.title="";break;default:throw TypeError("dialog title must a string if defined, got "+o.title)}if(typeof o.text!=="string"){throw TypeError("dialog text must a string, got "+o.text)}switch(typeof o.success){case"string":break;case"undefined":o.success="Ok";break;default:throw TypeError("success button must a string if defined, got "+o.success)}switch(typeof o.cancel){case"string":break;case"undefined":o.cancel="";break;default:throw TypeError("cancel button must a string if defined, got "+o.cancel)}switch(typeof p){case"undefined":p=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+p)}return i(o,p)}}(window,document,window.Clickable);

var Scrollable=function(C,q,V,u,v){function r(b){if(!b)return!1;try{return b instanceof Node||b instanceof HTMLElement}catch(a){}return"object"!==typeof b||"number"!==typeof b.nodeType||"string"!==typeof b.nodeName?!1:!0}function W(b,a,c){if(Array.prototype.forEach)Array.prototype.forEach.call(b,a,c);else for(var d=0,e=b.length;d<e;d++)d in b&&a.call(c,b[d],d,b)}function M(b){N?setTimeout(b,0):X.push(b)}function Y(b){try{q.documentElement.doScroll("left")}catch(a){setTimeout(function(){Y(b)},1);return}b()}
function J(b,a){function c(){var a=b._scrollTop(),c=b._scrollLeft();a===g&&c===k||(g=a,k=c,b.dispatchEvent&&(a=q.createEvent("MouseEvents"),a.initMouseEvent("scroll",!1,!1,C,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(a)))}if(!r(b))throw b+" is not a DOM element";if(!b._scrollable){b._scrollable=!0;b.style.overflow="scroll";b._scrollTop=function(a){if("undefined"===typeof a)return f?Math.max(parseInt(-f.y),0):b.scrollTop;!f&&(!O||K)?b.scrollTop=a:M(function(){f.scrollTo(f.x,Math.min(-a,0),1)})};
b._scrollLeft=function(a){if("undefined"===typeof a)return f?Math.max(parseInt(-f.x),0):b.scrollLeft;!f&&(!O||K)?b.scrollLeft=a:M(function(){f.scrollTo(Math.min(-a,0),f.y,1)})};if(!a){if(!O)return;if(K){b.style["-webkit-overflow-scrolling"]="touch";return}}var d=q.createElement("div"),e=Array.prototype.slice.call(b.childNodes||[]);W(e,function(a){a=b.removeChild(a);d.appendChild(a)});b.appendChild(d);var f,g,k;b._iScroll=!0;M(function(){f=new Z(b,{checkDOMChanges:!0,useTransform:!0,useTransition:!0,
hScrollbar:!1,vScrollbar:!1,bounce:!!z.ios,onScrollMove:c,onBeforeScrollEnd:c,onScrollEnd:c,onBeforeScrollStart:ga})})}}function ga(b){for(var a=b.target;1!==a.nodeType;)a=a.parentNode;"SELECT"!==a.tagName&&("INPUT"!==a.tagName&&"TEXTAREA"!==a.tagName)&&b.preventDefault()}function L(b){return r(b)&&b._iScroll?b.childNodes[0]:b}var X=[],N=!1,K=!1,z,s=navigator.userAgent,h,m,t;if(t=/\bCPU.*OS (\d+(_\d+)?)/i.exec(s))h="ios",m=t[1].replace("_",".");else if(t=/\bAndroid (\d+(\.\d+)?)/.exec(s))h="android",
m=t[1];s={name:h,version:m&&C.parseFloat(m)};s[h]=!0;z=s;var O=!!z.name,Z;if(z.ios&&5<=z.version||z.android&&4<=z.version)K=!0;var l=C,E=q;h=function(b){if(""===o)return b;b=b.charAt(0).toUpperCase()+b.substr(1);return o+b};var g=Math,s=E.createElement("div").style,o;a:{m=["t","webkitT","MozT","msT","OT"];var x;t=0;for(var ha=m.length;t<ha;t++)if(x=m[t]+"ransform",x in s){o=m[t].substr(0,m[t].length-1);break a}o=!1}var p=o?"-"+o.toLowerCase()+"-":"",w=h("transform"),ia=h("transitionProperty"),A=h("transitionDuration"),
ja=h("transformOrigin"),ka=h("transitionTimingFunction"),P=h("transitionDelay"),Q=/android/gi.test(navigator.appVersion),aa=/iphone|ipad/gi.test(navigator.appVersion);m=/hp-tablet/gi.test(navigator.appVersion);var ba=h("perspective")in s,n="ontouchstart"in l&&!m,ca=!!o,la=h("transition")in s,R="onorientationchange"in l?"orientationchange":"resize",S=n?"touchstart":"mousedown",F=n?"touchmove":"mousemove",G=n?"touchend":"mouseup",H=n?"touchcancel":"mouseup",T="Moz"==o?"DOMMouseScroll":"mousewheel",
B;B=!1===o?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[o];var ma=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||l.oRequestAnimationFrame||l.msRequestAnimationFrame||function(b){return setTimeout(b,1)},da=l.cancelRequestAnimationFrame||l.webkitCancelAnimationFrame||l.webkitCancelRequestAnimationFrame||l.mozCancelRequestAnimationFrame||l.oCancelRequestAnimationFrame||l.msCancelRequestAnimationFrame||
clearTimeout,y=ba?" translateZ(0)":"";m=function(b,a){var c=this,d;c.wrapper="object"==typeof b?b:E.getElementById(b);c.wrapper.style.overflow="hidden";c.scroller=c.wrapper.children[0];c.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:Q,hideScrollbar:aa,fadeScrollbar:aa&&ba,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,
wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(d in a)c.options[d]=a[d];c.x=c.options.x;c.y=c.options.y;c.options.useTransform=ca&&c.options.useTransform;c.options.hScrollbar=c.options.hScroll&&c.options.hScrollbar;c.options.vScrollbar=c.options.vScroll&&
c.options.vScrollbar;c.options.zoom=c.options.useTransform&&c.options.zoom;c.options.useTransition=la&&c.options.useTransition;c.options.zoom&&Q&&(y="");c.scroller.style[ia]=c.options.useTransform?p+"transform":"top left";c.scroller.style[A]="0";c.scroller.style[ja]="0 0";c.options.useTransition&&(c.scroller.style[ka]="cubic-bezier(0.33,0.66,0.66,1)");c.options.useTransform?c.scroller.style[w]="translate("+c.x+"px,"+c.y+"px)"+y:c.scroller.style.cssText+=";position:absolute;top:"+c.y+"px;left:"+c.x+
"px";c.options.useTransition&&(c.options.fixedScrollbar=!0);c.refresh();c._bind(R,l);c._bind(S);n||(c._bind("mouseout",c.wrapper),"none"!=c.options.wheelAction&&c._bind(T));c.options.checkDOMChanges&&(c.checkDOMTime=setInterval(function(){c._checkDOMChanges()},500))};m.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(b){switch(b.type){case S:if(!n&&0!==b.button)break;this._start(b);break;case F:this._move(b);
break;case G:case H:this._end(b);break;case R:this._resize();break;case T:this._wheel(b);break;case "mouseout":this._mouseout(b);break;case B:this._transitionEnd(b)}},_checkDOMChanges:function(){!this.moved&&!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)&&this.refresh()},_scrollbar:function(b){var a;this[b+"Scrollbar"]?(this[b+"ScrollbarWrapper"]||(a=E.createElement("div"),this.options.scrollbarClass?a.className=
this.options.scrollbarClass+b.toUpperCase():a.style.cssText="position:absolute;z-index:100;"+("h"==b?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),a.style.cssText+=";pointer-events:none;"+p+"transition-property:opacity;"+p+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(a),this[b+"ScrollbarWrapper"]=
a,a=E.createElement("div"),this.options.scrollbarClass||(a.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+p+"background-clip:padding-box;"+p+"box-sizing:border-box;"+("h"==b?"height:100%":"width:100%")+";"+p+"border-radius:3px;border-radius:3px"),a.style.cssText+=";pointer-events:none;"+p+"transition-property:"+p+"transform;"+p+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+p+"transition-duration:0;"+p+"transform: translate(0,0)"+
y,this.options.useTransition&&(a.style.cssText+=";"+p+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[b+"ScrollbarWrapper"].appendChild(a),this[b+"ScrollbarIndicator"]=a),"h"==b?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=g.max(g.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=
this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=g.max(g.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(b,!0)):this[b+"ScrollbarWrapper"]&&(ca&&(this[b+"ScrollbarIndicator"].style[w]=
""),this[b+"ScrollbarWrapper"].parentNode.removeChild(this[b+"ScrollbarWrapper"]),this[b+"ScrollbarWrapper"]=null,this[b+"ScrollbarIndicator"]=null)},_resize:function(){var b=this;setTimeout(function(){b.refresh()},Q?200:0)},_pos:function(b,a){this.zoomed||(b=this.hScroll?b:0,a=this.vScroll?a:0,this.options.useTransform?this.scroller.style[w]="translate("+b+"px,"+a+"px) scale("+this.scale+")"+y:(b=g.round(b),a=g.round(a),this.scroller.style.left=b+"px",this.scroller.style.top=a+"px"),this.x=b,this.y=
a,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(b,a){var c="h"==b?this.x:this.y;this[b+"Scrollbar"]&&(c*=this[b+"ScrollbarProp"],0>c?(this.options.fixedScrollbar||(c=this[b+"ScrollbarIndicatorSize"]+g.round(3*c),8>c&&(c=8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px"),c=0):c>this[b+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?c=this[b+"ScrollbarMaxScroll"]:(c=this[b+"ScrollbarIndicatorSize"]-g.round(3*(c-this[b+"ScrollbarMaxScroll"])),8>c&&(c=
8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px",c=this[b+"ScrollbarMaxScroll"]+(this[b+"ScrollbarIndicatorSize"]-c))),this[b+"ScrollbarWrapper"].style[P]="0",this[b+"ScrollbarWrapper"].style.opacity=a&&this.options.hideScrollbar?"0":"1",this[b+"ScrollbarIndicator"].style[w]="translate("+("h"==b?c+"px,0)":"0,"+c+"px)")+y)},_start:function(b){var a=n?b.touches[0]:b,c,d;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,b);(this.options.useTransition||
this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&n&&1<b.touches.length&&(d=g.abs(b.touches[0].pageX-b.touches[1].pageX),c=g.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDistStart=g.sqrt(d*d+c*c),this.originX=g.abs(b.touches[0].pageX+b.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=g.abs(b.touches[0].pageY+b.touches[1].pageY-2*this.wrapperOffsetTop)/
2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,b));if(this.options.momentum&&(this.options.useTransform?(c=getComputedStyle(this.scroller,null)[w].replace(/[^0-9\-.,]/g,"").split(","),d=1*c[4],c=1*c[5]):(d=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),c=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),d!=this.x||c!=this.y))this.options.useTransition?this._unbind(B):da(this.aniTime),this.steps=[],this._pos(d,c);this.absStartX=this.x;this.absStartY=
this.y;this.startX=this.x;this.startY=this.y;this.pointX=a.pageX;this.pointY=a.pageY;this.startTime=b.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,b);this._bind(F);this._bind(G);this._bind(H)}},_move:function(b){var a=n?b.touches[0]:b,c=a.pageX-this.pointX,d=a.pageY-this.pointY,e=this.x+c,f=this.y+d,i=b.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,b);if(this.options.zoom&&n&&1<b.touches.length)e=g.abs(b.touches[0].pageX-
b.touches[1].pageX),f=g.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDist=g.sqrt(e*e+f*f),this.zoomed=!0,a=1/this.touchesDistStart*this.touchesDist*this.scale,a<this.options.zoomMin?a=0.5*this.options.zoomMin*Math.pow(2,a/this.options.zoomMin):a>this.options.zoomMax&&(a=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/a)),this.lastScale=a/this.scale,e=this.originX-this.originX*this.lastScale+this.x,f=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[w]="translate("+
e+"px,"+f+"px) scale("+a+")"+y,this.options.onZoom&&this.options.onZoom.call(this,b);else{this.pointX=a.pageX;this.pointY=a.pageY;if(0<e||e<this.maxScrollX)e=this.options.bounce?this.x+c/2:0<=e||0<=this.maxScrollX?0:this.maxScrollX;if(f>this.minScrollY||f<this.maxScrollY)f=this.options.bounce?this.y+d/2:f>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY;this.distX+=c;this.distY+=d;this.absDistX=g.abs(this.distX);this.absDistY=g.abs(this.distY);6>this.absDistX&&6>this.absDistY||
(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(f=this.y,d=0):this.absDistY>this.absDistX+5&&(e=this.x,c=0)),this.moved=!0,this._pos(e,f),this.dirX=0<c?-1:0>c?1:0,this.dirY=0<d?-1:0>d?1:0,300<i-this.startTime&&(this.startTime=i,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,b))}},_end:function(b){if(!(n&&0!==b.touches.length)){var a=this,c=n?b.changedTouches[0]:b,d,e,f={dist:0,time:0},i={dist:0,time:0},k=(b.timeStamp||Date.now())-
a.startTime,j=a.x,h=a.y;a._unbind(F);a._unbind(G);a._unbind(H);a.options.onBeforeScrollEnd&&a.options.onBeforeScrollEnd.call(a,b);if(a.zoomed)j=a.scale*a.lastScale,j=Math.max(a.options.zoomMin,j),j=Math.min(a.options.zoomMax,j),a.lastScale=j/a.scale,a.scale=j,a.x=a.originX-a.originX*a.lastScale+a.x,a.y=a.originY-a.originY*a.lastScale+a.y,a.scroller.style[A]="200ms",a.scroller.style[w]="translate("+a.x+"px,"+a.y+"px) scale("+a.scale+")"+y,a.zoomed=!1,a.refresh(),a.options.onZoomEnd&&a.options.onZoomEnd.call(a,
b);else{if(a.moved){if(300>k&&a.options.momentum){f=j?a._momentum(j-a.startX,k,-a.x,a.scrollerW-a.wrapperW+a.x,a.options.bounce?a.wrapperW:0):f;i=h?a._momentum(h-a.startY,k,-a.y,0>a.maxScrollY?a.scrollerH-a.wrapperH+a.y-a.minScrollY:0,a.options.bounce?a.wrapperH:0):i;j=a.x+f.dist;h=a.y+i.dist;if(0<a.x&&0<j||a.x<a.maxScrollX&&j<a.maxScrollX)f={dist:0,time:0};if(a.y>a.minScrollY&&h>a.minScrollY||a.y<a.maxScrollY&&h<a.maxScrollY)i={dist:0,time:0}}f.dist||i.dist?(f=g.max(g.max(f.time,i.time),10),a.options.snap&&
(i=j-a.absStartX,k=h-a.absStartY,g.abs(i)<a.options.snapThreshold&&g.abs(k)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,200):(i=a._snap(j,h),j=i.x,h=i.y,f=g.max(i.time,f))),a.scrollTo(g.round(j),g.round(h),f)):a.options.snap?(i=j-a.absStartX,k=h-a.absStartY,g.abs(i)<a.options.snapThreshold&&g.abs(k)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,200):(i=a._snap(a.x,a.y),(i.x!=a.x||i.y!=a.y)&&a.scrollTo(i.x,i.y,i.time))):a._resetPos(200)}else n&&(a.doubleTapTimer&&a.options.zoom?
(clearTimeout(a.doubleTapTimer),a.doubleTapTimer=null,a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.zoom(a.pointX,a.pointY,1==a.scale?a.options.doubleTapZoom:1),a.options.onZoomEnd&&setTimeout(function(){a.options.onZoomEnd.call(a,b)},200)):this.options.handleClick&&(a.doubleTapTimer=setTimeout(function(){a.doubleTapTimer=null;for(d=c.target;1!=d.nodeType;)d=d.parentNode;"SELECT"!=d.tagName&&"INPUT"!=d.tagName&&"TEXTAREA"!=d.tagName&&(e=E.createEvent("MouseEvents"),e.initMouseEvent("click",
!0,!0,b.view,1,c.screenX,c.screenY,c.clientX,c.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,null),e._fake=!0,d.dispatchEvent(e))},a.options.zoom?250:0))),a._resetPos(200);a.options.onTouchEnd&&a.options.onTouchEnd.call(a,b)}}},_resetPos:function(b){var a=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(a==this.x&&c==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&
this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==o&&(this.hScrollbarWrapper.style[P]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar)"webkit"==o&&(this.vScrollbarWrapper.style[P]="300ms"),this.vScrollbarWrapper.style.opacity="0"}else this.scrollTo(a,c,b||0)},_wheel:function(b){var a=this,c,d;if("wheelDeltaX"in b)c=b.wheelDeltaX/12,d=b.wheelDeltaY/12;else if("wheelDelta"in b)c=d=b.wheelDelta/12;else if("detail"in
b)c=d=3*-b.detail;else return;if("zoom"==a.options.wheelAction){if(d=a.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<a.options.zoomMin&&(d=a.options.zoomMin),d>a.options.zoomMax&&(d=a.options.zoomMax),d!=a.scale)!a.wheelZoomCount&&a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.wheelZoomCount++,a.zoom(b.pageX,b.pageY,d,400),setTimeout(function(){a.wheelZoomCount--;!a.wheelZoomCount&&a.options.onZoomEnd&&a.options.onZoomEnd.call(a,b)},400)}else c=a.x+c,d=a.y+d,0<c?c=0:c<a.maxScrollX&&(c=a.maxScrollX),
d>a.minScrollY?d=a.minScrollY:d<a.maxScrollY&&(d=a.maxScrollY),0>a.maxScrollY&&a.scrollTo(c,d,0)},_mouseout:function(b){var a=b.relatedTarget;if(a)for(;a=a.parentNode;)if(a==this.wrapper)return;this._end(b)},_transitionEnd:function(b){b.target==this.scroller&&(this._unbind(B),this._startAni())},_startAni:function(){var b=this,a=b.x,c=b.y,d=Date.now(),e,f,h;b.animating||(b.steps.length?(e=b.steps.shift(),e.x==a&&e.y==c&&(e.time=0),b.animating=!0,b.moved=!0,b.options.useTransition)?(b._transitionTime(e.time),
b._pos(e.x,e.y),b.animating=!1,e.time?b._bind(B):b._resetPos(0)):(h=function(){var k=Date.now(),j;k>=d+e.time?(b._pos(e.x,e.y),b.animating=!1,b.options.onAnimationEnd&&b.options.onAnimationEnd.call(b),b._startAni()):(k=(k-d)/e.time-1,f=g.sqrt(1-k*k),k=(e.x-a)*f+a,j=(e.y-c)*f+c,b._pos(k,j),b.animating&&(b.aniTime=ma(h)))},h()):b._resetPos(400))},_transitionTime:function(b){b+="ms";this.scroller.style[A]=b;this.hScrollbar&&(this.hScrollbarIndicator.style[A]=b);this.vScrollbar&&(this.vScrollbarIndicator.style[A]=
b)},_momentum:function(b,a,c,d,e){var a=g.abs(b)/a,f=a*a/0.0012;0<b&&f>c?(c+=e/(6/(6E-4*(f/a))),a=a*c/f,f=c):0>b&&f>d&&(d+=e/(6/(6E-4*(f/a))),a=a*d/f,f=d);return{dist:f*(0>b?-1:1),time:g.round(a/6E-4)}},_offset:function(b){for(var a=-b.offsetLeft,c=-b.offsetTop;b=b.offsetParent;)a-=b.offsetLeft,c-=b.offsetTop;b!=this.wrapper&&(a*=this.scale,c*=this.scale);return{left:a,top:c}},_snap:function(b,a){var c,d,e;e=this.pagesX.length-1;c=0;for(d=this.pagesX.length;c<d;c++)if(b>=this.pagesX[c]){e=c;break}e==
this.currPageX&&0<e&&0>this.dirX&&e--;b=this.pagesX[e];d=(d=g.abs(b-this.pagesX[this.currPageX]))?500*(g.abs(this.x-b)/d):0;this.currPageX=e;e=this.pagesY.length-1;for(c=0;c<e;c++)if(a>=this.pagesY[c]){e=c;break}e==this.currPageY&&0<e&&0>this.dirY&&e--;a=this.pagesY[e];c=(c=g.abs(a-this.pagesY[this.currPageY]))?500*(g.abs(this.y-a)/c):0;this.currPageY=e;e=g.round(g.max(d,c))||200;return{x:b,y:a,time:e}},_bind:function(b,a,c){(a||this.scroller).addEventListener(b,this,!!c)},_unbind:function(b,a,c){(a||
this.scroller).removeEventListener(b,this,!!c)},destroy:function(){this.scroller.style[w]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(R,l);this._unbind(S);this._unbind(F);this._unbind(G);this._unbind(H);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(T));this.options.useTransition&&this._unbind(B);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var b,
a,c,d=0;a=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=g.round(this.scroller.offsetWidth*this.scale);this.scrollerH=g.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);
this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;b=this._offset(this.wrapper);this.wrapperOffsetLeft=-b.left;this.wrapperOffsetTop=-b.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];c=this.scroller.querySelectorAll(this.options.snap);
b=0;for(a=c.length;b<a;b++)d=this._offset(c[b]),d.left+=this.wrapperOffsetLeft,d.top+=this.wrapperOffsetTop,this.pagesX[b]=d.left<this.maxScrollX?this.maxScrollX:d.left*this.scale,this.pagesY[b]=d.top<this.maxScrollY?this.maxScrollY:d.top*this.scale}else if(this.options.snap){for(this.pagesX=[];d>=this.maxScrollX;)this.pagesX[a]=d,d-=this.wrapperW,a++;this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);
a=d=0;for(this.pagesY=[];d>=this.maxScrollY;)this.pagesY[a]=d,d-=this.wrapperH,a++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[A]="0",this._resetPos(200))},scrollTo:function(b,a,c,d){var e=b;this.stop();e.length||(e=[{x:b,y:a,time:c,relative:d}]);b=0;for(a=e.length;b<a;b++)e[b].relative&&(e[b].x=this.x-e[b].x,e[b].y=this.y-
e[b].y),this.steps.push({x:e[b].x,y:e[b].y,time:e[b].time||0});this._startAni()},scrollToElement:function(b,a){var c;if(b=b.nodeType?b:this.scroller.querySelector(b))c=this._offset(b),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,c.left=0<c.left?0:c.left<this.maxScrollX?this.maxScrollX:c.left,c.top=c.top>this.minScrollY?this.minScrollY:c.top<this.maxScrollY?this.maxScrollY:c.top,a=void 0===a?g.max(2*g.abs(c.left),2*g.abs(c.top)):a,this.scrollTo(c.left,c.top,a)},scrollToPage:function(b,
a,c){c=void 0===c?400:c;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap)b="next"==b?this.currPageX+1:"prev"==b?this.currPageX-1:b,a="next"==a?this.currPageY+1:"prev"==a?this.currPageY-1:a,b=0>b?0:b>this.pagesX.length-1?this.pagesX.length-1:b,a=0>a?0:a>this.pagesY.length-1?this.pagesY.length-1:a,this.currPageX=b,this.currPageY=a,b=this.pagesX[b],a=this.pagesY[a];else if(b*=-this.wrapperW,a*=-this.wrapperH,b<this.maxScrollX&&(b=this.maxScrollX),a<this.maxScrollY)a=
this.maxScrollY;this.scrollTo(b,a,c)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(F);this._unbind(G);this._unbind(H)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(B):da(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(b,a,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,b=b-this.wrapperOffsetLeft-this.x,a=a-this.wrapperOffsetTop-this.y,this.x=b-b*e+this.x,this.y=
a-a*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[A]=d+"ms",this.scroller.style[w]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+y,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};s=null;Z=m;var D=function(){N||(N=!0,W(X,function(b){setTimeout(b,0)}))};if("complete"===q.readyState)setTimeout(D,
0);else if(q.addEventListener)q.addEventListener("DOMContentLoaded",D,!1),C.addEventListener("load",D,!1);else if(q.attachEvent){q.attachEvent("onreadystatechange",D);C.attachEvent("onload",D);x=!1;try{x=null===C.frameElement}catch(na){}q.documentElement.doScroll&&x&&setTimeout(function(){Y(D)},0)}x=function(){J.apply(this,arguments)};h=function(){J.apply(this,arguments)};V&&(h.node=function(){return L.apply(this,arguments)},V.plugin("scrollable",h));if(u){u.extend(u.fn,{scrollable:function(b){this.forEach(function(a){J(a,
b)});return this},scrollableNode:function(){return $(this.map(function(){return L(this)}))}});var I=u.fn.scrollTop,U=u.fn.scrollLeft;u.fn.scrollTop=function(b){if(typeof b==="undefined"){var a=this[0],c=r(a);return c&&a._scrollTop?a._scrollTop():I?I.apply(this,arguments):c?a.scrollTop:null}this.forEach(function(a){var c=r(a);if(c&&a._scrollTop)a._scrollTop(b);else if(I)I.call(u(a),b);else if(c)a.scrollTop=b});return this};u.fn.scrollLeft=function(b){if(typeof b==="undefined"){var a=this[0],c=r(a);
return c&&a._scrollLeft?a._scrollLeft():I?U.apply(this,arguments):c?a.scrollLeft:null}this.forEach(function(a){var c=r(a);if(c&&a._scrollLeft)a._scrollLeft(b);else if(U)U.call(u(a),b);else if(c)a.scrollLeft=b});return this}}if(v){v.fn.scrollable=function(b){this.each(function(){J(this,b)});return this};v.fn.scrollableNode=function(){return $(this.map(function(){return L(this)}))};var ea=v.fn.scrollTop,fa=v.fn.scrollLeft;v.fn.scrollTop=function(b){if(typeof b==="undefined"){var a=this[0];return r(a)&&
a._scrollTop?a._scrollTop():ea.apply(this,arguments)}this.each(function(){r(this)&&this._scrollTop?this._scrollTop(b):ea.call(v(this),b)});return this};v.fn.scrollLeft=function(b){if(typeof b==="undefined"){var a=this[0];return r(a)&&a._scrollLeft?a._scrollLeft():fa.apply(this,arguments)}this.each(function(){r(this)&&this._scrollLeft?this._scrollLeft(b):fa.call(v(this),b)});return this}}x.node=function(){return L.apply(this,arguments)};return x}(window,document,window.clik,window.Zepto,window.jQuery);

(function (window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable, clik) {
	var PAGE_CLASS                     = 'app-page',
		PAGE_NAME                      = 'data-page',
		APP_IOS                        = 'app-ios',
		APP_ANDROID                    = 'app-android',
		APP_LOADED                     = 'app-loaded',
		PAGE_SHOW_EVENT                = 'appShow',
		PAGE_HIDE_EVENT                = 'appHide',
		PAGE_BACK_EVENT                = 'appBack',
		STACK_KEY                      = '__APP_JS_STACK__' + window.location.pathname,
		DEFAULT_TRANSITION_IOS         = 'slide-left',
		DEFAULT_TRANSITION_ANDROID     = 'implode-out',
		DEFAULT_TRANSITION_ANDROID_401 = 'instant',
		DEFAULT_TRANSITION_ANDROID_OLD = 'fade-on',
		REVERSE_TRANSITION             = {
			'instant'        : 'instant'        ,
			'fade'           : 'fade'           ,
			'fade-on'        : 'fade-off'       ,
			'fade-off'       : 'fade-on'        ,
			'scale-in'       : 'scale-out'      ,
			'scale-out'      : 'scale-in'       ,
			'rotate-left'    : 'rotate-right'   ,
			'rotate-right'   : 'rotate-left'    ,
			'cube-left'      : 'cube-right'     ,
			'cube-right'     : 'cube-left'      ,
			'swap-left'      : 'swap-right'     ,
			'swap-right'     : 'swap-left'      ,
			'explode-in'     : 'explode-out'    ,
			'explode-out'    : 'explode-in'     ,
			'implode-in'     : 'implode-out'    ,
			'implode-out'    : 'implode-in'     ,
			'slide-left'     : 'slide-right'    ,
			'slide-right'    : 'slide-left'     ,
			'slide-up'       : 'slide-down'     ,
			'slide-down'     : 'slide-up'       ,
			'slideon-left'   : 'slideoff-left'  ,
			'slideon-right'  : 'slideoff-right' ,
			'slideon-up'     : 'slideoff-up'    ,
			'slideon-down'   : 'slideoff-down'  ,
			'slideoff-left'  : 'slideon-left'   ,
			'slideoff-right' : 'slideon-right'  ,
			'slideoff-up'    : 'slideon-up'     ,
			'slideoff-down'  : 'slideon-down'
		};

	var App          = {},
		pages        = {},
		populators   = {},
		stack        = [],
		navQueue     = [],
		navLock      = false,
		initialised  = false,
		isAndroid401 = false,
		customEvents = null,
		platform, version, defaultTransition, reverseTransition,
		current, currentNode;



	function isArray (arr) {
		if (Array.isArray) {
			return Array.isArray(arr);
		}
		else {
			return Object.prototype.toString.call(arr) !== '[object Array]';
		}
	}

	function isNode (elem) {
		if ( !elem ) {
			return false;
		}

		try {
			return (elem instanceof Node) || (elem instanceof HTMLElement);
		} catch (err) {}

		if (typeof elem !== 'object') {
			return false;
		}

		if (typeof elem.nodeType !== 'number') {
			return false;
		}

		if (typeof elem.nodeName !== 'string') {
			return false;
		}

		return true;
	}

	function getStyles (elem, notComputed) {
		var styles;

		if (notComputed) {
			styles = elem.style;
		}
		else {
			styles = document.defaultView.getComputedStyle(elem, null);
		}

		return {
			display          : styles.display          ,
			opacity          : styles.opacity          ,
			paddingRight     : styles.paddingRight     ,
			paddingLeft      : styles.paddingLeft      ,
			marginRight      : styles.marginRight      ,
			marginLeft       : styles.marginLeft       ,
			borderRightWidth : styles.borderRightWidth ,
			borderLeftWidth  : styles.borderLeftWidth  ,
			top              : styles.top              ,
			left             : styles.left             ,
			height           : styles.height           ,
			width            : styles.width            ,
			position         : styles.position
		};
	}

	function getTotalWidth (styles) {
		return parseInt(styles.width || 0) + parseInt(styles.paddingLeft || 0) + parseInt(styles.paddingRight || 0) + parseInt(styles.borderLeftWidth || 0) + parseInt(styles.borderRightWidth || 0) + parseInt(styles.marginLeft || 0) + parseInt(styles.marginRight || 0);
	}



	function setDefaultTransition (transition) {
		defaultTransition = transition;
		reverseTransition = REVERSE_TRANSITION[defaultTransition];
	}

	function config () {
		if (match = /\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)) {
			platform = 'ios';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_IOS;
			setDefaultTransition(DEFAULT_TRANSITION_IOS);
		}
		else if (match = /\bAndroid (\d+(\.\d+(\.\d+)?)?)/.exec(navigator.userAgent)) {
			platform = 'android';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_ANDROID;
			setDefaultTransition((version >= 4) ? DEFAULT_TRANSITION_ANDROID : DEFAULT_TRANSITION_ANDROID_OLD);

			if (match[1] === '4.0.1') {
				isAndroid401 = true;
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_401);
			}
		}

		App.platform = platform;
		App.platformVersion = version;
	}

	function init () {
		if (initialised) {
			return;
		}
		initialised = true;

		var pageNodes = document.getElementsByClassName(PAGE_CLASS),
			page, pageName, match;

		for (var i=pageNodes.length; i--;) {
			addPage( pageNodes[i] );
		}

		document.body.className += ' ' + APP_LOADED;
	}

	function addPage (page, pageName) {
		if (pageName) {
			page.setAttribute(PAGE_NAME, pageName);
		}
		else {
			pageName = page.getAttribute(PAGE_NAME);
		}

		if ((typeof pageName === 'string') && (pageName.length !== 0)) {
			page.parentNode.removeChild(page);
			pages[pageName] = page.cloneNode(true);
		}
	}



	function startPageGeneration (pageName, args, pageManager) {
		init();

		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var page           = pages[pageName].cloneNode(true),
			pagePopulators = populators[pageName] || [];

		insureCustomEventing(page, [PAGE_SHOW_EVENT, PAGE_HIDE_EVENT, PAGE_BACK_EVENT]);

		setContentHeight(page);

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-button'),
			function (button) {
				Clickable(button);

				var target = button.getAttribute('data-target'),
					back   = button.getAttribute('data-back');

				if (back) {
					stickyButton(button, function (callback) {
						return navigateBack({}, callback);
					});
				}
				else if (target) {
					stickyButton(button, function (callback) {
						return loadPage(target, {}, {}, callback);
					});
				}
			}
		);

		pagePopulators.forEach(function (data) {
			var populator = data[0];
			populator.call(pageManager, page, args);
		});

		Array.prototype.forEach.call(
			page.querySelectorAll('img'),
			function (image) {
				if ( !image.getAttribute('data-auto-load') ) {
					return;
				}

				var minWait = (platform === 'android' ? 400 : 0),
					url     = image.src;
				image.src   = '';

				ImageLoader(image, url, minWait);
			}
		);

		if (isAndroid401) {
			setupScrollers(page);
		}

		var topbar = page.querySelector('.app-topbar');

		if (topbar) {
			topbar.addEventListener('DOMNodeInsertedIntoDocument', function () {
				fixPageTitle(this);
			}, false);
		}

		return page;
	}

	function fixPageTitle (topbar) {
		if ( !topbar ) {
			return;
		}

		var title = topbar.querySelector('.app-title');

		if ( !title ) {
			return;
		}

		if ( !title.getAttribute('data-autosize') ) {
			return;
		}

		var margin      = 0,
			leftButton  = topbar.querySelector('.left.app-button'),
			rightButton = topbar.querySelector('.right.app-button');

		if (leftButton) {
			var leftStyles = getStyles(leftButton),
				leftPos    = getTotalWidth(leftStyles) + parseInt(leftStyles.left || 0) + 4;
			margin = Math.max(margin, leftPos);
		}

		if (rightButton) {
			var rightStyles = getStyles(rightButton),
				rightPos    = getTotalWidth(rightStyles) + parseInt(rightStyles.right || 0) + 4;
			margin = Math.max(margin, rightPos);
		}

		title.style.width = (window.innerWidth-margin*2) + 'px';
	}

	function finishPageGeneration (pageName, page, args, pageManager) {
		if ( !isAndroid401 ) {
			setupScrollers(page);
		}
	}

	function setupScrollers (page) {
		Array.prototype.forEach.call(
			page.querySelectorAll('.app-content'),
			function (content) {
				if ( !content.getAttribute('data-no-scroll') ) {
					Scrollable(content);
					content.className += ' app-scrollable';
				}
			}
		);

		Array.prototype.forEach.call(
			page.querySelectorAll('[data-scrollable]'),
			function (content) {
				Scrollable(content);
				content.className += ' app-scrollable';
			}
		);
	}

	function startPageDestruction (pageName, page, args, pageManager) {
		Array.prototype.forEach.call(
			page.querySelectorAll('*'),
			function (elem) {
				elem.style['-webkit-overflow-scrolling'] = '';
			}
		);
	}

	function finishPageDestruction (pageName, page, args, pageManager) {
		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var pagePopulators = populators[pageName] || [];

		pagePopulators.forEach(function (data) {
			var unpopulator = data[1];
			unpopulator.call(pageManager, page, args);
		});
	}

	function stickyButton (button, holdFunction) {
		button.addEventListener('click', function () {
			var lock        = false,
				activeClass = button.getAttribute('data-clickable-class') || 'active',
				value;
			button.disabled = true;
			button.className += ' ' + activeClass;

			try {
				value = holdFunction(cleanUp);
			}
			catch (err) {
				if (window.console && window.console.error) {
					window.console.error(err + '');
				}

				cleanUp();
			}

			if (value === false) {
				cleanUp();
			}

			function cleanUp () {
				if (lock) {
					return;
				}
				lock = true;

				button.disabled = false;
				button.className = button.className.replace(new RegExp('\\b'+activeClass+'\\b', 'g'), '');
			}
		}, false);
	}



	function navigate (handler) {
		if (navLock) {
			navQueue.push(handler);
			return false;
		}

		navLock = true;

		handler(function () {
			navLock = false;
			setTimeout(processNavigationQueue, 0);
			saveStack();
		});

		return true;
	}



	function generatePage (pageName, args) {
		var pageManager = {},
			page        = startPageGeneration(pageName, args, pageManager);

		finishPageGeneration(pageName, page, args, pageManager);

		return page;
	}

	function loadPage (pageName, args, options, callback) {
		navigate(function (unlock) {
			var pageManager = {},
				page        = startPageGeneration(pageName, args, pageManager);

			if ( !current ) {
				App.restore = null;
				document.body.appendChild(page);
				setTimeout(finish, 0);
			}
			else {
				savePageScrollPosition(currentNode);
				savePageScrollStyle(currentNode);

				var newOptions = {};
				for (var key in options) {
					newOptions[key] = options[key];
				}
				performTransition(page, newOptions, finish);
			}

			var oldNode = currentNode;

			current     = pageName;
			currentNode = page;
			stack.push([ pageName, page, options, args, pageManager ]);

			function finish () {
				finishPageGeneration(pageName, page, args, pageManager);

				unlock();
				callback();

				if (oldNode) {
					firePageEvent(oldNode, PAGE_HIDE_EVENT);
				}
				firePageEvent(page, PAGE_SHOW_EVENT);
			}
		});

		if ( !(pageName in pages) ) {
			return false;
		}
	}

	function navigateBack (options, callback) {
		var stackLength = stack.length;

		var navigatedImmediately = navigate(function (unlock) {
			if (stack.length < 2) {
				unlock();
				return;
			}

			var oldPage    = stack.pop(),
				data       = stack[stack.length - 1],
				pageName   = data[0],
				page       = data[1],
				oldOptions = oldPage[2];

			firePageEvent(oldPage[1], PAGE_BACK_EVENT);

			setContentHeight(page);

			startPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

			restorePageScrollPosition(page);

			var newOptions = {};
			for (var key in oldOptions) {
				newOptions[key] = oldOptions[key];
			}
			for (var key in options) {
				newOptions[key] = options[key];
			}

			performTransition(page, newOptions, function () {
				restorePageScrollStyle(page);

				firePageEvent(oldPage[1], PAGE_HIDE_EVENT);
				firePageEvent(page, PAGE_SHOW_EVENT);

				setTimeout(function () {
					finishPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

					unlock();
					callback();
				}, 0);
			}, true);

			current     = pageName;
			currentNode = page;
		});

		if (navigatedImmediately && (stackLength < 2)) {
			return false;
		}
	}



	function fetchStack () {
		return stack.slice().map(function (pageData) {
			var pageName = pageData[0],
				pageArgs = {};

			for (var key in pageData[3]) {
				pageArgs[key] = pageData[3][key];
			}

			return [ pageName, pageArgs ];
		});
	}

	function removeFromStack (startIndex, endIndex) {
		navigate(function (unlock) {
			var deadPages = stack.splice(startIndex, endIndex - startIndex);

			deadPages.forEach(function (pageData) {
				startPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
				finishPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
			});

			unlock();
		});
	}

	function addToStack (index, newPages) {
		navigate(function (unlock) {
			var pageDatas = [];

			newPages.forEach(function (pageData) {
				var pageManager = {},
					page        = startPageGeneration(pageData[0], pageData[1], pageManager);

				finishPageGeneration(pageData[0], page, pageData[1], pageManager);

				pageDatas.push([pageData[0], page, pageData[2], pageData[1], pageManager]);
			});

			pageDatas.unshift(0);
			pageDatas.unshift(index);
			Array.prototype.splice.apply(stack, pageDatas);

			unlock();
		});
	}



	function processNavigationQueue () {
		if ( navQueue.length ) {
			navigate( navQueue.shift() );
		}

	}



	function supportsCustomEventing () {
		if (customEvents === null) {
			try {
				var elem = document.createElement('div'),
					evt  = document.createEvent('CustomEvent');
				evt.initEvent('fooBarFace', false, true);
				elem.dispatchEvent(evt);
				customEvents = true;
			}
			catch (err) {
				customEvents = false;
			}
		}

		return customEvents;
	}

	function insureCustomEventing (page, names) {
		if (page._brokenEvents || supportsCustomEventing()) {
			return;
		}

		page._brokenEvents = true;
		page._addEventListener    = page.addEventListener;
		page._removeEventListener = page.removeEventListener;

		var listeners = {};

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



	function performTransition (page, options, callback, reverse) {
		var clickBlocker = document.createElement('div');
		clickBlocker.className = 'app-clickblocker';
		document.body.appendChild(clickBlocker);

		function cleanup () {
			document.body.removeChild(clickBlocker);
			callback();
		}

		var oldPage = currentNode;

		if (options.transition) {
			if (reverse) {
				options.transition = REVERSE_TRANSITION[options.transition] || options.transition;
			}
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		options.transition = reverse ? reverseTransition : defaultTransition;

		if ((platform !== 'ios') || ((options.transition !== 'slide-left') && (options.transition !== 'slide-right'))) {
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		var currentBar     = oldPage.querySelector('.app-topbar'),
			currentContent = oldPage.querySelector('.app-content'),
			newBar         = page.querySelector('.app-topbar'),
			newContent     = page.querySelector('.app-content');

		if (!currentBar || !newBar || !currentContent || !newContent) {
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		var count = 0;

		Swapper(currentBar    , newBar    , 'fade' , swapDone);
		Swapper(currentContent, newContent, options, swapDone);

		function swapDone () {
			if (++count !== 2) {
				return;
			}

			page.appendChild(newBar);
			page.appendChild(newContent);
			oldPage.appendChild(currentBar);
			oldPage.appendChild(currentContent);

			Swapper(oldPage, page, 'instant', cleanup);
		}
	}

	function getScrollContent (page) {
		page = page || currentNode;

		if ( !page ) {
			return;
		}

		var content = page.querySelector('.app-content');

		if (!content || !content._scrollable) {
			return;
		}

		return content;
	}

	function savePageScrollPosition (page) {
		var content = getScrollContent(page);

		if (!content || content._iScroll) {
			return;
		}

		var scrollTop = content._scrollTop();

		(page || currentNode).setAttribute('data-last-scroll', scrollTop+'');
	}

	function savePageScrollStyle (page) {
		var content = getScrollContent(page);

		if (!content || content._iScroll) {
			return;
		}

		var scrollStyle = content.style['-webkit-overflow-scrolling'] || '';

		content.style['-webkit-overflow-scrolling'] = '';

		(page || currentNode).setAttribute('data-scroll-style', scrollStyle);
	}

	function restorePageScrollPosition (page, noTimeout) {
		var content = getScrollContent(page);

		if (!content || content._iScroll) {
			return;
		}

		var scrollTop = parseInt( (page || currentNode).getAttribute('data-last-scroll') );

		if (scrollTop) {
			if (noTimeout) {
				content._scrollTop(scrollTop);
			}
			else {
				setTimeout(function () {
					content._scrollTop(scrollTop);
				}, 0);
			}
		}
	}

	function restorePageScrollStyle (page) {
		var content = getScrollContent(page);

		if (!content || content._iScroll) {
			return;
		}

		var scrollStyle = (page || currentNode).getAttribute('data-scroll-style') || '';

		if (scrollStyle) {
			content.style['-webkit-overflow-scrolling'] = scrollStyle;
		}

		restorePageScrollPosition(page, true);
	}



	function addPopulator (pageName, populator, unpopulator) {
		if ( !populators[pageName] ) {
			populators[pageName] = [];
		}

		populators[pageName].push([populator, unpopulator]);
	}



	function setContentHeight (page) {
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
			topbarHeight = (platform === 'android') ? 48 : 44;

		if (topbarStyles.height) {
			topbarHeight = parseInt(topbarStyles.height) || 0;
		}

		content.style.height = (height - topbarHeight) + 'px';
	}

	function setupListeners () {
		function fixSizing () {
			currentNode && setContentHeight(currentNode);
		}

		window.addEventListener('resize', fixSizing);
		window.addEventListener('load'  , fixSizing);
		setTimeout(fixSizing, 0);

		if (clik && clik.plugin && clik.plugin.back) {
			clik.plugin.back(function () {
				if (stack.length > 1) {
					App.back();
					return false;
				}
			});
		}
	}



	function saveStack () {
		try {
			var storedStack = stack.map(function (pageData) {
				return [ pageData[0], pageData[3], pageData[2] ];
			});

			localStorage[STACK_KEY] = JSON.stringify(storedStack);
		}
		catch (err) {}
	}

	function setupRestoreFunction () {
		try {
			var storedStack = JSON.parse( localStorage[STACK_KEY] ),
				lastPage    = storedStack.pop();

			return function (callback) {
				switch (typeof callback) {
					case 'undefined':
						callback = function () {};
					case 'function':
						break;

					default:
						throw TypeError('restore callback must be a function if defined, got ' + callback):
				}

				init();

				if ( !(lastPage[0] in pages) ) {
					throw TypeError(lastPage[0] + ' is not a known page');
				}

				storedStack.forEach(function (pageData) {
					if ( !(pageData[0] in pages) ) {
						throw TypeError(pageData[0] + ' is not a known page');
					}
				});

				addToStack(0, storedStack);
				loadPage(lastPage[0], lastPage[1], lastPage[2], callback);
			};
		}
		catch (err) {}

		return null;
	}



	App.platform = null;
	App.platformVersion = null;



	App.current = function () {
		return current;
	};



	App.add = function (pageName, page) {
		if (typeof pageName !== 'string') {
			page     = pageName;
			pageName = undefined;
		}

		if ( !isNode(page) ) {
			throw TypeError('page template node must be a DOM node, got ' + page);
		}

		addPage(page, pageName);
	};



	App.populator = function (pageName, populator, unpopulator) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		if (typeof populator !== 'function') {
			throw TypeError('page populator must be a function, got ' + populator);
		}

		switch (typeof unpopulator) {
			case 'undefined':
				unpopulator = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('page unpopulator must be a function, got ' + unpopulator);
		}

		addPopulator(pageName, populator, unpopulator);
	};



	App.load = function (pageName, args, options, callback) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'function':
				callback = args;
				args     = {};
				options  = {};
				break;

			case 'undefined':
				args = {};
				break;

			case 'string':
				options = args;
				args    = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options = {};
				break;

			case 'string':
				options = { transition : options };
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		loadPage(pageName, args, options, callback);
	};



	App.back = function (options, callback) {
		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options  = {};
				break;

			case 'string':
				options = { transition : options };
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		return navigateBack(options, callback);
	};



	App.generate = function (pageName, args) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'undefined':
				args = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		return generatePage(pageName, args);
	};



	App.setDefaultTransition = function (transition) {
		if (typeof transition === 'object') {
			switch (platform) {
				case 'android':
					transition = transition.android;
					if ((isAndroid401 || version < 4) && transition.androidFallback) {
						transition = transition.androidFallback;
					}
					break;

				case 'ios':
					transition = transition.ios;
					if ((version < 5) && transition.iosFallback) {
						transition = transition.iosFallback;
					}
					break;

				default:
					transition = transition.fallback;
					break;
			}

			if ( !transition ) {
				return;
			}
		}

		if (typeof transition !== 'string') {
			throw TypeError('transition must be a string if defined, got ' + transition);
		}

		if ( !(transition in REVERSE_TRANSITION) ) {
			throw TypeError('invalid transition type, got ' + transition);
		}

		setDefaultTransition(transition);
	};



	App.getStack = function () {
		return fetchStack();
	};



	App.removeFromStack = function (startIndex, endIndex) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof startIndex) {
			case 'undefined':
				startIndex = 0;
				break;

			case 'number':
				if (Math.abs(startIndex) > stackSize) {
					throw TypeError('absolute start index cannot be greater than stack size, got ' + startIndex);
				}
				if (startIndex < 0) {
					startIndex = stackSize + startIndex;
				}
				break;

			default:
				throw TypeError('start index must be a number if defined, got ' + startIndex);
		}

		switch (typeof endIndex) {
			case 'undefined':
				endIndex = stackSize;
				break;

			case 'number':
				if (Math.abs(endIndex) > stackSize) {
					throw TypeError('absolute end index cannot be greater than stack size, got ' + endIndex);
				}
				if (endIndex < 0) {
					endIndex = stackSize + endIndex;
				}
				break;

			default:
				throw TypeError('end index must be a number if defined, got ' + endIndex);
		}

		if (startIndex > endIndex) {
			throw TypeError('start index cannot be greater than end index');
		}

		removeFromStack(startIndex, endIndex);
	};



	App.addToStack = function (index, newPages) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof index) {
			case 'undefined':
				index = 0;
				break;

			case 'number':
				if (Math.abs(index) > stackSize) {
					throw TypeError('absolute index cannot be greater than stack size, got ' + index);
				}
				if (index < 0) {
					index = stackSize + index;
				}
				break;

			default:
				throw TypeError('index must be a number if defined, got ' + index);
		}

		if ( !isArray(newPages) ) {
			throw TypeError('added pages must be an array, got ' + newPages);
		}

		newPages = newPages.slice();

		newPages.forEach(function (page, i) {
			if (typeof page === 'string') {
				page = [page, {}];
			}
			else if ( isArray(page) ) {
				page = page.slice();
			}
			else {
				throw TypeError('page description must be an array (page name, arguments), got ' + page);
			}

			if (typeof page[0] !== 'string') {
				throw TypeError('page name must be a string, got ' + page[0]);
			}

			switch (typeof page[1]) {
				case 'undefined':
					page[1] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page arguments must be an object if defined, got ' + page[1]);
			}

			switch (typeof page[2]) {
				case 'undefined':
					page[2] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page options must be an object if defined, got ' + page[2]);
			}

			newPages[i] = page;
		});

		addToStack(index, newPages);
	};



	App.restore = setupRestoreFunction();



	App.dialog = Dialog;



	config();
	setupListeners();

	window.App = App;
})(window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable, window.clik);
