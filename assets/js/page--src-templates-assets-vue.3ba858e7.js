(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Clo1:function(t,e,a){"use strict";a("jwWt")},FRvA:function(t,e,a){},"I/1N":function(t,e,a){"use strict";a("zkCN")},Ol7d:function(t,e,a){"use strict";var n={name:"Loading",components:{},props:{Invert:{type:Boolean,default:!1}}},i=(a("I/1N"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lds-ellipsis"},[e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}})])}),[],!1,null,"61ba3f79",null);e.a=s.exports},U15i:function(t,e,a){},Vqc3:function(t,e,a){"use strict";a("FRvA")},XPlt:function(t,e,a){"use strict";a("R5XZ");var n,i=a("nI7C"),s=a.n(i),o=a("Ol7d"),r={name:"Loading",components:{},props:{}},c=(a("Vqc3"),a("KHd+")),u=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"waveform"},[e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"})])}],!1,null,"51b0f0ca",null).exports,l={components:{SpeakSVG:s.a,Loading:o.a,AudioWaveform:u},props:{Text:{type:String,required:!0}},data:function(){return{loading:!0,voice:1,rate:1.25,speaking:!1}},methods:{StripText:function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent||""},Speak:function(){if(this.speaking)n.cancel(),this.speaking=!1;else{var t=new SpeechSynthesisUtterance,e=n.getVoices();t.text=this.StripText(this.Text),e.length>this.voice?t.voice=e[this.voice]:t.voice=e[0],t.lang="en-US",t.rate=this.rate,n.speak(t),this.speaking=!0}},IsSpeaking:function(){return!!n&&n.speaking},IsPending:function(){return!!n&&n.pending},IsPaused:function(){return!!n&&n.paused},CanSpeak:function(){return"speechSynthesis"in window&&n.getVoices().length>0},GetVoices:function(){return this.CanSpeak()?n.getVoices():[]}},beforeUnmount:function(){n.cancel()},mounted:function(){var t=this;n=window.speechSynthesis,setTimeout((function(){n.cancel(),t.loading=!1}),800)}},d=(a("rYdz"),Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"talk-button"},[t.loading?a("div",{staticClass:"loading"},[a("Loading")],1):t.CanSpeak()?a("div",{staticClass:"loaded"},[a("button",{class:t.speaking?"active":null,on:{click:function(e){return t.Speak()}}},[a("SpeakSVG"),t.speaking?a("row",{staticClass:"speak-anim"},[a("AudioWaveform")],1):t._e()],1),a("select",{directives:[{name:"model",rawName:"v-model",value:t.voice,expression:"voice"}],attrs:{name:"cars"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.voice=e.target.multiple?a:a[0]}}},t._l(t.GetVoices(),(function(e,n){return a("option",{key:e.voiceURI,domProps:{value:n}},[t._v(t._s(e.name))])})),0)]):t._e()])}),[],!1,null,"d24eed64",null));e.a=d.exports},cMex:function(t,e,a){"use strict";a("U15i")},eAme:function(t,e,a){"use strict";a.r(e);a("TeQF"),a("07d7"),a("rB9j"),a("UxlC"),a("W4Ht"),a("yXV3"),a("ma9I"),a("oVuX");var n=a("n6yM"),i=a("PpWc"),s={props:["creator"],computed:{GetAuthorInfo:function(){var t=this,e=this.$static.allCreators.edges.filter((function(e){return e.node.id==t.creator.id}));return e.length>0?e[0].node:null}}},o=(a("Clo1"),a("KHd+")),r=a("Kw5r"),c=r.a.config.optionMergeStrategies.computed,u={allCreators:{edges:[{node:{id:"lavanderevt",name:"Lavandere",twitter:"LavandereVT"}},{node:{id:"koziichu",name:"Kozii",twitter:"koziichu"}},{node:{id:"fomtarro",name:"Tom Farro",twitter:"FomTarro"}},{node:{id:"mikasa231",name:"Nao",twitter:"mikasa231"}},{node:{id:"kyuppin",name:"The Kyup",twitter:"Kyuppin"}},{node:{id:"lualucky",name:"Lua Lucky",twitter:"LuaVLucky"}},{node:{id:"kuronogomi",name:"Kurono Gomi",twitter:"KuronoGomi"}},{node:{id:"catlop",name:"Catlop凱拉",twitter:"catlop0202"}},{node:{id:"kiru",name:"kiru",twitter:"k1ruse"}},{node:{id:"denchi",name:"DenchiSoft",twitter:"VTubeStudio"}},{node:{id:"fugi",name:"Fugi",twitter:"Fugiman"}},{node:{id:"kawa",name:"Kawa Entertainment",twitter:"kawa_entertain"}}]}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=u:(e.__staticData=r.a.observable({data:u}),e.computed=c({$static:function(){return e.__staticData.data}},e.computed))},d=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.GetAuthorInfo?e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{src:a("73RA")("./"+this.GetAuthorInfo.id+".png")}}),e("g-link",{staticClass:"author__name",attrs:{to:this.creator.path}},[this._v("\n    "+this._s(this.GetAuthorInfo.name)+"\n  ")])],1):this._e()}),[],!1,null,"33d033f8",null);"function"==typeof l&&l(d);var p=d.exports,g={components:{TalkButton:a("XPlt").a,Creator:p,PostMeta:n.a,PostTags:i.a},computed:{GetAuthorInfo:function(){var t=this;if(this.$page.post.creators.length<=0)return null;var e=this.$static.allCreators.edges.filter((function(e){return e.node.id==t.$page.post.creators[0].id}));return e.length>0?"kawa_entertain"==e[0].node.twitter?null:e[0].node:null},BackgroundURL:function(){try{var t=this.$page.post.hero_image.src;return t=t.substring(0,t.indexOf("?")).replace("assets/static/src/assets/","").replace("src/assets/","").replaceAll("%20"," ")}catch(t){return}},postUrl:function(){var t=this.$static.metadata.siteUrl,e=this.$page.post.path;return e?"".concat(t).concat(e):"".concat(t,"/").concat(slugify(this.$page.post.title),"/")},keywords:function(){return this.$page.post.tags.join(",")}}},m=(a("cMex"),r.a.config.optionMergeStrategies.computed),v={allCreators:{edges:[{node:{id:"lavanderevt",name:"Lavandere",twitter:"LavandereVT"}},{node:{id:"koziichu",name:"Kozii",twitter:"koziichu"}},{node:{id:"fomtarro",name:"Tom Farro",twitter:"FomTarro"}},{node:{id:"mikasa231",name:"Nao",twitter:"mikasa231"}},{node:{id:"kyuppin",name:"The Kyup",twitter:"Kyuppin"}},{node:{id:"lualucky",name:"Lua Lucky",twitter:"LuaVLucky"}},{node:{id:"kuronogomi",name:"Kurono Gomi",twitter:"KuronoGomi"}},{node:{id:"catlop",name:"Catlop凱拉",twitter:"catlop0202"}},{node:{id:"kiru",name:"kiru",twitter:"k1ruse"}},{node:{id:"denchi",name:"DenchiSoft",twitter:"VTubeStudio"}},{node:{id:"fugi",name:"Fugi",twitter:"Fugiman"}},{node:{id:"kawa",name:"Kawa Entertainment",twitter:"kawa_entertain"}}]},metadata:{siteUrl:"https://kawaentertainment.com",siteDescription:'We are an "adoption" style Vtuber Agency, focusing on Technology. Our mission is to develop our talents and the entire vtubing community.'}},h=function(t){var e=t.options;e.__staticData?e.__staticData.data=v:(e.__staticData=r.a.observable({data:v}),e.computed=m({$static:function(){return e.__staticData.data}},e.computed))},f=null,_=Object(o.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("NewsLayout",[a("div",{staticClass:"post__header"},[a("div",{staticClass:"header__content"},[t.$page.post.category?a("row",{staticClass:"top"},[a("div",{staticClass:"series"},[t._v("\n          "+t._s(t.$page.post.category)+"\n        ")])]):t._e(),a("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.$page.post.title)+"\n      ")]),a("div",{staticClass:"authors"},t._l(t.$page.post.creators,(function(t){return a("Creator",{key:t.id,attrs:{creator:t}})})),1),a("row",{staticClass:"bottom"},[t.$page.post.published_date?a("div",{staticClass:"date"},[t._v("\n          "+t._s(t.$page.post.published_date)+"\n        ")]):t._e(),t.$page.post.timeToRead?a("span",[t._v("•")]):t._e(),t.$page.post.timeToRead?a("div",[t._v("\n          "+t._s(t.$page.post.timeToRead)+" min read\n        ")]):t._e()]),a("TalkButton",{staticClass:"speech",attrs:{Text:t.$page.post.content}})],1),a("div",{staticClass:"header__background"},[this.$page.post.hero_image?a("g-image",{staticClass:"post_button__background",attrs:{src:this.$page.post.hero_image}}):t._e()],1)]),t.$page.post.main_link||null!=t.GetAuthorInfo?a("div",{staticClass:"post__link"},[t.$page.post.main_link?a("a",{staticClass:"button",attrs:{target:"_blank",href:t.$page.post.main_link}},[t._v("Get Asset")]):t._e(),null!=t.GetAuthorInfo?a("a",{staticClass:"button white",attrs:{target:"_blank",href:"https://twitter.com/"+t.GetAuthorInfo.twitter}},[t._v("Follow Creator")]):t._e()]):t._e(),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),a("div",{staticClass:"post__footer"},[a("PostTags",{attrs:{post:t.$page.post}}),a("LiveBanner")],1),a("SEO",{attrs:{titleForce:"",title:this.$page.post.title+" - Vtuber Resources",descAdd:"",desc:this.$page.post.description,img:this.$page.post.hero_image.src}})],1)}),[],!1,null,null,null);"function"==typeof h&&h(_),"function"==typeof f&&f(_);e.default=_.exports},ir1g:function(t,e,a){},jwWt:function(t,e,a){},nI7C:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:i,children:s=[]}=e,{class:o,staticClass:r,style:c,staticStyle:u,attrs:l={},...d}=i;return a("svg",{class:[o,r],style:[c,u],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","clip-rule":"evenodd",viewBox:"0 0 259 297"},l),...d},s.concat([a("g",{attrs:{"fill-rule":"nonzero"}},[a("path",{attrs:{d:"M233.375 0H113.37C99.575 0 88.35 11.229 88.35 25.031v65.635c0 13.801 11.224 25.029 25.02 25.029h12.403v19.343a10.172 10.172 0 0017.368 7.189l26.508-26.531h63.725c13.796 0 25.02-11.229 25.02-25.029V25.031C258.396 11.229 247.172 0 233.376 0zM75.976 218.645c23.484-3.623 41.522-23.983 41.522-48.484 0-27.052-21.991-49.061-49.022-49.061-27.033 0-49.027 22.009-49.027 49.061 0 24.499 18.04 44.86 41.526 48.484-17.315 1.5-32.503 8.223-43.331 19.306C5.654 250.225-.44 267.208.024 287.065A10.172 10.172 0 0010.195 297H126.75c5.525 0 10.04-4.411 10.169-9.935.46-19.86-5.634-36.845-17.626-49.118-10.825-11.081-26.008-17.801-43.317-19.302z"}})])]))}}},rYdz:function(t,e,a){"use strict";a("ir1g")},zkCN:function(t,e,a){}}]);