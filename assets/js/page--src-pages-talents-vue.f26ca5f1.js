(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Ajht:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:i,children:s=[]}=e,{class:l,staticClass:o,style:r,staticStyle:c,attrs:u={},...h}=i;return a("svg",{class:[l,o],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","clip-rule":"evenodd",viewBox:"0 0 3076 940"},u),...h},s.concat([a("path",{attrs:{fill:"var(--black)","fill-rule":"nonzero",d:"M1782.681 940.412v-156h156v156h-156zM173.346 5.714l380.001 759.998-86.67 173.3L.015 5.714h173.33zm1969.337 927.998l77.34-154.7h173.33l-77.33 154.7h-173.34zm856.003-154.7l77.34 154.7h-173.34l-78.661-154.7h174.66zM1125.349 1.714h154.67v929.298l-154.67-153.3V1.714zm686.672 811.998v97.3h97.33v-97.3h-97.33zm1060.004-5.3l48 96h109.33l-48-96h-109.33zm-525.342 0h-109.33l-48 96h109.33l48-96zm-1880.006 66.6l54.67-109.3L156.016 35.014H46.676l420 839.998zm784.002-13.3V31.014h-96v734.698l96 96zM2609.354.414l310.671 622.598h-173.34l-137.33-274.6-137.331 274.6h-174.67l312-622.598zm26.67 335.999l128 257.3h109.331l-264-528-264.002 528h109.33l128.001-257.3 26.67-52 26.67 52zM760.018 5.713h173.33l-292 584-86.671-173.3 205.34-410.7zm-173.34 410.7l54.67 108 245.33-489.4h-109.33l-190.67 381.4zm885.342-409.4h777.333v156h-310.671v456h-156v-456H1472.02v-156zm748.003 126.7v-97.3H1501.35v97.3h310.671v456h97.33v-456h310.672z"}})]))}}},C6WH:function(t,e,a){},C9Ha:function(t,e,a){var n={"./huni_small.png":"OzR/","./kota_small.png":"2kgM","./kozii_small.png":"9r8a","./pia_small.png":"/Fsu","./senni_small.png":"qOU8","./xion_small.png":"q+Qx"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="C9Ha"},U9bk:function(t,e,a){"use strict";a("C6WH")},ZnjQ:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:i,children:s=[]}=e,{class:l,staticClass:o,style:r,staticStyle:c,attrs:u={},...h}=i;return a("svg",{class:[l,o],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","clip-rule":"evenodd",viewBox:"0 0 3045 3045"},u),...h},s.concat([a("path",{attrs:{d:"M1751.145-1448.641l481.29 481.289-3148.48 3148.479-481.289-481.29zM2355.357-844.41l182.68 182.68-3148.48 3148.479-182.679-182.68z"}})]))}}},fl7L:function(t,e,a){"use strict";a.r(e);var n=a("VTBJ"),i=a("HaE+"),s=(a("ls82"),a("QWBl"),a("07d7"),a("FZtP"),a("TeQF"),a("sMBO"),a("toAj"),a("rB9j"),a("EnZy"),a("xSSU")),l=a.n(s),o=a("FfSn"),r=a.n(o),c=a("E1aD"),u=a.n(c),h=a("Z6IN"),d=a.n(h),v=a("RvEM"),m=a.n(v),w=a("BX7O"),g=a.n(w),f=a("yzZA"),p=a.n(f),b=a("Ajht"),y=a.n(b),_=a("ZnjQ"),k=a.n(_),T=a("ro2s"),D={components:{Close:l.a,YoutubeLogo:r.a,TwitterLogo:u.a,TwitchLogo:d.a,TiktokLogo:m.a,WebsiteLogo:g.a,LunaLogo:p.a,VitaLogo:y.a,Stripes:k.a,Card:T.a},metaInfo:function(){return this.$seo({title:"Talents",openGraph:{title:"Kawa Entertainment - Talents",image:"https://kawaentertainment.com/kawa_wave.png",description:"Kawa Entertainment is a talent first agency with a focus on technology and art. We only bring our very best to the table and treat our talent right."},twitter:{title:"Kawa Entertainment - Talents",image:"https://kawaentertainment.com/kawa_wave.png",description:"Kawa Entertainment is a talent first agency with a focus on technology and art. We only bring our very best to the table and treat our talent right."}})},mounted:function(){var t=this;this.responseAvailable=!1,this.$static.allTalents.edges.forEach((function(e){var a=e.node.socials.filter((function(t){return("youtube"==t.website||"twitch"==t.website)&&t.id}));a.length>0&&a.forEach((function(a){"youtube"==a.website?fetch("https://api.kawaentertainment.com/youtube/talent/".concat(a.id),{method:"GET"}).then(function(){var a=Object(i.a)(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=n.a,a.t1={full_name:e.node.name},a.next=4,i.json();case 4:a.t2=a.sent,t.talentYoutubeData[e.node.name]=(0,a.t0)(a.t1,a.t2),t.$forceUpdate();case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.log(t)})):"twitch"==a.website&&fetch("https://api.kawaentertainment.com/twitch/talent/".concat(a.id),{method:"GET"}).then(function(){var a=Object(i.a)(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=n.a,a.t1={full_name:e.node.name},a.next=4,i.json();case 4:a.t2=a.sent,t.talentTwitchData[e.node.name]=(0,a.t0)(a.t1,a.t2),t.$forceUpdate();case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}))}))},methods:{GetTalentIsLive:function(t){return this.talentYoutubeData&&this.talentYoutubeData[t.name]&&this.talentYoutubeData[t.name].live.live&&this.talentYoutubeData[t.name].live.data||this.talentTwitchData&&this.talentTwitchData[t.name]&&this.talentTwitchData[t.name].data.live.title},GetWaves:function(){var t=this;return this.$static.allWaves.edges.filter((function(e){return t.GetWaveTalents(e.node.wave).length>0}))},GetWaveTalents:function(t){return this.$static.allTalents.edges.filter((function(e){return e.node.wave==t}))},GetTalentImage:function(t){return"/assets/imgs/talents/".concat(t,".png")},GetTalentLivePlatform:function(t){var e=t.name,a=this.talentYoutubeData&&this.talentYoutubeData[e]&&this.talentYoutubeData[e].live.live,n=this.talentTwitchData&&this.talentTwitchData[e]&&this.talentTwitchData[e].data.live.title;return a&&this.talentYoutubeData[e].live.data?"youtube":n?"twitch":null},GetTalentLiveLink:function(t){var e=t.name,a=this.talentYoutubeData&&this.talentYoutubeData[e]&&this.talentYoutubeData[e].live.live,n=this.talentTwitchData&&this.talentTwitchData[e]&&this.talentTwitchData[e].data.live.title;if(a&&this.talentYoutubeData[e].live.data)return this.talentYoutubeData[e].live.data.thumbnailPreviewRenderer.shareButton.buttonRenderer.navigationEndpoint.shareVideoEndpoint.videoShareUrl;if(n){var i=t.socials.filter((function(t){return"twitch"==t.website}))[0].id;return"https://www.twitch.tv/".concat(i)}return""},GetTalentLiveViewerCount:function(t){var e=t.name,a=this.talentYoutubeData&&this.talentYoutubeData[e]&&this.talentYoutubeData[e].live&&this.talentYoutubeData[e].live.live,n=this.talentTwitchData&&this.talentTwitchData[e]&&this.talentTwitchData[e].data&&this.talentTwitchData[e].data.live.title;return a&&this.talentYoutubeData[e].live.data?0:n?this.talentTwitchData[e].data.live.viewers>1e3?(this.talentTwitchData[e].data.live.viewers/1e3).toFixed(0)+"k":this.talentTwitchData[e].data.live.viewers:""},GetTalentLiveGame:function(t){var e=t.name,a=this.talentYoutubeData&&this.talentYoutubeData[e]&&this.talentYoutubeData[e].live.live,n=this.talentTwitchData&&this.talentTwitchData[e]&&this.talentTwitchData[e].data.live.title;if(a){var i="";try{i=this.talentYoutubeData[e].live.data.thumbnailPreviewRenderer.title.runs[0].text.split()}catch(t){}var s=/\[([^)]+)\]/.exec(i);return s&&s[1]?s[1]:null}return n?this.talentTwitchData[e].data.live.game:""},GetTalentSchedule:function(t){var e=t.name;return this.talentTwitterData&&this.talentTwitterData[e]&&this.talentTwitterData[e].data&&!this.talentTwitterData[e].data.error?this.talentTwitterData[e].data:""}},data:function(){return{talentTwitterData:{},talentYoutubeData:{},talentTwitchData:{},currentTalent:null}}},C=(a("keTg"),a("KHd+")),L=a("Kw5r"),z=L.a.config.optionMergeStrategies.computed,G={allWaves:{edges:[{node:{wave:1,name:"Luna",logo:"LunaLogo"}},{node:{wave:2,name:"Vita",logo:"VitaLogo"}}]},allTalents:{edges:[{node:{id:"0",gen:1,wave:1,name:"Huni Ryukin",subtitle:"Emotional Support Dog",slogan:"Ready to destroy everything",description:"Your emotional support doggo! I am an Australian shepherd vtuber who plays games, sings, draws, and shit posts. I reside in the great white north in a cardboard box. I like long walks on the beach and rolling in garbage.",img:"huni",imgOffset:-16,accent:"#73b7e8",socials:[{id:"HuniRyukin",website:"twitter",link:"https://twitter.com/HuniRyukin"},{id:"UCfcVgQ0mKaEwzVqmGYTMayA",website:"youtube",link:"https://www.youtube.com/channel/UCfcVgQ0mKaEwzVqmGYTMayA"},{id:"huniryukin",website:"twitch",link:"https://www.twitch.tv/huniryukin"}],credits:{artist:["tnri_0404"],rigger:["chromamagicae","koziichu"]}}},{node:{id:"1",gen:1,wave:1,name:"PiaPi Yuefo",subtitle:"Alien Slime 'Princess'",slogan:"Looking for their next abductee",description:"I'm just a down on my luck Alien slime stuck on earth, trying to make it as an idol. If I like you, I might even abduct you!",img:"pia",imgOffset:0,accent:"#5dd8d7",socials:[{id:"PiaPiUFO",website:"twitter",link:"https://twitter.com/PiaPiUFO"},{id:"UCRtugKQIPPfZmVZ6vLiOsdQ",website:"youtube",link:"https://www.youtube.com/c/PiaPIUFO"},{id:"piapiufo",website:"twitch",link:"https://www.twitch.tv/piapiufo"}],credits:{artist:["PiaPiUFO"],rigger:["kuronogomi"]}}},{node:{id:"2",gen:1,wave:1,name:"Senniursa",subtitle:"Comfy Bear Gamer",slogan:"Always doing meow best",description:"I'm your local comfy gamer bear VTuber! Welcome to my stream! Always doing meow best to spread pawsitivity and mental health awareness (｡- ω -)",img:"senni",imgOffset:-80,accent:"#e1a970",socials:[{id:"Senniursa",website:"twitter",link:"https://twitter.com/Senniursa"},{id:"UCiWjxU_0jEE7G__rmWHlGWA",website:"youtube",link:"https://www.youtube.com/channel/UCiWjxU_0jEE7G__rmWHlGWA"},{id:"senniursa",website:"twitch",link:"https://www.twitch.tv/senniursa"}],credits:{artist:["rikito99"],rigger:["borisudenpa"]}}}]}},x=function(t){var e=t.options;e.__staticData?e.__staticData.data=G:(e.__staticData=L.a.observable({data:G}),e.computed=z({$static:function(){return e.__staticData.data}},e.computed))},Y=Object(C.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FullLayout",[n("div",{staticClass:"content talent-content"},t._l(t.GetWaves(),(function(e){return n("div",{key:e.node.wave,staticClass:"wave"},[n("h3",[n(e.node.logo,{tag:"component"})],1),n("div",{staticClass:"talents"},t._l(t.GetWaveTalents(e.node.wave),(function(e){return n("div",{key:e.node.name,staticClass:"talent"},[n("a",{staticClass:"live button",class:t.GetTalentIsLive(e.node)?"active":"inactive",attrs:{href:t.GetTalentLiveLink(e.node),target:"_blank"}},[n("div",{staticClass:"title"},[n("div",{staticClass:"platform",class:t.GetTalentLivePlatform(e.node)},["youtube"==t.GetTalentLivePlatform(e.node)?n("YoutubeLogo"):t._e(),"twitch"==t.GetTalentLivePlatform(e.node)?n("TwitchLogo"):t._e()],1),t._v("\n                watch live\n                "),0!=t.GetTalentLiveViewerCount(e.node)?n("span",[t._v(t._s(t.GetTalentLiveViewerCount(e.node)))]):t._e()]),t.GetTalentLiveGame(e.node)?n("div",{staticClass:"game-title"},[t._v("\n                "+t._s(t.GetTalentLiveGame(e.node))+"\n              ")]):t._e()]),n("div",{staticClass:"img-wrapper",style:"background: "+e.node.accent,on:{click:function(a){t.currentTalent=e.node.name}}},[e.node.img?n("g-image",{staticClass:"img",attrs:{src:a("C9Ha")("./"+e.node.img+"_small.png")}}):t._e()],1),n("div",{staticClass:"name"},[t._v(t._s(e.node.name))])])})),0)])})),0)]),t._l(t.$static.allTalents.edges,(function(e){return n("div",{key:e.node.name,staticClass:"talent card-wrapper",class:t.currentTalent==e.node.name?"active":"inactive",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.currentTalent=null}}},[n("button",{staticClass:"close-button",on:{click:function(e){t.currentTalent=null}}},[n("Close")],1),n("div",{staticClass:"card"},[n("div",{staticClass:"card-info card-info-desktop"},[n("div",{staticClass:"name"},[t._v(t._s(e.node.name))]),n("div",{staticClass:"slogan"},[t._v(t._s(e.node.subtitle))]),n("div",{staticClass:"links"},[n("ul",t._l(e.node.socials,(function(t){return n("li",{key:t.website},[n("a",{style:{"background-color":e.node.accent},attrs:{target:"_blank",href:t.link}},[n(t.website+"Logo",{tag:"component"})],1)])})),0)]),n("div",{staticClass:"desc"},[t._v(t._s(e.node.description))]),e.node.credits?n("div",{staticClass:"credits"},t._l(Object.entries(e.node.credits),(function(e){return n("div",{key:e[0],staticClass:"category"},[t._v("\n            "+t._s(e[0])+"\n            "),t._l(e[1],(function(e){return n("a",{key:e,staticClass:"credit",attrs:{target:"_blank",href:"https://twitter.com/"+e}},[t._v("\n              "+t._s(e))])}))],2)})),0):t._e()]),n("div",{staticClass:"more"},[n("g-link",{attrs:{to:"/talent/"+e.node.name.replace(" ","-").toLowerCase()}},[n("button",{style:"background-color: "+e.node.accent},[t._v("\n            More Info\n          ")])]),n("g-link",{attrs:{to:"/schedule"}},[n("button",{style:"background-color: "+e.node.accent},[t._v("\n            Schedule\n          ")])])],1),n("div",{staticClass:"subtitle"},[t._v(t._s(e.node.slogan))]),n("Stripes",{staticClass:"stripes",style:{fill:e.node.accent}}),n("div",{staticClass:"img-wrapper",style:{right:(e.node.imgOffset||32)+"px"}},[e.node.img?n("g-image",{staticClass:"img",attrs:{src:a("JnSR")("./"+e.node.img+".png")}}):t._e()],1)],1)])}))],2)}),[],!1,null,null,null);"function"==typeof x&&x(Y);e.default=Y.exports},keTg:function(t,e,a){"use strict";a("mL41")},mL41:function(t,e,a){},ro2s:function(t,e,a){"use strict";var n={name:"Card",components:{Waves:a("t2lQ").a},props:{Width:{default:320},HasWaves:{type:Boolean,default:!1},HasBorder:{type:Boolean,default:!1}}},i=(a("U9bk"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card",style:"max-width: "+this.Width+"px; "+(this.HasBorder?"":" border: none;")},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[this._t("default")],2),this.HasWaves?e("Waves",{attrs:{CustomID:"card"}}):this._e()],1)])}),[],!1,null,"3ea93f99",null);e.a=s.exports},xSSU:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:i,children:s=[]}=e,{class:l,staticClass:o,style:r,staticStyle:c,attrs:u={},...h}=i;return a("svg",{class:[l,o],style:[r,c],attrs:Object.assign({viewBox:"0 0 24 24"},u),...h},s.concat([a("path",{attrs:{d:"M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"}})]))}}},yzZA:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:i,children:s=[]}=e,{class:l,staticClass:o,style:r,staticStyle:c,attrs:u={},...h}=i;return a("svg",{class:[l,o],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","clip-rule":"evenodd",viewBox:"0 0 3686 940"},u),...h},s.concat([a("path",{attrs:{fill:"var(--black)","fill-rule":"nonzero",d:"M311.964 784.412h309.341v156H311.964v-156zM1434.638 5.714h156v545.298c0 107.6-38.22 199.6-114.67 276-77.33 74.7-169.33 112-276.001 112-105.77 0-196.89-37.3-273.331-112-75.56-77.3-113.33-169.3-113.33-276V161.713h154.66v389.3c0 64.9 22.23 119.6 66.67 164 46.22 45.399 101.56 67.999 166.001 67.999 64.44 0 119.33-22.6 164.67-68 46.22-45.3 69.33-100 69.33-164V5.714zm348.001 930.698V3.014l777.333 699.998v234.7l-622.662-560v558.7h-154.67zm1825.337-157.4l77.34 154.7h-173.34l-78.661-154.7h174.66zm-856.004 154.7l77.34-154.7h173.331l-77.33 154.7h-173.34zm-2160.007-22.7v-97.3H341.304v97.3h250.66zm2889.35-102.6l48 96h109.33l-48-96h-109.33zm-525.342 0h-109.33l-48 96h109.33l48-96zM157.3 629.712c0 42.7 15.112 79.6 45.334 110.7h1.333l-69.333 68-42.667 41.3c-61.333-61.3-92-134.7-92-220V7.014h157.333v622.698zM3218.644.414l310.671 622.598h-173.34l-137.33-274.6-137.331 274.6h-174.671L3218.644.414zm-814.673 2.6h156v467.999l-156-140v-328zm126.67 402.699v-373.3h-97.33v285.3l97.33 88zm-1406.674-400v156h-156v-156h156zm-29.33 126.7v-97.4h-97.33v97.4h97.33z"}})]))}}}}]);