(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8U9E":function(t,e,n){
/*! dom-to-image-more 06-12-2021 */
!function(e){"use strict";var n={escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:r,mimeType:function(t){return t=r(t).toLowerCase(),function(){var t="application/font-woff",e="image/jpeg";return{woff:t,woff2:t,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:e,jpeg:e,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[t]||""},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise((function(e){t.toBlob(e)})):function(t){return new Promise((function(e){for(var n=v(t.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);e(new Blob([o],{type:"image/png"}))}))}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=e,o.href=t,o.href},getAndEncode:function(t){return m.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),new Promise((function(e){var n,r,o=m.impl.options.httpTimeout,i=new XMLHttpRequest;function a(t){console.error(t),e("")}i.onreadystatechange=function(){var r;4===i.readyState&&(200===i.status?((r=new FileReader).onloadend=function(){var t=r.result.split(/,/)[1];e(t)},r.readAsDataURL(i.response)):n?e(n):a("cannot fetch resource: "+t+", status: "+i.status))},i.ontimeout=function(){n?e(n):a("timeout of "+o+"ms occured while fetching resource: "+t)},i.responseType="blob",i.timeout=o,m.impl.options.useCredentials&&(i.withCredentials=!0),i.open("GET",t,!0),i.send(),!m.impl.options.imagePlaceholder||(r=m.impl.options.imagePlaceholder.split(/,/))&&r[1]&&(n=r[1])}))},uid:function(){var t=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}}(),delay:function(t){return function(e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}},asArray:function(t){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e},escapeXhtml:function(t){return t.replace(/%/g,"%25").replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return"data:,"===t?Promise.resolve():new Promise((function(e,n){var r=new Image;m.impl.options.useCredentials&&(r.crossOrigin="use-credentials"),r.onload=function(){e(r)},r.onerror=n,r.src=t}))},width:function(t){var e=o(t,"border-left-width"),n=o(t,"border-right-width");return t.scrollWidth+e+n},height:function(t){var e=o(t,"border-top-width"),n=o(t,"border-bottom-width");return t.scrollHeight+e+n}};function r(t){return(t=/\.([^\.\/]*?)(\?|$)/g.exec(t))?t[1]:""}function o(t,e){return e=g(t).getPropertyValue(e),parseFloat(e.replace("px",""))}var i,a={inlineAll:function(t,e,n){return s(t)?Promise.resolve(t).then(l).then((function(r){var o=Promise.resolve(t);return r.forEach((function(t){o=o.then((function(r){return u(r,t,e,n)}))})),o})):Promise.resolve(t)},shouldProcess:s,impl:{readUrls:l,inline:u}};function s(t){return-1!==t.search(i)}function l(t){for(var e,r=[];null!==(e=i.exec(t));)r.push(e[1]);return r.filter((function(t){return!n.isDataUrl(t)}))}function u(t,e,r,o){return Promise.resolve(e).then((function(t){return r?n.resolveUrl(t,r):t})).then(o||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e))})).then((function(r){return t.replace(new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g"),"$1"+r+"$3")}))}var c={resolveAll:function(){return f().then((function(t){return Promise.all(t.map((function(t){return t.resolve()})))})).then((function(t){return t.join("\n")}))},impl:{readAll:f}};function f(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(t){var e=[];return t.forEach((function(t){if(Object.getPrototypeOf(t).hasOwnProperty("cssRules"))try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}})),e})).then((function(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return a.shouldProcess(t.style.getPropertyValue("src"))}))})).then((function(e){return e.map(t)}));function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return a.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}var h={inlineAll:function t(e){return e instanceof Element?function(t){var e=t.style.getPropertyValue("background");return e?a.inlineAll(e).then((function(n){t.style.setProperty("background",n,e)})).then((function(){return t})):Promise.resolve(t)}(e).then((function(){return e instanceof HTMLImageElement?p(e).inline():Promise.all(n.asArray(e.childNodes).map((function(e){return t(e)})))})):Promise.resolve(e)},impl:{newImage:p}};function p(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t.src))})).then((function(e){return new Promise((function(n){t.onload=n,t.onerror=n,t.src=e}))}))}}}var d={imagePlaceholder:void 0,cacheBust:!(i=/url\(['"]?([^'"]+?)['"]?\)/g),useCredentials:!1,httpTimeout:3e4},m={toSvg:y,toPng:function(t,e){return(e=e||{}).raster=!0,w(t,e).then((function(t){return t.toDataURL()}))},toJpeg:function(t,e){return(e=e||{}).raster=!0,w(t,e).then((function(t){return t.toDataURL("image/jpeg",e.quality||1)}))},toBlob:function(t,e){return(e=e||{}).raster=!0,w(t,e).then(n.canvasToBlob)},toPixelData:function(t,e){return(e=e||{}).raster=!0,w(t,e).then((function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data}))},toCanvas:function(t,e){return w(t,e||{})},impl:{fontFaces:c,images:h,util:n,inliner:a,options:{}}};t.exports=m;const g=e.getComputedStyle||window.getComputedStyle,v=e.atob||window.atob;function y(t,e){return function(t){void 0===t.imagePlaceholder?m.impl.options.imagePlaceholder=d.imagePlaceholder:m.impl.options.imagePlaceholder=t.imagePlaceholder,void 0===t.cacheBust?m.impl.options.cacheBust=d.cacheBust:m.impl.options.cacheBust=t.cacheBust,void 0===t.useCredentials?m.impl.options.useCredentials=d.useCredentials:m.impl.options.useCredentials=t.useCredentials}(e=e||{}),Promise.resolve(t).then((function(t){return function t(e,r,o,i){return o||!r||r(e)?Promise.resolve(e).then((function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):"IFRAME"===t.nodeName?html2canvas(t.contentDocument.body).then(t=>t.toDataURL()).then(n.makeImage):t.cloneNode(!1)})).then((function(o){return function(e,o){return 0===(e=e.childNodes).length?Promise.resolve(o):function(e,n){var o=Promise.resolve();return n.forEach((function(n){o=o.then((function(){return t(n,r,!1,i)})).then((function(t){t&&e.appendChild(t)}))})),o}(o,n.asArray(e)).then((function(){return o}))}(e,o)})).then((function(t){return function(t,e,r){return e instanceof Element?Promise.resolve().then((function(){!function(t,e){t.cssText?(e.cssText=t.cssText,function(t,e){e.font=t.font,e.fontFamily=t.fontFamily,e.fontFeatureSettings=t.fontFeatureSettings,e.fontKerning=t.fontKerning,e.fontSize=t.fontSize,e.fontStretch=t.fontStretch,e.fontStyle=t.fontStyle,e.fontVariant=t.fontVariant,e.fontVariantCaps=t.fontVariantCaps,e.fontVariantEastAsian=t.fontVariantEastAsian,e.fontVariantLigatures=t.fontVariantLigatures,e.fontVariantNumeric=t.fontVariantNumeric,e.fontVariationSettings=t.fontVariationSettings,e.fontWeight=t.fontWeight}(t,e)):function(t,r){n.asArray(t).forEach((function(e){r.setProperty(e,t.getPropertyValue(e),t.getPropertyPriority(e))})),o&&(["inset-block","inset-block-start","inset-block-end"].forEach(t=>e.removeProperty(t)),["left","right","top","bottom"].forEach(t=>{e.getPropertyValue(t)&&e.setProperty(t,"0px")}))}(t,e)}(r?function(t,e){var n,r=document.createElement(t.tagName).style,o=g(t),i=t.style;for(n of o){var a=o.getPropertyValue(n),s=i.getPropertyValue(n);i.setProperty(n,e?"initial":"unset"),o.getPropertyValue(n)!==a?r.setProperty(n,a):r.removeProperty(n),i.setProperty(n,s)}return r}(t,o):g(t),e.style)})).then((function(){[":before",":after"].forEach((function(r){!function(r){var o,i=g(t,r),a=i.getPropertyValue("content");""!==a&&"none"!==a&&(o=n.uid(),(a=e.getAttribute("class"))&&e.setAttribute("class",a+" "+o),(a=document.createElement("style")).appendChild(function(){var t="."+o+":"+r,e=(i.cssText?function(){return i.cssText+" content: "+i.getPropertyValue("content")+";"}:function(){return n.asArray(i).map((function(t){return t+": "+i.getPropertyValue(t)+(i.getPropertyPriority(t)?" !important":"")})).join("; ")+";"})();return document.createTextNode(t+"{"+e+"}")}()),e.appendChild(a))}(r)}))})).then((function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)})).then((function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach((function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})))})).then((function(){return e})):e}(e,t,i)})):Promise.resolve()}(t,e.filter,!0,!e.raster)})).then(b).then(x).then((function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor),e.width&&(t.style.width=e.width+"px"),e.height&&(t.style.height=e.height+"px"),e.style&&Object.keys(e.style).forEach((function(n){t.style[n]=e.style[n]}));var n=null;return"function"==typeof e.onclone&&(n=e.onclone(t)),Promise.resolve(n).then((function(){return t}))})).then((function(r){return r=r,o=e.width||n.width(t),i=e.height||n.height(t),Promise.resolve(r).then((function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)})).then(n.escapeXhtml).then((function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"})).then((function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+o+'" height="'+i+'">'+t+"</svg>"})).then((function(t){return"data:image/svg+xml;charset=utf-8,"+t}));var o,i}))}function w(t,e){return y(t,e).then(n.makeImage).then(n.delay(0)).then((function(r){var o="number"!=typeof e.scale?1:e.scale,i=function(t,r){var o=document.createElement("canvas");return o.width=(e.width||n.width(t))*r,o.height=(e.height||n.height(t))*r,e.bgcolor&&((r=o.getContext("2d")).fillStyle=e.bgcolor,r.fillRect(0,0,o.width,o.height)),o}(t,o),a=i.getContext("2d");return a.mozImageSmoothingEnabled=!1,a.msImageSmoothingEnabled=!1,a.imageSmoothingEnabled=!1,r&&(a.scale(o,o),a.drawImage(r,0,0)),i}))}function b(t){return c.resolveAll().then((function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t}))}function x(t){return h.inlineAll(t).then((function(){return t}))}}(this)},Iab2:function(t,e,n){(function(n){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function e(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){s(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,n,a){var s=i.URL||i.webkitURL,l=document.createElement("a");n=n||t.name||"download",l.download=n,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?o(l):r(l.href)?e(t,n,a):o(l,l.target="_blank")):(l.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),n);else if(r(t))e(t,n,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){o(a)}))}}:function(t,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,r);var s="application/octet-stream"===t.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&l||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var f=i.URL||i.webkitURL,h=f.createObjectURL(t);o?o.location=h:location.href=h,o=null,setTimeout((function(){f.revokeObjectURL(h)}),4e4)}});i.saveAs=s.saveAs=s,t.exports=s})?r.apply(e,o):r)||(t.exports=i)}).call(this,n("yLpj"))},L0Z4:function(t,e,n){"use strict";n("le1o")},T4o3:function(t,e,n){},YXoB:function(t,e,n){"use strict";n("T4o3")},hedS:function(t,e,n){"use strict";n.r(e);n("07d7"),n("PKPk"),n("3bBZ"),n("Kz25"),n("mGGf");var r=n("8U9E"),o=n.n(r),i=n("kUs/"),a=n("Iab2"),s={components:{FileSelect:i.a},data:function(){return{color:"og",isSaving:!1,errorText:""}},methods:{SaveKalendar:function(){var t=this;this.isSaving=!0,this.errorText=null;var e=new Blob(['<svg\n        viewBox="0 0 600 400"\n        width="0"\n        height="0"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n      >\n        <defs>\n          <filter id="asian">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values=" 1.000  0.000  0.000  0.000  0.000 \n                       0.000  1.000  0.000  0.000  0.000 \n                       0.000  0.000  0.700  0.000  0.000 \n                       0.000  0.000  0.000  1.000  0.000"\n            />\n          </filter>\n\n          <filter id="black">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 0.4 0 0 0\n                      0 0 0.3 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n\n          <filter id="brown">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 0.4 0 0 0\n                      0 0 0.2 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n\n          <filter id="white">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 1 0 0 0\n                      0 0 1 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n        </defs>\n      </svg>'],{type:"image/svg+xml"}),n=URL.createObjectURL(e);o.a.toBlob(document.getElementById("test"),{bgcolor:"transparent",width:500,height:200,style:{filter:"grayscale(95%) saturate(120%) brightness(0.9) contrast(1.2) url('".concat(n,"#asian')")}}).then((function(e){t.isSaving=!1,a.saveAs(e,"thumbnail.png")})).catch((function(e){t.isSaving=!1,t.errorText="Sorry there was an error saving your thumbnail. Please try again."}))}}},l=(n("L0Z4"),n("KHd+")),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FullLayout",[n("div",{staticClass:"testing-color"},[n("FileSelect",{staticClass:"test",class:t.color,attrs:{id:"test",width:"500"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.color=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"asian"}},[t._v("Asian")]),n("option",{attrs:{value:"black"}},[t._v("Black")]),n("option",{attrs:{value:"brown"}},[t._v("Brown")]),n("option",{attrs:{value:"white"}},[t._v("White")]),n("option",{attrs:{value:"og"}},[t._v("OG")])]),n("div",{staticClass:"save"},[n("button",{on:{click:function(e){return t.SaveKalendar()}}},[t._v("Save Thumbnail")])]),n("svg",{attrs:{viewBox:"0 0 600 400",width:"0",height:"0","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("filter",{attrs:{id:"asian"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:" 1.000  0.000  0.000  0.000  0.000 \n                     0.000  1.000  0.000  0.000  0.000 \n                     0.000  0.000  0.700  0.000  0.000 \n                     0.000  0.000  0.000  1.000  0.000"}})],1),n("filter",{attrs:{id:"black"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 0.4 0 0 0\n                    0 0 0.3 0 0\n                    0 0 0 1 0"}})],1),n("filter",{attrs:{id:"brown"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 0.4 0 0 0\n                    0 0 0.2 0 0\n                    0 0 0 1 0"}})],1),n("filter",{attrs:{id:"white"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 1 0 0 0\n                    0 0 1 0 0\n                    0 0 0 1 0"}})],1)])])],1)])}),[],!1,null,null,null);e.default=u.exports},"kUs/":function(t,e,n){"use strict";var r=n("xSSU"),o={name:"FileSelect",components:{Close:n.n(r).a},props:{top:{default:"unset"},right:{default:"unset"},bottom:{default:"unset"},left:{default:"unset"},color:{default:"#f0f0f0bb"},width:{default:200},height:{default:200},text:{default:"Add Image"}},data:function(){return{imageData:null}},methods:{disableBox:function(){this.imageData="_"},chooseImage:function(){this.$refs.fileInput.click()},onSelectFile:function(){var t=this,e=this.$refs.fileInput.files;if(e&&e[0]){var n=new FileReader;n.onload=function(e){t.imageData=e.target.result},n.readAsDataURL(e[0]),this.$emit("input",e[0])}}}},i=(n("YXoB"),n("KHd+")),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-image-input",class:t.imageData?"has-image":"",style:{"background-image":"url("+t.imageData+")",width:t.width+"px",height:t.height+"px",top:t.top,right:t.right,bottom:t.bottom,left:t.left},on:{click:t.chooseImage}},[t.imageData?t._e():n("span",{staticClass:"placeholder",style:{"background-color":t.color}},[t._v("\n    "+t._s(t.text)+"\n  ")]),n("input",{ref:"fileInput",staticClass:"file-input",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{input:t.onSelectFile}})])}),[],!1,null,"53934108",null);e.a=a.exports},le1o:function(t,e,n){},xSSU:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:r,data:o,children:i=[]}=e,{class:a,staticClass:s,style:l,staticStyle:u,attrs:c={},...f}=o;return n("svg",{class:[a,s],style:[l,u],attrs:Object.assign({viewBox:"0 0 24 24"},c),...f},i.concat([n("path",{attrs:{d:"M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"}})]))}}}}]);