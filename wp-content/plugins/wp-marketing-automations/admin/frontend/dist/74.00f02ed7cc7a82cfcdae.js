(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1321:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n(312),o=n(946),c=(n(1089),n(74));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=Object(r.lazy)((function(){return n.e(68).then(n.bind(null,1282))})),f=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(60)]).then(n.bind(null,1302))})),m=Object(r.lazy)((function(){return n.e(55).then(n.bind(null,1293))})),p=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(73)]).then(n.bind(null,1284))}));t.default=function(e){var t=u(Object(r.useState)(!1),2),n=t[0],s=t[1],d=o.a.getStep(),g=o.a.getCampaignId(),y=o.a.getCampaignData(),j=Object(c.a)().setL2Title;Object(r.useEffect)((function(){j("title"in y?Object(r.createElement)(r.Fragment,null,y.title):"")}),[y]);var O=function(t){switch(t){case 1:return Object(r.createElement)(b,{campaignId:g,setPending:s,isPending:n});case 2:return Object(r.createElement)(f,l({},e,{setPending:s,isPending:n}));case 3:return Object(r.createElement)(m,{setPending:s,isPending:n});case 4:return Object(r.createElement)(p,{setPending:s,isPending:n});default:return Object(r.createElement)(r.Fragment,null,Object(a.__)("There is some error","wp-marketing-automations"))}},h=[{key:1,label:Object(a.__)("Information","wp-marketing-automations"),content:O(1)},{key:2,label:Object(a.__)("Contacts","wp-marketing-automations"),content:O(2)},{key:3,label:Object(a.__)("Content","wp-marketing-automations"),content:O(3)},{key:4,label:Object(a.__)("Review","wp-marketing-automations"),content:O(4)}];return Object(r.createElement)("div",{"data-step":d},Object(r.createElement)(i.a,{steps:h,currentStep:parseInt(d)>0?d:1,isPending:n}))}}}]);