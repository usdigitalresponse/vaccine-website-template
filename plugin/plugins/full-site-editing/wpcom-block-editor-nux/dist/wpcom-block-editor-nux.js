!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}([function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){t.log=function(){var e;return"object"==typeof console&&console.log&&(e=console).log.apply(e,arguments)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(n){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(30)(t),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){var r=n(27);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},s=e.split(o),c=i.decode||r,u=0;u<s.length;u++){var l=s[u],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),d=l.substr(++f,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),null==n[p]&&(n[p]=a(d,c))}}return n},t.serialize=function(e,t,n){var r=n||{},o=r.encode||i;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!s.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=r.maxAge){var u=r.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(u)}if(r.domain){if(!s.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!s.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(c+="; HttpOnly");r.secure&&(c+="; Secure");if(r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,i=encodeURIComponent,o=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(n){return e}}},function(e,t,n){"use strict";var r=n(10),i=n(35);function o(e,t){return 55296==(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1)))}function s(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function a(e){return 1===e.length?"0"+e:e}function c(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}t.inherits=i,t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var n=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)n.push(parseInt(e[i]+e[i+1],16))}else for(var r=0,i=0;i<e.length;i++){var s=e.charCodeAt(i);s<128?n[r++]=s:s<2048?(n[r++]=s>>6|192,n[r++]=63&s|128):o(e,i)?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),n[r++]=s>>18|240,n[r++]=s>>12&63|128,n[r++]=s>>6&63|128,n[r++]=63&s|128):(n[r++]=s>>12|224,n[r++]=s>>6&63|128,n[r++]=63&s|128)}else for(i=0;i<e.length;i++)n[i]=0|e[i];return n},t.toHex=function(e){for(var t="",n=0;n<e.length;n++)t+=a(e[n].toString(16));return t},t.htonl=s,t.toHex32=function(e,t){for(var n="",r=0;r<e.length;r++){var i=e[r];"little"===t&&(i=s(i)),n+=c(i.toString(16))}return n},t.zero2=a,t.zero8=c,t.join32=function(e,t,n,i){var o=n-t;r(o%4==0);for(var s=new Array(o/4),a=0,c=t;a<s.length;a++,c+=4){var u;u="big"===i?e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3]:e[c+3]<<24|e[c+2]<<16|e[c+1]<<8|e[c],s[a]=u>>>0}return s},t.split32=function(e,t){for(var n=new Array(4*e.length),r=0,i=0;r<e.length;r++,i+=4){var o=e[r];"big"===t?(n[i]=o>>>24,n[i+1]=o>>>16&255,n[i+2]=o>>>8&255,n[i+3]=255&o):(n[i+3]=o>>>24,n[i+2]=o>>>16&255,n[i+1]=o>>>8&255,n[i]=255&o)}return n},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,n){return e+t+n>>>0},t.sum32_4=function(e,t,n,r){return e+t+n+r>>>0},t.sum32_5=function(e,t,n,r,i){return e+t+n+r+i>>>0},t.sum64=function(e,t,n,r){var i=e[t],o=r+e[t+1]>>>0,s=(o<r?1:0)+n+i;e[t]=s>>>0,e[t+1]=o},t.sum64_hi=function(e,t,n,r){return(t+r>>>0<t?1:0)+e+n>>>0},t.sum64_lo=function(e,t,n,r){return t+r>>>0},t.sum64_4_hi=function(e,t,n,r,i,o,s,a){var c=0,u=t;return c+=(u=u+r>>>0)<t?1:0,c+=(u=u+o>>>0)<o?1:0,e+n+i+s+(c+=(u=u+a>>>0)<a?1:0)>>>0},t.sum64_4_lo=function(e,t,n,r,i,o,s,a){return t+r+o+a>>>0},t.sum64_5_hi=function(e,t,n,r,i,o,s,a,c,u){var l=0,f=t;return l+=(f=f+r>>>0)<t?1:0,l+=(f=f+o>>>0)<o?1:0,l+=(f=f+a>>>0)<a?1:0,e+n+i+s+c+(l+=(f=f+u>>>0)<u?1:0)>>>0},t.sum64_5_lo=function(e,t,n,r,i,o,s,a,c,u){return t+r+o+a+u>>>0},t.rotr64_hi=function(e,t,n){return(t<<32-n|e>>>n)>>>0},t.rotr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0},t.shr64_hi=function(e,t,n){return e>>>n},t.shr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0}},function(e,t){function n(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=n,n.equal=function(e,t,n){if(e!=t)throw new Error(n||"Assertion failed: "+e+" != "+t)}},function(e,t,n){var r=n(31),i=n(32),o=n(14),s=n(33);e.exports=function(e){return r(e)||i(e)||o(e)||s()}},function(e,t,n){e.exports=n.p+"images/preview-a2ab6dbfd49f58a76c13c9dab8b09e0e.svg"},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(13);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){function n(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var s=e.apply(t,r);function a(e){n(s,i,o,a,c,"next",e)}function c(e){n(s,i,o,a,c,"throw",e)}a(void 0)}))}}},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){"use strict";var r=n(9),i=n(36),o=n(37),s=n(10),a=r.sum32,c=r.sum32_4,u=r.sum32_5,l=o.ch32,f=o.maj32,p=o.s0_256,d=o.s1_256,h=o.g0_256,g=o.g1_256,m=i.BlockHash,v=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function y(){if(!(this instanceof y))return new y;m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=v,this.W=new Array(64)}r.inherits(y,m),e.exports=y,y.blockSize=512,y.outSize=256,y.hmacStrength=192,y.padLength=64,y.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=c(g(n[r-2]),n[r-7],h(n[r-15]),n[r-16]);var i=this.h[0],o=this.h[1],m=this.h[2],v=this.h[3],y=this.h[4],b=this.h[5],w=this.h[6],_=this.h[7];for(s(this.k.length===n.length),r=0;r<n.length;r++){var C=u(_,d(y),l(y,b,w),this.k[r],n[r]),x=a(p(i),f(i,o,m));_=w,w=b,b=y,y=a(v,C),v=m,m=o,o=i,i=a(C,x)}this.h[0]=a(this.h[0],i),this.h[1]=a(this.h[1],o),this.h[2]=a(this.h[2],m),this.h[3]=a(this.h[3],v),this.h[4]=a(this.h[4],y),this.h[5]=a(this.h[5],b),this.h[6]=a(this.h[6],w),this.h[7]=a(this.h[7],_)},y.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(e,t,n){var r=n(38),i=n(39),o=n(14),s=n(40);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||s()}},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,s,a;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=l(e))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,a=c,console&&console.warn&&console.warn(a)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):m(i,i.length)}function g(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return l(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)o(c,this,t);else{var u=c.length,l=m(c,u);for(n=0;n<u;++n)o(l[n],this,t)}return!0},a.prototype.addListener=function(e,t){return f(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return f(this,e,t,!0)},a.prototype.once=function(e,t){return u(t),this.on(e,d(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,d(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return h(this,e,!0)},a.prototype.rawListeners=function(e){return h(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):g.call(e,t)},a.prototype.listenerCount=g,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t,n){e.exports=n.p+"images/block-picker-53b676a08dd25f523d4adb0157a40b4c.svg"},function(e,t,n){e.exports=n.p+"images/editor-1a0c404dcc59d4a340edb4649127f4c9.svg"},function(e,t,n){e.exports=n.p+"images/editor-podcast-bc4ffa5867c3bd4651d339f37e691571.svg"},function(e,t,n){e.exports=n.p+"images/transcription-8186cc772deeb35d3526399ddafe144c.svg"},function(e,t,n){e.exports=n.p+"images/private-598e2a26fcb0c685d165d750fdf02364.svg"},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.nux}()},function(e,t,n){"object"==typeof window&&window.wpcomBlockEditorNuxAssetsUrl&&(n.p=window.wpcomBlockEditorNuxAssetsUrl)},function(e,t,n){var r=n(11);e.exports=function(e){function t(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return i.colors[Math.abs(t)%i.colors.length]}function i(e){var n;function r(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];if(r.enabled){var s=r,a=Number(new Date),c=a-(n||a);s.diff=c,s.prev=n,s.curr=a,n=a,t[0]=i.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");var u=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(function(e,n){if("%%"===e)return e;u++;var r=i.formatters[n];if("function"==typeof r){var o=t[u];e=r.call(s,o),t.splice(u,1),u--}return e})),i.formatArgs.call(s,t);var l=s.log||i.log;l.apply(s,t)}}return r.namespace=e,r.enabled=i.enabled(e),r.useColors=i.useColors(),r.color=t(e),r.destroy=o,r.extend=s,"function"==typeof i.init&&i.init(r),i.instances.push(r),r}function o(){var e=i.instances.indexOf(this);return-1!==e&&(i.instances.splice(e,1),!0)}function s(e,t){var n=i(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return i.debug=i,i.default=i,i.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},i.disable=function(){var e=[].concat(r(i.names.map(a)),r(i.skips.map(a).map((function(e){return"-"+e})))).join(",");return i.enable(""),e},i.enable=function(e){var t;i.save(e),i.names=[],i.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length;for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?i.skips.push(new RegExp("^"+e.substr(1)+"$")):i.names.push(new RegExp("^"+e+"$")));for(t=0;t<i.instances.length;t++){var o=i.instances[t];o.enabled=i.enabled(o.namespace)}},i.enabled=function(e){if("*"===e[e.length-1])return!0;var t,n;for(t=0,n=i.skips.length;t<n;t++)if(i.skips[t].test(e))return!1;for(t=0,n=i.names.length;t<n;t++)if(i.names[t].test(e))return!0;return!1},i.humanize=n(34),Object.keys(e).forEach((function(t){i[t]=e[t]})),i.instances=[],i.names=[],i.skips=[],i.formatters={},i.selectColor=t,i.enable(i.load()),i}},function(e,t,n){var r=n(13);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){var n=1e3,r=60*n,i=60*r,o=24*i,s=7*o,a=365.25*o;function c(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*i;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=o)return c(e,t,o,"day");if(t>=i)return c(e,t,i,"hour");if(t>=r)return c(e,t,r,"minute");if(t>=n)return c(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=o)return Math.round(e/o)+"d";if(t>=i)return Math.round(e/i)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},function(e,t,n){"use strict";var r=n(9),i=n(10);function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}t.BlockHash=o,o.prototype.update=function(e,t){if(e=r.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var n=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-n,e.length),0===this.pending.length&&(this.pending=null),e=r.join32(e,0,e.length-n,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},o.prototype.digest=function(e){return this.update(this._pad()),i(null===this.pending),this._digest(e)},o.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,r=new Array(n+this.padLength);r[0]=128;for(var i=1;i<n;i++)r[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)r[i++]=0;r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=e>>>24&255,r[i++]=e>>>16&255,r[i++]=e>>>8&255,r[i++]=255&e}else for(r[i++]=255&e,r[i++]=e>>>8&255,r[i++]=e>>>16&255,r[i++]=e>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,o=8;o<this.padLength;o++)r[i++]=0;return r}},function(e,t,n){"use strict";var r=n(9).rotr32;function i(e,t,n){return e&t^~e&n}function o(e,t,n){return e&t^e&n^t&n}function s(e,t,n){return e^t^n}t.ft_1=function(e,t,n,r){return 0===e?i(t,n,r):1===e||3===e?s(t,n,r):2===e?o(t,n,r):void 0},t.ch32=i,t.maj32=o,t.p32=s,t.s0_256=function(e){return r(e,2)^r(e,13)^r(e,22)},t.s1_256=function(e){return r(e,6)^r(e,11)^r(e,25)},t.g0_256=function(e){return r(e,7)^r(e,18)^e>>>3},t.g1_256=function(e){return r(e,17)^r(e,19)^e>>>10}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(_n=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);_n=!0);}catch(a){r=!0,i=a}finally{try{_n||null==s.return||s.return()}finally{if(r)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),o=n(7),s=n.n(o),a=n(0),c={setWpcomNuxStatus:function(e){var t=e.isNuxEnabled;return e.bypassApi||s()({path:"/wpcom/v2/block-editor/nux",method:"POST",data:{isNuxEnabled:t}}),{type:"WPCOM_BLOCK_EDITOR_NUX_SET_STATUS",isNuxEnabled:t}}};Object(a.registerStore)("automattic/nux",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.isNuxEnabled;return"WPCOM_BLOCK_EDITOR_NUX_SET_STATUS"===n?i()(i()({},e),{},{isNuxEnabled:r}):e},actions:c,selectors:{isWpcomNuxEnabled:function(e){return e.isNuxEnabled}},persist:!0});n(28);var u=Object(a.subscribe)((function(){var e;Object(a.dispatch)("core/nux").disableTips(),(null===(e=Object(a.select)("core/edit-post"))||void 0===e?void 0:e.isFeatureActive("welcomeGuide"))&&Object(a.dispatch)("core/edit-post").toggleFeature("welcomeGuide"),u()}));Object(a.subscribe)((function(){var e;Object(a.select)("core/nux").areTipsEnabled()&&(Object(a.dispatch)("core/nux").disableTips(),Object(a.dispatch)("automattic/nux").setWpcomNuxStatus({isNuxEnabled:!0})),(null===(e=Object(a.select)("core/edit-post"))||void 0===e?void 0:e.isFeatureActive("welcomeGuide"))&&(Object(a.dispatch)("core/edit-post").toggleFeature("welcomeGuide"),Object(a.dispatch)("automattic/nux").setWpcomNuxStatus({isNuxEnabled:!0}))}));var l=n(15),f=n.n(l),p=n(16),d=n.n(p),h=n(2),g=(n(29),n(6)),m=n(1),v=n(17),y=n(3),b=n.n(y),w=b()("calypso:analytics");n(18);"undefined"!=typeof window&&window.addEventListener("popstate",(function(){null}));n(19),n(11);var _=n(4),C=(n(8),n(20)),x=b()("lib/load-script/callback-handler"),O=new Map;function j(){return O}function E(e){return j().has(e)}function F(e,t){var n=j();E(e)?(x('Adding a callback for an existing script from "'.concat(e,'"')),n.get(e).add(t)):(x('Adding a callback for a new script from "'.concat(e,'"')),n.set(e,new Set([t])))}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=j(),r=n.get(e);if(r){var i='Executing callbacks for "'.concat(e,'"')+(null===t?" with success":' with error "'.concat(t,'"'));x(i),r.forEach((function(e){"function"==typeof e&&e(t)})),n.delete(e)}}function k(){var e=this.getAttribute("src");x('Handling successful request for "'.concat(e,'"')),S(e),this.onload=null}function A(){var e=this.getAttribute("src");x('Handling failed request for "'.concat(e,'"')),S(e,new Error('Failed to load script "'.concat(e,'"'))),this.onerror=null}var L=b()("lib/load-script/dom-operations");b()("package/load-script");function N(e,t){var n;if(!E(e)&&(n=function(e){L('Creating script element for "'.concat(e,'"'));var t=document.createElement("script");return t.src=e,t.type="text/javascript",t.async=!0,t.onload=k,t.onerror=A,t}(e),L("Attaching element to head"),document.head.appendChild(n)),"function"!=typeof t)return new Promise((function(t,n){F(e,(function(e){null===e?t():n(e)}))}));F(e,t)}var P,T=["a8c_cookie_banner_ok","wcadmin_storeprofiler_create_jetpack_account","wcadmin_storeprofiler_connect_store","wcadmin_storeprofiler_login_jetpack_account","wcadmin_storeprofiler_payment_login","wcadmin_storeprofiler_payment_create_account","calypso_checkout_switch_to_p_24","calypso_checkout_composite_p24_submit_clicked"];Promise.resolve();function M(e){"undefined"!=typeof window&&(window._tkq=window._tkq||[],window._tkq.push(e))}"undefined"!=typeof document&&N("//stats.wp.com/w2.js?1");var R=new C.EventEmitter;function I(e,t){if(w('Record event "%s" called with props %o',e,t=t||{}),e.startsWith("calypso_")||Object(_.includes)(T,e)){if(P){var n=P(t);t=i()(i()({},t),n)}t=Object(_.omitBy)(t,_.isUndefined),w('Recording event "%s" with actual props %o',e,t),M(["recordEvent",e,t]),R.emit("record-event",e,t)}else w('- Event name must be prefixed by "calypso_" or added to `EVENT_NAME_EXCEPTIONS`')}"undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),new Uint8Array(16);for(var G=[],U=0;U<256;++U)G[U]=(U+256).toString(16).substr(1);var W=n(21),z=(n(41),n(22)),B=n.n(z),D=n(23),H=n.n(D),$=n(24),q=n.n($),V=n(25),K=n.n(V),J=n(12),X=n.n(J),Z=n(26),Q=n.n(Z);function Y(){var e,t=Object(a.useSelect)((function(e){return{isWpcomNuxEnabled:e("automattic/nux").isWpcomNuxEnabled(),isSPTOpen:e("automattic/starter-page-layouts")&&e("automattic/starter-page-layouts").isOpen(),site:e("automattic/site").getSite(window._currentSiteId)}})),n=t.isWpcomNuxEnabled,r=t.isSPTOpen,i=t.site,o=Object(a.useDispatch)("core/edit-post").closeGeneralSidebar,c=Object(a.useDispatch)("automattic/nux").setWpcomNuxStatus;if(Object(h.useEffect)((function(){void 0===n&&function(){var e=d()(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()({path:"/wpcom/v2/block-editor/nux"});case 2:t=e.sent,c({isNuxEnabled:t.is_nux_enabled,bypassApi:!0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n,c]),Object(h.useEffect)((function(){n&&o()}),[o,n]),Object(h.useEffect)((function(){var e;n&&!r&&I("calypso_editor_wpcom_nux_open",{is_gutenboarding:null===(e=window.calypsoifyGutenberg)||void 0===e?void 0:e.isGutenboarding})}),[n,r]),!n||r)return null;var u=!!(null==i||null===(e=i.options)||void 0===e?void 0:e.anchor_podcast),l=Object(W.getQueryArg)(window.location.href,"anchor_episode"),p=function(e){if(e)return[{heading:Object(m.__)("Create your first episode","full-site-editing"),description:Object(m.__)("Let’s get your first episode set up and ready to share. It’ll remain private until you’re ready to launch.","full-site-editing"),imgSrc:q.a,alignBottom:!0},{heading:Object(m.__)("Add a text transcription","full-site-editing"),description:Object(m.__)("Add more accessible content to your episode. Edit the placeholder content on your page to add a transcript of your episode audio.","full-site-editing"),imgSrc:K.a,alignBottom:!0},{heading:Object(m.__)("Preview your page as you go","full-site-editing"),description:Object(m.__)("This is a post page with your episode content. Click “Preview” to see your site the way your visitors will.","full-site-editing"),imgSrc:X.a,alignBottom:!0}];return[{heading:Object(m.__)("Welcome to your website","full-site-editing"),description:Object(m.__)("Edit your homepage, add the pages you need, and change your site’s look and feel.","full-site-editing"),imgSrc:H.a,alignBottom:!0},{heading:Object(m.__)("Add or edit your content","full-site-editing"),description:Object(m.__)("Edit the placeholder content we’ve started you off with, or click the plus sign to add more content.","full-site-editing"),imgSrc:B.a},{heading:Object(m.__)("Preview your site as you go","full-site-editing"),description:Object(m.__)("As you edit your site content, click “Preview” to see your site the way your visitors will.","full-site-editing"),imgSrc:X.a,alignBottom:!0},{heading:Object(m.__)("Hidden until you’re ready","full-site-editing"),description:Object(m.__)("Your site will remain hidden until launched. Click “Launch” in the toolbar to share it with the world.","full-site-editing"),imgSrc:Q.a,alignBottom:!0}]}(u&&l);return Object(h.createElement)(g.Guide,{className:"wpcom-block-editor-nux",contentLabel:Object(m.__)("Welcome to your website","full-site-editing"),finishButtonText:Object(m.__)("Get started","full-site-editing"),onFinish:function(){var e;I("calypso_editor_wpcom_nux_dismiss",{is_gutenboarding:null===(e=window.calypsoifyGutenberg)||void 0===e?void 0:e.isGutenboarding}),c({isNuxEnabled:!1})}},p.map((function(e,t){return Object(h.createElement)(ee,f()({key:e.heading,pageNumber:t+1,isLastPage:t===p.length-1},e))})))}function ee(e){var t=e.pageNumber,n=e.isLastPage,r=e.alignBottom,i=void 0!==r&&r,o=e.heading,s=e.description,a=e.imgSrc;return Object(h.useEffect)((function(){var e;I("calypso_editor_wpcom_nux_slide_view",{slide_number:t,is_last_slide:n,is_gutenboarding:null===(e=window.calypsoifyGutenberg)||void 0===e?void 0:e.isGutenboarding})}),[]),Object(h.createElement)(g.GuidePage,{className:"wpcom-block-editor-nux__page"},Object(h.createElement)("div",{className:"wpcom-block-editor-nux__text"},Object(h.createElement)("h1",{className:"wpcom-block-editor-nux__heading"},o),Object(h.createElement)("div",{className:"wpcom-block-editor-nux__description"},s)),Object(h.createElement)("div",{className:"wpcom-block-editor-nux__visual"},Object(h.createElement)("img",{key:a,src:a,alt:"","aria-hidden":"true",className:"wpcom-block-editor-nux__image"+(i?" align-bottom":"")})))}g.Guide&&g.GuidePage&&Object(v.registerPlugin)("wpcom-block-editor-nux",{render:function(){return Object(h.createElement)(Y,null)}})}]));