module.exports=(()=>{var t={71:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>S});var r=n(924),o=n.n(r),a=n(946),c=n.n(a),i=n(33),l=n.n(i),u=n(491),s=n.n(u),d=n(22),f=n.n(d),p=n(246),h=n.n(p),y=n(323),v=n.n(y);const b=require("react");var m=n.n(b);const g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return t.map((function(t){n[t]!==e[t]&&(r=!0)})),r};var C=void 0;const x=function t(){var e=Math.floor(Date.now()/1e3),n="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(C!==n)return C=n,n;t()};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}const S=function(t){f()(n,t);var e=O(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).buildRecursive=r.buildRecursive.bind(s()(r)),r.state={addClass:t.addClass&&o()("8")==o()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&o()("8")==o()(t.defaultClass)?t.defaultClass:"rr-menu-hover-y",id:t.id&&o()("8")==o()(t.id)?t.id:"",data:t.data&&o()([])==o()(t.data)&&t.data.length?t.data:[],direction:t.direction&&o()("8")==o()(t.direction)?t.direction:"right",uuid:x()},r}return l()(n,[{key:"callback",value:function(t,e){t&&o()((function(){}))===o()(t)&&t(e)}},{key:"buildRecursive",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.state.uuid,i=[];if(n="ul"===n?"ol":"ul",e&&o()([])==o()(e)&&e.length)for(var l=function(l){var u=e[l],s=u.callback,d=u.callbackProps,f=u.text,p=u.data;i.push(m().createElement("li",{key:"menu-entry-".concat(n,"-").concat(r+l,"-").concat(c),className:"menu-entry ".concat(a?"":"root-li"," ").concat(p&&o()([])==o()(p)&&p.length?"has-children":"")},f&&m().createElement("span",{className:"text",onClick:function(){return t.callback(s,d)}},f),t.buildRecursive(p,n,l,!0)))},u=0;u<=e.length-1;u++)l(u);return i.length?"ul"==n?m().createElement("ul",{className:"".concat(a?"child":"root")},i):m().createElement("ol",{className:"".concat(a?"child":"")},i):null}},{key:"render",value:function(){var t=this.state,e=t.defaultClass,n=t.addClass,r=t.id,o=t.direction;return m().createElement("span",{className:"".concat(e," ").concat(o," ").concat(n),id:r},this.buildRecursive(this.state.data,"ol",0,!1))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return g(["addClass","id","defaultClass","data","direction"],t,e)?{addClass:t.addClass&&o()("8")==o()(t.addClass)?t.addClass:"",id:t.id&&o()("8")==o()(t.id)?t.id:"",defaultClass:t.defaultClass&&o()("8")==o()(t.defaultClass)?t.defaultClass:"rr-menu-hover-y",data:t.data&&o()([])==o()(t.data)&&t.data.length?t.data:[],direction:t.direction&&o()("8")==o()(t.direction)?t.direction:"right"}:null}}]),n}(m().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},323:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},22:(t,e,n)=>{var r=n(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},246:(t,e,n)=>{var r=n(924),o=n(491);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},596:t=>{function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},924:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(71)})();