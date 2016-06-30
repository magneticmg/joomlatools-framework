
var globalCacheForjQueryReplacement = window.jQuery;
window.jQuery = window.kQuery;
/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
/*!
 * FooTable - Awesome Responsive Tables
 * Version : 2.0.3
 * http://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 11 Nov 2014
 */
(function(e,t){function a(){var e=this;e.id=null,e.busy=!1,e.start=function(t,a){e.busy||(e.stop(),e.id=setTimeout(function(){t(),e.id=null,e.busy=!1},a),e.busy=!0)},e.stop=function(){null!==e.id&&(clearTimeout(e.id),e.id=null,e.busy=!1)}}function i(i,o,n){var r=this;r.id=n,r.table=i,r.options=o,r.breakpoints=[],r.breakpointNames="",r.columns={},r.plugins=t.footable.plugins.load(r);var l=r.options,d=l.classes,s=l.events,u=l.triggers,f=0;return r.timers={resize:new a,register:function(e){return r.timers[e]=new a,r.timers[e]}},r.init=function(){var a=e(t),i=e(r.table);if(t.footable.plugins.init(r),i.hasClass(d.loaded))return r.raise(s.alreadyInitialized),undefined;r.raise(s.initializing),i.addClass(d.loading),i.find(l.columnDataSelector).each(function(){var e=r.getColumnData(this);r.columns[e.index]=e});for(var o in l.breakpoints)r.breakpoints.push({name:o,width:l.breakpoints[o]}),r.breakpointNames+=o+" ";r.breakpoints.sort(function(e,t){return e.width-t.width}),i.unbind(u.initialize).bind(u.initialize,function(){i.removeData("footable_info"),i.data("breakpoint",""),i.trigger(u.resize),i.removeClass(d.loading),i.addClass(d.loaded).addClass(d.main),r.raise(s.initialized)}).unbind(u.redraw).bind(u.redraw,function(){r.redraw()}).unbind(u.resize).bind(u.resize,function(){r.resize()}).unbind(u.expandFirstRow).bind(u.expandFirstRow,function(){i.find(l.toggleSelector).first().not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.expandAll).bind(u.expandAll,function(){i.find(l.toggleSelector).not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.collapseAll).bind(u.collapseAll,function(){i.find("."+d.detailShow).trigger(u.toggleRow)}),i.trigger(u.initialize),a.bind("resize.footable",function(){r.timers.resize.stop(),r.timers.resize.start(function(){r.raise(u.resize)},l.delay)})},r.addRowToggle=function(){if(l.addRowToggle){var t=e(r.table),a=!1;t.find("span."+d.toggle).remove();for(var i in r.columns){var o=r.columns[i];if(o.toggle){a=!0;var n="> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:nth-child("+(parseInt(o.index,10)+1)+"),"+"> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:nth-child("+(parseInt(o.index,10)+1)+")";return t.find(n).not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle)),undefined}}a||t.find("> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:first-child").add("> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:first-child").not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle))}},r.setColumnClasses=function(){var t=e(r.table);for(var a in r.columns){var i=r.columns[a];if(null!==i.className){var o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", "),o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+(parseInt(t,10)+1)+")",n=!1}),t.find(o).not("."+d.detailCell).addClass(i.className)}}},r.bindToggleSelectors=function(){var t=e(r.table);r.hasAnyBreakpointColumn()&&(t.find(l.toggleSelector).unbind(u.toggleRow).bind(u.toggleRow,function(){var t=e(this).is("tr")?e(this):e(this).parents("tr:first");r.toggleDetail(t)}),t.find(l.toggleSelector).unbind("click.footable").bind("click.footable",function(a){t.is(".breakpoint")&&e(a.target).is("td,th,."+d.toggle)&&e(this).trigger(u.toggleRow)}))},r.parse=function(e,t){var a=l.parsers[t.type]||l.parsers.alpha;return a(e)},r.getColumnData=function(t){var a=e(t),i=a.data("hide"),o=a.index();i=i||"",i=jQuery.map(i.split(","),function(e){return jQuery.trim(e)});var n={index:o,hide:{},type:a.data("type")||"alpha",name:a.data("name")||e.trim(a.text()),ignore:a.data("ignore")||!1,toggle:a.data("toggle")||!1,className:a.data("class")||null,matches:[],names:{},group:a.data("group")||null,groupName:null,isEditable:a.data("editable")};if(null!==n.group){var d=e(r.table).find('> thead > tr.footable-group-row > th[data-group="'+n.group+'"], > thead > tr.footable-group-row > td[data-group="'+n.group+'"]').first();n.groupName=r.parse(d,{type:"alpha"})}var u=parseInt(a.prev().attr("colspan")||0,10);f+=u>1?u-1:0;var p=parseInt(a.attr("colspan")||0,10),c=n.index+f;if(p>1){var b=a.data("names");b=b||"",b=b.split(",");for(var g=0;p>g;g++)n.matches.push(g+c),b.length>g&&(n.names[g+c]=b[g])}else n.matches.push(c);n.hide["default"]="all"===a.data("hide")||e.inArray("default",i)>=0;var h=!1;for(var m in l.breakpoints)n.hide[m]="all"===a.data("hide")||e.inArray(m,i)>=0,h=h||n.hide[m];n.hasBreakpoint=h;var v=r.raise(s.columnData,{column:{data:n,th:t}});return v.column.data},r.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0)},r.calculateWidth=function(e,t){return jQuery.isFunction(l.calculateWidthOverride)?l.calculateWidthOverride(e,t):(t.viewportWidth<t.width&&(t.width=t.viewportWidth),t.parentWidth<t.width&&(t.width=t.parentWidth),t)},r.hasBreakpointColumn=function(e){for(var t in r.columns)if(r.columns[t].hide[e]){if(r.columns[t].ignore)continue;return!0}return!1},r.hasAnyBreakpointColumn=function(){for(var e in r.columns)if(r.columns[e].hasBreakpoint)return!0;return!1},r.resize=function(){var t=e(r.table);if(t.is(":visible")){if(!r.hasAnyBreakpointColumn())return t.trigger(u.redraw),undefined;var a={width:t.width(),viewportWidth:r.getViewportWidth(),parentWidth:t.parent().width()};a=r.calculateWidth(t,a);var i=t.data("footable_info");if(t.data("footable_info",a),r.raise(s.resizing,{old:i,info:a}),!i||i&&i.width&&i.width!==a.width){for(var o,n=null,l=0;r.breakpoints.length>l;l++)if(o=r.breakpoints[l],o&&o.width&&a.width<=o.width){n=o;break}var d=null===n?"default":n.name,f=r.hasBreakpointColumn(d),p=t.data("breakpoint");t.data("breakpoint",d).removeClass("default breakpoint").removeClass(r.breakpointNames).addClass(d+(f?" breakpoint":"")),d!==p&&(t.trigger(u.redraw),r.raise(s.breakpoint,{breakpoint:d,info:a}))}r.raise(s.resized,{old:i,info:a})}},r.redraw=function(){r.addRowToggle(),r.bindToggleSelectors(),r.setColumnClasses();var t=e(r.table),a=t.data("breakpoint"),i=r.hasBreakpointColumn(a);t.find("> tbody > tr:not(."+d.detail+")").data("detail_created",!1).end().find("> thead > tr:last-child > th").each(function(){var i=r.columns[e(this).index()],o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", ");var a=t+1;o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > tfoot > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > colgroup > col:nth-child("+a+")",n=!1}),o+=', > thead > tr[data-group-row="true"] > th[data-group="'+i.group+'"]';var l=t.find(o).add(this);if(""!==a&&(i.hide[a]===!1?l.addClass("footable-visible").show():l.removeClass("footable-visible").hide()),1===t.find("> thead > tr.footable-group-row").length){var s=t.find('> thead > tr:last-child > th[data-group="'+i.group+'"]:visible, > thead > tr:last-child > th[data-group="'+i.group+'"]:visible'),u=t.find('> thead > tr.footable-group-row > th[data-group="'+i.group+'"], > thead > tr.footable-group-row > td[data-group="'+i.group+'"]'),f=0;e.each(s,function(){f+=parseInt(e(this).attr("colspan")||1,10)}),f>0?u.attr("colspan",f).show():u.hide()}}).end().find("> tbody > tr."+d.detailShow).each(function(){r.createOrUpdateDetailRow(this)}),t.find("[data-bind-name]").each(function(){r.toggleInput(this)}),t.find("> tbody > tr."+d.detailShow+":visible").each(function(){var t=e(this).next();t.hasClass(d.detail)&&(i?t.show():t.hide())}),t.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"),t.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"),t.find("> thead > tr, > tbody > tr").find("> th.footable-visible:last, > td.footable-visible:last").addClass("footable-last-column").end().find("> th.footable-visible:first, > td.footable-visible:first").addClass("footable-first-column"),r.raise(s.redrawn)},r.toggleDetail=function(t){var a=t.jquery?t:e(t),i=a.next();a.hasClass(d.detailShow)?(a.removeClass(d.detailShow),i.hasClass(d.detail)&&i.hide(),r.raise(s.rowCollapsed,{row:a[0]})):(r.createOrUpdateDetailRow(a[0]),a.addClass(d.detailShow).next().show(),r.raise(s.rowExpanded,{row:a[0]}))},r.removeRow=function(t){var a=t.jquery?t:e(t);a.hasClass(d.detail)&&(a=a.prev());var i=a.next();a.data("detail_created")===!0&&i.remove(),a.remove(),r.raise(s.rowRemoved)},r.appendRow=function(t){var a=t.jquery?t:e(t);e(r.table).find("tbody").append(a),r.redraw()},r.getColumnFromTdIndex=function(t){var a=null;for(var i in r.columns)if(e.inArray(t,r.columns[i].matches)>=0){a=r.columns[i];break}return a},r.createOrUpdateDetailRow=function(t){var a,i=e(t),o=i.next(),n=[];if(i.data("detail_created")===!0)return!0;if(i.is(":hidden"))return!1;if(r.raise(s.rowDetailUpdating,{row:i,detail:o}),i.find("> td:hidden").each(function(){var t=e(this).index(),a=r.getColumnFromTdIndex(t),i=a.name;if(a.ignore===!0)return!0;t in a.names&&(i=a.names[t]);var o=e(this).attr("data-bind-name");if(null!=o&&e(this).is(":empty")){var l=e("."+d.detailInnerValue+"["+'data-bind-value="'+o+'"]');e(this).html(e(l).contents().detach())}var s;return a.isEditable!==!1&&(a.isEditable||e(this).find(":input").length>0)&&(null==o&&(o="bind-"+e.now()+"-"+t,e(this).attr("data-bind-name",o)),s=e(this).contents().detach()),s||(s=e(this).contents().clone(!0,!0)),n.push({name:i,value:r.parse(this,a),display:s,group:a.group,groupName:a.groupName,bindName:o}),!0}),0===n.length)return!1;var u=i.find("> td:visible").length,f=o.hasClass(d.detail);return f||(o=e('<tr class="'+d.detail+'"><td class="'+d.detailCell+'"><div class="'+d.detailInner+'"></div></td></tr>'),i.after(o)),o.find("> td:first").attr("colspan",u),a=o.find("."+d.detailInner).empty(),l.createDetail(a,n,l.createGroupedDetail,l.detailSeparator,d),i.data("detail_created",!0),r.raise(s.rowDetailUpdated,{row:i,detail:o}),!f},r.raise=function(t,a){r.options.debug===!0&&e.isFunction(r.options.log)&&r.options.log(t,"event"),a=a||{};var i={ft:r};e.extend(!0,i,a);var o=e.Event(t,i);return o.ft||e.extend(!0,o,i),e(r.table).trigger(o),o},r.reset=function(){var t=e(r.table);t.removeData("footable_info").data("breakpoint","").removeClass(d.loading).removeClass(d.loaded),t.find(l.toggleSelector).unbind(u.toggleRow).unbind("click.footable"),t.find("> tbody > tr").removeClass(d.detailShow),t.find("> tbody > tr."+d.detail).remove(),r.raise(s.reset)},r.toggleInput=function(t){var a=e(t).attr("data-bind-name");if(null!=a){var i=e("."+d.detailInnerValue+"["+'data-bind-value="'+a+'"]');null!=i&&(e(t).is(":visible")?e(i).is(":empty")||e(t).html(e(i).contents().detach()):e(t).is(":empty")||e(i).html(e(t).contents().detach()))}},r.init(),r}t.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(t){return e(t).data("value")||e.trim(e(t).text())},numeric:function(t){var a=e(t).data("value")||e(t).text().replace(/[^0-9.\-]/g,"");return a=parseFloat(a),isNaN(a)&&(a=0),a}},addRowToggle:!0,calculateWidthOverride:null,toggleSelector:" > tbody > tr:not(.footable-row-detail)",columnDataSelector:"> thead > tr:last-child > th, > thead > tr:last-child > td",detailSeparator:":",toggleHTMLElement:"<span />",createGroupedDetail:function(e){for(var t={_none:{name:null,data:[]}},a=0;e.length>a;a++){var i=e[a].group;null!==i?(i in t||(t[i]={name:e[a].groupName||e[a].group,data:[]}),t[i].data.push(e[a])):t._none.data.push(e[a])}return t},createDetail:function(t,a,i,o,n){var r=i(a);for(var l in r)if(0!==r[l].data.length){"_none"!==l&&t.append('<div class="'+n.detailInnerGroup+'">'+r[l].name+"</div>");for(var d=0;r[l].data.length>d;d++){var s=r[l].data[d].name?o:"";t.append(e("<div></div>").addClass(n.detailInnerRow).append(e("<div></div>").addClass(n.detailInnerName).append(r[l].data[d].name+s)).append(e("<div></div>").addClass(n.detailInnerValue).attr("data-bind-value",r[l].data[d].bindName).append(r[l].data[d].display)))}}},classes:{main:"footable",loading:"footable-loading",loaded:"footable-loaded",toggle:"footable-toggle",disabled:"footable-disabled",detail:"footable-row-detail",detailCell:"footable-row-detail-cell",detailInner:"footable-row-detail-inner",detailInnerRow:"footable-row-detail-row",detailInnerGroup:"footable-row-detail-group",detailInnerName:"footable-row-detail-name",detailInnerValue:"footable-row-detail-value",detailShow:"footable-detail-show"},triggers:{initialize:"footable_initialize",resize:"footable_resize",redraw:"footable_redraw",toggleRow:"footable_toggle_row",expandFirstRow:"footable_expand_first_row",expandAll:"footable_expand_all",collapseAll:"footable_collapse_all"},events:{alreadyInitialized:"footable_already_initialized",initializing:"footable_initializing",initialized:"footable_initialized",resizing:"footable_resizing",resized:"footable_resized",redrawn:"footable_redrawn",breakpoint:"footable_breakpoint",columnData:"footable_column_data",rowDetailUpdating:"footable_row_detail_updating",rowDetailUpdated:"footable_row_detail_updated",rowCollapsed:"footable_row_collapsed",rowExpanded:"footable_row_expanded",rowRemoved:"footable_row_removed",reset:"footable_reset"},debug:!1,log:null},version:{major:0,minor:5,toString:function(){return t.footable.version.major+"."+t.footable.version.minor},parse:function(e){var t=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(e);return{major:parseInt(t[1],10)||0,minor:parseInt(t[2],10)||0,patch:parseInt(t[3],10)||0}}},plugins:{_validate:function(a){if(!e.isFunction(a))return t.footable.options.debug===!0&&console.error('Validation failed, expected type "function", received type "{0}".',typeof a),!1;var i=new a;return"string"!=typeof i.name?(t.footable.options.debug===!0&&console.error('Validation failed, plugin does not implement a string property called "name".',i),!1):e.isFunction(i.init)?(t.footable.options.debug===!0&&console.log('Validation succeeded for plugin "'+i.name+'".',i),!0):(t.footable.options.debug===!0&&console.error('Validation failed, plugin "'+i.name+'" does not implement a function called "init".',i),!1)},registered:[],register:function(a,i){t.footable.plugins._validate(a)&&(t.footable.plugins.registered.push(a),"object"==typeof i&&e.extend(!0,t.footable.options,i))},load:function(e){var a,i,o=[];for(i=0;t.footable.plugins.registered.length>i;i++)try{a=t.footable.plugins.registered[i],o.push(new a(e))}catch(n){t.footable.options.debug===!0&&console.error(n)}return o},init:function(e){for(var a=0;e.plugins.length>a;a++)try{e.plugins[a].init(e)}catch(i){t.footable.options.debug===!0&&console.error(i)}}}};var o=0;e.fn.footable=function(a){a=a||{};var n=e.extend(!0,{},t.footable.options,a);return this.each(function(){o++;var t=new i(this,n,o);e(this).data("footable",t)})}})(jQuery,window);
// @preserve jQuery.floatThead 1.4.0 - http://mkoryak.github.io/floatThead/ - Copyright (c) 2012 - 2016 Misha Koryak
// @license MIT
!function(a){function b(a,b){if(8==k){var c=p.width(),d=i.debounce(function(){var a=p.width();c!=a&&(c=a,b())},1);p.on(a,d)}else p.on(a,i.debounce(b,1))}function c(b){var c=b[0],d=c.offsetParent;if(!d){d=c.parentElement;do{var e=window.getComputedStyle(d).getPropertyValue("position");if("static"!=e)break;if(d.offsetParent){d=d.offsetParent;break}}while(d=d.parentElement)}return a(d==document.body?[]:d)}function d(a){window&&window.console&&window.console.error&&window.console.error("jQuery.floatThead: "+a)}function e(a){var b=a.getBoundingClientRect();return b.width||b.right-b.left}function f(){var b=a('<div style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');a("body").append(b);var c=b.innerWidth(),d=a("div",b).innerWidth();return b.remove(),c-d}function g(a){if(a.dataTableSettings)for(var b=0;b<a.dataTableSettings.length;b++){var c=a.dataTableSettings[b].nTable;if(a[0]==c)return!0}return!1}function h(a,b,c){var d=c?"outerWidth":"width";if(n&&a.css("max-width")){var e=0;c&&(e+=parseInt(a.css("borderLeft"),10),e+=parseInt(a.css("borderRight"),10));for(var f=0;f<b.length;f++)e+=b.get(f).offsetWidth;return e}return a[d]()}a.floatThead=a.floatThead||{},a.floatThead.defaults={headerCellSelector:"tr:visible:first>*:visible",zIndex:1001,position:"auto",top:0,bottom:0,scrollContainer:function(){return a([])},responsiveContainer:function(){return a([])},getSizingRow:function(a){return a.find("tbody tr:visible:first>*:visible")},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,enableAria:!1,autoReflow:!1,debug:!1};var i=window._,j="undefined"!=typeof MutationObserver,k=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];a=1+a,b.innerHTML="<!--[if gt IE "+a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode}(),l=/Gecko\//.test(navigator.userAgent),m=/WebKit\//.test(navigator.userAgent);k||l||m||(k=11);var n=function(){if(m){var b=a('<div style="width:0px"><table style="max-width:100%"><tr><th><div style="min-width:100px;">X</div></th></tr></table></div>');a("body").append(b);var c=0==b.find("table").width();return b.remove(),c}return!1},o=!l&&!k,p=a(window);if(!window.matchMedia){var q=window.onbeforeprint,r=window.onafterprint;window.onbeforeprint=function(){q&&q(),p.triggerHandler("beforeprint")},window.onafterprint=function(){r&&r(),p.triggerHandler("afterprint")}}a.fn.floatThead=function(l){if(l=l||{},!i&&(i=window._||a.floatThead._,!i))throw new Error("jquery.floatThead-slim.js requires underscore. You should use the non-lite version since you do not have underscore.");if(8>k)return this;var q=null;if(i.isFunction(n)&&(n=n()),i.isString(l)){var r=l,s=this;return this.filter("table").each(function(){var b=a(this),c=b.data("floatThead-lazy");c&&b.floatThead(c);var d=b.data("floatThead-attached");if(d&&i.isFunction(d[r])){var e=d[r]();"undefined"!=typeof e&&(s=e)}}),s}var t=a.extend({},a.floatThead.defaults||{},l);if(a.each(l,function(b){b in a.floatThead.defaults||!t.debug||d("Used ["+b+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+i.keys(a.floatThead.defaults).join(", "))}),t.debug){var u=a.fn.jquery.split(".");1==parseInt(u[0],10)&&parseInt(u[1],10)<=7&&d("jQuery version "+a.fn.jquery+" detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")}return this.filter(":not(."+t.floatTableClass+")").each(function(){function l(a){return a+".fth-"+G+".floatTHead"}function n(){var b=0;if(I.children("tr:visible").each(function(){b+=a(this).outerHeight(!0)}),"collapse"==H.css("border-collapse")){var c=parseInt(H.css("border-top-width"),10),d=parseInt(H.find("thead tr:first").find(">*:first").css("border-top-width"),10);c>d&&(b-=c/2)}ib.outerHeight(b),jb.outerHeight(b)}function r(){var a=h(H,mb,!0),b=T?S:Q,c=b.width()||a,d="hidden"!=b.css("overflow-y")?c-N.vertical:c;if(fb.width(d),R){var e=100*a/d;ab.css("width",e+"%")}else ab.outerWidth(a)}function s(){K=(i.isFunction(t.top)?t.top(H):t.top)||0,L=(i.isFunction(t.bottom)?t.bottom(H):t.bottom)||0}function u(){var b,c=I.find(t.headerCellSelector);if(db?b=cb.find("col").length:(b=0,c.each(function(){b+=parseInt(a(this).attr("colspan")||1,10)})),b!=P){P=b;for(var d,e=[],f=[],g=[],h=0;b>h;h++)e.push(t.enableAria&&(d=c.eq(h).text())?'<th scope="col" class="floatThead-col">'+d+"</th>":'<th class="floatThead-col"/>'),f.push("<col/>"),g.push("<fthtd style='display:table-cell;height:0;width:auto;'/>");f=f.join(""),e=e.join(""),o&&(g=g.join(""),eb.html(g),mb=eb.find("fthtd")),ib.html(e),jb=ib.find("th"),db||cb.html(f),kb=cb.find("col"),bb.html(f),lb=bb.find("col")}return b}function v(){if(!M){if(M=!0,U){var a=h(H,mb,!0),b=$.width();a>b&&H.css("minWidth",a)}H.css(pb),ab.css(pb),ab.append(I),J.before(hb),n()}}function w(){M&&(M=!1,U&&H.width(rb),hb.detach(),H.prepend(I),H.css(qb),ab.css(qb),H.css("minWidth",sb),H.css("minWidth",h(H,mb)))}function x(a){tb!=a&&(tb=a,H.triggerHandler("floatThead",[a,fb]))}function y(a){U!=a&&(U=a,fb.css({position:U?"absolute":"fixed"}))}function z(a,b,c,d){return o?c:d?t.getSizingRow(a,b,c):b}function A(){var a,b=u();return function(){kb=cb.find("col");var c=z(H,kb,mb,k);if(c.length==b&&b>0){if(!db)for(a=0;b>a;a++)kb.eq(a).css("width","");w();var d=[];for(a=0;b>a;a++)d[a]=e(c.get(a));for(a=0;b>a;a++)lb.eq(a).width(d[a]),kb.eq(a).width(d[a]);v()}else ab.append(I),H.css(qb),ab.css(qb),n();H.triggerHandler("reflowed",[fb])}}function B(a){var b=Q.css("border-"+a+"-width"),c=0;return b&&~b.indexOf("px")&&(c=parseInt(b,10)),c}function C(){return"auto"==S.css("overflow-x")}function D(){var a,b=Q.scrollTop(),c=0,d=W?V.outerHeight(!0):0,e=X?d:-d,f=fb.height(),g=H.offset(),h=0,i=0;if(R){var j=Q.offset();c=g.top-j.top+b,W&&X&&(c+=d),h=B("left"),i=B("top"),c-=i}else a=g.top-K-f+L+N.horizontal;var k=p.scrollTop(),l=p.scrollLeft(),n=(C()?S:Q).scrollLeft();return function(j){T=C();var o=H[0].offsetWidth<=0&&H[0].offsetHeight<=0;if(!o&&gb)return gb=!1,setTimeout(function(){H.triggerHandler("reflow")},1),null;if(o&&(gb=!0,!U))return null;if("windowScroll"==j)k=p.scrollTop(),l=p.scrollLeft();else if("containerScroll"==j)if(S.length){if(!T)return;n=S.scrollLeft()}else b=Q.scrollTop(),n=Q.scrollLeft();else"init"!=j&&(k=p.scrollTop(),l=p.scrollLeft(),b=Q.scrollTop(),n=(T?S:Q).scrollLeft());if(!m||!(0>k||0>l)){if(_)y("windowScrollDone"==j?!0:!1);else if("windowScrollDone"==j)return null;g=H.offset(),W&&X&&(g.top+=d);var q,r,s=H.outerHeight();if(R&&U){if(c>=b){var t=c-b+i;q=t>0?t:0,x(!1)}else q=Z?i:b,x(!0);r=h}else!R&&U?(k>a+s+e?q=s-f+e:g.top>=k+K?(q=0,w(),x(!1)):(q=K+k-g.top+c+(X?d:0),v(),x(!0)),r=n):R&&!U?(c>b||b-c>s?(q=g.top-k,w(),x(!1)):(q=g.top+b-k-c,v(),x(!0)),r=g.left+n-l):R||U||(k>a+s+e?q=s+K-k+a+e:g.top>k+K?(q=g.top-k,v(),x(!1)):(q=K,x(!0)),r=g.left+n-l);return{top:q,left:r}}}}function E(){var a=null,b=null,c=null;return function(d,e,f){null==d||a==d.top&&b==d.left||(fb.css({top:d.top,left:d.left}),a=d.top,b=d.left),e&&r(),f&&n();var g=(T?S:Q).scrollLeft();U&&c==g||(fb.scrollLeft(g),c=g)}}function F(){if(Q.length)if(Q.data().perfectScrollbar)N={horizontal:0,vertical:0};else{var a=Q.width(),b=Q.height(),c=H.height(),d=h(H,mb),e=d>a?O:0,f=c>b?O:0;N.horizontal=d>a-f?O:0,N.vertical=c>b-e?O:0}}var G=i.uniqueId(),H=a(this);if(H.data("floatThead-attached"))return!0;if(!H.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');j=t.autoReflow&&j;var I=H.children("thead:first"),J=H.children("tbody:first");if(0==I.length||0==J.length)return H.data("floatThead-lazy",t),void H.unbind("reflow").one("reflow",function(){H.floatThead(t)});H.data("floatThead-lazy")&&H.unbind("reflow"),H.data("floatThead-lazy",!1);var K,L,M=!0,N={vertical:0,horizontal:0},O=f(),P=0;t.scrollContainer===!0&&(t.scrollContainer=c);var Q=t.scrollContainer(H)||a([]),R=Q.length>0,S=R?a([]):t.responsiveContainer(H)||a([]),T=C(),U=null;"undefined"!=typeof t.useAbsolutePositioning&&(t.position="auto",t.useAbsolutePositioning&&(t.position=t.useAbsolutePositioning?"absolute":"fixed"),d("option 'useAbsolutePositioning' has been removed in v1.3.0, use `position:'"+t.position+"'` instead. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"undefined"!=typeof t.scrollingTop&&(t.top=t.scrollingTop,d("option 'scrollingTop' has been renamed to 'top' in v1.3.0. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"undefined"!=typeof t.scrollingBottom&&(t.bottom=t.scrollingBottom,d("option 'scrollingBottom' has been renamed to 'bottom' in v1.3.0. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"auto"==t.position?U=null:"fixed"==t.position?U=!1:"absolute"==t.position?U=!0:t.debug&&d('Invalid value given to "position" option, valid is "fixed", "absolute" and "auto". You passed: ',t.position),null==U&&(U=R);var V=H.find("caption"),W=1==V.length;if(W)var X="top"===(V.css("caption-side")||V.attr("align")||"top");var Y=a('<fthfoot style="display:table-footer-group;border-spacing:0;height:0;border-collapse:collapse;visibility:hidden"/>'),Z=!1,$=a([]),_=9>=k&&!R&&U,ab=a("<table/>"),bb=a("<colgroup/>"),cb=H.children("colgroup:first"),db=!0;0==cb.length&&(cb=a("<colgroup/>"),db=!1);var eb=a('<fthtr style="display:table-row;border-spacing:0;height:0;border-collapse:collapse"/>'),fb=a('<div style="overflow: hidden;" aria-hidden="true"></div>'),gb=!1,hb=a("<thead/>"),ib=a('<tr class="size-row"/>'),jb=a([]),kb=a([]),lb=a([]),mb=a([]);hb.append(ib),H.prepend(cb),o&&(Y.append(eb),H.append(Y)),ab.append(bb),fb.append(ab),t.copyTableClass&&ab.attr("class",H.attr("class")),ab.attr({cellpadding:H.attr("cellpadding"),cellspacing:H.attr("cellspacing"),border:H.attr("border")});var nb=H.css("display");if(ab.css({borderCollapse:H.css("borderCollapse"),border:H.css("border"),display:nb}),"none"==nb&&(gb=!0),ab.addClass(t.floatTableClass).css({margin:0,"border-bottom-width":0}),U){var ob=function(a,b){var c=a.css("position"),d="relative"==c||"absolute"==c,e=a;if(!d||b){var f={paddingLeft:a.css("paddingLeft"),paddingRight:a.css("paddingRight")};fb.css(f),e=a.data("floatThead-containerWrap")||a.wrap("<div class='"+t.floatWrapperClass+"' style='position: relative; clear:both;'></div>").parent(),a.data("floatThead-containerWrap",e),Z=!0}return e};R?($=ob(Q,!0),$.prepend(fb)):($=ob(H),H.before(fb))}else H.before(fb);fb.css({position:U?"absolute":"fixed",marginTop:0,top:U?0:"auto",zIndex:t.zIndex}),fb.addClass(t.floatContainerClass),s();var pb={"table-layout":"fixed"},qb={"table-layout":H.css("tableLayout")||"auto"},rb=H[0].style.width||"",sb=H.css("minWidth")||"",tb=!1;F();var ub,vb=function(){(ub=A())()};vb();var wb=D(),xb=E();xb(wb("init"),!0);var yb=i.debounce(function(){xb(wb("windowScrollDone"),!1)},1),zb=function(){xb(wb("windowScroll"),!1),_&&yb()},Ab=function(){xb(wb("containerScroll"),!1)},Bb=function(){H.is(":hidden")||(s(),F(),vb(),wb=D(),(xb=E())(wb("resize"),!0,!0))},Cb=i.debounce(function(){H.is(":hidden")||(F(),s(),vb(),wb=D(),xb(wb("reflow"),!0))},1),Db=function(){H.floatThead("destroy",[!0])},Eb=function(){H.floatThead(t)},Fb=function(a){a.matches?Db():Eb()};if(window.matchMedia?window.matchMedia("print").addListener(Fb):(p.on("beforeprint",Db),p.on("afterprint",Eb)),R?U?Q.on(l("scroll"),Ab):(Q.on(l("scroll"),Ab),p.on(l("scroll"),zb)):(S.on(l("scroll"),Ab),p.on(l("scroll"),zb)),p.on(l("load"),Cb),b(l("resize"),Bb),H.on("reflow",Cb),g(H)&&H.on("filter",Cb).on("sort",Cb).on("page",Cb),p.on(l("shown.bs.tab"),Cb),p.on(l("tabsactivate"),Cb),j){var Gb=null;i.isFunction(t.autoReflow)&&(Gb=t.autoReflow(H,Q)),Gb||(Gb=Q.length?Q[0]:H[0]),q=new MutationObserver(function(a){for(var b=function(a){return a&&a[0]&&("THEAD"==a[0].nodeName||"TD"==a[0].nodeName||"TH"==a[0].nodeName)},c=0;c<a.length;c++)if(!b(a[c].addedNodes)&&!b(a[c].removedNodes)){Cb();break}}),q.observe(Gb,{childList:!0,subtree:!0})}H.data("floatThead-attached",{destroy:function(a,b){var c=".fth-"+G;w(),H.css(qb),cb.remove(),o&&Y.remove(),hb.parent().length&&hb.replaceWith(I),x(!1),j&&(q.disconnect(),q=null),H.off("reflow reflowed"),Q.off(c),S.off(c),Z&&(Q.length?Q.unwrap():H.unwrap()),R?Q.data("floatThead-containerWrap",!1):H.data("floatThead-containerWrap",!1),H.css("minWidth",sb),fb.remove(),H.data("floatThead-attached",!1),p.off(c),b||(window.matchMedia&&window.matchMedia("print").removeListener(Fb),Db=Eb=function(){})},reflow:function(){Cb()},setHeaderHeight:function(){n()},getFloatContainer:function(){return fb},getRowGroups:function(){return M?fb.find(">table>thead").add(H.children("tbody,tfoot")):H.children("thead,tbody,tfoot")}})}),this}}(jQuery),function(a){a.floatThead=a.floatThead||{},a.floatThead._=window._||function(){var b={},c=Object.prototype.hasOwnProperty,d=["Arguments","Function","String","Number","Date","RegExp"];b.has=function(a,b){return c.call(a,b)},b.keys=function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c};var e=0;return b.uniqueId=function(a){var b=++e+"";return a?a+b:b},a.each(d,function(){var a=this;b["is"+a]=function(b){return Object.prototype.toString.call(b)=="[object "+a+"]"}}),b.debounce=function(a,b,c){var d,e,f,g,h;return function(){f=this,e=arguments,g=new Date;var i=function(){var j=new Date-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e)))},j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e)),h}},b}()}(jQuery);
(function($) {
    // Overflowing checker
    $.overflowing = function (element, options) {

        var defaults = {
                wrapInner: true,
                offset: 10
            },
            plugin = this;

        plugin.settings = {};

        var $element = $(element);

        plugin.init = function () {

            plugin.settings = $.extend({}, defaults, options);

            // Wrap content in a div
            if (!$element.find('.overflowing').length) {
                $element.wrap('<div class="overflowing">');
                if ($element.css('flex')) {
                    $('.overflowing').addClass('overflowing--flex');
                }
            }

            // Add overflowing shadow divs
            $element.after('<div class="overflowing--top js-is-hidden">');
            $element.after('<div class="overflowing--right js-is-hidden">');
            $element.after('<div class="overflowing--bottom js-is-hidden">');
            $element.after('<div class="overflowing--left js-is-hidden">');

            // Overflowing?
            function overflowing() {

                if (element.clientWidth != element.scrollWidth || element.clientHeight != element.scrollHeight) {

                    // Show top overflowing div
                    if (element.scrollTop >= plugin.settings.offset && element.scrollTop >= plugin.settings.offset) {
                        $('.overflowing--top').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--top').addClass('js-is-hidden');
                    }

                    // Show right overflowing div
                    if (element.scrollLeft <= (element.scrollWidth - element.clientWidth) - plugin.settings.offset) {
                        $('.overflowing--right').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--right').addClass('js-is-hidden');
                    }

                    // Show bottom overflowing div
                    if (element.scrollTop < ((element.scrollHeight - element.clientHeight) - plugin.settings.offset)) {
                        $('.overflowing--bottom').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--bottom').addClass('js-is-hidden');
                    }

                    // Show left overflowing div
                    if (element.scrollLeft >= plugin.settings.offset) {
                        $('.overflowing--left').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--left').addClass('js-is-hidden');
                    }
                }

                if (element.clientWidth == element.scrollWidth) {
                    $('.overflowing--left').addClass('js-is-hidden');
                    $('.overflowing--right').addClass('js-is-hidden');
                }

                if (element.clientHeight == element.scrollHeight) {
                    $('.overflowing--top').addClass('js-is-hidden');
                    $('.overflowing--bottom').addClass('js-is-hidden');
                }
            }

            $(window).on('load resize', overflowing);

            // Detect on scrolling
            $element.scroll(function () {
                overflowing();
            });

        };

        plugin.init();
    };

    // add the plugin to the jQuery.fn object
    $.fn.overflowing = function (options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('responsiveMenu')) {
                // create a new instance of the plugin
                var plugin = new $.overflowing(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('overflowing', plugin);
            }
        });
    };
})(jQuery);
/*!
 * jQuery.tabbable 1.0 - Simple utility for selecting the next / previous ':tabbable' element.
 * https://github.com/marklagendijk/jQuery.tabbable
 *
 * Includes ':tabbable' and ':focusable' selectors from jQuery UI Core
 *
 * Copyright 2013, Mark Lagendijk
 * Released under the MIT license
 *
 */
