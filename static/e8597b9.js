(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("1cdf85c7",content,!0,{sourceMap:!1})},307:function(t,e,n){var r=n(27)(!1);r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=r},308:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("2fba213c",content,!0,{sourceMap:!1})},309:function(t,e,n){var r=n(27)(!1);r.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=r},362:function(t,e,n){"use strict";var r=n(10),o=(n(44),n(81),n(212),n(73),n(40),n(306),n(151)),c=(n(308),n(148)),l=n(16),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=n(72),m=n(301),v=n(5),f="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!f||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(v.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(m.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},376:function(t,e,n){"use strict";n.r(e);var r={head:{title:"Navigation Page",meta:[{hid:"keywords",name:"keywords",content:"Moenupa"},{hid:"keywords",name:"keywords",content:"Link Navigation Roadmap"},{hid:"description",name:"description",content:"Roadmap of Moenupa's Website"}]},data:function(){return{source:"https://source.unsplash.com/random/",links:[{name:"homepage",description:"My personal homepage. Contains nearly everything you'll need to know about me.",link:"/",extras:[{icon:"mdi-github",name:"github",link:"https://github.com/Moenupa/Moenupa.homepage/tree/app/"}]},{name:"about",description:"The page for information and acknowledgement.",link:"/about",extras:[{icon:"mdi-github",name:"github",link:"https://github.com/Moenupa/Moenupa.homepage/blob/app/pages/about.vue"}]},{name:"blog",disabled:!0,description:"A blog of my own study record.",link:"https://Moenupa.github.io/Moenupa.blog/",extras:[{icon:"mdi-github",name:"github",link:"https://github.com/Moenupa/Moenupa.blog/"}]}]}},layout:"simple"},o=n(48),c=n(61),l=n.n(c),h=n(297),d=n(331),m=n(302),v=n(366),f=n(378),_=n(368),S=n(288),y=n(362),k=n(367),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"space-around"}},t._l(t.links,(function(e,r){return n("v-col",{key:r,attrs:{cols:"6",sm:"4",lg:"3"}},[n("v-card",{attrs:{"max-width":"374","min-width":"240"}},[n("v-img",{attrs:{height:"250",src:e.img?e.img:t.source+"?"+e.name}}),t._v(" "),n("v-card-title",{staticClass:"text-capitalize"},[t._v(t._s(e.name))]),t._v(" "),n("v-card-text",[n("div",[t._v(t._s(e.description))])]),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-actions",[n("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:e.link}},[n("v-btn",{attrs:{text:"",color:"purple "+(t.$vuetify.theme.dark?"lighten-2":"darken-2")}},[t._v("visit")])],1),t._v(" "),t._l(e.extras,(function(e){return n("v-btn",{key:e.id,attrs:{text:"",color:"blue "+(t.$vuetify.theme.dark?"darken-3":"lighten-1"),href:e.link}},[e.icon?n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]):t._e(),t._v(t._s(e.name))],1)}))],2)],1)],1)})),1)],1)}),[],!1,null,"0df1a2fa",null);e.default=component.exports;l()(component,{VBtn:h.a,VCard:d.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:v.a,VContainer:f.a,VDivider:_.a,VIcon:S.a,VImg:y.a,VRow:k.a})}}]);