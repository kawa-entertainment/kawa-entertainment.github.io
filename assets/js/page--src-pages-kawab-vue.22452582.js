(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1pHo":function(e,t,n){"use strict";n("ImY/")},"ImY/":function(e,t,n){},n7Os:function(e,t,n){"use strict";n.r(t);var r,o=n("HaE+"),a=(n("T63A"),n("2B1R"),n("QWBl"),n("07d7"),n("FZtP"),n("sMBO"),n("ls82"),n("2qj+")),c=n("TOfK"),i=n("BBiw"),s=a.a.connect("https://api.kawaentertainment.com/");var u,l,d,p={authTokenGetter:function(){return localStorage.getItem("VTS_AUTH_TOKEN")},authTokenSetter:function(e){localStorage.setItem("VTS_AUTH_TOKEN",e)},pluginName:"Kawab",pluginDeveloper:"Kawa Entertainment",port:8001,url:"ws://localhost:8001"},h={components:{Header:i.a},data:function(){return{connected:!1,roomID:1234,vts_connected:!1,authenticationToken:null,vts_connected2:!1,authenticationToken2:null,injecting:!1}},mounted:function(){},methods:{ConnectedToServer:function(){return s.connected||alert("Server is down."),s.connected},JoinRoom:function(e){var t=this;this.ConnectedToServer()&&(s.emit("join",{},(function(e){console.log(e),e.connected&&!e.error&&(t.connected=!0,t.roomID=e.data.roomID)})),s.on("adminMSG",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("adminMSG",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("update",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.injecting){e.next=2;break}return e.abrupt("return");case 2:if(t.vts_connected2||!(Object.entries(n).length>0)){e.next=4;break}return e.abrupt("return");case 4:return t.injecting=!0,o=Object.entries(n).map((function(e){return{id:e[0],value:e[1]}})),e.next=8,r.injectParameterData({faceFound:!0,mode:"set",parameterValues:o});case 8:t.injecting=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},ConnectToVTS:(d=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new c.ApiClient(p),this.vts_connected=!0,this.FetchVTSData(),this.JoinRoom();case 4:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)}),ConnectToVTS2:(l=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new c.ApiClient(p),this.vts_connected2=!0,this.JoinRoom();case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),FetchVTSData:(u=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.next=4,r.inputParameterList();case 4:e.sent.defaultParameters.forEach((function(e){t[e.name]=e.value})),s.emit("ping",{value:t}),this.FetchVTSData(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Failed:",e.t0.errorID,e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(){return u.apply(this,arguments)})}},f=(n("1pHo"),n("KHd+")),v=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[e.vts_connected||e.vts_connected2?n("div",{staticClass:"status"},[e._v("\n    Status: "+e._s(e.connected?"Live":"Offline")+"\n  ")]):e._e(),e.vts_connected||e.vts_connected2?n("div",{staticClass:"status"},[e._v("\n    Type: "+e._s(e.vts_connected?"Connected to VTS":"Connected to Booth")+"\n  ")]):e._e(),n("div",{staticClass:"buttons"},[e.vts_connected||e.vts_connected2?e._e():n("button",{on:{click:e.ConnectToVTS}},[e._v("\n      Click for Creator\n    ")]),e.vts_connected2||e.vts_connected?e._e():n("button",{on:{click:e.ConnectToVTS2}},[e._v("\n      Click for Booth\n    ")])]),e._m(0),n("SEO",{attrs:{title:"Kawab Dashboard",noIndex:""}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info"},[t("h5",[this._v("Instructions")]),t("p",[this._v("\n      Make sure you have plugins enabled for VtubeStudio and you approve the\n      plugin request from Kawa Entertainment!\n    ")]),t("p",[this._v("\n      If something doesn't work you might need to refresh and hit the button\n      again! We'll let you know\n    ")]),t("p",[t("b",[this._v("\n        Please do not change your model as it will currently break everything\n        lol, sorry.\n      ")])])])}],!1,null,"d3aa3e74",null);t.default=v.exports}}]);