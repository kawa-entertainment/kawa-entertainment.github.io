(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+i8T":function(t,e,a){"use strict";a.r(e);a("TeQF"),a("07d7"),a("yq1k"),a("JTJg"),a("SYor"),a("rB9j"),a("hByQ"),a("pNMO"),a("4Brf"),a("oVuX"),a("2B1R");var o={components:{Author:a("A6W1").a},data:function(){return{search:""}},computed:{searchResults:function(){var t=this;return this.$page.assets.edges.filter((function(e){return e.node.title.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.description.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.tags.map((function(t){return t.title})).join(" ").toLowerCase().includes(t.search.toLowerCase().trim())}))}}},s=(a("EHoU"),a("KHd+")),n=null,r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FullLayout",{attrs:{Align:"flex-start"}},[a("div",{staticClass:"tag-content"},[a("PageHeader",{attrs:{title:"#"+t.$page.tag.title+" Assets",subtitle:"We strive to make streaming better not only for our talents but for\n        all streamers! Below are a collection of our efforts."}}),a("SearchBar",{attrs:{placeholder:"Search assets"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.searchResults.length>0?a("div",[a("div",{staticClass:"posts"},t._l(t.searchResults,(function(t){return a("PostButton",{key:t.node.id,staticClass:"post-card",attrs:{background:t.node.hero_image,title:t.node.title,subtitle:t.node.category,description:t.node.description,date:t.node.published_date,timeToRead:t.node.timeToRead,tags:t.node.tags,creator:t.node.creators&&t.node.creators.length>0?t.node.creators[0]:void 0,path:t.node.path}})})),1)]):a("NoResults")],1)])}),[],!1,null,null,null);"function"==typeof n&&n(r);e.default=r.exports},"8YFQ":function(t,e,a){},A6W1:function(t,e,a){"use strict";a("TeQF"),a("07d7");var o={props:["author"],computed:{GetAuthorInfo:function(){var t=this,e=this.$static.allAuthors.edges.filter((function(e){return e.node.id==t.author.id}));return e.length>0?e[0].node:null}}},s=(a("pRWC"),a("KHd+")),n=a("Kw5r"),r=n.a.config.optionMergeStrategies.computed,i={allAuthors:{edges:[{node:{id:"jay",name:"Jay",twitter:"JayAgonoy"}},{node:{id:"koziichu",name:"KoziiChu",twitter:"koziichu"}},{node:{id:"pidge",name:"Pidge",twitter:"vg_pidge"}},{node:{id:"monty",name:"Monty",twitter:"MontySeelana"}}]}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=i:(e.__staticData=n.a.observable({data:i}),e.computed=r({$static:function(){return e.__staticData.data}},e.computed))},u=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.GetAuthorInfo?e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{src:a("cukU")("./"+this.GetAuthorInfo.id+".png")}}),e("g-link",{staticClass:"author__name",attrs:{to:this.author.path}},[this._v("\n    "+this._s(this.GetAuthorInfo.name)+"\n  ")])],1):this._e()}),[],!1,null,"3ca14a28",null);"function"==typeof c&&c(u);e.a=u.exports},EHoU:function(t,e,a){"use strict";a("Eyrz")},Eyrz:function(t,e,a){},pRWC:function(t,e,a){"use strict";a("8YFQ")}}]);