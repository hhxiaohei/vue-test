webpackJsonp([0],{"68Qp":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("7+uW"),e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbar navbar-default topnav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})]),t._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),a("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),t._v(" "),a("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[a("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(s,n){return a("li",{class:{active:n===t.activeNavIndex}},[a("a",{attrs:{href:"#"},on:{click:function(s){t.changeNavIndex(n)}}},[t._v(t._s(s))])])}))])])])},staticRenderFns:[]};var i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row footer-top"},[a("div",{staticClass:"col-sm-5 col-lg-5"},[a("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),a("div",{staticClass:"text-md"},t._l(t.contacts,function(s){return a("a",{style:t.contactStyle,attrs:{title:s.title,href:s.link,target:"_blank"}},[a("i",{class:"fa fa-"+s.icon})])})),t._v(" "),a("br"),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),a("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),a("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return a("li",[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{staticClass:"footer-sponsor-link",attrs:{title:t.title,src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),a("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(s){return a("li",[t._v(t._s(s.title)+": "+t._s(s.description))])}))]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h4",[t._v(t._s(t.other.title))]),t._v(" "),a("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(s){return a("li",[a("a",{attrs:{href:s.link,title:s.title,target:"_blank"}},[a("i",{class:"fa fa-"+s.icon}),t._v(" "+t._s(s.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var l={name:"App",components:{TheHeader:a("VU/8")({name:"TheHeader",data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},e,!1,function(t){a("ySU8")},"data-v-68b7cbcf",null).exports,TheFooter:a("VU/8")({name:"TheFooter",data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},i,!1,function(t){a("tTne")},"data-v-2da2d8b8",null).exports}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"wrap"}},[s("the-header"),this._v(" "),s("TheFooter")],1)},staticRenderFns:[]};var c=a("VU/8")(l,o,!1,function(t){a("68Qp")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:c},template:"<App/>"})},tTne:function(t,s){},ySU8:function(t,s){}},["NHnr"]);