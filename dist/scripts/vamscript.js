!function(){function e(t,n,o){function r(i,s){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){return r(t[i][1][e]||e)},d,d.exports,e,t,n,o)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}return e}()({1:[function(e,t,n){n.defaults={},n.set=function(e,t,o){var r=o||{},a=n.defaults,i=r.expires||a.expires,s=r.domain||a.domain,c=void 0!==r.path?r.path:void 0!==a.path?a.path:"/",l=void 0!==r.secure?r.secure:a.secure,d=void 0!==r.httponly?r.httponly:a.httponly,u=void 0!==r.samesite?r.samesite:a.samesite,v=i?new Date("number"==typeof i?(new Date).getTime()+864e5*i:i):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+t.replace(/[^+#$&\/:<-\[\]-}]/g,encodeURIComponent)+(v&&v.getTime()>=0?";expires="+v.toUTCString():"")+(s?";domain="+s:"")+(c?";path="+c:"")+(l?";secure":"")+(d?";httponly":"")+(u?";samesite="+u:"")},n.get=function(e){for(var t=document.cookie.split(";");t.length;){var n=t.pop(),o=n.indexOf("=");o=o<0?n.length:o;if(decodeURIComponent(n.slice(0,o).replace(/^\s+/,""))===e)return decodeURIComponent(n.slice(o+1))}return null},n.erase=function(e,t){n.set(e,"",{expires:-1,domain:t&&t.domain,path:t&&t.path,secure:0,httponly:0})},n.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var n=t.pop(),o=n.indexOf("=");o=o<0?n.length:o;e[decodeURIComponent(n.slice(0,o).replace(/^\s+/,""))]=decodeURIComponent(n.slice(o+1))}return e}},{}],2:[function(e,t,n){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,a){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;e=e.split(t);var s=1e3;a&&"number"==typeof a.maxKeys&&(s=a.maxKeys);var c=e.length;s>0&&c>s&&(c=s);for(var l=0;l<c;++l){var d,u,v,m,f=e[l].replace(/\+/g,"%20"),p=f.indexOf(n);p>=0?(d=f.substr(0,p),u=f.substr(p+1)):(d=f,u=""),v=decodeURIComponent(d),m=decodeURIComponent(u),o(i,v)?r(i[v])?i[v].push(m):i[v]=[i[v],m]:i[v]=m}return i};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],3:[function(e,t,n){"use strict";function o(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o++)n.push(t(e[o],o));return n}var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?o(i(e),function(i){var s=encodeURIComponent(r(i))+n;return a(e[i])?o(e[i],function(e){return s+encodeURIComponent(r(e))}).join(t):s+encodeURIComponent(r(e[i]))}).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],4:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":2,"./encode":3}],5:[function(e,t,n){!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=n()}):"object"==typeof t&&t.exports?t.exports=n():e.svg4everybody=n()}(this,function(){function e(e,t,n){if(n){var o=document.createDocumentFragment(),r=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");r&&t.setAttribute("viewBox",r);for(var a=n.cloneNode(!0);a.childNodes.length;)o.appendChild(a.firstChild);e.appendChild(o)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(o){var r=t._cachedTarget[o.id];r||(r=t._cachedTarget[o.id]=n.getElementById(o.id)),e(o.parent,o.svg,r)})}},t.onreadystatechange()}function n(n){function r(){for(var n=0;n<v.length;){var s=v[n],c=s.parentNode,l=o(c),f=s.getAttribute("xlink:href")||s.getAttribute("href");if(!f&&i.attributeName&&(f=s.getAttribute(i.attributeName)),l&&f){if(a)if(!i.validate||i.validate(f,l,s)){c.removeChild(s);var p=f.split("#"),g=p.shift(),b=p.join("#");if(g.length){var y=d[g];y||(y=d[g]=new XMLHttpRequest,y.open("GET",g),y.send(),y._embeds=[]),y._embeds.push({parent:c,svg:l,id:b}),t(y)}else e(c,l,document.getElementById(b))}else++n,++m}else++n}(!v.length||v.length-m>0)&&u(r,67)}var a,i=Object(n),s=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,c=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;a="polyfill"in i?i.polyfill:s.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||c.test(navigator.userAgent)&&l;var d={},u=window.requestAnimationFrame||setTimeout,v=document.getElementsByTagName("use"),m=0;a&&r()}function o(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return n})},{}],6:[function(e,t,n){"use strict";var o=e("svg4everybody"),r=function(e){return e&&e.__esModule?e:{default:e}}(o);e("../../components/services/object_fit_polyfill/_poly-object-fit.js"),e("../../components/blocks/background-video/_background-video.js"),e("../../components/groups/block-grid/_grid-reveal-more.js"),e("../../components/blocks/cookie-banner/_cookie-banner.js"),e("../../components/blocks/object-image-overlay/_object-image-overlay.js"),e("../../components/blocks/modal/_modal.js"),e("../../components/blocks/newsletter-signup/_newsletter-signup.js"),e("../../components/blocks/search-form/_search-form.js"),e("../../components/blocks/search-result/_search-result.js"),e("../../components/blocks/toggle-nav/_toggle-nav.js"),e("../../components/blocks/video-thumbnail/_video-thumbnail.js"),e("../../components/blocks/video-trailer/_video-trailer.js"),(0,r.default)()},{"../../components/blocks/background-video/_background-video.js":7,"../../components/blocks/cookie-banner/_cookie-banner.js":8,"../../components/blocks/modal/_modal.js":9,"../../components/blocks/newsletter-signup/_newsletter-signup.js":10,"../../components/blocks/object-image-overlay/_object-image-overlay.js":11,"../../components/blocks/search-form/_search-form.js":12,"../../components/blocks/search-result/_search-result.js":13,"../../components/blocks/toggle-nav/_toggle-nav.js":14,"../../components/blocks/video-thumbnail/_video-thumbnail.js":15,"../../components/blocks/video-trailer/_video-trailer.js":16,"../../components/groups/block-grid/_grid-reveal-more.js":17,"../../components/services/object_fit_polyfill/_poly-object-fit.js":18,svg4everybody:5}],7:[function(e,t,n){"use strict";var o=document.querySelector(".js-background-video");if(o){var r=document.querySelector(".js-background-video-container"),a=document.querySelector(".js-stop-button"),i=document.querySelector(".js-background-video-credit"),s=document.querySelector(".js-background-image-credit"),c=0,l=function(){i&&i.classList.remove("hidden"),s&&s.classList.add("hidden")},d=function(){i&&i.classList.add("hidden"),s&&s.classList.remove("hidden")};o.addEventListener("canplaythrough",function(){c>=20?(r.classList.remove("b-video-background--fade"),o.pause(),d()):(r.classList.add("b-video-background--fade"),c+=1,l())});var u=function(){0===r.offsetHeight?(o.pause(),d()):(o.play(),l())};window.addEventListener("load",function(){u()}),window.addEventListener("resize",function(){u()}),a&&(a.onclick=function(){o.pause(),r.classList.remove("b-video-background--fade"),o.paused&&(a.classList.add("hidden"),d())})}},{}],8:[function(e,t,n){"use strict";var o=document.querySelector(".js-cookie-banner");if(o){var r=document.querySelector(".js-cookie-banner-close");window.onload=function(){o.classList.remove("b-cookie-banner--hidden")},r.onclick=function(e){e.preventDefault(),o.classList.add("b-cookie-banner--hidden")}}},{}],9:[function(e,t,n){"use strict";function o(e,t){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"myClick",category:e,action:t})}var r=e("browser-cookies"),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=document.querySelectorAll(".js-modal");Array.from(i,function(e){var t=e.dataset.modalCampaign;return e.dataset.modalOnceOnly&&a.default.get(t)||(document.body.appendChild(e),e.classList.add("b-modal--active"),o(t,"pop-up displayed")),e.addEventListener("click",function(n){if(e.dataset.modalOnceOnly&&a.default.set(t,"seen",{domain:e.dataset.modalDomain,expires:365}),n.target!==e){var r=e.querySelector(".js-modal-action");n.target===r?o(t,"clicked: "+r.textContent):(o(t,"pop-up dismissed"),e.remove())}}),!0})},{"browser-cookies":1}],10:[function(e,t,n){"use strict";function o(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}Array.from(document.querySelectorAll(".js-newsletter_form"),function(e){return e.addEventListener("submit",function(t){t.preventDefault();var n=e.querySelector(".js-emailValidation"),r=e.querySelector(".js-newsletter__descriptor"),a=e.querySelector(".js-newsletter__submit"),i=new XMLHttpRequest,s="";o(n.value)?(i||e.submit(),Array.from(e.querySelectorAll("input"),function(e){return s+=e.name+"="+encodeURIComponent(e.value)+"&",!0}),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(a.value="Thank you!",r.innerHTML="A confirmation email will be sent to this address shortly&hellip;",e.classList.remove("invalid"),e.classList.add("sent")):e.submit())},i.open("POST",e.action),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(s)):(r.innerHTML="That doesn't look like an email address&hellip;",e.classList.add("invalid"))}),!0})},{}],11:[function(e,t,n){"use strict";!function(){var e=Array.from(document.querySelectorAll(".js-object-image-overlay-item"));if(e.length){var t=document.querySelector(".b-object-image-overlay")||document.createElement("div");document.body.appendChild(t),t.classList.add("b-object-image-overlay"),t.setAttribute("tabindex",0),t.innerHTML='<a class="b-object-image-overlay__dismiss" title="Close" aria-label="Close"></a><div class="b-object-image-overlay__items"></div>';var n=t.querySelector(".b-object-image-overlay__items");t.addItem=function(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e[t]||e[0],a=r.dataset.objectImageOverlay?JSON.parse(r.dataset.objectImageOverlay):null,i=a&&a.museumNumber?'Museum number: <span itemprop="identifier">'+a.museumNumber+"</span>":"",s=a&&a.copyright?'<br/><span itemprop="copyrightHolder">'+a.copyright+"</span>":"",c=i||s?'<div class="b-object-image-overlay__numbercopyright">'+i+""+s+"</div>":"",l=a&&a.onDisplay?'<div class="b-object-image-overlay__location-status"><svg role="img" id="on-display" viewBox="0 0 52 52"><path d="M51.59 25.348C45.15 15.57 35.838 10 26 10S6.851 15.57.41 25.348L0 26l.41.652C6.85 36.43 16.162 42 26 42s19.149-5.57 25.59-15.348L52 26l-.41-.652zM25.5 35c-5.225 0-9.5-4.275-9.5-9.5s4.275-9.5 9.5-9.5 9.5 4.275 9.5 9.5-4.275 9.5-9.5 9.5z" fill="currentColor"/></svg>On display</div>':"",d="";if(a&&a.onDisplay){if(!(d=a.displayOverride)){var u=a.locationSite?'<div class="b-object-image-overlay__location-site">'+a.locationSite+"</div>":"",v=a.locationRoom?a.locationRoom:"";d=u+v}}else a&&null!==a.onDisplay&&!a.onDisplay&&(d=a.storageOverride||"This object is currently not on display");var m=a&&a.visitUrl?'<a class="b-object-image-overlay__visit" href="'+a.visitUrl+'">Find out how to visit this object</a>':"",f=d||m?'<div class="b-object-image-overlay__location">'+l+'<div class="b-object-image-overlay__location-copy">'+d+"</div>"+m+"</div>":"",p=r.querySelector("a"),g=p.getAttribute("href").length>1?'<br/><a class="b-object-image-overlay__cta b-object-image-overlay__cta--screen" href="'+p.href+'">Explore object in more depth</a>':"",b=p.getAttribute("href").length>1?'<a class="b-object-image-overlay__cta b-object-image-overlay__cta--mobile" href="'+p.href+'">Explore object in more depth</a>':"",y=document.createElement("div");y.classList.add("b-object-image-overlay__item"),y.innerHTML+='<div class="b-object-image-overlay__content"><figure class="b-object-image-overlay__figure"><img class="b-object-image-overlay__image"itemprop="contentUrl"alt="'+r.querySelector("img").alt+'"sizes="(max-width: 991px) calc(100vw - 20px),(min-width: 992px) calc(70vw - 145px),(min-width: 1200px) 710px"srcset="'+r.querySelector("img").srcset+'"src="'+r.querySelector("img").src+'"><figcaption class="b-object-image-overlay__figcaption">'+c+'<div class="b-object-image-overlay__prevnext"><a class="b-object-image-overlay__prev b-object-image-overlay__prev--disabled" href="#" title="Previous" aria-label="Previous"><svg role="img" id="point-left" viewBox="0 0 100 100"><path fill="none" d="M-1-1h582v402H-1z"/><g><path d="M70.173 12.294L57.446.174l-47.62 50 47.62 50 12.727-12.122-36.075-37.879z" fill="currentColor" fill-rule="nonzero"/></g></svg></a><a class="b-object-image-overlay__next b-object-image-overlay__next--disabled" href="#" title="Next" aria-label="Next"><svg role="img" id="point-right" viewBox="0 0 100 100"><path fill="none" d="M-1-1h582v402H-1z"/><g><path d="M20 88.052l12.727 12.121 47.62-50-47.62-50L20 12.294l36.075 37.88z" fill="currentColor" fill-rule="nonzero"/></g></svg></a></div></figcaption></figure><div class="b-object-image-overlay__details"><div class="b-object-image-overlay__caption">'+r.querySelector("figcaption").textContent+""+g+"</div>"+f+""+b+"</div></div>",o?n.insertBefore(y,n.firstElementChild):n.appendChild(y);var h=y.querySelector(".b-object-image-overlay__prev"),_=y.querySelector(".b-object-image-overlay__next");t>0&&h.classList.add("b-object-image-overlay__prev--enabled"),t<e.length-1&&_.classList.add("b-object-image-overlay__next--enabled")},t.getIndex=function(t){return e.findIndex(function(e){return e===t})},t.clipItem=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?n.lastElementChild.remove():n.firstElementChild.remove()},t.advance=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(!n&&t._index<e.length-1||n&&t._index>0)&&(t.clipItem(n),t.addItem(t._index+2*(n?-1:1),n),t._index+=1*(n?-1:1))},document.addEventListener("click",function(e){if(e.target.closest(".js-object-image-overlay-item")){e.preventDefault();var o=e.target.closest(".js-object-image-overlay-item");t._index=t.getIndex(o),t.addItem(t._index),t.classList.add("b-object-image-overlay--active"),t.addItem(t._index+1),t.addItem(t._index-1,!0),t._width=t.getBoundingClientRect().width,t.focus();var r=function(e){"ArrowLeft"===e.key?(e.preventDefault(),t.advance(!0)):"ArrowRight"===e.key&&(e.preventDefault(),t.advance())};document.addEventListener("keydown",r,!1),t.onclick=function(e){e.target.matches(".b-object-image-overlay__item, .b-object-image-overlay__dismiss")?(e.preventDefault(),t.classList.remove("b-object-image-overlay--active"),n.innerHTML="",t.onclick=null,document.removeEventListener("keydown",r,!1)):e.target.closest(".b-object-image-overlay__next--enabled")?(e.preventDefault(),t.advance()):e.target.closest(".b-object-image-overlay__prev--enabled")&&(e.preventDefault(),t.advance(!0))}}},!1)}}()},{}],12:[function(e,t,n){"use strict";function o(){s.innerHTML=i.value.replace(/\s/g,"&nbsp;")}function r(){l.classList.add("b-search-form__clear--hidden"),i.value.length?c.classList.remove("b-search-form__submit--hidden"):c.classList.add("b-search-form__submit--hidden")}function a(){l.classList.add("b-search-form__clear--hidden"),i.value="",o()}var i=document.querySelector(".js-search-input"),s=document.querySelector(".js-search-underscore"),c=document.querySelector(".js-search-submit"),l=document.querySelector(".js-search-clear");i&&(i.focus(),function(){c.classList.add("b-search-form__submit--hidden"),i.value.length&&l.classList.remove("b-search-form__clear--hidden")}(),o(),i.addEventListener("input",o),i.addEventListener("input",r),l.addEventListener("click",a))},{}],13:[function(e,t,n){"use strict";function o(e){if(e.innerHTML=e.textFull,e.scrollHeight-e.clientHeight>10){var t=e.textFull.indexOf("</em>"),n=e.clientHeight/e.scrollHeight*e.textFull.length,o=t-n,r=0,a=e.textFull.lastIndexOf(" ",n),i="";o>0&&(i="&hellip;",r=e.textFull.indexOf(" ",o+20)+1,a=e.textFull.lastIndexOf(" ",n+o+20)),e.innerHTML=""+i+e.textFull.substring(r,a)+"&hellip;"}}var r=document.querySelectorAll(".js-search-result-text");r.length&&Array.from(r,function(e){return e.textFull=e.innerHTML,o(e),window.addEventListener("resize",o.bind(void 0,e),!1),!0})},{}],14:[function(e,t,n){"use strict";var o=e("querystring"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=document.querySelector(".js-toggle-nav");if(a){var i=a.querySelectorAll(".js-toggle-nav-btn"),s=r.default.parse(window.location.search.replace("?","")),c=s.type;Array.from(i,function(e){var t=document.querySelectorAll(e.dataset.toggeesSelector);return e.addEventListener("click",function(n){n.preventDefault();var o=e.dataset.toggleType;a.scrollLeft=e.offsetLeft-(a.getBoundingClientRect().width-e.getBoundingClientRect().width)/2,e.preventHistoryPush||window.history.pushState({toggleNavType:o},"","?type="+o),e.preventHistoryPush=!1,Array.from(t,function(e){return e.classList.add("s-visually-hidden"),e.dataset.toggleType===o&&e.classList.remove("s-visually-hidden"),!0}),Array.from(i,function(e){return e.classList.remove("b-toggle-nav__button--active"),!0}),e.classList.add("b-toggle-nav__button--active")},!1),e.dataset.toggleType===c&&(e.preventHistoryPush=!0,setTimeout(function(){e.click()},50)),!0}),window.addEventListener("popstate",function(e){return Array.from(document.querySelectorAll("s-visually-hidden"),function(e){return e.classList.remove("s-visually-hidden"),!0}),e.state&&e.state.toggleNavType&&Array.from(i,function(t){return e.state.toggleNavType===t.dataset.toggleType&&(t.preventHistoryPush=!0,t.click()),!0}),!0},!1),c||void 0===a.dataset.toggleTypeDefault||document.querySelector("[data-toggle-type="+a.dataset.toggleTypeDefault+"]").click()}},{querystring:4}],15:[function(e,t,n){"use strict";var o=document.querySelectorAll(".js-video-thumbnail");Array.from(o,function(e){return e.addEventListener("click",function(t){t.preventDefault();var n=document.createElement("div"),o=document.createElement("div");n.className="b-video-thumbnail__popup",n.innerHTML='<iframe class="b-video-thumbnail__popup-iframe" width="90%" height="90%" src="'+e.href+'"&playsinline=1" frameborder="0" allowfullscreen></iframe>',n.addEventListener("click",function(){n.remove()}),o.className="b-video-thumbnail__popup-close",o.innerHTML='<svg role="img" id="close" viewBox="0 0 100 100"><path d="M50 39.254L10.749 0 0 10.742l39.251 39.254L0 89.251 10.749 100 50 60.746 89.251 100 100 89.243 60.749 49.99 100 10.734 89.244 0 49.992 39.254z" fill="currentColor" fill-rule="evenodd"/></svg>',n.appendChild(o),document.body.appendChild(n)}),!0})},{}],16:[function(e,t,n){"use strict";var o=document.querySelector(".js-video-trailer");if(o){var r=o.querySelector(".js-video-trailer-preview"),a=document.createElement("div");o.addEventListener("click",function(e){e.preventDefault(),a.className="b-video-trailer__image",a.innerHTML='<iframe class="" width="100%" height="100%" src="'+o.href+'"&playsinline=1" frameborder="0" allowfullscreen></iframe>',r.remove(),o.appendChild(a),a.style.height=.5625*a.offsetWidth+"px"}),window.addEventListener("resize",function(){a.style.height=.5625*a.offsetWidth+"px"})}},{}],17:[function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=document.querySelectorAll(".js-grid-reveal-more");r.length&&(Array.from(r,function(e){var t=e.dataset.revealMoreCounter||4;if(t<e.childElementCount){var n=e.dataset.iconUrl,r=[].concat(o(e.children)),a=e.dataset.revealMoreTheme||"dark",i=e.dataset.revealMoreTracking||"",s=e;e.dataset.revealMorePutAfter&&(s=document.querySelector(e.dataset.revealMorePutAfter)),r.slice(t).forEach(function(e){return e.classList.add("s-visually-hidden")});var c=document.createElement("footer");c.setAttribute("class","b-block-grid__footer b-block-grid__footer--"+a),c.innerHTML='<a href="#" data-tracking-showmorebutton="'+i+'" class="js-reveal-more-btn"><div class="b-icon-badge b-icon-badge--small b-icon-badge--'+a+'"><div class="b-icon-badge__icon s-themed s-themed--background-color s-themed--background-color--hover"><svg role="img"><use xlink:href="'+n+'#plus"></use></svg></div><small class="b-icon-badge__label">Show more</small></div></a>',s.parentNode.insertBefore(c,s.nextSibling),e.revealMoreClicks=0,c.addEventListener("click",function(n){n.preventDefault(),e.revealMoreClicks+=1;var o=r.filter(function(e){return e.classList.contains("s-visually-hidden")});o.slice(0,t).forEach(function(e){return e.classList.remove("s-visually-hidden")}),o.length<=t&&c.remove()},!1)}return!0}),window.addEventListener("beforeunload",function(){var e=[];Array.from(r,function(t){return e.push(t.revealMoreClicks),!0}),history.replaceState({revealMoreClicks:e},"revealMoreClicks")},!1),window.addEventListener("load",function(){if(history.state&&history.state.revealMoreClicks)for(var e=document.querySelectorAll(".js-reveal-more-btn"),t=0;t<history.state.revealMoreClicks.length;t+=1)for(var n=0;n<history.state.revealMoreClicks[t];)e[t].click(),n+=1},!1))},{}],18:[function(e,t,n){"use strict";function o(){var e=document.querySelectorAll(".js-object-fit-container");[].forEach.call(e,function(e){if(e.getElementsByTagName("img")[0]){var t=e.getElementsByTagName("img")[0];t.addEventListener("load",function(){var n=t.src;n&&(e.classList.add("js-object-fit-container--fallback"),e.style.backgroundImage="url('"+n+"')")})}})}"undefined"!=typeof Modernizr&&Modernizr.on("objectfit",function(e){e||o()})},{}]},{},[6]);
//# sourceMappingURL=vamscript.js.map
