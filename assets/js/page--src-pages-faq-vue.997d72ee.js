(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5Nvc":function(t,e,n){},"9BnF":function(t,e,n){"use strict";n("5Nvc")},JTJg:function(t,e,n){"use strict";var r=n("I+eb"),s=n("4zBA"),i=n("WjRb"),a=n("HYAF"),o=n("V37c"),c=n("qxPZ"),u=s("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(o(a(this)),o(i(t)),arguments.length>1?arguments[1]:void 0)}})},RclF:function(t,e,n){"use strict";n.r(e);n("TeQF"),n("07d7"),n("yq1k"),n("JTJg"),n("SYor"),n("rB9j"),n("hByQ");var r={components:{},metaInfo:function(){return this.$seo({title:"FAQ",openGraph:{title:"Kawa Entertainment - FAQ"},twitter:{title:"Kawa Entertainment - FAQ"}})},data:function(){return{search:""}},computed:{searchResults:function(){var t=this;return this.$page.allFaQs.edges.filter((function(e){return e.node.question.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.answer.toLowerCase().includes(t.search.toLowerCase().trim())}))}}},s=(n("9BnF"),n("KHd+")),i=null,a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FullLayout",{attrs:{Align:"flex-start"}},[n("div",{staticClass:"faq-content"},[n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",name:"search",id:"search",placeholder:"Search for questions"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t.searchResults.length>0?n("div",t._l(t.searchResults,(function(e){return n("div",{key:e.node.id,staticClass:"faq-item"},[n("h5",[t._v(t._s(e.node.question))]),n("p",[t._v("\n          "+t._s(e.node.answer)+"\n        ")])])})),0):n("div",{staticClass:"no-results"},[n("p",[t._v("Your search didn't return any results. Please try again.")]),n("p",[t._v("\n        Still can't find what you're looking for? Consider messaging us on\n        "),n("a",{attrs:{href:"https://twitter.com/kawa_entertain"}},[t._v("Twitter")]),t._v("!\n      ")])])])])}),[],!1,null,null,null);"function"==typeof i&&i(a);e.default=a.exports},TeQF:function(t,e,n){"use strict";var r=n("I+eb"),s=n("tycR").filter;r({target:"Array",proto:!0,forced:!n("Hd5f")("filter")},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},yq1k:function(t,e,n){"use strict";var r=n("I+eb"),s=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);