(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{213:function(t,e,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("6f5fe587",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";n(213)},221:function(t,e,n){var r=n(43)(!1);r.push([t.i,".function-bar[data-v-7a58ddad]{--bar-width:4rem;--bar-margin:calc(var(--bar-width)*-1/5);position:fixed;left:5%;bottom:5%;min-height:var(--bar-width);font-size:1.4rem;width:var(--bar-width);border-radius:calc(var(--bar-width)/2)}.function-bar *[data-v-7a58ddad]{width:inherit;font-size:inherit}#functions[data-v-7a58ddad]{padding:calc(var(--bar-margin)*-1) 0}#functions>.btn[data-v-7a58ddad]{margin:var(--bar-margin) 0}#functions.collapse+#bar[data-v-7a58ddad],#functions.show+#bar[data-v-7a58ddad]{background-color:var(--light)}#functions.collapse+#bar[data-v-7a58ddad]{box-shadow:none!important}#functions.show+#bar[data-v-7a58ddad],#functions>.btn[data-v-7a58ddad]:hover,.function-bar[data-v-7a58ddad]{box-shadow:0 0 .5rem rgb(96 96 96/50%)!important}.btn[data-v-7a58ddad]{height:var(--bar-width);border-radius:calc(var(--bar-width)/2);border:none;background-color:transparent;text-align:center;padding:0}.btn[data-v-7a58ddad]:hover{background-color:var(--light);font-size:1.7rem}",""]),t.exports=r},227:function(t,e,n){"use strict";n.r(e);n(45);var r={data:function(){return{visible:!1}},methods:{scrollTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-50)}),20)},scrollListener:function(t){this.visible=window.scrollY>150},switchToDark:function(){$("html").attr("data-theme","dark"),$(".mdi-weather-sunny").each((function(i,t){$(t).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny")})),$(".alert-light").each((function(i,t){$(t).toggleClass("alert-light alert-dark")})),$(".bg-light").each((function(i,t){$(t).toggleClass("bg-light bg-dark")})),$(".border-light").each((function(i,t){$(t).toggleClass("border-light border-dark")})),$(".btn-light").each((function(i,t){$(t).toggleClass("btn-light btn-dark")})),$(".navbar-light").each((function(i,t){$(t).toggleClass("navbar-light navbar-dark")})),$(".table-light").each((function(i,t){$(t).toggleClass("table-light table-dark")})),$(".text-dark").each((function(i,t){$(t).toggleClass("text-light text-dark")})),$(".thead-light").each((function(i,t){$(t).toggleClass("thead-light thead-dark")})),$(".list-group-item-light").each((function(i,t){$(t).toggleClass("list-group-item-light list-group-item-dark")}))},switchToLight:function(){$("html").attr("data-theme","light"),$(".mdi-moon-waning-crescent").each((function(i,t){$(t).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny")})),$(".alert-dark").each((function(i,t){$(t).toggleClass("alert-light alert-dark")})),$(".bg-dark").each((function(i,t){$(t).toggleClass("bg-light bg-dark")})),$(".border-dark").each((function(i,t){$(t).toggleClass("border-light border-dark")})),$(".btn-dark").each((function(i,t){$(t).toggleClass("btn-light btn-dark")})),$(".navbar-dark").each((function(i,t){$(t).toggleClass("navbar-light navbar-dark")})),$(".table-dark").each((function(i,t){$(t).toggleClass("table-light table-dark")})),$(".text-light").each((function(i,t){$(t).toggleClass("text-light text-dark")})),$(".thead-dark").each((function(i,t){$(t).toggleClass("thead-light thead-dark")})),$(".list-group-item-dark").each((function(i,t){$(t).toggleClass("list-group-item-light list-group-item-dark")}))},switchTheme:function(){"dark"==$("html").attr("data-theme")?this.switchToLight():"light"==$("html").attr("data-theme")||window.matchMedia("(prefers-color-theme: dark)").matches?this.switchToDark():this.switchToLight()}},mounted:function(){window.addEventListener("scroll",this.scrollListener),this.switchTheme()},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)}},o=(n(220),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"function-bar bg-light"},[n("div",{staticClass:"text-dark collapse",attrs:{id:"functions"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"btn btn-light",attrs:{id:"return-top","data-toggle":"tooltip","data-placement":"right",title:"Return to Top"},on:{click:t.scrollTop}},[n("span",{staticClass:"mdi mdi-arrow-up-drop-circle-outline"})]),t._v(" "),n("button",{staticClass:"btn btn-light",attrs:{id:"theme-switch","data-toggle":"tooltip","data-placement":"right",title:"Switch Light/Dark"},on:{click:t.switchTheme}},[n("span",{staticClass:"mdi mdi-weather-sunny"})]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light",attrs:{id:"function3","data-toggle":"tooltip","data-placement":"right",title:"Function2 (UnderDevelopment)"}},[e("span",{staticClass:"mdi mdi-function"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light",attrs:{id:"function4","data-toggle":"tooltip","data-placement":"right",title:"Function3 (UnderDevelopment)"}},[e("span",{staticClass:"mdi mdi-function"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light",attrs:{id:"bar",type:"button","data-toggle":"collapse","data-target":"#functions","aria-expanded":"false","aria-controls":"functions"}},[e("span",{staticClass:"mdi mdi-function-variant",attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Functions"}})])}],!1,null,"7a58ddad",null);e.default=component.exports}}]);