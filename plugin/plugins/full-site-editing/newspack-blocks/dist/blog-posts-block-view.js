!function(t,e){for(var r in e)t[r]=e[r]}(window,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e,r){var n=r(2),o=r(3),i=r(4),a=r(5);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},function(t,e,r){var n=r(0);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(0);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);r(6);function i(t,e){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(r.status>=200&&r.status<300){var n=JSON.parse(r.responseText);return t.onSuccess(n)}return e?i(t,e-1):t.onError()}},r.open("GET",t.url),r.send()}function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}Array.prototype.forEach.call(document.querySelectorAll(".wp-block-newspack-blocks-homepage-articles.has-more-button"),(function(t){var e=t.querySelector("[data-next]");if(!e)return;var r=t.querySelector("[data-posts]"),n=!1,u=!1;e.addEventListener("click",(function(){if(n||u)return!1;var s,c;function l(){n=!1,t.classList.remove("is-loading"),t.classList.add("is-error")}n=!0,t.classList.remove("is-error"),t.classList.add("is-loading"),i({url:e.getAttribute("data-next")+"&exclude_ids="+(s=document.querySelectorAll(".wp-block-newspack-blocks-homepage-articles [data-post-id]"),c=Array.from(s).map((function(t){return t.getAttribute("data-post-id")})),c.push(document.querySelector(".wp-block-newspack-blocks-homepage-articles > div[data-current-post-id]").getAttribute("data-current-post-id")),o()(new Set(c))).join(","),onSuccess:function(o){if(!function(t){var e=!1;t&&a(t,"items")&&Array.isArray(t.items)&&a(t,"next")&&"string"==typeof t.next&&(e=!0,!t.items.length||a(t.items[0],"html")&&"string"==typeof t.items[0].html||(e=!1));return e}(o))return l();if(o.items.length){var i=o.items.map((function(t){return t.html})).join("");r.insertAdjacentHTML("beforeend",i)}o.next&&e.setAttribute("data-next",o.next);o.items.length&&o.next||(u=!0,t.classList.remove("has-more-button"));n=!1,t.classList.remove("is-loading")},onError:l},3)}))}))}]));