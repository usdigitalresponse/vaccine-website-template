!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var r=n(5);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,i,o=n(3),c=n.n(o),u=n(0),l=(n(6),n(1)),f=n(2),a=n(4),s=(n(7),function(e){var t=e.title;return Object(u.createElement)("div",null,Object(u.createElement)("div",{className:"pattern-title-container"}),Object(u.createElement)("span",{className:"premium-pattern-title"}," ",t," "))}),p=function(){var e=Object(l.useSelect)((function(e){return e("core/block-editor").getSettings()})).__experimentalBlockPatterns,t=Object(l.useDispatch)("core/block-editor").updateSettings;if(e){var n=!1,r=[];e.forEach((function(e){var t=c()({},e);if(t.isPremium&&"string"==typeof t.title){var i=t.title,o=Object(u.createElement)(s,{title:i});Object.isExtensible(o)&&(t.title=o,t.title.toString=function(){return Object(f.sprintf)(Object(f.__)("%s (Premium)","full-site-editing"),i)},n=!0)}r.push(t)})),n&&t({__experimentalBlockPatterns:r})}return null};r="a8c-wpcom-premium-block-patterns",i={render:function(){return Object(u.createElement)(p,null)}},Object(a.registerPlugin)(r,i)}]));