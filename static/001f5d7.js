(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("1b7833da",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","amber","orange","deep-orange","brown","blue-grey"]}},methods:{getRandomColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}},props:{info:{type:Object}}},o=n(48),c=n(61),l=n.n(c),m=n(350),d=n(287),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("v-icon",{attrs:{color:t.getRandomColor()+" "+(t.$vuetify.theme.dark?"lighten-2":"darken-2")}},[t._v(t._s(t.info.icon))])],1),t._v(" "),n("td",[t._v(t._s(t.info.name)),t._l(t.info.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"ml-1 font-weight-light",attrs:{small:"",color:t.getRandomColor()+" "+(t.$vuetify.theme.dark?"darken-4":"lighten-4")}},[t._v(t._s(e))])}))],2)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VChip:m.a,VIcon:d.a})},348:function(t,e,n){"use strict";n(328)},349:function(t,e,n){var r=n(27)(!1);r.push([t.i,"p:last-child{margin-bottom:0}pre{white-space:pre-wrap;overflow:auto!important}",""]),t.exports=r},373:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(84),n(12),n(67),{head:{title:"Moenupa's Homepage",meta:[{hid:"keywords",name:"keywords",content:"Moenupa"},{hid:"keywords",name:"keywords",content:"Homepage"},{hid:"description",name:"description",content:"Moenupa's Personal Homepage"}]},data:function(){return{panel:0,snackbar:!1,snackbar_text:"snackbar_init",interestlist:[{icon:"mdi-music-box",name:"Music",tags:["Pure","Piano"]},{icon:"mdi-chart-box",name:"Machine Learning",tags:[]},{icon:"mdi-gamepad-circle",name:"Gaming",tags:["WOT","Steam"]},{icon:"mdi-web-box",name:"Front-End",tags:["Vue.js","Nuxt.js"]}],courselist:{comp:[{icon:"mdi-code-greater-than",name:"Computational Thinking",tags:["COMP1002"]},{icon:"mdi-account-group",name:"Freshmen Seminar",tags:["COMP1901"]},{icon:"mdi-currency-sign",name:"Programming Fundamentals",tags:["COMP1011"]},{icon:"mdi-laptop",name:"Introduction to Computer Systems",tags:["COMP1411"]},{icon:"mdi-chart-scatter-plot",name:"Introduction to Data Analysis",tags:["COMP1433"]},{icon:"mdi-iframe-array",name:"Data Structures",tags:["COMP2011"]},{icon:"mdi-code-braces-box",name:"Object-Oriented Programming",tags:["COMP2021"]},{icon:"mdi-database",name:"Database Systems",tags:["COMP2411"]},{icon:"mdi-network",name:"Computer Networking",tags:["COMP2322"]},{icon:"mdi-cpu-64-bit",name:"Computer Organization",tags:["COMP2421"]},{icon:"mdi-linux",name:"Operating Systems",tags:["COMP2432"]},{icon:"mdi-code-not-equal-variant",name:"Web Application",tags:["COMP3421"]}],other:[{icon:"mdi-book",name:"Splendours of Imperial China",tags:["CC1C15P"]},{icon:"mdi-tools",name:"Engineering and Environmental Management",tags:["ME1D01"]},{icon:"mdi-account-group",name:"Tomorrow's Leaders",tags:["APSS1L01"]},{icon:"mdi-format-letter-case",name:"English for University Studies",tags:["ELC1013"]},{icon:"mdi-format-annotation-plus",name:"Advanced English Reading and Writing Skills",tags:["ELC2011"]},{icon:"mdi-progress-question",name:"Introductory Probability",tags:["AMA1104"]},{icon:"mdi-chart-bell-curve",name:"Calculus for Engineers",tags:["AMA1130"]},{icon:"mdi-vector-curve",name:"Mathematics Ⅰ",tags:["AMA2111"]}]},gistlist:["58f69668a4db5aa5da0b74b901230ffc","5848c95b83cb449f79e14b16615039fc","30493d0c7ead93d676b4d6c8a29dbb8a","dd5e2c295036bcfa7251a8dfe5facabc","aab911df7d12ffabb0ff9e8cb5545597"],gists:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.gistlist.length)){e.next=8;break}return e.next=4,fetch("https://api.github.com/gists/"+t.gistlist[i]).then((function(t){return t.json()}));case 4:t.gists[i]=e.sent;case 5:i++,e.next=1;break;case 8:case"end":return e.stop()}}),e)})))()})),methods:{copy:function(text){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$copyText(text);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},mounted:function(){}}),c=(n(348),n(48)),l=n(61),m=n.n(l),d=n(296),v=n(330),f=n(363),h=n(374),_=n(365),C=n(366),k=n(367),x=n(368),y=n(375),w=n(287),M=n(364),P=n(369),O=n(370),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"main-wrapper"},[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"pa-4 mt-4",attrs:{id:"profile",justify:"center",align:"center"}},[n("Profile")],1)],1)],1),t._v(" "),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"6",xl:"5"}},[n("v-card",{staticClass:"pa-4 mb-4",attrs:{id:"introduction"}},[n("h2",{staticClass:"text-center"},[t._v("Introduction")]),t._v(" "),n("p",[t._v("👋 Hello, there!")]),t._v(" "),n("p",[t._v("\n          I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I\n          started the minor in mathematics in Oct, 2020. I am taking COMP3421\n          (Web Application Design and Development) this semester.\n        ")])]),t._v(" "),n("v-card",{staticClass:"pa-4 mb-4",attrs:{id:"interests",justify:"center",align:"center"}},[n("h2",[t._v("Interests")]),t._v(" "),n("v-simple-table",{staticClass:"table text-left m-0"},[n("tbody",t._l(t.interestlist,(function(e,r){return n("IconRow",{key:r,attrs:{info:e,len:t.interestlist.length}})})),1)])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"4"}},[n("v-expansion-panels",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.gists,(function(e,r){return n("v-expansion-panel",{key:r},[e.files?n("v-expansion-panel-header",[t._v(t._s(e.files[Object.keys(e.files)[0]].filename))]):t._e(),t._v(" "),e.files?n("v-expansion-panel-content",[n("pre",{domProps:{innerHTML:t._s(e.files[Object.keys(e.files)[0]].content)}}),t._v(" "),n("v-divider",{staticClass:"mt-2 mb-1"}),t._v(" "),n("v-btn",{attrs:{text:"","x-small":"",plain:"",href:e.html_url,color:"purple"+(t.$vuetify.theme.dark?" lighten-2":"")}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-github")]),t._v("github")],1),t._v(" "),n("v-btn",{attrs:{text:"","x-small":"",plain:"",color:"green"},on:{click:function(n){t.snackbar_text="git clone "+e.git_pull_url,t.copy(t.snackbar_text),t.snackbar=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-git")]),t._v("git\n            ")],1),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{text:"",disabled:"","x-small":""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-update")]),t._v("updated:\n              "+t._s(new Date(e.updated_at).toString().slice(4,21)))],1)],1):t._e()],1)})),1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6",xl:"3"}},[n("v-card",{staticClass:"pa-4",attrs:{justify:"center",align:"center"}},[n("h2",[t._v("Courses")]),t._v(" "),n("v-simple-table",{staticClass:"m-0"},[n("tbody",t._l(t.courselist.comp,(function(t){return n("IconRow",{key:t.id,attrs:{info:t}})})),1)])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6",xl:"3"}},[n("v-card",{staticClass:"pa-4",attrs:{justify:"center",align:"center"}},[n("h2",[t._v("Courses")]),t._v(" "),n("v-simple-table",{staticClass:"m-0"},[n("tbody",t._l(t.courselist.other,(function(t){return n("IconRow",{key:t.id,attrs:{info:t}})})),1)])],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:"2000",vertical:!0},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"red lighten-2",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[n("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v("\n        Close\n      ")],1)]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    Copied to Clipboard:\n    "),n("pre",{staticClass:"d-inline-block text-truncate"},[t._v(t._s(t.snackbar_text))])])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{IconRow:n(329).default}),m()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:_.a,VExpansionPanel:C.a,VExpansionPanelContent:k.a,VExpansionPanelHeader:x.a,VExpansionPanels:y.a,VIcon:w.a,VRow:M.a,VSimpleTable:P.a,VSnackbar:O.a})}}]);