(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3mJ2":function(t,e,r){"use strict";r.r(e);r("TeQF"),r("07d7"),r("yq1k"),r("JTJg"),r("SYor"),r("rB9j"),r("hByQ"),r("pNMO"),r("4Brf"),r("oVuX"),r("2B1R");var o={components:{AuthorBubble:r("pcxK").a},metaInfo:{title:"Hello, world!"},data:function(){return{search:""}},computed:{GetCreatorInfo:function(){var t=this,e=this.$page.allAuthors.edges.filter((function(e){return e.node.id==t.$page.author.id}));return e.length>0?e[0].node:null},searchResults:function(){var t=this;return this.$page.articles.edges.filter((function(e){return e.node.title.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.description.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.tags.map((function(t){return t.title})).join(" ").toLowerCase().includes(t.search.toLowerCase().trim())}))}}},s=(r("Vn9X"),r("KHd+")),n=null,a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FullLayout",{attrs:{Align:"flex-start"}},[r("div",{staticClass:"creator-content"},[r("Row",{staticClass:"header"},[r("AuthorBubble",{staticClass:"bubble",attrs:{author:t.GetCreatorInfo,size:128}}),r("PageHeader",{attrs:{title:t.GetCreatorInfo.name+"'s Articles",subtitle:t.GetCreatorInfo.description}})],1),r("SearchBar",{attrs:{placeholder:"Search articles"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.searchResults.length>0?r("div",[r("div",{staticClass:"posts"},t._l(t.searchResults,(function(t){return r("PostButton",{key:t.node.id,staticClass:"post-card",attrs:{width:450,background:t.node.hero_image,title:t.node.title,subtitle:t.node.series,description:t.node.description,date:t.node.published_date,timeToRead:t.node.timeToRead,tags:t.node.tags,author:t.node.authors&&t.node.authors.length>0?t.node.authors[0]:void 0,path:t.node.path}})})),1)]):r("NoResults",{attrs:{title:"Sorry, your search didn't return any articles.",description:"Think we should add something? Got a story for us?"}})],1),r("SEO",{attrs:{titleForce:"",title:t.GetCreatorInfo.name+"'s Articles - NewsDrop",desc:"NewsDrop is a new(s) initiative from Kawa Entertainment. Our mission is to improve the whole Vtuber community, starting with sharing knowledge and connecting fans.",img:"/news-drop.png"}})],1)}),[],!1,null,null,null);"function"==typeof n&&n(a);e.default=a.exports},UDAG:function(t,e,r){},Vn9X:function(t,e,r){"use strict";r("UDAG")}}]);