webpackJsonp([4],{SrUm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("IvJb"),r=n("3zBq"),o=n.n(r),i=n("QAAC"),c=Object(i.a)(null,function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,null,null,null).exports,p={type:Boolean,default:void 0},u={type:String,default:"div"},l={functional:!0,props:{tag:u},render:function(t,e){var n=e||{},a=n.props,r=void 0===a?{}:a,o=n.children,i=void 0===o?{}:o;return t(r.tag,{class:{"app-page":!0}},i)}},s={functional:!0,props:{tag:u},render:function(t,e){var n=e||{},a=n.props,r=void 0===a?{}:a,o=n.children,i=void 0===o?{}:o;return t(r.tag,{class:{"app-content":!0}},i)}},d=n("a3Yh"),f=n.n(d),h={},m={page:l,topbar:{functional:!0,props:{tag:u,theme:{type:String,default:""}},render:function(t,e){var n=e||{},a=n.props,r=void 0===a?{}:a,o=n.children,i=void 0===o?{}:o;return t(r.tag,{class:f()({"app-topbar":!0},r.theme,!!r.theme)},i)}},title:{functional:!0,props:{tag:u},render:function(t,e){var n=e||{},a=n.props,r=void 0===a?{}:a,o=n.children,i=void 0===o?{}:o;return t(r.tag,{class:{"app-title":!0}},i)}},button:{functional:!0,props:{tag:u,right:p,left:p,historyBack:p,disabled:p},render:function(t,e){var n=e||{},a=n.props,r=void 0===a?{}:a,o=n.children,i=void 0===o?{}:o;return r.historyBack&&(h.click=function(){window.history.back()}),t(r.tag,{class:{"app-button":!0,left:!!r.left,right:!!r.right,disabled:!!r.disabled},on:h},i)}},content:s},v={install:function(t){for(var e in m)t.component("app-"+e,m[e])}},g=n("zO6J");const b=t=>t.toString().replace(/^\/([^/]*)\/$/,"$1");var y=/[a-zA-Z0-9_]{2,30}/,_=[{path:"/",name:"home",meta:{},components:{default:t=>n.e(1).then((()=>t(n("rF1e"))).bind(null,n)).catch(n.oe)}},{path:"/@:at("+b(/[a-zA-Z0-9_]{2,30}/)+")",name:"@",meta:{},components:{default:t=>n.e(0).then((()=>t(n("dMmu"))).bind(null,n)).catch(n.oe)}},{path:"*",name:"404",meta:{},components:{default:t=>n.e(2).then((()=>t(n("lA7K"))).bind(null,n)).catch(n.oe)}}],w=n("TfYU"),k={VueRouter:g.a,routes:_,base:w.a,mode:"history",beforeEach:function(t,e,n){if("/"===t.path&&new RegExp("^#"+b(y)+"$").test(t.hash)){const e=t.hash.replace(/^#(.+)/,"$1");if(e)return void n({name:"#",params:{key:e}})}n()},afterEach:function(t,e){}},A=function(t){return function(e){return t===e}},$={computed:{at:function(){return this["@"]}},props:{"@":{type:String,required:!0}},beforeDestroy:function(){this.will()},methods:{will:function(){var t=this.$route;A(t.name)("@")&&A(t.params)({at:this.at})}}},S={at:Object(i.a)($,function(){var t=this.$createElement;return(this._self._c||t)("router-link",{attrs:{to:{name:"@",params:{at:this.at}}}},[this._v("@"+this._s(this.at))])},[],!1,null,null,null).exports};n("Vp6e"),n("lVmZ");a.a.config.productionTip=!1;const{router:V}=o()(a.a,{components:S,VueRouter:k});a.a.use(v),new a.a({el:"#app",router:V,render:t=>t(c),template:"<App/>",components:{App:c}})},TfYU:function(t,e,n){"use strict";(function(t){e.a=t}).call(e,"/")},Vp6e:function(t,e){},lVmZ:function(t,e){}},["SrUm"]);