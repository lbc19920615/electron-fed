(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151c3bcc"],{"570f":function(t,e,n){},7277:function(t,e,n){"use strict";n("570f")},"82ce":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"page-view-test"},[n("div",{staticClass:"page-view-test__scroller"},[n("json-viewer",{attrs:{value:t.systemInfo,"expand-depth":5,copyable:"",boxed:"",sort:""}})],1),n("a-button",{on:{click:t.getSystemInfo}},[t._v("get system info")])],1)},o=[],i=n("a358"),u={name:"Test",data:function(){return{loading:!1,currentPath:"",systemInfo:{}}},methods:{getSystemInfo:function(){var t=this;this.loading=!0,Object(i["b"])().then((function(e){if(0!==e.code)return!1;t.loading=!1,t.systemInfo=e.data}))}}},s=u,c=(n("7277"),n("2877")),r=Object(c["a"])(s,a,o,!1,null,"8e41f606",null);e["default"]=r.exports},a358:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return c}));var a=n("b775"),o={outApi:"/api/v1/outApi",openDir:"/api/v1/example/openLocalDir",uploadFile:"/api/v1/example/uploadFile",executeJS:"/api/v1/example/executeJS",autoLaunchEnable:"/api/v1/setting/autoLaunchEnable",autoLaunchDisable:"/api/v1/setting/autoLaunchDisable",autoLaunchIsEnabled:"/api/v1/setting/autoLaunchIsEnabled",getSystemInfo:"/api/v1/example/getSystemInfo"};function i(t){return Object(a["b"])({url:o.getSystemInfo,method:"post",data:t})}function u(t,e){return Object(a["b"])({url:o[t],method:"post",data:e})}function s(t){return Object(a["b"])({url:o.openDir,method:"post",data:t})}function c(t){return Object(a["b"])({url:o.executeJS,method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-151c3bcc.6a57237c.js.map