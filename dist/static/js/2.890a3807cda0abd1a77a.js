webpackJsonp([2],{"/gXo":function(t,n,e){var r=e("Mcur"),i=e("OXaN"),o=e("VjRt")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},"1Aa/":function(t,n,e){var r=e("adiS"),i=e("biYF")("iterator"),o=e("ZVlJ");t.exports=e("AKd3").isIterable=function(t){var n=Object(t);return void 0!==n[i]||"@@iterator"in n||o.hasOwnProperty(r(n))}},"2SsR":function(t,n,e){"use strict";var r=e("c1o2"),i=e("go9Q"),o=e("XAI7"),u={};e("bHZz")(u,e("biYF")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+" Iterator")}},"6OxN":function(t,n){t.exports=function(){}},A1pn:function(t,n,e){e("zAnu");for(var r=e("C02x"),i=e("bHZz"),o=e("ZVlJ"),u=e("biYF")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var c=s[a],f=r[c],l=f&&f.prototype;l&&!l[u]&&i(l,u,c),o[c]=o.Array}},EyUJ:function(t,n,e){t.exports=e("bHZz")},HzJ8:function(t,n,e){t.exports={default:e("oMO2"),__esModule:!0}},IsPG:function(t,n,e){"use strict";var r=e("l9Iv")(!0);e("uH+j")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},KH7x:function(t,n,e){"use strict";n.__esModule=!0;var r=o(e("MGgt")),i=o(e("HzJ8"));function o(t){return t&&t.__esModule?t:{default:t}}n.default=function(){return function(t,n){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,n){var e=[],r=!0,o=!1,u=void 0;try{for(var s,a=(0,i.default)(t);!(r=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(t){o=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw u}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},MGgt:function(t,n,e){t.exports={default:e("hWTF"),__esModule:!0}},XAI7:function(t,n,e){var r=e("lIiZ").f,i=e("Mcur"),o=e("biYF")("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},YW8S:function(t,n,e){var r=e("adiS"),i=e("biYF")("iterator"),o=e("ZVlJ");t.exports=e("AKd3").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},ZVlJ:function(t,n){t.exports={}},adiS:function(t,n,e){var r=e("T9r1"),i=e("biYF")("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},biYF:function(t,n,e){var r=e("KV1y")("wks"),i=e("pplb"),o=e("C02x").Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},c1o2:function(t,n,e){var r=e("93K8"),i=e("f4eo"),o=e("zDlt"),u=e("VjRt")("IE_PROTO"),s=function(){},a=function(){var t,n=e("BplH")("iframe"),r=o.length;for(n.style.display="none",e("cihN").appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[u]=t):e=a(),void 0===n?e:i(e,n)}},cihN:function(t,n,e){var r=e("C02x").document;t.exports=r&&r.documentElement},f4eo:function(t,n,e){var r=e("lIiZ"),i=e("93K8"),o=e("5pnV");t.exports=e("sjnA")?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),s=u.length,a=0;s>a;)r.f(t,e=u[a++],n[e]);return t}},hWTF:function(t,n,e){e("A1pn"),e("IsPG"),t.exports=e("1Aa/")},l9Iv:function(t,n,e){var r=e("TPu0"),i=e("r2gs");t.exports=function(t){return function(n,e){var o,u,s=String(i(n)),a=r(e),c=s.length;return a<0||a>=c?t?"":void 0:(o=s.charCodeAt(a))<55296||o>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):o:t?s.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},n8z5:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("KH7x"),i=e.n(r),o=function(t,n){return Math.min(t,n)+Math.round(Math.abs(t-n)*Math.random())},u={data:function(){return{map:[10,10],snake:null}},props:{autoStart:{type:Boolean,default:!1},startLength:{type:Number,default:3}},created:function(){this.autoStart&&this.start()},methods:{start:function(){this.born()},ways:function(t){var n=this,e=i()(t,2),r=e[0],o=e[1],u=[];return[[1,0],[0,1],[-1,0],[0,-1]].forEach(function(t){var e=i()(t,2),s=e[0],a=e[1],c=r+s,f=o+a;c<0||c>=n.map[0]||f<0||f>=n.map[1]||u.push([c,f])}),u},die:function(){this.snake=null},born:function(){var t=this,n=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.ways(n);return e[o(0,e.length)]}},e=[o(0,this.map[0]),o(0,this.map[1])];for(this.snake=[e];this.snake.length<3;){var r=n(this.snake[this.snake.length-1])();if(!r){this.die(),this.born();break}-1===this.snake.indexOf(r)&&this.snake.push(r)}}}},s=e("QAAC"),a=Object(s.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("111")])},[],!1,null,null,null);n.default=a.exports},oMO2:function(t,n,e){e("A1pn"),e("IsPG"),t.exports=e("tcIe")},tcIe:function(t,n,e){var r=e("93K8"),i=e("YW8S");t.exports=e("AKd3").getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},"uH+j":function(t,n,e){"use strict";var r=e("bgFz"),i=e("FITv"),o=e("EyUJ"),u=e("bHZz"),s=e("ZVlJ"),a=e("2SsR"),c=e("XAI7"),f=e("/gXo"),l=e("biYF")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,g){a(e,n,v);var b,S,x,A=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},m=n+" Iterator",O="values"==d,L=!1,_=t.prototype,M=_[l]||_["@@iterator"]||d&&_[d],T=M||A(d),k=d?O?A("entries"):T:void 0,I="Array"==n&&_.entries||M;if(I&&(x=f(I.call(new t)))!==Object.prototype&&x.next&&(c(x,m,!0),r||"function"==typeof x[l]||u(x,l,h)),O&&M&&"values"!==M.name&&(L=!0,T=function(){return M.call(this)}),r&&!g||!p&&!L&&_[l]||u(_,l,T),s[n]=T,s[m]=h,d)if(b={values:O?T:A("values"),keys:y?T:A("keys"),entries:k},g)for(S in b)S in _||o(_,S,b[S]);else i(i.P+i.F*(p||L),n,b);return b}},z7iO:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},zAnu:function(t,n,e){"use strict";var r=e("6OxN"),i=e("z7iO"),o=e("ZVlJ"),u=e("/r4/");t.exports=e("uH+j")(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")}});