(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{430:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e||!t)throw new Error("instance & callback is required");var l=!1,r=function(){l||(l=!0,t&&t.apply(null,arguments))};o?e.$once("after-leave",r):e.$on("after-leave",r),setTimeout((function(){r()}),n+100)}},434:function(e,t,n){},435:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=71)}({0:function(e,t,n){"use strict";function o(e,t,n,o,l,r,c,d){var m,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),c?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},f._ssrRegister=m):l&&(m=d?function(){l.call(this,this.$root.$options.shadowRoot)}:l),m)if(f.functional){f._injectStyles=m;var v=f.render;f.render=function(e,t){return m.call(t),v(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,m):[m]}return{exports:e,options:f}}n.d(t,"a",(function(){return o}))},13:function(e,t){e.exports=n(169)},2:function(e,t){e.exports=n(88)},41:function(e,t){e.exports=n(430)},7:function(e,t){e.exports=n(3)},71:function(e,t,n){"use strict";n.r(t);var o=n(7),l=n.n(o),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-loading-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.background||""}},[n("div",{staticClass:"el-loading-spinner"},[e.spinner?n("i",{class:e.spinner}):n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?n("p",{staticClass:"el-loading-text"},[e._v(e._s(e.text))]):e._e()])])])};r._withStripped=!0;var c={data:function(){return{text:null,spinner:null,background:null,fullscreen:!0,visible:!1,customClass:""}},methods:{handleAfterLeave:function(){this.$emit("after-leave")},setText:function(text){this.text=text}}},d=n(0),component=Object(d.a)(c,r,[],!1,null,null,null);component.options.__file="packages/loading/src/loading.vue";var m=component.exports,f=n(2),v=n(13),h=n(41),y=n.n(h),C=l.a.extend(m),x={install:function(e){if(!e.prototype.$isServer){var t=function(t,o){o.value?e.nextTick((function(){o.modifiers.fullscreen?(t.originalPosition=Object(f.getStyle)(document.body,"position"),t.originalOverflow=Object(f.getStyle)(document.body,"overflow"),t.maskStyle.zIndex=v.PopupManager.nextZIndex(),Object(f.addClass)(t.mask,"is-fullscreen"),n(document.body,t,o)):(Object(f.removeClass)(t.mask,"is-fullscreen"),o.modifiers.body?(t.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach((function(e){var n="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]-parseInt(Object(f.getStyle)(document.body,"margin-"+e),10)+"px"})),["height","width"].forEach((function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"})),n(document.body,t,o)):(t.originalPosition=Object(f.getStyle)(t,"position"),n(t,t,o)))})):(y()(t.instance,(function(e){if(t.instance.hiding){t.domVisible=!1;var n=o.modifiers.fullscreen||o.modifiers.body?document.body:t;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),t.instance.hiding=!1}}),300,!0),t.instance.visible=!1,t.instance.hiding=!0)},n=function(t,n,o){n.domVisible||"none"===Object(f.getStyle)(n,"display")||"hidden"===Object(f.getStyle)(n,"visibility")?n.domVisible&&!0===n.instance.hiding&&(n.instance.visible=!0,n.instance.hiding=!1):(Object.keys(n.maskStyle).forEach((function(e){n.mask.style[e]=n.maskStyle[e]})),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),o.modifiers.fullscreen&&o.modifiers.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),n.domVisible=!0,t.appendChild(n.mask),e.nextTick((function(){n.instance.hiding?n.instance.$emit("after-leave"):n.instance.visible=!0})),n.domInserted=!0)};e.directive("loading",{bind:function(e,n,o){var l=e.getAttribute("element-loading-text"),r=e.getAttribute("element-loading-spinner"),c=e.getAttribute("element-loading-background"),d=e.getAttribute("element-loading-custom-class"),m=o.context,mask=new C({el:document.createElement("div"),data:{text:m&&m[l]||l,spinner:m&&m[r]||r,background:m&&m[c]||c,customClass:m&&m[d]||d,fullscreen:!!n.modifiers.fullscreen}});e.instance=mask,e.mask=mask.$el,e.maskStyle={},n.value&&t(e,n)},update:function(e,n){e.instance.setText(e.getAttribute("element-loading-text")),n.oldValue!==n.value&&t(e,n)},unbind:function(e,n){e.domInserted&&(e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask),t(e,{value:!1,modifiers:n.modifiers})),e.instance&&e.instance.$destroy()}})}}},_=x,k=n(9),w=n.n(k),O=l.a.extend(m),j={text:null,fullscreen:!0,body:!1,lock:!1,customClass:""},S=void 0;O.prototype.originalPosition="",O.prototype.originalOverflow="",O.prototype.close=function(){var e=this;this.fullscreen&&(S=void 0),y()(this,(function(t){var n=e.fullscreen||e.body?document.body:e.target;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()}),300),this.visible=!1};var $=function(e,t,n){var o={};e.fullscreen?(n.originalPosition=Object(f.getStyle)(document.body,"position"),n.originalOverflow=Object(f.getStyle)(document.body,"overflow"),o.zIndex=v.PopupManager.nextZIndex()):e.body?(n.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach((function(t){var n="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]+"px"})),["height","width"].forEach((function(t){o[t]=e.target.getBoundingClientRect()[t]+"px"}))):n.originalPosition=Object(f.getStyle)(t,"position"),Object.keys(o).forEach((function(e){n.$el.style[e]=o[e]}))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!l.a.prototype.$isServer){if("string"==typeof(e=w()({},j,e)).target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&S)return S;var t=e.body?document.body:e.target,n=new O({el:document.createElement("div"),data:e});return $(e,t,n),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),e.fullscreen&&e.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),t.appendChild(n.$el),l.a.nextTick((function(){n.visible=!0})),e.fullscreen&&(S=n),n}};t.default={install:function(e){e.use(_),e.prototype.$loading=P},directive:_,service:P}},9:function(e,t){e.exports=n(170)}})},668:function(e,t,n){},669:function(e,t,n){},759:function(e,t,n){"use strict";n(668)},760:function(e,t,n){"use strict";n(669)},826:function(e,t,n){"use strict";n.r(t);n(10),n(251),n(87);var o,l=n(172),r=n.n(l),c=n(9),d=(n(436),n(437)),m=n.n(d),f=(n(438),n(439)),v=n.n(f),h=n(130),y=n(117),C={layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(o={BasePagination:n(431).b,RouteBreadCrumb:y.a},Object(c.a)(o,v.a.name,v.a),Object(c.a)(o,m.a.name,m.a),o),data:function(){return{seen1:!0,seen2:!1,sin:!0,arr:[],model:{name:"",phone:"",email:"",address:"",gstin:"",sgst:"",cgst:"",owner_email:""}}},methods:{getData:function(){var e=this,em=e.$store.state.email;e.tableData=[],e.seen2=!1,e.seen1=!0,h.b.collection("profile").where("owner_email","==",em).get().then((function(t){e.tableData=[],t.forEach((function(t){e.tableData.push(t.data())})),e.model=e.tableData[0],void 0===e.model&&(e.model={name:"",phone:"",email:"",address:"",gstin:"",sgst:"",cgst:"",owner_email:""},e.model.email=em),e.seen2=!0,e.seen1=!1})).catch((function(e){console.log("Error getting documents: ",e)}))},update1:function(){var e=this;""!=e.model.name&&""!=e.model.phone&&""!=e.model.address&&""!=e.model.gstin?(e.sin=!1,h.b.collection("profile").doc(e.model.email).set({name:e.model.name,email:e.model.email,phone:e.model.phone,gstin:e.model.gstin,address:e.model.address,cgst:e.model.cgst,sgst:e.model.sgst,owner_email:e.model.owner_email}).then((function(){setTimeout((function(){e.sin=!0,r()({showClose:!0,message:"Profile updated successfuly!",type:"success"})}),1500)})).catch((function(){e.sin=!0,r()({showClose:!0,message:"Something went wrong!",type:"warning"})}))):r()({showClose:!0,message:"All fields are required!",type:"warning"})}},mounted:function(){this.getData()}},x=(n(759),n(760),n(7)),component=Object(x.a)(C,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-bread-crumb")],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",[t("card",{staticClass:"no-border-card",attrs:{"body-classes":"px-0 pb-1","footer-classes":"pb-2"}},[t("div",[t("div",{staticClass:"bt"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Restaurant Name",name:"Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Email",name:"Email","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Phone",name:"Phone","success-message":"Looks good!",rules:"required"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Address",name:"Address","success-message":"Looks good!",rules:"required"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"GSTIN",name:"Table type","success-message":"Looks good!",rules:"required"},model:{value:e.model.gstin,callback:function(t){e.$set(e.model,"gstin",t)},expression:"model.gstin"}})],1),e._v(" "),t("div",{staticClass:"col-md-12 mb-4"},[1==e.sin?t("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.update1()}}},[e._v("\n                Update\n              ")]):t("base-button",{staticClass:"btn btn-success d-flex",attrs:{type:"button"}},[e._v("\n                Updating\n                "),t("p",{staticClass:"spinner"})])],1)])])])],1)])],1)}),[],!1,null,"9f3f5e78",null);t.default=component.exports}}]);