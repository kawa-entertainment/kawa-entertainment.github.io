(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{L0Z4:function(t,e,n){"use strict";n("le1o")},T4o3:function(t,e,n){},YXoB:function(t,e,n){"use strict";n("T4o3")},hedS:function(t,e,n){"use strict";n.r(e);n("07d7"),n("PKPk"),n("3bBZ"),n("Kz25"),n("mGGf");var a=n("8U9E"),i=n.n(a),r=n("kUs/"),l=n("Iab2"),o={components:{FileSelect:r.a},data:function(){return{color:"og",isSaving:!1,errorText:""}},methods:{SaveKalendar:function(){var t=this;this.isSaving=!0,this.errorText=null;var e=new Blob(['<svg\n        viewBox="0 0 600 400"\n        width="0"\n        height="0"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n      >\n        <defs>\n          <filter id="asian">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values=" 1.000  0.000  0.000  0.000  0.000 \n                       0.000  1.000  0.000  0.000  0.000 \n                       0.000  0.000  0.700  0.000  0.000 \n                       0.000  0.000  0.000  1.000  0.000"\n            />\n          </filter>\n\n          <filter id="black">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 0.4 0 0 0\n                      0 0 0.3 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n\n          <filter id="brown">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 0.4 0 0 0\n                      0 0 0.2 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n\n          <filter id="white">\n            <feColorMatrix\n              in="SourceGraphic"\n              type="matrix"\n              values="1.5 0 0 0 0\n                      0 1 0 0 0\n                      0 0 1 0 0\n                      0 0 0 1 0"\n            />\n          </filter>\n        </defs>\n      </svg>'],{type:"image/svg+xml"}),n=URL.createObjectURL(e);i.a.toBlob(document.getElementById("test"),{bgcolor:"transparent",width:500,height:200,style:{filter:"grayscale(95%) saturate(120%) brightness(0.9) contrast(1.2) url('".concat(n,"#asian')")}}).then((function(e){t.isSaving=!1,l.saveAs(e,"thumbnail.png")})).catch((function(e){t.isSaving=!1,t.errorText="Sorry there was an error saving your thumbnail. Please try again."}))}}},s=(n("L0Z4"),n("KHd+")),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FullLayout",[n("div",{staticClass:"testing-color"},[n("FileSelect",{staticClass:"test",class:t.color,attrs:{id:"test",width:"500"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.color=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"asian"}},[t._v("Asian")]),n("option",{attrs:{value:"black"}},[t._v("Black")]),n("option",{attrs:{value:"brown"}},[t._v("Brown")]),n("option",{attrs:{value:"white"}},[t._v("White")]),n("option",{attrs:{value:"og"}},[t._v("OG")])]),n("div",{staticClass:"save"},[n("button",{on:{click:function(e){return t.SaveKalendar()}}},[t._v("Save Thumbnail")])]),n("svg",{attrs:{viewBox:"0 0 600 400",width:"0",height:"0","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("filter",{attrs:{id:"asian"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:" 1.000  0.000  0.000  0.000  0.000 \n                     0.000  1.000  0.000  0.000  0.000 \n                     0.000  0.000  0.700  0.000  0.000 \n                     0.000  0.000  0.000  1.000  0.000"}})],1),n("filter",{attrs:{id:"black"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 0.4 0 0 0\n                    0 0 0.3 0 0\n                    0 0 0 1 0"}})],1),n("filter",{attrs:{id:"brown"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 0.4 0 0 0\n                    0 0 0.2 0 0\n                    0 0 0 1 0"}})],1),n("filter",{attrs:{id:"white"}},[n("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"1.5 0 0 0 0\n                    0 1 0 0 0\n                    0 0 1 0 0\n                    0 0 0 1 0"}})],1)])])],1)])}),[],!1,null,null,null);e.default=c.exports},"kUs/":function(t,e,n){"use strict";var a=n("xSSU"),i={name:"FileSelect",components:{Close:n.n(a).a},props:{top:{default:"unset"},right:{default:"unset"},bottom:{default:"unset"},left:{default:"unset"},color:{default:"#f0f0f0bb"},width:{default:200},height:{default:200},text:{default:"Add Image"}},data:function(){return{imageData:null}},methods:{disableBox:function(){this.imageData="_"},chooseImage:function(){this.$refs.fileInput.click()},onSelectFile:function(){var t=this,e=this.$refs.fileInput.files;if(e&&e[0]){var n=new FileReader;n.onload=function(e){t.imageData=e.target.result},n.readAsDataURL(e[0]),this.$emit("input",e[0])}}}},r=(n("YXoB"),n("KHd+")),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-image-input",class:t.imageData?"has-image":"",style:{"background-image":"url("+t.imageData+")",width:t.width+"px",height:t.height+"px",top:t.top,right:t.right,bottom:t.bottom,left:t.left},on:{click:t.chooseImage}},[t.imageData?t._e():n("span",{staticClass:"placeholder",style:{"background-color":t.color}},[t._v("\n    "+t._s(t.text)+"\n  ")]),n("input",{ref:"fileInput",staticClass:"file-input",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{input:t.onSelectFile}})])}),[],!1,null,"53934108",null);e.a=l.exports},le1o:function(t,e,n){},xSSU:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:a,data:i,children:r=[]}=e,{class:l,staticClass:o,style:s,staticStyle:c,attrs:u={},...f}=i;return n("svg",{class:[l,o],style:[s,c],attrs:Object.assign({viewBox:"0 0 24 24"},u),...f},r.concat([n("path",{attrs:{d:"M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"}})]))}}}}]);