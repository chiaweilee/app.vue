webpackJsonp([3],{PqB7:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{theme:null,compo:null}},created:function(){this.mount()},computed:{at:function(){return this.$route.params.at}},methods:{setTheme:function(a){this.theme=a},mount:function(){var a=this;this.compo=function(){return e("TN4G")("./"+a.at)}}}},n=e("QAAC"),r=Object(n.a)(i,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("app-page",[e("app-topbar",{attrs:{theme:a.theme||"dark-blue",transition:""}},[e("app-button",{attrs:{left:"","history-back":""}},[e("span",[a._v("back")])]),a._v(" "),e("app-title",[a._v("\n      @"+a._s(a.at)+"\n    ")])],1),a._v(" "),e("app-content",[a.compo?e(a.compo,{tag:"component",on:{theme:a.setTheme}}):a._e()],1)],1)},[],!1,null,null,null);t.default=r.exports},TN4G:function(a,t,e){var i={"./airasia":["b3mA",9],"./airasia/":["b3mA",9],"./airasia/api":["UkxS"],"./airasia/api.js":["UkxS"],"./airasia/date":["zk9f"],"./airasia/date.js":["zk9f"],"./airasia/index":["b3mA",9],"./airasia/index.vue":["b3mA",9],"./airasia/name":["Ro2n"],"./airasia/name.js":["Ro2n"],"./airasia/request":["Rdsi"],"./airasia/request.js":["Rdsi"],"./airasia/routes":["tLSQ"],"./airasia/routes.js":["tLSQ"],"./airasia/x":["5mVF"],"./airasia/x.js":["5mVF"]};function n(a){var t=i[a];return t?Promise.all(t.slice(1).map(e.e)).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+a+"'."))}n.keys=function(){return Object.keys(i)},n.id="TN4G",a.exports=n}});