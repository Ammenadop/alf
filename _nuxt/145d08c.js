(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{442:function(e,t,n){"use strict";var r=n(11),l=(n(43),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),o=n(7),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},443:function(e,t,n){"use strict";var r=n(11),l=(n(43),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),o=n(7),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},444:function(e,t,n){"use strict";var r=n(11),l=(n(43),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),o=n(7),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},605:function(e,t,n){"use strict";n(33),n(21),n(27),n(37),n(38),n(23),n(19),n(46),n(44),n(45);var r=n(9);n(10);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=l(this.files);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(r.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},v=n(7),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},676:function(e,t,n){},677:function(e,t,n){},767:function(e,t,n){"use strict";n(676)},768:function(e,t,n){"use strict";n(677)},831:function(e,t,n){"use strict";n.r(t);n(23);var r,l=n(11),o=n(9),c=(n(436),n(87),n(437)),d=n.n(c),m=(n(438),n(439)),v=n.n(m),f=(n(43),n(10),n(173),n(133),n(69)),h=n(442),_=n(443),y=n(444),C=n(605),k=n(460),w=n.n(k),S=(n(461),{name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(r={CustomStylesValidation:h.a,BrowserDefaultsValidation:_.a,ServerSideValidation:y.a},Object(o.a)(r,v.a.name,v.a),Object(o.a)(r,d.a.name,d.a),Object(o.a)(r,"FileInput",C.a),Object(o.a)(r,"flatPicker",w.a),r),data:function(){return{validated:!1,seen:!0,isLoading:!1,model:{selectedDay:null,selectedShift:null,selectedDeck:null,adult:0,kid:0,infant:0,aTotal:0,kTotal:0,discount:0,stotal:0,total:0,agree:!1,link:""},error:!1,load:!0}},methods:{getcat:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.prev=1,r=n.$route.params.id,t.next=5,f.a.collection("payments").getOne(r);case 5:l=t.sent,n.model=l,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n.error=!0;case 12:n.load=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},formatDates:function(e){var t=e.split("/");e="".concat(t[2],"-").concat(t[1],"=").concat(t[0]);return new Date(e).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})},save:function(){var e=this;e.isLoading=!0,setTimeout(Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.location.href=e.model.link,e.isLoading=!1;case 2:case"end":return t.stop()}}),t)}))),1e3)}},mounted:function(){this.getcat()}}),x=(n(767),n(768),n(7)),component=Object(x.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-2"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v("Payment")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt-3 d-flex flex-wrap justify-content-center"},[t("div",{staticClass:"coln"},[0==e.error&&0==e.load?t("h1",{staticClass:"text-center",staticStyle:{"margin-top":"4rem"}},[e._v("\n        BOOKING SUMMARY\n      ")]):e._e(),e._v(" "),1==e.error&&0==e.load?t("h2",{staticClass:"text-center",staticStyle:{"margin-top":"4rem"}},[e._v("\n        Invalid link or the link has expired. Please Contact the\n        Administration.\n      ")]):e._e(),e._v(" "),0==e.error&&0==e.load?t("div",{staticClass:"boxes"},[t("div",{staticClass:"lines"},[t("i",{staticClass:"fas fa-calendar-check"}),e._v(" "),t("h3",{staticStyle:{"margin-left":"8px"}},[e._v("\n            "+e._s(e.model.selectedDay?e.formatDates(e.model.selectedDay):"Date NA")+"\n          ")])]),e._v(" "),t("div",{staticClass:"lines"},[t("i",{staticClass:"fas fa-clock"}),e._v(" "),t("h3",{staticStyle:{"margin-left":"6px"}},[e._v("\n            "+e._s(e.model.selectedShift?e.model.selectedShift:"Shift NA")+"\n          ")])]),e._v(" "),t("div",{staticClass:"lines"},[t("i",{staticClass:"fas fa-couch"}),e._v(" "),t("h3",[e._v("\n            "+e._s(e.model.selectedDeck?"No Deck"==e.model.selectedDeck?"Middle Deck":e.model.selectedDeck:"Deck NA")+"\n          ")])]),e._v(" "),t("div",{staticClass:"lines1",staticStyle:{"margin-top":"2rem"}},[t("h3",[e._v("Adult(s) : X "+e._s(e.model.adult))]),e._v(" "),t("h3",[e._v("Rs "+e._s(e.model.aTotal))])]),e._v(" "),t("div",{staticClass:"lines1 mb-2"},[t("h3",[e._v("Kids(s) : X "+e._s(e.model.kid))]),e._v(" "),t("h3",[e._v("Rs "+e._s(e.model.kTotal))])]),e._v(" "),t("div",{staticClass:"lines1 mb-2"},[t("h3",[e._v("Infant(s) : X "+e._s(e.model.infant))]),e._v(" "),t("h3",[e._v("Rs 0")])]),e._v(" "),t("div",{staticClass:"divider"}),e._v(" "),t("div",{staticClass:"lines1 mt-2"},[t("h3",[e._v("Sub Total")]),e._v(" "),t("h3",[e._v("Rs "+e._s(e.model.stotal))])]),e._v(" "),t("div",{staticClass:"lines1 mt-2"},[t("h3",[e._v("Discount")]),e._v(" "),t("h3",[e._v("- Rs "+e._s(e.model.discount))])]),e._v(" "),t("div",{staticClass:"divider"}),e._v(" "),t("div",{staticClass:"lines1 mt-2"},[t("h3",[e._v("Total (Including GST)")]),e._v(" "),t("h3",[e._v("Rs "+e._s(e.model.total))])]),e._v(" "),t("div",{staticClass:"d-flex mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.agree,expression:"model.agree"}],staticClass:"inp mr-2",attrs:{type:"checkbox",disabled:e.isLoading},domProps:{checked:Array.isArray(e.model.agree)?e._i(e.model.agree,null)>-1:e.model.agree},on:{change:function(t){var n=e.model.agree,r=t.target,l=!!r.checked;if(Array.isArray(n)){var o=e._i(n,null);r.checked?o<0&&e.$set(e.model,"agree",n.concat([null])):o>-1&&e.$set(e.model,"agree",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.model,"agree",l)}}}),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"bt"},[0==e.isLoading?t("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:0==e.model.agree},on:{click:function(t){return e.save()}}},[e._v("\n            Proceed to Payment\n          ")]):e._e(),e._v(" "),1==e.isLoading?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Processing . Please Wait...\n            "),t("p",{staticClass:"spinner"})]):e._e()],1)]):e._e()])])],1)}),[function(){var e=this,t=e._self._c;return t("h4",[e._v("\n            I have read and agree to Alfresco Grand's\n            "),t("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://alfrescogrand.com/Termsandconditions"}},[e._v("terms and conditions")])])}],!1,null,"e8df03c2",null);t.default=component.exports}}]);