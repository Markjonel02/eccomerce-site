(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1008:function(e,t,r){"use strict";r.d(t,"a",(function(){return M}));var n=r(943),a=r(9),o=r.n(a),i=r(4),u=r(1),c=r(0),s=r(19),l=r.n(s);function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){b(o,n,a,i,u,"next",e)}function u(e){b(o,n,a,i,u,"throw",e)}i(void 0)}))}}var y=function(e){return{name:e.slug,className:"bwf-search-bwf-".concat(e.slug,"-result"),options:function(t){return(r=m(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o()({path:Object(i.u)("/automation/rules/".concat(e.slug,"/suggestions?search=")+r),method:"GET"});case 2:return n=t.sent,(a=n&&n.result?n.result:{})&&(a=Object.keys(a).map((function(e){return{key:String(e),label:a[e]}}))),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),function(e){return r.apply(this,arguments)})(t);var r},isDebounced:!0,getOptionIdentifier:function(e){return e.key},getOptionKeywords:function(e){return[e.label]},getFreeTextOptions:function(t,r){var n,a=f(r);try{for(a.s();!(n=a.n()).done;){if(n.value.value.label.toLowerCase()===t.toLowerCase())return[]}}catch(e){a.e(e)}finally{a.f()}return[{key:"name",label:Object(c.createElement)("span",{key:"name",className:"bwf-search-result-name"},l()({mixedString:"Search ".concat(e.name," with term {{query /}}"),components:{query:Object(c.createElement)("strong",{className:"components-form-token-field__suggestion-match"},t)}})),value:{key:"0",label:t}}]},getOptionLabel:function(e,t){var r=Object(i.m)(e.label,t)||{};return Object(c.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":e.label},Object.keys(r).length>0?Object(c.createElement)(c.Fragment,null,r.suggestionBeforeMatch,Object(c.createElement)("strong",{className:"components-form-token-field__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch):e.label)},getOptionCompletion:function(e){return e}}},d=function(e){return function(){var t=m(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o()({path:Object(i.u)("/automation/rules/".concat(e.slug,"/suggestions?search=")+r),method:"GET"});case 3:return n=t.sent,(a=n&&n.result?n.result:{})&&(a=Object.keys(a).map((function(e){return{key:String(e),label:a[e]}}))),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){switch(e.type){case"Text":case"Number":case"Days":case"datetime":case"time":case"Date":return{input:{component:e.type,extraProps:e.hasOwnProperty("extra_props")?e.extra_props:{}}};case"Select":return{input:{component:"selectcontrol",options:e.options?Object.keys(e.options).map((function(t){return{value:t,label:e.options[t]}})):[],default:e.default}};case"key-value":return{input:{component:"key-value",options:e.options?Object.keys(e.options).map((function(t){return{value:t,label:e.options[t]}})):[]}};case"Search":return{input:{component:"Search",type:y(e),getLabels:d(e),emptySearch:!0}};case"product-qty":return{input:{component:"product-qty",type:y(e),getLabels:d(e),emptySearch:!0}};case"search-list":return{input:{component:"search-list",apiPath:e.slug,multiple:!(!e.hasOwnProperty("multiple")||!e.multiple)}};default:return{}}},j=function(e){return e&&e.operators?{rules:Object.keys(e.operators).map((function(t){return{label:e.operators[t],value:t}}))}:{}},w=function(e){if(!e||!e.name||!e.slug)return{};var t=e.hasOwnProperty("title")&&""!==e.title?e.title:e.name;return{labels:{add:e.name,label:t,valueLabel:e.value_label?e.value_label:Object(u.__)("Value","wp-marketing-automations"),remove:Object(u.__)("Remove ","wp-marketing-automations")+t,rule:Object(u.__)("Select ","wp-marketing-automations")+e.name+Object(u.__)(" filter match","wp-marketing-automations"),title:"{{title}}".concat(t,"{{/title}} {{rule/}} {{filter /}}"),filter:Object(u.__)("Select ","wp-marketing-automations")+t}}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!(!e||!e.type)&&h(h(h(h({},t),O(e)),j(e)),w(e))},S=r(3),_=function(e,t){var r=t.type,n=t.options,a=void 0===n?{}:n,o=t.operators,c=void 0===o?{}:o,s=e.rule,l=e.data;switch(r){case"product-qty":if(!l||!Array.isArray(l.search))return"";var f="";return l.qty&&(f+=l.qty+Object(u.__)(" qty of ","wp-marketing-automations")),f+=l.search.map((function(e){return e.label})).join(", ");case"Search":return l&&Array.isArray(l)?l.map((function(e){return e.label})).join(", "):"";case"Select":return l?a&&a[l]?a[l]:l:"";case"key-value":if(!Array.isArray(l)||2!==l.length)return"";a&&a[l[0]]&&(l[0]=a[l[0]]);var p=c&&c[s]?c[s]:s;return p||(p=":"),l.join(" ".concat(p," "));case"Date":if(Object(S.isObject)(l)){var b=l.from,m=void 0===b?"":b,y=l.to,d=void 0===y?"":y;if(!Object(S.isEmpty)(m)&&!Object(S.isEmpty)(d))return Object(i.W)(m,!1,!1)+" and "+Object(i.W)(d,!1,!1)}return Object(i.W)(l,!1,!1);case"datetime":if(Object(S.isObject)(l)){var v=l.from,h=void 0===v?"":v,g=l.to,O=void 0===g?"":g;if(!Object(S.isEmpty)(h)&&!Object(S.isEmpty)(O))return Object(i.W)(h,!1,!1)+" and "+Object(i.W)(O,!1,!1)}return Object(i.W)(l,!1,!1);case"Days":if(Object(S.isObject)(l)){var j=l.from,w=void 0===j?"":j,k=l.to,_=void 0===k?"":k;if(!Object(S.isEmpty)(w)&&!Object(S.isEmpty)(_))return w+" and "+_}return l;case"search-list":return l&&Array.isArray(l)?l.map((function(e){return e.name})).join(", "):"";default:return l}},A=function(e,t){var r=t.type,n=(t.options,t.operators),a=void 0===n?{}:n,o=e.rule,i=(e.data,a&&a[o]?a[o]:o);switch(r){case"Select":return o?i:": ";case"key-value":return": ";default:return i}},x=function(e){return function(t){var r=Object(S.cloneDeep)(t);return e&&Object.keys(e).length&&Array.isArray(r)&&r.length?r.map((function(t){return t.map((function(t){var r=Object.keys(e).find((function(e){return t.filter===e}));return!(!r||!e[r])&&l()({mixedString:e[r].readable_text,components:{key:Object(c.createElement)(c.Fragment,null,e[r].hasOwnProperty("title")&&""!==e[r].title?e[r].title:e[r].name),rule:Object(c.createElement)(c.Fragment,null,A(t,e[r])),value:Object(c.createElement)("strong",null,_(t,e[r]))}})}))})):[]}};function E(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=I(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}var L=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n,a,c,s,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.queryKey,(n=P(r,3))[0],a=n[1],c=void 0===a?"ab_cart_abandoned":a,s=n[2],l=void 0===s?0:s,c){e.next=4;break}throw new Error(Object(u.__)("Unable to fetch rules, Event is empty","wp-marketing-automations"));case 4:return e.next=6,o()({path:Object(i.u)("/automation/event-rules/".concat(c,"?automation_id=").concat(l))});case 6:if((f=e.sent)&&f.code&&200===parseInt(f.code)&&f.result){e.next=10;break}throw p=f&&f.message?f.message:Object(u.__)("Unable to load automation rules","wp-marketing-automations"),new Error(p);case 10:return e.abrupt("return",f.result);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){D(o,n,a,i,u,"next",e)}function u(e){D(o,n,a,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ab_cart_abandoned",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=Object(n.a)(["bwfan-rules",e,t],L,{staleTime:5e3}),a=r.isLoading,o=r.error,i=r.data;if(a||o||!i)return{isLoading:a,error:o,rules:{},getReadableTexts:function(e){return[]}};var u=1,c={},s={};for(var l in i){var f,p={priority:u++,group:l,groupLabel:i[l].title},b=E(i[l].rules);try{for(b.s();!(f=b.n()).done;){var m=f.value;c[m.slug]=k(m,p),s[m.slug]=m}}catch(e){b.e(e)}finally{b.f()}}return{isLoading:a,error:o,rules:c,getReadableTexts:x(s)}}},1011:function(e,t,r){"use strict";var n=r(945),a=r(1042),o=r.n(a),i=r(3),u=r(4);function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e||!e.type)return 200+t;var n=0;switch(e.type){case"start":n=r?110:80;break;case"end":n=30;break;case"exit":n=Object(u.Jb)()?65:95;break;case"jump":n=Object(u.Jb)()?150:95;break;case"wait":n=r&&e.data&&e.data.sidebarValues?160:105;break;case"yesNoNode":n=r?50:20;break;case"benchmark":n=95,Object(u.Jb)()&&(n=r&&e.data&&e.data.benchmark?150:105,e.hasOwnProperty("data")&&e.data.hasOwnProperty("desc_text")&&!Object(i.isEmpty)(e.data.desc_text)&&(n+=30));break;case"action":var a=e.data&&e.data.selected?e.data.selected:"";if(""!==a)switch(a){case"wp_sendemail":case"twilio_send_sms":n=e.data.hasOwnProperty("sidebarValues")&&!Object(i.isEmpty)(e.data.sidebarValues)?200:145;break;default:n=r?165:120}else n=105;e.hasOwnProperty("data")&&e.data.hasOwnProperty("desc_text")&&!Object(i.isEmpty)(e.data.desc_text)&&(n+=30);break;case"conditional":if(n=95,Object(u.Jb)()){var o=Object(i.flatten)(e.data.sidebarValues).length,c=o-1;n=o?48*o+29*c+75:150,r||(n-=30)}break;case"split":n=e.data.hasOwnProperty("sidebarValues")&&!Object(i.isEmpty)(e.data.sidebarValues)?200:140,r||(n=100);break;case"splitpath":n=70;break;case"unknown":n=65;break;default:n=200}return n+t},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],r=[];if(Array.isArray(e)){var a,o={},i=c(e);try{for(i.s();!(a=i.n()).done;){var u=a.value;Object(n.k)(u)&&"exit"===u.type&&r.push(u.id)}}catch(e){i.e(e)}finally{i.f()}var s,l=c(e);try{for(l.s();!(s=l.n()).done;){var f=s.value;t.includes(f.target)||(o[f.target]?(t.push(f.target),delete o[f.target]):o[f.target]=1,Object(n.j)(f)&&r.includes(f.source)&&t.push(f.target))}}catch(e){l.e(e)}finally{l.f()}}return{hasMultiParents:function(e){return t.includes(e)}}};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=new o.a.graphlib.Graph;a.setDefaultEdgeLabel((function(){return{}})),a.setGraph({rankdir:"TB",ranksep:90,nodesep:100});var i=f(e),u=i.hasMultiParents;return e.forEach((function(e){Object(n.k)(e)?a.setNode(e.id,{width:366,height:l(e,3,t)+r}):a.setEdge(e.source,e.target,{weight:"conditional"===e.type?2:5})})),o.a.layout(a),e.map((function(e){if(Object(n.k)(e)){var r=a.node(e.id);e.targetPosition="top",e.sourcePosition="bottom",e.hasMultiParents=u(e.id);var o=l(e,"conditional"===e.type?70:50,t);e.position={x:r.x-165+Math.random()/1e3,y:r.y-o/2}}return e}))}}}]);