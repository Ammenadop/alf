(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{456:function(t,e,r){"use strict";r(464);var o=r(457);e.a={mounted:function(){Object(o.d)()}}},457:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return C})),r.d(e,"b",(function(){return j})),r.d(e,"c",(function(){return y}));r(33),r(21),r(27),r(37),r(38);var o=r(9),l=r(30);function n(t,e){for(var r in e)"object"!==Object(l.a)(e[r])?t[r]=e[r]:n(t[r],e[r])}var c=r(464),d=r.n(c);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",orange:"#ffc1c1",transparent:"transparent"}};var f=!1;function C(){var t,e,r,o;f||(n(d.a,(t=h.colors,e=h.mode,r=h.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.warning},line:{tension:.4,borderWidth:4,borderColor:t.theme.warning,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.warning},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[700],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[700],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),f=!0)}var _={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},j={scales:{yAxes:[{gridLines:{color:h.colors.gray[800],zeroLineColor:h.colors.gray[800]}}]}},y=(v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),v(v({},_),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}));v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},603:function(t,e,r){"use strict";var o=r(463),l=r(456);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,l.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},604:function(t,e,r){"use strict";var o=r(463),l=r(456);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,l.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},607:function(t,e,r){var map={"./af":468,"./af.js":468,"./ar":469,"./ar-dz":470,"./ar-dz.js":470,"./ar-kw":471,"./ar-kw.js":471,"./ar-ly":472,"./ar-ly.js":472,"./ar-ma":473,"./ar-ma.js":473,"./ar-sa":474,"./ar-sa.js":474,"./ar-tn":475,"./ar-tn.js":475,"./ar.js":469,"./az":476,"./az.js":476,"./be":477,"./be.js":477,"./bg":478,"./bg.js":478,"./bm":479,"./bm.js":479,"./bn":480,"./bn-bd":481,"./bn-bd.js":481,"./bn.js":480,"./bo":482,"./bo.js":482,"./br":483,"./br.js":483,"./bs":484,"./bs.js":484,"./ca":485,"./ca.js":485,"./cs":486,"./cs.js":486,"./cv":487,"./cv.js":487,"./cy":488,"./cy.js":488,"./da":489,"./da.js":489,"./de":490,"./de-at":491,"./de-at.js":491,"./de-ch":492,"./de-ch.js":492,"./de.js":490,"./dv":493,"./dv.js":493,"./el":494,"./el.js":494,"./en-au":495,"./en-au.js":495,"./en-ca":496,"./en-ca.js":496,"./en-gb":497,"./en-gb.js":497,"./en-ie":498,"./en-ie.js":498,"./en-il":499,"./en-il.js":499,"./en-in":500,"./en-in.js":500,"./en-nz":501,"./en-nz.js":501,"./en-sg":502,"./en-sg.js":502,"./eo":503,"./eo.js":503,"./es":504,"./es-do":505,"./es-do.js":505,"./es-mx":506,"./es-mx.js":506,"./es-us":507,"./es-us.js":507,"./es.js":504,"./et":508,"./et.js":508,"./eu":509,"./eu.js":509,"./fa":510,"./fa.js":510,"./fi":511,"./fi.js":511,"./fil":512,"./fil.js":512,"./fo":513,"./fo.js":513,"./fr":514,"./fr-ca":515,"./fr-ca.js":515,"./fr-ch":516,"./fr-ch.js":516,"./fr.js":514,"./fy":517,"./fy.js":517,"./ga":518,"./ga.js":518,"./gd":519,"./gd.js":519,"./gl":520,"./gl.js":520,"./gom-deva":521,"./gom-deva.js":521,"./gom-latn":522,"./gom-latn.js":522,"./gu":523,"./gu.js":523,"./he":524,"./he.js":524,"./hi":525,"./hi.js":525,"./hr":526,"./hr.js":526,"./hu":527,"./hu.js":527,"./hy-am":528,"./hy-am.js":528,"./id":529,"./id.js":529,"./is":530,"./is.js":530,"./it":531,"./it-ch":532,"./it-ch.js":532,"./it.js":531,"./ja":533,"./ja.js":533,"./jv":534,"./jv.js":534,"./ka":535,"./ka.js":535,"./kk":536,"./kk.js":536,"./km":537,"./km.js":537,"./kn":538,"./kn.js":538,"./ko":539,"./ko.js":539,"./ku":540,"./ku.js":540,"./ky":541,"./ky.js":541,"./lb":542,"./lb.js":542,"./lo":543,"./lo.js":543,"./lt":544,"./lt.js":544,"./lv":545,"./lv.js":545,"./me":546,"./me.js":546,"./mi":547,"./mi.js":547,"./mk":548,"./mk.js":548,"./ml":549,"./ml.js":549,"./mn":550,"./mn.js":550,"./mr":551,"./mr.js":551,"./ms":552,"./ms-my":553,"./ms-my.js":553,"./ms.js":552,"./mt":554,"./mt.js":554,"./my":555,"./my.js":555,"./nb":556,"./nb.js":556,"./ne":557,"./ne.js":557,"./nl":558,"./nl-be":559,"./nl-be.js":559,"./nl.js":558,"./nn":560,"./nn.js":560,"./oc-lnc":561,"./oc-lnc.js":561,"./pa-in":562,"./pa-in.js":562,"./pl":563,"./pl.js":563,"./pt":564,"./pt-br":565,"./pt-br.js":565,"./pt.js":564,"./ro":566,"./ro.js":566,"./ru":567,"./ru.js":567,"./sd":568,"./sd.js":568,"./se":569,"./se.js":569,"./si":570,"./si.js":570,"./sk":571,"./sk.js":571,"./sl":572,"./sl.js":572,"./sq":573,"./sq.js":573,"./sr":574,"./sr-cyrl":575,"./sr-cyrl.js":575,"./sr.js":574,"./ss":576,"./ss.js":576,"./sv":577,"./sv.js":577,"./sw":578,"./sw.js":578,"./ta":579,"./ta.js":579,"./te":580,"./te.js":580,"./tet":581,"./tet.js":581,"./tg":582,"./tg.js":582,"./th":583,"./th.js":583,"./tk":584,"./tk.js":584,"./tl-ph":585,"./tl-ph.js":585,"./tlh":586,"./tlh.js":586,"./tr":587,"./tr.js":587,"./tzl":588,"./tzl.js":588,"./tzm":589,"./tzm-latn":590,"./tzm-latn.js":590,"./tzm.js":589,"./ug-cn":591,"./ug-cn.js":591,"./uk":592,"./uk.js":592,"./ur":593,"./ur.js":593,"./uz":594,"./uz-latn":595,"./uz-latn.js":595,"./uz.js":594,"./vi":596,"./vi.js":596,"./x-pseudo":597,"./x-pseudo.js":597,"./yo":598,"./yo.js":598,"./zh-cn":599,"./zh-cn.js":599,"./zh-hk":600,"./zh-hk.js":600,"./zh-mo":601,"./zh-mo.js":601,"./zh-tw":602,"./zh-tw.js":602};function o(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=607},617:function(t,e,r){"use strict";r(23),r(55);var o=r(119),l={name:"progress-track-list",props:{itemLimit:{type:Number,default:4}},components:{BaseProgress:o.a},data:function(){return{items:[{id:1,img:"img/theme/bootstrap.jpg",title:"Argon Design System",progress:60,progressType:"orange"},{id:2,img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",progress:100,progressType:"green"},{id:3,img:"img/theme/sketch.jpg",title:"Black Dashboard",progress:72,progressType:"red"},{id:4,img:"img/theme/react.jpg",title:"React Material Dashboard",progress:90,progressType:"teal"},{id:5,img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",progress:100,progressType:"success"}]}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.items.slice(0,t.itemLimit),(function(r){return e("li",{key:r.id,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:r.img}})])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(r.title))]),t._v(" "),e("base-progress",{staticClass:"mb-0",attrs:{type:r.progressType,value:r.progress}})],1)])])})),0)}),[],!1,null,null,null);e.a=component.exports},618:function(t,e,r){"use strict";var o=r(9),l=(r(10),{name:"members-card",props:{showSearch:{type:Boolean,default:!0}},data:function(){return{membersSearch:"",members:[{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-1.jpg"},{name:"Alex Smith",status:"In a meeting",statusType:"danger",image:"img/theme/team-2.jpg"},{name:"Samantha Ivy",status:"Offline",statusType:"danger",image:"img/theme/team-3.jpg"},{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-4.jpg"},{name:"John Snow",status:"Online",statusType:"success",image:"img/theme/team-5.jpg"}]}}}),n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),t.showSearch?e("div",{staticClass:"card-header py-0"},[e("form",[e("div",{staticClass:"form-group mb-0"},[e("base-input",{staticClass:"input-group-lg input-group-flush mb-0",attrs:{"prepend-icon":"fas fa-search",placeholder:"Search",type:"search"},model:{value:t.membersSearch,callback:function(e){t.membersSearch=e},expression:"membersSearch"}})],1)])]):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.members,(function(r){return e("li",{key:r.image,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:Object(o.a)({alt:"Image placeholder",src:r.image},"alt",r.name)})])]),t._v(" "),e("div",{staticClass:"col ml--2"},[e("h4",{staticClass:"mb-0"},[e("a",{attrs:{href:"#!"}},[t._v(t._s(r.name))])]),t._v(" "),e("span",{class:"text-".concat(r.statusType)},[t._v("● ")]),t._v(" "),e("small",[t._v(t._s(r.status))])]),t._v(" "),t._m(1,!0)])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Team members")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-auto"},[t("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"}},[this._v("Add")])])}],!1,null,null,null);e.a=component.exports},619:function(t,e,r){"use strict";var o=r(9),l={data:function(){return{items:[{title:"Call with Dave",description:"10:30 AM",done:!0,checkType:"success"},{title:"Lunch meeting",description:"10:30 AM",done:!1,checkType:"warning"},{title:"Argon Dashboard Launch",description:"10:30 AM",done:!1,checkType:"info"},{title:"Winter Hackaton",description:"10:30 AM",done:!0,checkType:"danger"},{title:"Dinner with Family",description:"10:30 AM",done:!0,checkType:"success"}]}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("card",{attrs:{"body-classes":"p-0"}},[e("h5",{staticClass:"h3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("To do list")]),t._v(" "),e("ul",{staticClass:"list-group list-group-flush",attrs:{"data-toggle":"checklist"}},t._l(t.items,(function(r){return e("li",{key:r.title,staticClass:"checklist-entry list-group-item flex-column align-items-start py-4 px-4"},[e("div",{staticClass:"checklist-item",class:Object(o.a)({"checklist-item-checked":r.done},"checklist-item-".concat(r.checkType),r.checkType)},[e("div",{staticClass:"checklist-info"},[e("h5",{staticClass:"checklist-title mb-0"},[t._v(t._s(r.title))]),t._v(" "),e("small",[t._v(t._s(r.description))])]),t._v(" "),e("div",[e("base-checkbox",{attrs:{type:r.checkType},model:{value:r.done,callback:function(e){t.$set(r,"done",e)},expression:"item.done"}})],1)])])})),0)])}),[],!1,null,null,null);e.a=component.exports},620:function(t,e,r){"use strict";r(23);var o,l=r(9),n=(r(447),r(87),r(448)),c=r.n(n),d=(r(449),r(450)),m=r.n(d),v=(r(451),r(452)),h=r.n(v),f=(r(426),r(427)),C=r.n(f),_=(r(428),r(429)),j=r.n(_),y=(r(10),r(55),{name:"light-table",components:(o={},Object(l.a)(o,j.a.name,j.a),Object(l.a)(o,C.a.name,C.a),Object(l.a)(o,h.a.name,h.a),Object(l.a)(o,m.a.name,m.a),Object(l.a)(o,c.a.name,c.a),o),props:{itemLimit:{type:Number,default:9}},data:function(){return{projects:[{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/react.jpg",title:"React Material Dashboard",budget:"$4400 USD",status:"on schedule",statusType:"info",completion:90},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100}],currentPage:1}}}),w=r(7),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.projects.slice(0,t.itemLimit)}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:o.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(o.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(o.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(o.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(o.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:o.statusType,value:o.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(r){r.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light",attrs:{"aria-label":"Dropdown menu"}},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown",role:"list"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Light table")])])}],!1,null,null,null);e.a=component.exports},621:function(t,e,r){"use strict";var o={name:"map-card",data:function(){return{mapData:{AUS:760,BRA:900,CAN:120,DEU:1300,FRA:540,GBR:690,GEO:200,IND:200,ROU:600,RUS:757,USA:1800},points:[{name:"Brazil",centered:"BRA"},{name:"France",centered:"FRA"},{name:"Italy",centered:"ITA"},{name:"Oman",centered:"OMN"},{name:"Indonesia",centered:"IDN"},{name:"Romania",centered:"ROU"}]}}},l=r(7),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card widget-calendar"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("client-only",[e("world-map",{staticClass:"vector-map vector-map-sm",attrs:{"map-data":t.mapData,points:t.points}})],1),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"h3 mb-0"},[t._v("Real time")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-neutral",attrs:{href:"#!"}},[t._v("Action")])])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-group list-group-flush list my--3"},[e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/US.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("United States")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/DE.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Germany")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/GB.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Great Britain")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])])])}],!1,null,null,null);e.a=component.exports},793:function(t,e,r){"use strict";r.r(e);var o=r(457),l=r(603),n=r(604),c=r(131),d=r(119),m=r(117),v=r(118),h=r(617),f=r(618),C=r(619),_=r(620),j=r(621),y={layout:"DashboardLayout",components:{LineChart:l.a,BarChart:n.a,BaseHeader:c.a,BaseProgress:d.a,RouteBreadCrumb:m.a,StatsCard:v.a,TaskList:C.a,VectorMapCard:j.a,LightTable:_.a,ProgressTrackList:h.a,MembersCard:f.a},data:function(){return{bigLineChart:{chartData:{datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60],borderColor:"rgb(75, 192, 192)"}],labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},extraOptions:o.b},redBarChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}}}}},w=r(7),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6",attrs:{type:""}},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 d-inline-block mb-0"},[t._v("Alternative")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb breadcrumb-links"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[t._v("Dashboards")])]),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Alternative")])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-primary border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Tasks completed")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("8/24")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:30}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-info border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Contacts")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("123/267")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:0}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-danger border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Items sold")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("200/300")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:80}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-default border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Notifications")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("50/62")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:90}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"card-deck flex-column flex-xl-row"},[e("card",[e("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-uppercase text-muted ls-1 mb-1"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])])]),t._v(" "),e("line-chart",{ref:"bigChart",attrs:{height:350,"chart-data":t.bigLineChart.chartData,"extra-options":t.bigLineChart.extraOptions}})],1),t._v(" "),e("card",{attrs:{"header-classes":"bg-transparent"}},[e("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-uppercase text-muted ls-1 mb-1"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])])]),t._v(" "),e("bar-chart",{ref:"barChart",attrs:{height:350,"chart-data":t.redBarChart.chartData}})],1),t._v(" "),e("card",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h6",{staticClass:"surtitle"},[t._v("5/23 projects")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Progress track")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-neutral",attrs:{href:"#!"}},[t._v("Action")])])])]},proxy:!0}])},[t._v(" "),e("progress-track-list",{attrs:{"item-limit":5}})],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8"},[e("light-table",{attrs:{"item-limit":5}})],1),t._v(" "),e("div",{staticClass:"col-xl-4"},[e("vector-map-card")],1)]),t._v(" "),e("div",{staticClass:"card-deck flex-column flex-xl-row"},[e("members-card",{attrs:{"show-search":!1}}),t._v(" "),e("task-list"),t._v(" "),e("card",[e("h5",{staticClass:"h3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Progress track")]),t._v(" "),e("progress-track-list",{attrs:{"item-limit":5}})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);