(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"8YFQ":function(t,e,a){},A6W1:function(t,e,a){"use strict";a("TeQF"),a("07d7");var s={props:["author"],computed:{GetAuthorInfo:function(){var t=this,e=this.$static.allAuthors.edges.filter((function(e){return e.node.id==t.author.id}));return e.length>0?e[0].node:null}}},i=(a("pRWC"),a("KHd+")),n=a("Kw5r"),o=n.a.config.optionMergeStrategies.computed,r={allAuthors:{edges:[{node:{id:"jay",name:"Jay",twitter:"JayAgonoy"}},{node:{id:"koziichu",name:"KoziiChu",twitter:"koziichu"}},{node:{id:"pidge",name:"Pidge",twitter:"vg_pidge"}},{node:{id:"monty",name:"Monty",twitter:"MontySeelana"}}]}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=n.a.observable({data:r}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},d=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.GetAuthorInfo?e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{src:a("cukU")("./"+this.GetAuthorInfo.id+".png")}}),e("g-link",{staticClass:"author__name",attrs:{to:this.author.path}},[this._v("\n    "+this._s(this.GetAuthorInfo.name)+"\n  ")])],1):this._e()}),[],!1,null,"3ca14a28",null);"function"==typeof c&&c(d);e.a=d.exports},FRvA:function(t,e,a){},"I/1N":function(t,e,a){"use strict";a("zkCN")},Ol7d:function(t,e,a){"use strict";var s={name:"Loading",components:{},props:{Invert:{type:Boolean,default:!1}}},i=(a("I/1N"),a("KHd+")),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lds-ellipsis"},[e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}}),e("div",{style:{background:this.Invert?"var(--bg)":"var(--dark-grey)"}})])}),[],!1,null,"61ba3f79",null);e.a=n.exports},Vqc3:function(t,e,a){"use strict";a("FRvA")},XPlt:function(t,e,a){"use strict";a("R5XZ");var s,i=a("nI7C"),n=a.n(i),o=a("Ol7d"),r={name:"Loading",components:{},props:{}},c=(a("Vqc3"),a("KHd+")),d=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"waveform"},[e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"}),e("div",{staticClass:"waveform__bar"})])}],!1,null,"51b0f0ca",null).exports,l={components:{SpeakSVG:n.a,Loading:o.a,AudioWaveform:d},props:{Text:{type:String,required:!0}},data:function(){return{loading:!0,voice:1,rate:1.25,speaking:!1}},methods:{StripText:function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent||""},Speak:function(){if(this.speaking)s.cancel(),this.speaking=!1;else{var t=new SpeechSynthesisUtterance,e=s.getVoices();t.text=this.StripText(this.Text),e.length>this.voice?t.voice=e[this.voice]:t.voice=e[0],t.lang="en-US",t.rate=this.rate,s.speak(t),this.speaking=!0}},IsSpeaking:function(){return!!s&&s.speaking},IsPending:function(){return!!s&&s.pending},IsPaused:function(){return!!s&&s.paused},CanSpeak:function(){return"speechSynthesis"in window&&s.getVoices().length>0},GetVoices:function(){return this.CanSpeak()?s.getVoices():[]}},beforeUnmount:function(){s.cancel()},mounted:function(){var t=this;s=window.speechSynthesis,setTimeout((function(){s.cancel(),t.loading=!1}),800)}},u=(a("rYdz"),Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"talk-button"},[t.loading?a("div",{staticClass:"loading"},[a("Loading")],1):t.CanSpeak()?a("div",{staticClass:"loaded"},[a("button",{class:t.speaking?"active":null,on:{click:function(e){return t.Speak()}}},[a("SpeakSVG"),t.speaking?a("row",{staticClass:"speak-anim"},[a("AudioWaveform")],1):t._e()],1),a("select",{directives:[{name:"model",rawName:"v-model",value:t.voice,expression:"voice"}],attrs:{name:"cars"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.voice=e.target.multiple?a:a[0]}}},t._l(t.GetVoices(),(function(e,s){return a("option",{key:e.voiceURI,domProps:{value:s}},[t._v(t._s(e.name))])})),0)]):t._e()])}),[],!1,null,"d24eed64",null));e.a=u.exports},eOmY:function(t,e,a){"use strict";a.r(e);a("oVuX");var s=a("n6yM"),i=a("PpWc"),n=a("A6W1"),o=a("XPlt"),r={components:{Author:n.a,PostMeta:s.a,PostTags:i.a,TalkButton:o.a},metaInfo:function(){return this.$seo({title:this.$page.post.title,openGraph:{type:"article",title:this.$page.post.title,url:this.postUrl,image:this.$page.post.hero_image.src,description:this.$static.metadata.siteDescription,keywords:this.keywords},twitter:{card:"summary_large_image",type:"article",title:this.$page.post.title,url:this.postUrl,image:this.$page.post.hero_image.src,description:this.$static.metadata.siteDescription,keywords:this.keywords}})},computed:{postUrl:function(){var t=this.$createElement,e=this.$static.metadata.siteUrl,a=this.$page.post.path;return t("code",{attrs:{"data-enlighter-language":"generic"},class:"EnlighterJSRAW"},a?["$",e,"$",a]:["$",e,"/$",slugify(this.$page.post.title),"/"])},keywords:function(){return this.$page.post.tags.join(",")}}},c=a("KHd+"),d=null,l=a("Kw5r"),u=l.a.config.optionMergeStrategies.computed,p={metadata:{siteUrl:"https://kawaentertainment.com",siteDescription:'We are an "adoption" style Vtuber Agency, focusing on Technology. Our mission is to develop our talents and the entire vtubing community.'}},g=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=l.a.observable({data:p}),e.computed=u({$static:function(){return e.__staticData.data}},e.computed))},h=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("NewsLayout",[a("div",{staticClass:"post__header"},[a("div",{staticClass:"header__content"},[t.$page.post.series?a("row",{staticClass:"top"},[a("div",{staticClass:"series"},[t._v("\n          "+t._s(t.$page.post.series)+"\n        ")])]):t._e(),a("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.$page.post.title)+"\n      ")]),a("div",{staticClass:"authors"},t._l(t.$page.post.authors,(function(t){return a("Author",{key:t.id,attrs:{author:t}})})),1),a("row",{staticClass:"bottom"},[t.$page.post.published_date?a("div",{staticClass:"date"},[t._v("\n          "+t._s(t.$page.post.published_date)+"\n        ")]):t._e(),a("span",[t._v("•")]),t.$page.post.timeToRead?a("div",[t._v("\n          "+t._s(t.$page.post.timeToRead)+" min read\n        ")]):t._e()]),a("TalkButton",{staticClass:"speech",attrs:{Text:t.$page.post.content}})],1),a("div",{staticClass:"header__background"},[this.$page.post.hero_image?a("g-image",{staticClass:"post_button__background",attrs:{src:this.$page.post.hero_image}}):t._e()],1)]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),a("div",{staticClass:"post__footer"},[a("PostTags",{attrs:{post:t.$page.post}}),a("div",{staticClass:"suggestions"},[t.$page.post.related&&t.$page.post.related.length>0&&t.$page.post.related[0].published?a("div",t._l(t.$page.post.related.slice(1),(function(t){return a("PostButton",{key:t.node.id,staticClass:"post-card",attrs:{width:450,background:t.node.hero_image,title:t.node.title,subtitle:t.node.series,description:t.node.description,date:t.node.published_date,timeToRead:t.node.timeToRead,tags:t.node.tags,author:t.node.authors&&t.node.authors.length>0?t.node.authors[0]:void 0,path:t.node.path}})})),1):t.$page.newPost.edges[0].node.id!=t.$page.post.id?a("div",t._l(t.$page.newPost.edges.slice(1),(function(t){return a("PostButton",{key:t.node.id,staticClass:"post-card",attrs:{width:450,background:t.node.hero_image,title:t.node.title,subtitle:t.node.series,description:t.node.description,date:t.node.published_date,timeToRead:t.node.timeToRead,tags:t.node.tags,author:t.node.authors&&t.node.authors.length>0?t.node.authors[0]:void 0,path:t.node.path}})})),1):t._e()])],1)])}),[],!1,null,null,null);"function"==typeof d&&d(h),"function"==typeof g&&g(h);e.default=h.exports},ir1g:function(t,e,a){},nI7C:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:s,data:i,children:n=[]}=e,{class:o,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=i;return a("svg",{class:[o,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","clip-rule":"evenodd",viewBox:"0 0 259 297"},l),...u},n.concat([a("g",{attrs:{"fill-rule":"nonzero"}},[a("path",{attrs:{d:"M233.375 0H113.37C99.575 0 88.35 11.229 88.35 25.031v65.635c0 13.801 11.224 25.029 25.02 25.029h12.403v19.343a10.172 10.172 0 0017.368 7.189l26.508-26.531h63.725c13.796 0 25.02-11.229 25.02-25.029V25.031C258.396 11.229 247.172 0 233.376 0zM75.976 218.645c23.484-3.623 41.522-23.983 41.522-48.484 0-27.052-21.991-49.061-49.022-49.061-27.033 0-49.027 22.009-49.027 49.061 0 24.499 18.04 44.86 41.526 48.484-17.315 1.5-32.503 8.223-43.331 19.306C5.654 250.225-.44 267.208.024 287.065A10.172 10.172 0 0010.195 297H126.75c5.525 0 10.04-4.411 10.169-9.935.46-19.86-5.634-36.845-17.626-49.118-10.825-11.081-26.008-17.801-43.317-19.302z"}})])]))}}},pRWC:function(t,e,a){"use strict";a("8YFQ")},rYdz:function(t,e,a){"use strict";a("ir1g")},zkCN:function(t,e,a){}}]);