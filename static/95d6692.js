(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{302:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0a6da7c2",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(302)},308:function(t,e,n){var c=n(27)(!1);c.push([t.i,"#selfie img[data-v-687c70e2]{-o-object-fit:cover;object-fit:cover}.contacts a[data-v-687c70e2]{text-decoration:none}.contacts[data-v-687c70e2] :focus,.contacts[data-v-687c70e2] :hover{color:inherit;filter:brightness(80%)}.contacts>*+*[data-v-687c70e2]{margin-left:.8rem}.theme--dark .mdi-steam[data-v-687c70e2]{color:#1275a7!important}",""]),t.exports=c},309:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("5ee2ef52",content,!0,{sourceMap:!1})},310:function(t,e,n){var c=n(27)(!1);c.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=c},332:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{contactlists:[[{icon:"mdi-wechat",name:"WeChat",accent:"#1AAD19",link:"https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws"},{icon:"mdi-email",name:"E-mail",accent:"#198FE9",link:"mailto:Moenupa@gamil.com"},{icon:"mdi-github",name:"Github",accent:"#666666",link:"https://github.com/Moenupa"},{icon:"mdi-twitter",name:"Twitter",accent:"#55ACEE",link:"https://twitter.com/Moenupa"},{icon:"mdi-facebook",name:"Facebook",accent:"#3B5998",link:"https://facebook.com/Moenupa"}],[{icon:"mdi-music-circle",name:"Netease Music",accent:"#e32e2e",link:"https://music.163.com/#/user/home?id=392696583"},{icon:"mdi-steam",name:"Steam",accent:"#2a475e",link:"https://steamcommunity.com/id/moenupa/"},{icon:"mdi-youtube",name:"Youtube",accent:"#cd201f",link:"https://youtube.com/channel/UCbOOUmgSADEx9TK4gMQS85w"},{icon:"mdi-television-classic",name:"Bilibili",accent:"#03a5dd",link:"https://m.bilibili.com/space/380763134"}]]}},methods:{}},o=(n(307),n(46)),r=n(59),l=n.n(r),d=n(359),m=n(285),v=n(292),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}},[n("div",{staticClass:"my-4",attrs:{id:"selfie"}},[n("v-avatar",{attrs:{size:"10rem"}},[n("img",{attrs:{src:"/static/img/87535316_p0.png",alt:""}})])],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"mb-1"},t._l(t.contactlists,(function(e){return n("div",{key:e.id,staticClass:"contacts mt-1"},t._l(e,(function(e,c){return n("v-tooltip",{key:c,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(c){var o=c.on,r=c.attrs;return[n("a",t._g(t._b({attrs:{href:e.link}},"a",r,!1),o),[n("v-icon",{attrs:{color:e.accent}},[t._v("\n              "+t._s(e.icon)+"\n            ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name))])])})),1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Moenupa WANG")]),t._v(" "),n("p",[t._v("Current Undergraduate Student at Hong Kong PolyU")])])}],!1,null,"687c70e2",null);e.default=component.exports;l()(component,{VAvatar:d.a,VIcon:m.a,VTooltip:v.a})},359:function(t,e,n){"use strict";n(19),n(11),n(21),n(29),n(14),n(30);var c=n(1),o=(n(44),n(309),n(57)),r=n(146),l=n(155),d=n(2),m=n(16);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(o.a,r.a,l.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return h({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return h({height:Object(d.d)(this.size),minWidth:Object(d.d)(this.size),width:Object(d.d)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})}}]);