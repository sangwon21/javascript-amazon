!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)e.d(t,i,function(r){return n[r]}.bind(null,i));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=12)}([function(n,r,e){"use strict";var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),s=[];function o(n){for(var r=-1,e=0;e<s.length;e++)if(s[e].identifier===n){r=e;break}return r}function d(n,r){for(var e={},t=[],i=0;i<n.length;i++){var a=n[i],d=r.base?a[0]+r.base:a[0],c=e[d]||0,l="".concat(d," ").concat(c);e[d]=c+1;var p=o(l),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(s[p].references++,s[p].updater(h)):s.push({identifier:l,updater:b(h,r),references:1}),t.push(l)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var s=a(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function h(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(r,i);else{var a=document.createTextNode(i),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(a,s[r]):n.appendChild(a)}}function g(n,r,e){var t=e.css,i=e.media,a=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u=null,m=0;function b(n,r){var e,t,i;if(r.singleton){var a=m++;e=u||(u=c(r)),t=h.bind(null,e,a,!1),i=h.bind(null,e,a,!0)}else e=c(r),t=g.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=i());var e=d(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=o(e[t]);s[i].references--}for(var a=d(n,r),c=0;c<e.length;c++){var l=o(e[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}e=a}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var i=(s=t,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(d," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}var s,o,d;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var o=0;o<n.length;o++){var d=[].concat(n[o]);t&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),r.push(d))}},r}},function(n,r,e){var t=e(0),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},s=(t(i,a),i.locals?i.locals:{});n.exports=s},function(n,r,e){(r=e(1)(!1)).push([n.i,".button1 {\r\n  position: absolute;\r\n  top: 57%;\r\n  left: -80px;\r\n}\r\n\r\n.button2 {\r\n  position: absolute;\r\n  top: 57%;\r\n  right: -80px;\r\n}\r\n",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},s=(t(i,a),i.locals?i.locals:{});n.exports=s},function(n,r,e){(r=e(1)(!1)).push([n.i,".card-block {\r\n    overflow: hidden;   \r\n}\r\n\r\n.card-wrapper {\r\n    display: flex;\r\n    height: 370px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n    left: calc(-1080px * 8);\r\n}\r\n\r\n#card-1 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A01._CB514650866_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-2 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A02._CB514650866_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-3 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A03._CB514650829_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-4 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A04._CB494909365_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-5 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B01._CB514650828_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-6 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B02._CB513839286_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-7 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B03._CB513839286_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-8 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD12272_PrimeContentUpdate/Card_B04_AVD12272_PrimeContentUpdate_1280x400_en_US._CB474157036_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-9 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B05._CB514650828_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-10 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C06._CB495022579_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-11 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C01_revised._CB502880131_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-12 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C03._CB511882458_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-13 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C04._CB514650828_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-14 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D01._CB514706473_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-15 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D02._CB513839283_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-16 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E03._CB513839888_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n#card-17 {\r\n    background: linear-gradient(to right, #FFF, #FFF 15px, rgba(255,255,255,0) 45px), url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E01._CB513839282_.jpg);\r\n    background-position: top right;\r\n}\r\n\r\n.card {\r\n    min-width: 1080px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.card img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.card-copy {\r\n    width: 500px;\r\n    margin-top: 30px;\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.card-copy > h4 {\r\n    font-size: 32px;\r\n}\r\n\r\n\r\n.card-copy li {\r\n    line-height: 2;\r\n}\r\n\r\n.card-category {\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    font-size: 15px;\r\n    line-height: 30px;\r\n    font-weight: 600;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.ship {\r\n    background-color: #00A8E1;\r\n}\r\n\r\n.stream {\r\n    background-color: #FF6138;\r\n}\r\n\r\n.shop {\r\n    background-color: #E31F64;\r\n}\r\n\r\n.read {\r\n    background-color: #36C2B4;\r\n}\r\n\r\n.more {\r\n    background-color: #FFC400;\r\n}\r\n\r\n.card-headline {\r\n    font-size: 38px;\r\n    line-height: 32px;\r\n    font-weight: 300;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-body {\r\n    font-size: 18px;\r\n    line-height: 28px;\r\n    font-weight: 300;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-cta {\r\n    font-size: 18px;\r\n    color: #002F36;\r\n    cursor: pointer;\r\n}",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},s=(t(i,a),i.locals?i.locals:{});n.exports=s},function(n,r,e){(r=e(1)(!1)).push([n.i,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 262px;\r\n  max-width: 1000px;\r\n  min-width: 1000px;\r\n}\r\n\r\n.header-list {\r\n  text-align: center;\r\n  display: flex;\r\n  min-width: 190px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  background-size: 1616px auto, 100% 100%;\r\n  background-position: 0px -26px, 0px 0px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-list:nth-child(1) {\r\n  background-image: url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_A._CB513333159_.png),\r\n  linear-gradient(30deg, #2C88AE 40%, #00A8E1 90%, #00A8E1 48px);\r\n}\r\n\r\n.header-list:nth-child(2) {\r\n  background-image: url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_B._CB513285352_.png),\r\n        linear-gradient(30deg, #CC0C39 40%, #FF6138 90%, #FF6138 48px);       \r\n}\r\n\r\n.header-list:nth-child(3) {\r\n  background-image: url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_C._CB513285352_.png),\r\n        linear-gradient(30deg, #A90067 40%, #E31F64 90%, #E31F64 48px);\r\n}\r\n\r\n.header-list:nth-child(4) {\r\n  background-image: url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_D._CB513285353_.png),\r\n        linear-gradient(30deg, #008577 40%, #36C2B4 90%, #36C2B4 48px);\r\n}\r\n\r\n.header-list:nth-child(5) {\r\n  background-image: url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_E._CB513285352_.png),\r\n        linear-gradient(30deg, #FF6138 40%, #FFC400 90%, #FFC400 48px);\r\n}\r\n\r\n.header-selected {\r\n  transform: scale(1.2);\r\n  z-index: 98;\r\n  overflow: hidden;\r\n  box-shadow: -1px 0px 10px -1px #000000; \r\n}\r\n\r\n.header_title {\r\n  position: absolute;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  bottom: 60px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.circles {\r\n  position: absolute;\r\n  margin: 0 auto;\r\n  bottom: 5px;\r\n}\r\n\r\n.invisible {\r\n  display: none;\r\n}\r\n\r\n/*출처: https://www.w3schools.com/howto/howto_css_circles.asp*/\r\n.dot {\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-left: 4px;\r\n}\r\n\r\n.selected-dot {\r\n  background-color: #ffffff;\r\n}",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},s=(t(i,a),i.locals?i.locals:{});n.exports=s},function(n,r,e){(r=e(1)(!1)).push([n.i,"#slider {\r\n  width: 1080px;\r\n  margin: 100px auto 0 auto;\r\n  position: relative;\r\n}\r\n",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},s=(t(i,a),i.locals?i.locals:{});n.exports=s},function(n,r,e){(r=e(1)(!1)).push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: "";\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration,\r\ninput[type="search"]::-webkit-search-results-button,\r\ninput[type="search"]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type="search"] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type="button"], /* 1 */\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible; /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n',""]),n.exports=r},function(n,r,e){"use strict";e.r(r);const t=n=>document.querySelector(n),i=n=>document.querySelectorAll(n);var a=class{constructor(){}addEvent(n,r,e){n.addEventListener(r,e)}initializeStatus(){i(".header-list").forEach(n=>{n.classList.contains("header-selected")&&n.classList.remove("header-selected")}),i(".circles").forEach(n=>{!1===n.classList.contains("invisible")&&n.classList.add("invisible")}),i(".dot").forEach(n=>{n.classList.contains("selected-dot")&&n.classList.remove("selected-dot")})}};var s=class extends a{constructor(n){super(),this.isEventEnded=n}handleHeaderPart(n){n.parentNode.classList.add("header-selected"),n.parentNode.querySelector(".circles").classList.remove("invisible"),n.parentNode.querySelector(".dot").classList.add("selected-dot"),n.parentNode.querySelector(".dot").click()}handleCirclesPart(n){n.parentNode.classList.add("header-selected"),n.classList.remove("invisible"),n.querySelector(".dot").classList.add("selected-dot"),n.querySelector(".dot").click()}handleDotPart(n){n.parentNode.parentNode.classList.add("header-selected"),n.parentNode.classList.remove("invisible"),n.classList.add("selected-dot")}handleAnywhereElse(n){n.querySelector(".dot").classList.add("selected-dot"),n.querySelector(".dot").click(),n.classList.add("header-selected"),Array.from(n.children).forEach(n=>{n.classList.contains("circles")&&n.classList.remove("invisible")})}selectBoxListener(n){if(!1===this.isEventEnded.ended)return;const{target:r}=n;this.initializeStatus(),!0!==r.classList.contains("header_title")&&!0!==r.classList.contains("circles")?!0!==r.classList.contains("dot")?this.handleAnywhereElse(r):this.handleDotPart(r):this.handleHeaderPart(r)}};var o=class extends a{constructor(n){super(),this.isPrevious=!1,this.distance=0,this.previousIndex=0,this.currentIndex=1,this.listLength=17,this.halfListLength=parseInt(this.listLength/2),this.selectedCard=t(".selected-card"),this.movedFinished=!0,this.isEventEnded=n}isRightWay(n){return n>=0}moveByDistance(n){const r=t(".card-wrapper");if(!0===this.isRightWay(n))return this.isPrevious=!1,r.style.transition="transform 1s",void(r.style.transform=`translateX(${-1080*n}px)`);this.isPrevious=!0,r.style.transition="transform 1s",r.style.transform=`translateX(${1080*-n}px)`}getPreviousIndex(n){return n-1==0?this.listLength:n-1}getNextIndex(n){return(n+1)%this.listLength==0?this.listLength:(n+1)%this.listLength}returnCurrentIndex(){const[n,r]=this.selectedCard.id.split("-");return parseInt(r)}giveSelectedClassToCurrentIndexNode(){this.selectedCard.classList.remove("selected-card"),this.selectedCard=t(`#card-${this.currentIndex}`),this.selectedCard.classList.add("selected-card")}setCurrentIndexAsPreviousIndex(){const n=this.returnCurrentIndex();this.previousIndex=n}previousButtonListener(n){!1!==this.isEventEnded.ended&&(this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex(),this.currentIndex=this.getPreviousIndex(this.previousIndex),this.distance=-1,this.moveByDistance(-1),this.giveSelectedClassToCurrentIndexNode())}nextButtonListener(n){!1!==this.isEventEnded.ended&&(this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex(),this.currentIndex=this.getNextIndex(this.previousIndex),this.distance=1,this.moveByDistance(1),this.giveSelectedClassToCurrentIndexNode())}transitionEndEvent(n){const r=t(".card-wrapper");r.style.transition="none";const e=Array.from(r.children),i=e.slice(0,Math.abs(this.distance)),a=e[0];if(this.isPrevious){const n=e.slice(e.length-Math.abs(this.distance));n.forEach(n=>n.remove()),n.forEach(n=>r.insertBefore(n,a))}else i.forEach(n=>n.remove()),i.forEach(n=>r.appendChild(n));this.initializeStatus();const s=t(`[data-id="${this.currentIndex}"]`);s.classList.add("selected-dot"),s.parentNode.classList.remove("invisible"),s.parentNode.parentNode.classList.add("header-selected"),r.style.transform="translateX(0px)",this.isEventEnded.ended=!0}setDistanceInRevertedOrder(n,r){n<=r&&r<=this.listLength?this.distance=r-n:1<=r&&r<=n+this.halfListLength-this.listLength?this.distance=this.listLength+r-n:this.distance=-1*(n-r)}setDistanceInNormalOrder(n,r){r<=n+this.halfListLength?this.distance=r-n:this.distance=r<n?-1*(n-r):-1*(this.listLength+n-r)}setDistance(n,r){n+this.halfListLength>this.listLength?this.setDistanceInRevertedOrder(n,r):this.setDistanceInNormalOrder(n,r)}hasClickedSameIndex(n){return parseInt(n.dataset.id)===this.currentIndex}dotEventListener(n){if(!0===this.hasClickedSameIndex(n.target))return void this.isEventEnded;if(!1===this.isEventEnded.ended)return;this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex();const r=parseInt(n.target.dataset.id);this.currentIndex=r,this.setDistance(this.previousIndex,this.currentIndex),this.moveByDistance(this.distance),this.giveSelectedClassToCurrentIndexNode(),t(`#card-${r}`).click()}};var d=class{constructor(){this.isEventEnded={ended:!0},this.headerEvent=new s(this.isEventEnded),this.sliderEvent=new o(this.isEventEnded)}addEvents(){i(".header-list").forEach(n=>{this.headerEvent.addEvent(n,"click",this.headerEvent.selectBoxListener.bind(this.headerEvent))}),i(".dot").forEach(n=>{this.sliderEvent.addEvent(n,"click",this.sliderEvent.dotEventListener.bind(this.sliderEvent))}),this.sliderEvent.addEvent(t(".button2"),"click",this.sliderEvent.nextButtonListener.bind(this.sliderEvent)),this.sliderEvent.addEvent(t(".button1"),"click",this.sliderEvent.previousButtonListener.bind(this.sliderEvent)),this.sliderEvent.addEvent(t(".card-wrapper"),"transitionend",this.sliderEvent.transitionEndEvent.bind(this.sliderEvent))}};e(2);var c=class{constructor(n){this.buttonData=n}render(){return`${this.buttonData.reduce((n,r,e)=>n+`<button class=${"button"+(e+1)}>${r}</button>`,"")}`}};e(4);var l=class{constructor(n){this.cardData=n,this.cardIndex=1}sortByCategory(n){const r=n=>this.cardData.filter(r=>r.category===n).reduce((n,r)=>n+`<li class="card ${1===this.cardIndex?"selected-card":""}" id=card-${this.cardIndex++}>\n                                                    <div class="card-copy">\n                                                        <span class="card-category ${r.category}">\n                                                            ${r.cardCategory}\n                                                        </span>\n                                                        <div class="card-headline">\n                                                            ${r.cardHeadline}\n                                                        </div>\n                                                        <div class="card-body">\n                                                            ${r.cardBody}\n                                                        </div>\n                                                        <a class="card-cta">\n                                                            ${r.cardCta}\n                                                        </a>\n                                                    </div>\n                                                </li>`,"");return n.map(n=>r(n))}render(){const[n,r,e,t,i]=this.sortByCategory(["ship","stream","shop","read","more"]);return`<div class="card-block"><ul class="card-wrapper">${e}${t}${i}${n}${r}</ul></div>`}};e(6);var p=class{constructor(n){this.headerData=n,this.idIndex=1}returnCardLengthDivString(n){let r="";for(let e=0;e<n;e++)r+=`<div class="dot" data-id=${this.idIndex++}></div>`;return r}render(){return`<ul class="header-wrapper">${this.headerData.reduce((n,r)=>{const e=this.returnCardLengthDivString(r.cardLength);return n+=`<li class="header-list"><div class="header_title">${r.title}</div><div class="circles invisible">${e}</div></li>`},"")}</ul>`}};e(8),e(10);const h={API_SERVER:{ADDRESS:"http://localhost:8080/cards"}};var g=class{constructor(){this.header=null,this.card=null,this.buttons=null,this.cardData=null}setCardData({headerData:n,headerCardLength:r,cardData:e,buttonData:t}){this.header=new p(n,r),this.card=new l(e),this.buttons=new c(t)}render(){return`\n        ${this.header.render()}\n        ${this.card.render()}\n        ${this.buttons.render()}\n        `}doesCardDataExist(){return null!==this.cardData}fetchCardData(){return fetch(h.API_SERVER).then(n=>n.json()).then(n=>(this.cardData=n,n))}};window.addEventListener("DOMContentLoaded",async()=>{await(async()=>{const n=new g;let r=window.localStorage.getItem("cards");if(!r){const e=await n.fetchCardData();return window.localStorage.setItem("cards",JSON.stringify(e)),r=e,n.setCardData(r),void(t("#slider").innerHTML=n.render())}n.setCardData(JSON.parse(r)),t("#slider").innerHTML=n.render()})(),(new d).addEvents(),(()=>{const n=t(".header-list");n.classList.add("header-selected"),n.querySelector(".circles").classList.remove("invisible"),n.querySelector(".dot").classList.add("selected-dot")})()})}]);