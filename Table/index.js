module.exports=(()=>{var e={913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var a=n(924),i=n.n(a),r=n(946),o=n.n(r),s=n(33),l=n.n(s),d=n(491),u=n.n(d),c=n(22),f=n.n(c),p=n(246),y=n.n(p),m=n(323),v=n.n(m);const h=require("react");var b=n.n(h),k=void 0;const x=function e(){var t=Math.floor(Date.now()/1e3),n="".concat(t).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(k!==n)return k=n,n;e()};const M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!1;return e.map((function(e){n[e]!==t[e]&&(a=!0)})),a};function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var i=v()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return y()(this,n)}}const C=function(e){f()(n,e);var t=g(n);function n(e){var a;return o()(this,n),(a=t.call(this,e)).buildData=a.buildData.bind(u()(a)),a.resize=a.resize.bind(u()(a)),a.state={dataJsx:[],isMinified:!1,addClass:e.addClass&&i()("8")==i()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&i()("8")==i()(e.defaultClass)?e.defaultClass:"rr-table",id:e.id&&i()("8")==i()(e.id)?e.id:"",title:e.title&&i()([])==i()(e.title)?e.title:void 0,data:e.data&&i()([])==i()(e.data)?e.data:void 0,mediaBreak:e.mediaBreak&&i()(8)==i()(e.mediaBreak)?e.mediaBreak:void 0,keysToRead:e.keysToRead&&i()([])==i()(e.keysToRead)?e.keysToRead:void 0,titleOnMinified:i()(!0)!=i()(e.titleOnMinified)||e.titleOnMinified},a}return l()(n,[{key:"componentDidMount",value:function(){var e=this.state.mediaBreak;this.buildData(),e&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var e=this.state,t=e.mediaBreak,n=e.isMinified;document.documentElement.getBoundingClientRect().width<=t?n||this.setState({isMinified:!0},this.buildData):n&&this.setState({isMinified:!1},this.buildData)}},{key:"buildData",value:function(){var e=this.state,t=e.data,n=e.isMinified,a=e.title,r=e.keysToRead,o=e.titleOnMinified,s=[],l="".concat(n?"flex-column isMinified":"flex-row");if(t&&t.length){var d=[];a&&a.length&&(a.map((function(e,t){e&&i()("8")==i()(e)&&d.push(b().createElement("span",{key:x(),className:"span span-".concat(t+1)},e))})),d.length&&s.push(b().createElement("li",{key:x(),className:"".concat(l," title")},d))),t.map((function(e){if(r&&r.length){var t=[];r.map((function(i,r){if(void 0!==e[i]){var s=e[i]?e[i]:"";n&&o&&a&&0!==a.length&&void 0!==a[r]&&t.push(b().createElement("span",{key:x(),className:"span-title"},a[r])),t.push(b().createElement("span",{key:x(),className:"span span-".concat(r+1)},s))}})),t&&t.length&&(s.push(b().createElement("li",{key:x(),className:l},t)),t=[])}})),this.setState({dataJsx:s})}}},{key:"render",value:function(){var e=this.state,t=e.addClass,n=e.defaultClass,a=e.id,i=e.dataJsx;return b().createElement("ul",{className:"".concat(n," ").concat(t),id:a},i&&i.length&&i.map((function(e){return e})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return M(["addClass","defaultClass","id","data","mediaBreak","title","keysToRead","titleOnMinified"],e,t)?{addClass:e.addClass&&i()("8")==i()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&i()("8")==i()(e.defaultClass)?e.defaultClass:"rr-table",id:e.id&&i()("8")==i()(e.id)?e.id:"",title:e.title&&i()([])==i()(e.title)?e.title:void 0,data:e.data&&i()([])==i()(e.data)?e.data:void 0,mediaBreak:e.mediaBreak&&i()(8)==i()(e.mediaBreak)?e.mediaBreak:void 0,keysToRead:e.keysToRead&&i()([])==i()(e.keysToRead)?e.keysToRead:void 0,dataJsx:t.dataJsx,titleOnMinified:i()(!0)!=i()(e.titleOnMinified)||e.titleOnMinified}:null}}]),n}(b().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}},323:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},22:(e,t,n)=>{var a=n(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},246:(e,t,n)=>{var a=n(924),i=n(491);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?i(e):t}},596:e=>{function t(n,a){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,a)}e.exports=t},924:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(913)})();