(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{201:function(o,r,t){"use strict";t.r(r);var e=t(202),d=t.n(e);for(var n in e)["default"].indexOf(n)<0&&function(o){t.d(r,o,(function(){return e[o]}))}(n);r.default=d.a},202:function(o,r,t){t(79),t(42),Vue.config.devtools=!0,Vue.component("card",{template:'\n    <div class="card-wrapper"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card-grid"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="card-heading"></slot>\n          <slot name="card-content"></slot>\n        </div>\n      </div>\n    </div>',mounted:function(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:function(){return{width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}},computed:{mousePX:function(){return this.mouseX/this.width},mousePY:function(){return this.mouseY/this.height},cardStyle:function(){var o=30*this.mousePX,r=-30*this.mousePY;return{transform:"rotateY(".concat(o,"deg) rotateX(").concat(r,"deg)")}},cardBgTransform:function(){var o=-40*this.mousePX,r=-40*this.mousePY;return{transform:"translateX(".concat(o,"px) translateY(").concat(r,"px)")}},cardBgImage:function(){return{backgroundImage:"url(".concat(this.dataImage,")")}}},methods:{handleMouseMove:function(o){this.mouseX=o.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=o.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter:function(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave:function(){var o=this;this.mouseLeaveDelay=setTimeout((function(){o.mouseX=0,o.mouseY=0}),1e3)}}});new Vue({el:"#app"})},207:function(o,r,t){var content=t(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(78).default)("88e88410",content,!0,{sourceMap:!1})},214:function(o,r,t){"use strict";t(207)},215:function(o,r,t){var e=t(77)(!1);e.push([o.i,'body{margin:40px 0;font-size:14px;font-weight:500;background-color:#000;-webkit-font-smoothing:antialiased}.title{font-size:24px;font-weight:700;color:#fff;text-align:center}p{line-height:1.5em}h1+p,p+p{margin-top:10px}.container{padding:40px 80px;display:flex;flex-wrap:wrap;justify-content:center}.card-wrapper{margin:10px;transform:perspective(1200px);transform-style:preserve-3d;cursor:pointer}.card-wrapper:hover .card-info{transform:translateY(0)}.card-wrapper:hover .card-info p{opacity:1}.card-wrapper:hover .card-info,.card-wrapper:hover .card-info p{transition:.6s cubic-bezier(.23,1,.32,1)}.card-wrapper:hover .card-info:after{transition:3s cubic-bezier(.23,1,.32,1);opacity:1;transform:translateY(0)}.card-wrapper:hover .card-bg{transition:.5s cubic-bezier(.23,1,.32,1),opacity 4s cubic-bezier(.23,1,.32,1);opacity:.8}.card-wrapper:hover .card{transition:.5s cubic-bezier(.23,1,.32,1);box-shadow:none}.card-grid{position:relative;flex:0 0 240px;width:320px;height:320px;background-color:#000;overflow:hidden;box-shadow:0 30px 60px 0 rgba(0,0,0,.66),inset 0 0 0 5px #333,inset 0 0 0 6px hsla(0,0%,100%,.4);transition:.8s cubic-bezier(.445,.05,.55,.95)}.card-bg{opacity:.5;top:-20px;left:-20px;width:100%;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover;transition:.8s cubic-bezier(.445,.05,.55,.95),opacity 4s cubic-bezier(.445,.05,.55,.95) .8s;pointer-events:none}.card-bg,.card-info{position:absolute;padding:20px}.card-info{bottom:0;color:#fff;transform:translateY(40%)}.card-info,.card-info p{transition:.6s cubic-bezier(.215,.61,.355,1) 1.6s}.card-info p{opacity:0;text-shadow:#000 0 2px 3px}.card-info *{position:relative;z-index:1}.card-info:after{content:"";position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));background-blend-mode:overlay;opacity:0;transform:translateY(100%);transition:5s cubic-bezier(.445,.05,.55,.95) 1s}.card-info h1{font-size:36px;font-weight:700;text-shadow:rgba(0,0,0,.5) 0 10px 10px}',""]),o.exports=e},216:function(o,r,t){"use strict";t.d(r,"a",(function(){return e})),t.d(r,"b",(function(){return d}));var e=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2018/05/27/15/28/technology-3433708_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("DevOps")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])]),o._v(" "),t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2019/11/23/04/52/matrix-4646234_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("Machine Learning")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])]),o._v(" "),t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2013/11/20/09/35/background-213649_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("Data Analytics")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])]),o._v(" "),t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("Cryptocurrency")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])]),o._v(" "),t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327493_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("Full-Stack")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])]),o._v(" "),t("card",{attrs:{"data-image":"https://cdn.pixabay.com/photo/2019/12/17/05/53/security-4700815_960_720.jpg"}},[t("h1",{attrs:{slot:"card-heading"},slot:"card-heading"},[o._v("Cyber Security")]),o._v(" "),t("p",{attrs:{slot:"card-content"},slot:"card-content"},[o._v("Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.")])])],1)},d=[]},217:function(o,r,t){"use strict";t.r(r);var e=t(216),d=t(201);for(var n in d)["default"].indexOf(n)<0&&function(o){t.d(r,o,(function(){return d[o]}))}(n);t(214);var c=t(34),component=Object(c.a)(d.default,e.a,e.b,!1,null,null,null);r.default=component.exports}}]);