!function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([125,1]),r()}({125:function(e,t,r){r(126),e.exports=r(318)},312:function(e,t,r){},318:function(e,t,r){"use strict";r.r(t);r(312),r(313),r(314),r(315);var n=r(324),a=r(321),o=r(322),i=r(323),l=(r(316),r(91)),s=r.n(l);function c(e){this.type=e}n.a.use([a.a,o.a,i.a]),window.addEventListener("DOMContentLoaded",(function(){new s.a({});var e=document.querySelector(".header"),t=e.querySelector(".header__search > form"),r=e.querySelector(".js-burger"),a=e.querySelector(".hamburger-menu"),o=document.querySelector(".aside__menu"),i=document.querySelectorAll(".aside__menu > li > a"),l=document.querySelectorAll(".aside__menu-lvl2"),c=document.querySelector(".footer"),u=c.querySelectorAll(".js-footer"),d=c.querySelectorAll(".footer__menu");c.addEventListener("click",(function(e){var t=e.target;if(t&&t.classList.contains("js-footer"))for(var r=0;r<d.length;r++)t==u[r]&&(console.log(d[r]),d[r].classList.toggle("active"))})),e.addEventListener("click",(function(e){var n=e.target;n&&n.classList.contains("js-search")&&t.classList.toggle("active"),n&&n.classList.contains("js-burger")&&(a.classList.toggle("active"),r.classList.toggle("active"))})),o.addEventListener("click",(function(e){var t=e.target;if(t&&"A"==t.tagName)for(var r=0;r<i.length;r++)t===i[r]&&l[r].classList.toggle("active")}));var p=document.querySelector(".js-sidebars"),v=document.querySelectorAll(".js-sidebars > section"),f=document.querySelector(".modal-call"),b=document.querySelector(".modal-one-click"),g=document.querySelector(".modal-subscribe");function m(e,t){e.preventDefault(),p.classList.toggle("sidebar-bg"),t.classList.toggle("active")}document.addEventListener("click",(function(e){var t=e.target;t&&(t.classList.contains("js-call")||t.classList.contains("modal-call__exit"))&&m(e,f),t&&(t.classList.contains("js-one-click")||t.classList.contains("modal-one-click__exit"))&&m(e,b),t&&(t.classList.contains("js-subscribe")||t.classList.contains("modal-subscribe__exit"))&&m(e,g),t&&t.classList.contains("sidebar-bg")&&(e.preventDefault(),p.classList.toggle("sidebar-bg"),v.forEach((function(e){e.classList.toggle("active")&&e.classList.remove("active")})))}));var y=document.querySelector(".reviews-block"),_=y.querySelectorAll(".js-reviews-block-tab"),h=y.querySelectorAll(".reviews-block__link"),w=document.querySelector(".news-block"),k=w.querySelectorAll(".js-news-block-tab"),S=w.querySelectorAll(".news-block__link"),L=document.querySelector(".region"),q=L.querySelectorAll(".js-region-tabs"),A=L.querySelectorAll(".region__link");function j(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;E(e,t),x(0,e,t);var o=0;if(a){var i=t[0].querySelectorAll(".subregion__link"),l=t[0].querySelectorAll(".subregion__content");E(i,l),x(0,i,l)}r.addEventListener("click",(function(r){if(r.target&&r.target.classList.contains(n)){r.preventDefault();for(var i=0;i<e.length;i++)if(e[i]===r.target&&(E(e,t),x(i,e,t),a)){var l=t[i].querySelectorAll(".subregion__link"),s=t[i].querySelectorAll(".subregion__content");E(l,s),x(0,l,s),o=i}}var c=t[o].querySelectorAll(".subregion__link"),u=t[o].querySelectorAll(".subregion__content");if(r.target&&r.target.classList.contains("subregion__link")){r.preventDefault();for(var d=0;d<c.length;d++)c[d]===r.target&&(console.log(c[d]),E(c,u),x(d,c,u))}}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;t[e].classList.add("active"),r[e].classList.add("active")}function E(e,t){e.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}))}y&&j(0,h,_,y,"reviews-block__link"),w&&j(0,S,k,w,"news-block__link"),L&&j(0,A,q,L,"region__link",!0);for(var P=document.querySelectorAll(".card"),O=document.querySelectorAll(".card__price"),V=document.querySelectorAll(".card__price-b"),H=document.querySelectorAll(".card__economy"),D=(document.querySelectorAll(".js-count-kg"),0);D<P.length;D++){var M=+O[D].innerHTML.replace(/\D+/g,""),B=+V[D].innerHTML.replace(/\D+/g,""),T=M-B,C=(M-B)/(M/100);H[D].innerHTML=T>0?"".concat(T," ₽, ").concat(C.toFixed(1)," %"):"-"}new n.a(".swiper-container-banner",{slidesPerView:1,observeParents:!0,observer:!0,navigation:{nextEl:".banner__next",prevEl:".banner__prev"},autoplay:{delay:4e3}}),new n.a(".swiper-container-news-block-1",{slidesPerView:1,spaceBetween:50,observeParents:!0,observer:!0,autoHeight:!0,navigation:{nextEl:".news-block__next-1",prevEl:".news-block__prev-1"}}),new n.a(".swiper-container-news-block-2",{slidesPerView:1,spaceBetween:50,observeParents:!0,observer:!0,autoHeight:!0,navigation:{nextEl:".news-block__next-2",prevEl:".news-block__prev-2"}}),new n.a(".swiper-container-news-block-3",{slidesPerView:1,spaceBetween:50,observeParents:!0,observer:!0,autoHeight:!0,navigation:{nextEl:".news-block__next-3",prevEl:".news-block__prev-3"}}),new n.a(".swiper-container-news-block-4",{slidesPerView:1,spaceBetween:50,observeParents:!0,observer:!0,autoHeight:!0,navigation:{nextEl:".news-block__next-4",prevEl:".news-block__prev-4"}}),new n.a(".swiper-container-tags",{slidesPerView:"auto",spaceBetween:20,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next",prevEl:".tags__prev"}}),new n.a(".swiper-container-sertificate",{slidesPerView:4,spaceBetween:50,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".cert__next",prevEl:".cert__prev"},breakpoints:{0:{slidesPerView:1},575:{slidesPerView:2},991:{slidesPerView:3},1600:{slidesPerView:4}}});var N=document.querySelector(".js-rating"),Q=document.querySelector("#js-rating"),I=document.querySelectorAll(".js-rating > li");function J(e){var t=e.querySelector(".video__link"),r=e.querySelector(".video__media"),n=e.querySelector(".video__button"),a=function(e){var t=/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;return e.src.match(t)[1]}(r);e.addEventListener("click",(function(){var r=function(e){var t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",function(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}(e)),t.classList.add("video__media"),t}(a);t.remove(),n.remove(),e.appendChild(r)})),t.removeAttribute("href"),e.classList.add("video--enabled")}N&&N.addEventListener("click",(function(e){e.preventDefault();var t=e.target;if(t&&"LI"==t.tagName){I.forEach((function(e,t){e.classList.remove("active")}));for(var r=0;function(e){return I.length};r++){if(I[r]==t)return I[r].classList.add("active"),void(Q.value=++r);I[r].classList.add("active")}}})),document.querySelectorAll(".card")&&document.addEventListener("click",(function(e){e.target&&e.target.classList.contains("card__heart-img")&&(e.preventDefault(),console.log("asdfasdf"))})),function(){for(var e=document.querySelectorAll(".video"),t=0;t<e.length;t++)J(e[t])}()})),c.prototype.init=function(){var e=this,t=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r],a=n.dataset.da.trim().split(","),o={};o.element=n,o.parent=n.parentNode,o.destination=document.querySelector(a[0].trim()),o.breakpoint=a[1]?a[1].trim():"767",o.place=a[2]?a[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,r){return Array.prototype.indexOf.call(r,e)===t}));for(var i=function(r){var n=e.mediaQueries[r],a=String.prototype.split.call(n,","),o=window.matchMedia(a[0]),i=a[1],l=Array.prototype.filter.call(e.оbjects,(function(e){return e.breakpoint===i}));o.addListener((function(){t.mediaHandler(o,l)})),e.mediaHandler(o,l)},l=0;l<this.mediaQueries.length;l++)i(l)},c.prototype.mediaHandler=function(e,t){if(e.matches)for(var r=0;r<t.length;r++){var n=t[r];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(var a=0;a<t.length;a++){var o=t[a];o.element.classList.contains(this.daClassname)&&this.moveBack(o.parent,o.element,o.index)}},c.prototype.moveTo=function(e,t,r){t.classList.add(this.daClassname),"last"===e||e>=r.children.length?r.insertAdjacentElement("beforeend",t):"first"!==e?r.children[e].insertAdjacentElement("beforebegin",t):r.insertAdjacentElement("afterbegin",t)},c.prototype.moveBack=function(e,t,r){t.classList.remove(this.daClassname),void 0!==e.children[r]?e.children[r].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},c.prototype.indexInParent=function(e,t){var r=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(r,t)},c.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new c("max").init();r(317)}});