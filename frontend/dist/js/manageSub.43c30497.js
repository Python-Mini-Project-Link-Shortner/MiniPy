(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manageSub"],{"0798":function(t,e,i){"use strict";i("caad");var a=i("5530"),n=i("ade3"),s=(i("0c18"),i("10d2")),r=i("afdd"),o=i("9d26"),c=i("f2e7"),l=i("7560"),d=i("f40d"),h=i("58df"),u=i("d9bd");e["a"]=Object(h["a"])(s["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},1269:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"text-left",attrs:{"px-6":"","py-5":"",fluid:""}},[i("v-breadcrumbs",{staticClass:"pl-2 pt-2 pb-0",attrs:{items:t.breadcrumbs.tag},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{attrs:{to:{name:a.link},exact:!0}},[t._v(" "+t._s(a.text)+" ")])]}}])}),i("Loading"),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("Error")],1)],1),i("p",{staticClass:"text-h4 mb-8 pl-1"},[t._v(" 태그관리 ")]),t._l(t.tagList,(function(e,a){return i("v-row",{key:e.name,staticClass:"mb-4",class:"scroll"+a},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{hover:""}},[i("div",{staticClass:"card-head",on:{click:function(i){return t.toggleTag(e)}}},[i("div",{staticClass:"text-h6"},[t._v("#"+t._s(e.name))]),i("v-spacer"),i("v-icon",[t._v(t._s(e.open?"mdi-chevron-up":"mdi-chevron-down"))])],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"tagObj.open"}],staticClass:"card-body"},[i("v-divider"),t._l(e.linkList,(function(a){return i("div",{key:a._id},[i("div",{staticClass:"card-row-content"},[i("div",[i("div",{staticClass:"font-weight-regular text-caption grey--text",staticStyle:{height:"18px"}},[t._v(" "+t._s(a.pageTitle?a.pageTitle:a.rawURL)+" ")]),i("div",{staticStyle:{height:"24px"}},[t._v(" "+t._s(a.shortURL)+" ")])]),i("v-spacer"),i("v-btn",{staticClass:"mr-2 success",on:{click:function(i){i.stopPropagation(),t.diagChange=!0,t.clickedTagObj=e,t.changeClickedLinkID(a._id)}}},[t._v("변경")]),i("v-btn",{staticClass:"error",on:{click:function(i){i.stopPropagation(),t.diagDelete=!0,t.clickedTagObj=e,t.changeClickedLinkID(a._id)}}},[t._v("삭제")])],1),i("v-divider")],1)}))],2)])],1)],1)],1)})),i("v-dialog",{attrs:{width:"420"},model:{value:t.diagChange,callback:function(e){t.diagChange=e},expression:"diagChange"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("태그변경")]),i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{label:"태그",hint:"변경하고 싶은 태그를 입력하세요"},model:{value:t.changeName,callback:function(e){t.changeName=e},expression:"changeName"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"success",text:"",disabled:""==t.changeName},on:{click:function(e){t.diagChange=!1,t.changeTagName(t.changeName)}}},[t._v("변경")]),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"warning",text:""},on:{click:function(e){t.diagChange=!1}}},[t._v("취소")])],1)],1)],1),i("v-dialog",{attrs:{width:"420"},model:{value:t.diagDelete,callback:function(e){t.diagDelete=e},expression:"diagDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("태그삭제")]),i("v-card-text",{staticClass:"pb-0"},[t._v(" 태그를 지우시면 태그로 검색이 불가능합니다."),i("br"),t._v(" 태그를 지우시겠습니까? ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"error",text:""},on:{click:function(e){t.diagDelete=!1,t.deleteLink(t.linkID)}}},[t._v("확인")]),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"warning",text:""},on:{click:function(e){t.diagDelete=!1}}},[t._v("취소")])],1)],1)],1)],2)},n=[],s=(i("c740"),i("4160"),i("b0c0"),i("d3b7"),i("9911"),i("159b"),i("5530")),r=i("2f62"),o=i("bc3a"),c=i.n(o),l=i("9fbc"),d=i("9783"),h={name:"ManageTag",components:{Loading:l["a"],Error:d["a"]},data:function(){return{tagList:[],diagChange:!1,diagDelete:!1,changeName:"",clickedTagObj:{}}},created:function(){this.pageEnter()},watch:{$route:"pageEnter"},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["e"])(["serverURL","userInfo"])),Object(r["e"])("manage",["RequestMode","breadcrumbs"])),Object(r["c"])("manage",["linkID"])),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])("manage",["startLoading","delayedStopLoading","stopLoading","showError","hideError","changeClickedLinkID","changeRequestMode","clearSelectLink"])),{},{pageEnter:function(){this.diagChange=!1,this.diagDelete=!1,this.changeName="",this.clickedTagObj={},this.changeRequestMode(this.RequestMode.Single),this.clearSelectLink(),this.hideError(),this.fetchTagList()},fetchTagList:function(){var t=this;this.startLoading(),this.tagList=[],c.a.post(this.serverURL.tagListURL,{userID:this.userInfo.email}).then((function(e){e.data.tags.forEach((function(e,i,a){t.tagList.push({open:!1,name:e,linkList:[]})}))})).catch((function(e){t.showError("불러오기에 실패하였습니다")})).finally((function(){t.delayedStopLoading()}))},fetchTagListWithName:function(t){var e=this;this.startLoading(),this.tagList=[],c.a.post(this.serverURL.tagListURL,{userID:this.userInfo.email}).then((function(t){t.data.tags.forEach((function(t,i,a){e.tagList.push({open:!1,name:t,linkList:[]})}))})).catch((function(t){e.showError("불러오기에 실패하였습니다")})).finally((function(){var i=e.tagList.findIndex((function(e){return e.name===t}));i>-1?e.toggleTag(e.tagList[i],!0,i):e.delayedStopLoading()}))},scrollTo:function(t){this.$vuetify.goTo(".scroll"+t,{duration:300,offset:0})},toggleTag:function(t,e,i){t.open=!t.open,1==t.open&&(!0===e?this.fetchTaggedLinkList(t,i):this.fetchTaggedLinkList(t))},fetchTaggedLinkList:function(t,e){var i=this;this.startLoading(),c.a.post(this.serverURL.taggedLinkListURL,{userID:this.userInfo.email,tag:t.name}).then((function(e){t.linkList=e.data.link})).catch((function(t){i.showError("태그로 불러오기에 실패하였습니다")})).finally((function(){e&&i.scrollTo(e),i.stopLoading()}))},changeTagName:function(t){var e=this;this.startLoading(),t!=this.clickedTagObj.name?c.a.post(this.serverURL.changeTagURL,{userID:this.userInfo.email,changeID:this.linkID,tagName:t}).then((function(t){})).catch((function(t){e.showError("태그 변경에 실패하였습니다")})).finally((function(){e.clearSelectLink(),e.changeName="";var t=e.clickedTagObj.name;e.clickedTagObj={},e.fetchTagListWithName(t)})):this.stopLoading()},deleteLink:function(t){var e=this;this.startLoading(),c.a.post(this.serverURL.deleteLinkURL,{userID:this.userInfo.email,deleteID:t}).then((function(t){})).catch((function(t){e.showError("태그 삭제에 실패하였습니다")})).finally((function(){e.clearSelectLink();var t=e.clickedTagObj.name;e.clickedTagObj={},e.fetchTagListWithName(t)}))}})},u=h,v=(i("47cc"),i("2877")),g=i("6544"),f=i.n(g),p=i("2bc5"),b=i("f625"),m=i("8336"),L=i("b0af"),k=i("99d9"),C=i("62ad"),_=i("a523"),y=i("169a"),x=i("ce7e"),O=i("0789"),w=i("132d"),j=i("0fd9"),I=i("2fa4"),D=i("8654"),$=Object(v["a"])(u,a,n,!1,null,"1f69726b",null);e["default"]=$.exports;f()($,{VBreadcrumbs:p["a"],VBreadcrumbsItem:b["a"],VBtn:m["a"],VCard:L["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:C["a"],VContainer:_["a"],VDialog:y["a"],VDivider:x["a"],VExpandTransition:O["a"],VIcon:w["a"],VRow:j["a"],VSpacer:I["a"],VTextField:D["a"]})},"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var a=i("5530"),n=i("2909"),s=i("ade3"),r=(i("368e"),i("480e")),o=i("4ad4"),c=i("b848"),l=i("75eb"),d=i("e707"),h=i("e4d3"),u=i("21be"),v=i("f2e7"),g=i("a293"),f=i("58df"),p=i("d9bd"),b=i("80d2"),m=Object(f["a"])(o["a"],c["a"],l["a"],d["a"],h["a"],u["a"],v["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:g["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"17b3":function(t,e,i){},"229b":function(t,e,i){},"2bc5":function(t,e,i){"use strict";i("a15b");var a=i("5530"),n=(i("abd3"),i("f625")),s=i("80d2"),r=Object(s["g"])("v-breadcrumbs__divider","li"),o=i("7560"),c=i("58df");e["a"]=Object(c["a"])(o["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(r,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],a=0;a<this.items.length;a++){var s=this.items[a];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(n["a"],{key:i.join("."),props:s},[s.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"368e":function(t,e,i){},4797:function(t,e,i){"use strict";var a=i("9977"),n=i.n(a);n.a},"47cc":function(t,e,i){"use strict";var a=i("a7a8"),n=i.n(a);n.a},"615b":function(t,e,i){},"891e":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0");var a=i("2909"),n=i("5530"),s=(i("17b3"),i("9d26")),r=i("dc22"),o=i("a9ad"),c=i("de2c"),l=i("7560"),d=i("58df");e["a"]=Object(d["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(a["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var c=this.value+n-1-i;return[].concat(Object(a["a"])(this.range(1,c)),["...",this.length])}if(this.value===s){var l=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(l,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":n},on:i?{}:{click:a}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},9783:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showError?i("v-alert",{attrs:{type:"error"}},[t._v(" "+t._s(t.errorMsg)+" ")]):t._e()},n=[],s=i("5530"),r=i("2f62"),o={name:"ErrorAlert",computed:Object(s["a"])({},Object(r["e"])("manage",["errorMsg","showError"]))},c=o,l=i("2877"),d=i("6544"),h=i.n(d),u=i("0798"),v=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=v.exports;h()(v,{VAlert:u["a"]})},9977:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var a=i("b0af"),n=i("80d2"),s=Object(n["g"])("v-card__actions"),r=Object(n["g"])("v-card__subtitle"),o=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");a["a"]},"9fbc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-overlay",{attrs:{value:t.loading,"z-index":9999}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)},n=[],s=i("5530"),r=i("2f62"),o={name:"LoadingOverlay",computed:Object(s["a"])({},Object(r["e"])("manage",["loading"]))},c=o,l=i("2877"),d=i("6544"),h=i.n(d),u=i("a797"),v=i("490a"),g=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=g.exports;h()(g,{VOverlay:u["a"],VProgressCircular:v["a"]})},a7a8:function(t,e,i){},abd3:function(t,e,i){},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var a=i("5530"),n=(i("615b"),i("10d2")),s=i("297c"),r=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(s["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b6e9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"text-left",attrs:{"px-6":"","py-5":"",fluid:""}},[i("v-breadcrumbs",{staticClass:"pl-2 pt-2 pb-0",attrs:{items:t.breadcrumbs.hide},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{attrs:{to:{name:a.link},exact:!0}},[t._v(" "+t._s(a.text)+" ")])]}}])}),i("Loading"),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("Error")],1)],1),i("p",{staticClass:"text-h4 mb-8 pl-1"},[t._v(" 숨김관리 ")]),t._l(t.hideList,(function(e,a){return i("v-row",{key:e.name,staticClass:"mb-4",class:"scroll"+a},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{hover:""}},[i("div",{staticClass:"card-head",on:{click:function(i){return t.toggleDirectory(e)}}},[i("div",{staticClass:"text-h6"},[t._v(t._s(e.name))]),i("v-spacer"),i("v-icon",[t._v(t._s(e.open?"mdi-chevron-up":"mdi-chevron-down"))])],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"hideObj.open"}],staticClass:"card-body"},[i("v-divider"),t._l(e.linkList,(function(a){return i("div",{key:a._id},[i("div",{staticClass:"card-row-content"},[i("div",[i("div",{staticClass:"font-weight-regular text-caption grey--text",staticStyle:{height:"18px"}},[t._v(" "+t._s(a.pageTitle?a.pageTitle:a.rawURL)+" ")]),i("div",{staticStyle:{height:"24px"}},[t._v(" "+t._s(a.shortURL)+" ")])]),i("v-spacer"),i("v-btn",{staticClass:"mr-2 success",on:{click:function(i){i.stopPropagation(),t.diagChange=!0,t.clickedHideObj=e,t.changeClickedLinkID(a._id)}}},[t._v("변경")]),i("v-btn",{staticClass:"error",on:{click:function(i){i.stopPropagation(),t.diagDelete=!0,t.clickedHideObj=e,t.changeClickedLinkID(a._id)}}},[t._v("삭제")])],1),i("v-divider")],1)}))],2)])],1)],1)],1)})),i("v-dialog",{attrs:{width:"420"},model:{value:t.diagChange,callback:function(e){t.diagChange=e},expression:"diagChange"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("디렉토리 변경")]),i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{label:"디렉토리",hint:"변경하고 싶은 디렉토리를 입력하세요"},model:{value:t.changeName,callback:function(e){t.changeName=e},expression:"changeName"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"success",text:"",disabled:""==t.changeName},on:{click:function(e){t.diagChange=!1,t.changeDirectoryName(t.changeName)}}},[t._v("변경")]),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"warning",text:""},on:{click:function(e){t.diagChange=!1}}},[t._v("취소")])],1)],1)],1),i("v-dialog",{attrs:{width:"420"},model:{value:t.diagDelete,callback:function(e){t.diagDelete=e},expression:"diagDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("링크 삭제")]),i("v-card-text",{staticClass:"pb-0"},[t._v(" 숨겨진 링크가 다시 보여지게 됩니다."),i("br"),t._v(" 디렉토리에서 삭제하시겠습니까? ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"error",text:""},on:{click:function(e){t.diagDelete=!1,t.deleteLink(t.linkID)}}},[t._v("확인")]),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"warning",text:""},on:{click:function(e){t.diagDelete=!1}}},[t._v("취소")])],1)],1)],1)],2)},n=[],s=(i("c740"),i("4160"),i("b0c0"),i("d3b7"),i("9911"),i("159b"),i("5530")),r=i("2f62"),o=i("bc3a"),c=i.n(o),l=i("9fbc"),d=i("9783"),h={name:"ManageHide",components:{Loading:l["a"],Error:d["a"]},data:function(){return{hideList:[],diagChange:!1,diagDelete:!1,changeName:"",clickedHideObj:{}}},created:function(){this.pageEnter()},watch:{$route:"pageEnter"},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["e"])(["serverURL","userInfo"])),Object(r["e"])("manage",["RequestMode","breadcrumbs"])),Object(r["c"])("manage",["linkID"])),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])("manage",["startLoading","stopLoading","delayedStopLoading","showError","hideError","changeClickedLinkID","changeRequestMode","clearSelectLink"])),{},{pageEnter:function(){this.diagChange=!1,this.diagDelete=!1,this.changeName="",this.clickedHideObj={},this.changeRequestMode(this.RequestMode.Single),this.clearSelectLink(),this.hideError(),this.fetchHideList()},fetchHideList:function(){var t=this;this.startLoading(),this.hideList=[],c.a.post(this.serverURL.hideNameListURL,{userID:this.userInfo.email}).then((function(e){e.data.list.forEach((function(e,i,a){t.hideList.push({open:!1,name:e,linkList:[]})}))})).catch((function(e){t.showError("불러오기에 실패하였습니다")})).finally((function(){t.delayedStopLoading()}))},fetchHideListWithName:function(t){var e=this;this.startLoading(),this.hideList=[],c.a.post(this.serverURL.hideNameListURL,{userID:this.userInfo.email}).then((function(t){t.data.list.forEach((function(t,i,a){e.hideList.push({open:!1,name:t,linkList:[]})}))})).catch((function(t){e.showError("불러오기에 실패하였습니다")})).finally((function(){var i=e.hideList.findIndex((function(e){return e.name===t}));i>-1?e.toggleDirectory(e.hideList[i],!0,i):e.delayedStopLoading()}))},scrollTo:function(t){this.$vuetify.goTo(".scroll"+t,{duration:300,offset:0})},toggleDirectory:function(t,e,i){t.open=!t.open,1==t.open&&(!0===e?this.fetchhiddenLinkList(t,i):this.fetchhiddenLinkList(t))},fetchhiddenLinkList:function(t,e){var i=this;this.startLoading(),c.a.post(this.serverURL.hiddenLinkListURL,{userID:this.userInfo.email,directory:t.name}).then((function(e){t.linkList=e.data.link})).catch((function(t){i.showError("디렉토리로 불러오기에 실패하였습니다")})).finally((function(){e&&i.scrollTo(e),i.stopLoading()}))},changeDirectoryName:function(t){var e=this;this.startLoading(),c.a.post(this.serverURL.hideURL,{userID:this.userInfo.email,hideID:this.linkID,hideName:t}).then((function(t){})).catch((function(t){e.showError("디렉토리 변경에 실패하였습니다")})).finally((function(){e.clearSelectLink(),e.changeName="";var t=e.clickedHideObj.name;e.clickedHideObj={},e.fetchHideListWithName(t)}))},deleteLink:function(t){var e=this;this.startLoading(),c.a.post(this.serverURL.unhideURL,{userID:this.userInfo.email,hideID:this.linkID}).then((function(t){})).catch((function(t){e.showError("삭제에 실패하였습니다")})).finally((function(){e.clearSelectLink();var t=e.clickedHideObj.name;e.clickedHideObj={},e.fetchHideListWithName(t)}))}})},u=h,v=(i("b8ba"),i("2877")),g=i("6544"),f=i.n(g),p=i("2bc5"),b=i("f625"),m=i("8336"),L=i("b0af"),k=i("99d9"),C=i("62ad"),_=i("a523"),y=i("169a"),x=i("ce7e"),O=i("0789"),w=i("132d"),j=i("0fd9"),I=i("2fa4"),D=i("8654"),$=Object(v["a"])(u,a,n,!1,null,"7143dd6e",null);e["default"]=$.exports;f()($,{VBreadcrumbs:p["a"],VBreadcrumbsItem:b["a"],VBtn:m["a"],VCard:L["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:C["a"],VContainer:_["a"],VDialog:y["a"],VDivider:x["a"],VExpandTransition:O["a"],VIcon:w["a"],VRow:j["a"],VSpacer:I["a"],VTextField:D["a"]})},b8ba:function(t,e,i){"use strict";var a=i("229b"),n=i.n(a);n.a},dee6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"text-left",attrs:{"px-6":"","py-5":"",fluid:""}},[i("v-breadcrumbs",{staticClass:"pl-2 pt-2 pb-0",attrs:{items:t.breadcrumbs.favorite},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{attrs:{to:{name:a.link},exact:!0}},[t._v(" "+t._s(a.text)+" ")])]}}])}),i("Loading"),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("Error")],1)],1),i("p",{staticClass:"text-h4 mb-8 pl-1"},[t._v(" 즐겨찾기 ")]),t._l(t.linkList,(function(e){return i("v-row",{key:e._id},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticClass:"px-4 py-2",attrs:{outlined:"",hover:""}},[i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"text-h6 text-truncate info--text"},[t._v(" "+t._s(e.shortURL)+" ")]),i("v-spacer"),i("div",{staticClass:"pt-1 grey--text"},[t._v(" "+t._s(e.makeDate)+" ")])],1),i("div",{staticClass:"mt-4",staticStyle:{display:"flex"}},[i("div",[i("div",{staticClass:"font-weight-regular text-caption grey--text",staticStyle:{height:"18px"}},[t._v(t._s(e.pageTitle?e.pageTitle:e.rawURL))]),i("div",{staticStyle:{height:"24px"}},[t._v(t._s(e.rawURL))])]),i("v-spacer"),i("div",[i("v-btn",{staticClass:"text-subtitle-1",staticStyle:{height:"100%"},attrs:{color:"error"},on:{click:function(i){return t.openDialog(e._id)}}},[t._v("취소")])],1)],1)])],1)],1)})),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-pagination",{attrs:{"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right",length:t.maxPage,page:t.page,"total-visible":10},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),i("v-dialog",{attrs:{width:"360"},model:{value:t.removeDialog,callback:function(e){t.removeDialog=e},expression:"removeDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(" 즐겨찾기 제거 ")]),i("v-card-text",{staticClass:"py-2"},[t._v(" 정말로 즐겨찾기에서 제거하시겠습니까? ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"error",text:""},on:{click:function(e){t.closeDialog(),t.removeFavorite()}}},[t._v("제거")]),i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"warning",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v("취소")])],1)],1)],1)],2)},n=[],s=(i("d3b7"),i("5530")),r=i("2f62"),o=i("bc3a"),c=i.n(o),l=i("9fbc"),d=i("9783"),h={name:"ManageFavorite",components:{Loading:l["a"],Error:d["a"]},data:function(){return{maxPage:1,page:1,itemPerPage:10,linkList:[],removeDialog:!1}},created:function(){this.pageEnter()},watch:{$route:"pageEnter",page:function(){this.pageEnter()}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["e"])(["serverURL","userInfo"])),Object(r["e"])("manage",["RequestMode","breadcrumbs"])),Object(r["c"])("manage",["linkID"])),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])("manage",["startLoading","delayedStopLoading","showError","hideError","changeClickedLinkID","changeRequestMode","clearSelectLink"])),{},{pageEnter:function(){this.linkList=[],this.clearSelectLink(),this.hideError(),this.fetchLinkData()},fetchLinkData:function(){var t=this;this.startLoading(),c.a.post(this.serverURL.favoriteListURL,{userID:this.userInfo.email,page:this.page,itemCount:this.itemPerPage}).then((function(e){t.maxPage=e.data.maxPage,t.page=e.data.page,t.linkList=e.data.list})).catch((function(e){t.showError()})).finally((function(){t.delayedStopLoading()}))},openDialog:function(t){null!=t||""!=t?(this.changeClickedLinkID(t),this.changeRequestMode(this.RequestMode.Single),this.removeDialog=!0):this.showError("정상적이지 않은 삭제입니다")},closeDialog:function(){this.removeDialog=!1},removeFavorite:function(){var t=this;this.startLoading(),c.a.post(this.serverURL.uncheckFavoriteURL,{userID:this.userInfo.email,favoriteID:this.linkID}).then((function(e){t.fetchLinkData()})).catch((function(e){t.showError("변경에 실패하였습니다")})).finally((function(){t.clearSelectLink(),t.delayedStopLoading()}))}})},u=h,v=(i("4797"),i("2877")),g=i("6544"),f=i.n(g),p=i("2bc5"),b=i("f625"),m=i("8336"),L=i("b0af"),k=i("99d9"),C=i("62ad"),_=i("a523"),y=i("169a"),x=i("891e"),O=i("0fd9"),w=i("2fa4"),j=Object(v["a"])(u,a,n,!1,null,null,null);e["default"]=j.exports;f()(j,{VBreadcrumbs:p["a"],VBreadcrumbsItem:b["a"],VBtn:m["a"],VCard:L["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:C["a"],VContainer:_["a"],VDialog:y["a"],VPagination:x["a"],VRow:O["a"],VSpacer:w["a"]})},f40d:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},f625:function(t,e,i){"use strict";var a=i("5530"),n=i("ade3"),s=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return t("li",[t(i,Object(a["a"])(Object(a["a"])({},n),{},{attrs:Object(a["a"])(Object(a["a"])({},n.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})}}]);
//# sourceMappingURL=manageSub.43c30497.js.map