(function($){
    'use strict';

    /**
     * Focusses the next :focusable element. Elements with tabindex=-1 are focusable, but not tabable.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.focusNext = function(){
        selectNextTabbableOrFocusable(':focusable');
    };

    /**
     * Focusses the previous :focusable element. Elements with tabindex=-1 are focusable, but not tabable.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.focusPrev = function(){
        selectPrevTabbableOrFocusable(':focusable');
    };

    /**
     * Focusses the next :tabable element.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.tabNext = function(){
        selectNextTabbableOrFocusable(':tabbable');
    };

    /**
     * Focusses the previous :tabbable element
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.tabPrev = function(){
        selectPrevTabbableOrFocusable(':tabbable');
    };

    function selectNextTabbableOrFocusable(selector){
        var selectables = $(selector);
        var current = $(':focus');
        var nextIndex = 0;
        if(current.length === 1){
            var currentIndex = selectables.index(current);
            if(currentIndex + 1 < selectables.length){
                nextIndex = currentIndex + 1;
            }
        }

        selectables.eq(nextIndex).focus();
    }

    function selectPrevTabbableOrFocusable(selector){
        var selectables = $(selector);
        var current = $(':focus');
        var prevIndex = selectables.length - 1;
        if(current.length === 1){
            var currentIndex = selectables.index(current);
            if(currentIndex > 0){
                prevIndex = currentIndex - 1;
            }
        }

        selectables.eq(prevIndex).focus();
    }

    /**
     * :focusable and :tabbable, both taken from jQuery UI Core
     */
    $.extend($.expr[ ':' ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function(dataName){
                return function(elem){
                    return !!$.data(elem, dataName);
                };
            }) :
            // support: jQuery <1.8
            function(elem, i, match){
                return !!$.data(elem, match[ 3 ]);
            },

        focusable: function(element){
            return focusable(element);
        },

        tabbable: function(element){
            var tabIndex = $.attr(element, 'tabindex'),
                isTabIndexNaN = isNaN(tabIndex);
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable(element);
        }
    });

    /**
     * focussable function, taken from jQuery UI Core
     * @param element
     * @returns {*}
     */
    function focusable(element){
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase(),
            isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex'));
        if('area' === nodeName){
            map = element.parentNode;
            mapName = map.name;
            if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map'){
                return false;
            }
            img = $('img[usemap=#' + mapName + ']')[0];
            return !!img && visible(img);
        }
        return ( /input|select|textarea|button|object/.test(nodeName) ?
                !element.disabled :
                'a' === nodeName ?
                element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
            visible(element);

        function visible(element){
            return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function(){
                    return $.css(this, 'visibility') === 'hidden';
                }).length;
        }
    }
})(jQuery);
/* @preserve
 * Off canvas menu
 * Copyright 2015 Robin Poort
 * http://www.robinpoort.com
 */

