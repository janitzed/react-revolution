module.exports=(()=>{var e={316:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>x});var r=l(837),a=l.n(r),n=l(221),o=l.n(n),i=l(924),c=l.n(i),u=l(946),s=l.n(u),d=l(33),f=l.n(d),p=l(491),b=l.n(p),C=l(22),h=l.n(C),y=l(246),k=l.n(y),v=l(323),m=l.n(v);const F=require("react");var S=l.n(F);const g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return e.map((function(e){l[e]!==t[e]&&(r=!0)})),r};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,r=m()(e);if(t){var a=m()(this).constructor;l=Reflect.construct(r,arguments,a)}else l=r.apply(this,arguments);return k()(this,l)}}const x=function(e){h()(l,e);var t=P(l);function l(e){var r;return s()(this,l),(r=t.call(this,e)).handleFileUpload=r.handleFileUpload.bind(b()(r)),r.handleSingleFile=r.handleSingleFile.bind(b()(r)),r.errorCallback=r.errorCallback.bind(b()(r)),r.calculatedFileSize=r.calculatedFileSize.bind(b()(r)),r.handleClick=r.handleClick.bind(b()(r)),r.state={file:{},fileName:"",fileSize:0,calculatedFileSize:0,fileType:"",hiddenInputStyle:{display:"none",opacity:0,width:0,height:0,overflow:"hidden"},addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file",id:e.id&&c()("8")==c()(e.id)?e.id:"",allowedFileSize:e.allowedFileSize,allowedFileSizeDescriptor:e.sizeDescriptor,allowedFiles:e.allowedFiles,label:e.label&&c()("8")==c()(e.label)?e.label:"",readFileCallback:e.readFileCallback&&c()((function(){}))==c()(e.readFileCallback)?e.readFileCallback:void 0,errorCallback:e.errorCallback&&c()((function(){}))==c()(e.errorCallback)?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,multiple:c()(!0)==c()(e.multiple)&&e.multiple},r}return f()(l,[{key:"handleFileUpload",value:function(e){e.preventDefault();var t=e.target.files;this.handleSingleFile(t)}},{key:"handleSingleFile",value:function(e){var t=this.state,l=t.readFileCallback,r=t.errorCallbackCustomData;if(e)for(var a=0;a<=e.length-1;a++){var n=e[a];try{var o=n.type;this.validateObjectValues(n)&&l&&l(n,o)}catch(e){this.errorCallback(e,r)}}}},{key:"validateObjectValues",value:function(e){var t=e.name,l=e.size,r=e.type,a=this.calculatedFileSize(l),n=this.state,o=n.allowedFileSize,i=n.allowedFiles,c=n.errorCallbackCustomData,u=!0;return t||(this.errorCallback("empty_filename",c),u=!1),l||(this.errorCallback("empty_filecontent",c),u=!1),r||(this.errorCallback("unrecognized_filetype",c),u=!1),a<=o&&(this.errorCallback("maximum_filesize_reached",c),u=!1),i.includes(r)||(this.errorCallback("unsupported_filetype",c),u=!1),u}},{key:"calculatedFileSize",value:function(e){var t=0;switch(this.state.allowedFileSizeDescriptor.toUpperCase()){case"B":t=e;break;case"KB":t=1024*e;break;case"MB":t=1024*e*1024;break;case"GB":t=1024*e*1024*1024;break;case"TB":t=1024*e*1024*1024*1024;break;case"PT":t=1024*e*1024*1024*1024*1024;break;default:t=e}return t}},{key:"errorCallback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,l=this.state.errorCallback;l&&l(e,t)}},{key:"handleClick",value:function(){this.inputNode&&this.inputNode.click()}},{key:"render",value:function(){var e,t=this,l=this.state,r=l.addClass,n=l.label,i=l.inputPlaceholder,c=l.defaultClass,u=l.id,s=l.multiple,d={multiple:s||"",style:l.hiddenInputStyle};return S().createElement("div",{className:"".concat(c," ").concat(r),id:u},S().createElement("input",o()((e={ref:function(e){return t.inputNode=e},type:"file",onChange:function(e){return t.handleFileUpload(e)},placeholder:i},a()(e,"type","file"),a()(e,"name","files[]"),e),d)),S().createElement("label",{className:"label",htmlFor:"files",onClick:function(){return t.handleClick()}},n))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return g(["addClass","defaultClass","id","label","errorCallback","readFileCallback","inputPlaceholder","errorCallbackCustomData","multiple"],e,t)?{addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file",id:e.id&&c()("8")==c()(e.id)?e.id:"",label:e.label&&c()("8")==c()(e.label)?e.label:"",readFileCallback:e.readFileCallback&&c()((function(){}))==c()(e.readFileCallback)?e.readFileCallback:void 0,errorCallback:e.errorCallback&&c()((function(){}))==c()(e.errorCallback)?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,multiple:c()(!0)==c()(e.multiple)&&e.multiple}:null}}]),l}(S().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,l,r){return l&&t(e.prototype,l),r&&t(e,r),e}},837:e=>{e.exports=function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(l){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(l)}e.exports=t},22:(e,t,l)=>{var r=l(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},246:(e,t,l)=>{var r=l(924),a=l(491);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},596:e=>{function t(l,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(l,r)}e.exports=t},924:e=>{function t(l){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(l)}e.exports=t}},t={};function l(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,l),a.exports}return l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(316)})();