"use strict";

(function($) {

    $.offCanvasMenu = function(element, options) {

        var defaults = {
                menu: $(element),
                position: 'left',
                menuExpandedClass: 'show-left-menu',
                openedClass: 'opened',
                noTransitionClass: 'no-transition',
                wrapper: $(element).parent(),
                container: $('.container'),
                menuToggle: [],
                expandedWidth: $(element).outerWidth(),
                offCanvasOverlay: 'k-off-canvas-overlay',
                ariaControls: null
            },
            plugin = this;


        plugin.settings = {};

        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            var menu = plugin.settings.menu,
                position = plugin.settings.position,
                menuExpandedClass = plugin.settings.menuExpandedClass,
                openedClass = plugin.settings.openedClass,
                noTransitionClass = plugin.settings.noTransitionClass,
                wrapper = plugin.settings.wrapper,
                container = plugin.settings.container,
                menuToggle = plugin.settings.menuToggle,
                ariaControls = plugin.settings.ariaControls,
                expandedWidth = menu.outerWidth(),
                offCanvasOverlay = $('.' + plugin.settings.offCanvasOverlay),
                transitionDuration = Math.round(parseFloat(container.css('transition-duration')) * 1000),
                timeout;

            // Set proper menuExpandedClass if not set manually
            if ( position === 'right' && !options.menuExpandedClass ) {
                menuExpandedClass = 'show-right-menu';
            }

            // Set proper menuExpandedClass if not set manually
            if ( wrapper.is('body') ) {
                wrapper = $('html, body');
            }

            // Create overlay wrapper
            if ( !offCanvasOverlay.length ) {
                container.append('<div class="' + plugin.settings.offCanvasOverlay + '">');
            }

            function tabToggle(menu) {
                // When tabbing on toggle button
                menuToggle.bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        e.preventDefault();
                        if ( e.shiftKey ) {
                            menu.find(':tabbable').last().focus();
                        } else {
                            menu.find(':tabbable').first().focus();
                        }
                    }
                });

                // When tabbing on first tabbable menu item
                menu.find(':tabbable').first().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });

                // When tabbing on last tabbable menu item
                menu.find(':tabbable').last().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( !e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });
            }

            function openMenu(menu) {
                // Clear the timeout when user clicks open menu
                clearTimeout(timeout);

                // Set to expanded for accessibility
                menuToggle.attr({'aria-expanded': 'true'});

                // Add classes and CSS to the wrapper
                // All styling in CSS comes from this parent element
                wrapper.addClass(menuExpandedClass + ' ' + openedClass + '--' + position);

                // Enable tabbing within menu
                timeout = setTimeout(function() {
                    tabToggle(menu);
                }, transitionDuration);
            }

            function closeMenu() {
                // Clear the timeout when user clicks close menu
                clearTimeout(timeout);

                // Set to collapsed for accessibility
                menuToggle.attr({'aria-expanded': 'false'});

                // Remove the expanded class to activate the transition
                wrapper.removeClass(menuExpandedClass);

                // Remove style and class when transition has ended, so the menu stays visible on closing
                timeout = setTimeout(function() {
                    wrapper.removeClass(openedClass + '--' + position);
                }, transitionDuration);
            }

            function toggleMenu(menu) {
                var method = !wrapper.hasClass(menuExpandedClass) ? 'closed' : 'opened';
                if ( method === 'closed' ) { openMenu(menu); }
                if ( method === 'opened' ) { closeMenu(); }
            }

            // If we have a toggle button available
            if(menuToggle.length){

                // Set ARIA attributes
                menuToggle.attr({
                    'role': 'button',
                    'aria-controls': ariaControls,
                    'aria-expanded': 'false'
                });

                // Toggle button:
                menuToggle.click(function(event){
                    event.stopPropagation();
                    toggleMenu(menu);
                });

                // Close menu by clicking anywhere
                wrapper.click(function(event){
                    if ( wrapper.hasClass(menuExpandedClass) ) {
                        event.stopPropagation();
                        closeMenu();
                    }
                });

                // Don't close the menu when clicked on sidemenu
                menu.click(function(event){
                    event.stopPropagation();
                });

                // Close menu if esc keydown and menu is open and set focus to toggle button
                $(document).bind('keydown', function(event) {
                    if (event.keyCode === 27 && wrapper.hasClass(menuExpandedClass)) {
                        event.stopPropagation();
                        closeMenu();
                        menuToggle.focus();
                    }
                });
            }


            // Touch actions
            if ('ontouchstart' in document.documentElement) {
                wrapper.on('touchstart', onTouchStart);
                wrapper.on('touchmove', onTouchMove);
                wrapper.on('touchend', onTouchEnd);
            }

            // vars
            var started = null,
                start = {},
                deltaX,
                pageX,
                overlayOpacity,
                isScrolling = false;

            // Functions
            function currentPosition() {
                return position == 'left' ? menu.offset().left + expandedWidth
                    : menu.offset().left;
            }

            function inBounds(newPos) {
                return (position == 'left' && newPos >= -25 && newPos <= expandedWidth) ||
                    (position == 'right' && newPos >= -(expandedWidth) && newPos <= 25);
            }

            function onTouchStart(e) {

                if(!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                // Set started to true (used by touchend)
                started = true;

                // Get original starting point
                pageX = e.originalEvent.touches[0].pageX;

                // Setting the start object for 'move' and 'end'
                start = {
                    startingX: currentPosition(),
                    // get touch coordinates for delta calculations in onTouchMove
                    pageX: pageX,
                    pageY: e.originalEvent.touches[0].pageY
                };

                // reset deltaX
                deltaX = wrapper.position().left;

                // used for testing first onTouchMove event
                isScrolling = undefined;

                // Get the opacity of the overlay
                overlayOpacity = offCanvasOverlay.css('opacity');

                // Add class to remove transition for 1-to-1 touch movement
                container.addClass(noTransitionClass);
                offCanvasOverlay.addClass(noTransitionClass);

                e.stopPropagation();

            }

            function onTouchMove(e) {

                if(!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                deltaX = e.originalEvent.touches[0].pageX - start.pageX;

                // determine if scrolling test has run - one time test
                if (typeof isScrolling == 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(deltaX) < Math.abs(e.originalEvent.touches[0].pageY - start.pageY));
                }

                // if user is not trying to scroll vertically
                if (!isScrolling) {

                    // prevent native scrolling
                    e.preventDefault();

                    var newPos = position == 'left' ? start.startingX + deltaX
                        : deltaX - ($(window).width() - start.startingX);

                    var opacity = (overlayOpacity / expandedWidth) * Math.abs(newPos);

                    if(!inBounds(newPos))
                        return;

                    // translate immediately 1-to-1
                    container.css({
                        '-webkit-transform' : 'translate(' + newPos + 'px, 0)',
                        '-moz-transform'    : 'translate(' + newPos + 'px, 0)',
                        '-ms-transform'     : 'translate(' + newPos + 'px, 0)',
                        '-o-transform'      : 'translate(' + newPos + 'px, 0)',
                        'transform'         : 'translate(' + newPos + 'px, 0)'
                    });
                    offCanvasOverlay.css('opacity', opacity);

                    e.stopPropagation();
                }


            }

            function onTouchEnd(e){

                // Escape if invalid start:
                if(!started)
                    return;

                // Escape if Menu is closed
                if(!wrapper.hasClass(menuExpandedClass))
                    return;

                var newPos = position == 'left' ? start.startingX + deltaX
                    : deltaX - ($(window).width() - start.startingX);

                // Converting to positive number
                var absNewPos = Math.abs(newPos);

                // if not scrolling vertically
                if (!isScrolling) {

                    container.removeAttr('style').removeClass(noTransitionClass);
                    offCanvasOverlay.removeAttr('style').removeClass(noTransitionClass);

                    if ( ( position == 'left' && ( absNewPos <= (expandedWidth * 0.66) || newPos <= 0 ) ) ||
                        ( position == 'right' && ( absNewPos <= (expandedWidth * 0.66) || newPos >= 0 ) ) ) {
                        closeMenu();
                    } else {
                        openMenu(menu);
                    }
                }

                // Reset start object and starting variable:
                started = null;
                start = {};

                e.stopPropagation();
            }

        };

        plugin.init();

    };


    // add the plugin to the jQuery.fn object
    $.fn.offCanvasMenu = function(options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('offCanvasMenu')) {
                // create a new instance of the plugin
                var plugin = new $.offCanvasMenu(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('offCanvasMenu', plugin);
            }
        });
    }

})(jQuery);
(function($) {

    $(document).ready(function () {

        // Variables
        var $wrapper = $('.k-wrapper'),
            $titlebar = $('.k-titlebar'),
            $toolbar = $('.k-toolbar'),
            $content = $('.k-content'),
            $fixedtable = $('.table--fixed'),
            $clickable = $('a, button'),
            $searchtoggle = $('.js-toggle-search'),
            $filtertoggle = $('.js-toggle-filters'),
            $footable = $('.footable'),
            $overflow = $('.k-sidebar__item--overflow'),
            resizeClass = 'k-is-resizing';

        // Sidebar
        if ( ($toolbar.length || $titlebar.length) && $wrapper.length && $content.length)
        {
            var toggle_button = '<div class="off-canvas-menu-toggle-holder"><button class="off-canvas-menu-toggle" type="button">' +
                '<span class="bar1"></span>' +
                '<span class="bar2"></span>' +
                '<span class="bar3"></span>' +
                '</button></div>',
                sidebar_left  = $('#k-sidebar'),
                sidebar_right = $('#k-sidebar-right');

            if (sidebar_left.length) {
                var left_toggle = $(toggle_button);
                left_toggle.addClass('off-canvas-menu-toggle-holder--right');

                if ($titlebar.length) {
                    $titlebar.prepend(left_toggle);
                } else if ($toolbar.length) {
                    $toolbar.prepend(left_toggle);
                }

                sidebar_left.offCanvasMenu({
                    menuToggle: left_toggle,
                    wrapper: $wrapper,
                    container: $content
                });
            }

            if (sidebar_right.length) {
                var right_toggle = $(toggle_button);
                right_toggle.addClass('off-canvas-menu-toggle-holder--right');

                if ($titlebar.length) {
                    $titlebar.append(right_toggle);
                } else if ($toolbar.length) {
                    $toolbar.append(right_toggle);
                }

                sidebar_right.offCanvasMenu({
                    menuToggle: right_toggle,
                    wrapper: $wrapper,
                    container: $content,
                    position: 'right'
                });
            }
        }

        // Overflowing items
        if ( $overflow.length ) {
            $overflow.overflowing();
        }

        // Footable
        if ( $footable.length ) {
            $footable.on('click', '.footable-toggle', function(event){
                event.stopPropagation();
            }).footable({
                toggleSelector: '.footable-toggle',
                breakpoints: {
                    phone: 400,
                    tablet: 600,
                    desktop: 800
                }
            }).bind('footable_resizing', function() {
                $fixedtable.floatThead('destroy');
            }).bind('footable_resized', function() {
                fixedTable();
                $fixedtable.floatThead('reflow');
            });
        }

        // Sticky table header and footer
        function fixedTable() {
            if ( $fixedtable.length ) {
                $fixedtable.floatThead({
                    scrollContainer: function($table){
                        return $table.closest('.k-table');
                    },
                    enableAria: true
                });
            }
        }

        fixedTable();

        // Clickable items
        if ( $clickable.length ) {
            $clickable.click(function() {
                $(this).toggleClass('k-opened');
            });
        }

        // Toggle search
        $searchtoggle.click(function() {
            $('.k-scopebar__item--search').slideToggle('fast');
        });

        // Filter search
        $filtertoggle.click(function() {
            $('.k-scopebar__filters').toggle('fast');
        });

        // Add a class during resizing event so we can hide overflowing stuff
        var resizeTimer;

        $(window).on('resize', function(e) {

            // Add the class
            $('body').addClass(resizeClass);

            // Remove the class when resize is done
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                $('body').removeClass(resizeClass);
                $fixedtable.floatThead('reflow');
            }, 250);

        });

    });

})(jQuery);



window.jQuery = globalCacheForjQueryReplacement;
globalCacheForjQueryReplacement = undefined;