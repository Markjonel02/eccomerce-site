(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1024:function(e,t,r){"use strict";var a=r(0),n=r(1),i=r(9),o=r.n(i),c=r(19),l=r.n(c),s=r(36),u=r.n(s),m=r(37),f=r.n(m),b=r(4),p=r(20);function d(e,t,r,a,n,i,o){try{var c=e[i](o),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}var y=function(e){return e.name};t.a={name:"broadcast",className:"bwf-search-bwf-broadcast-result",options:function(e){return(t=regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return r={search:t,type:2,limit:5,offset:0},e.next=5,o()({path:Object(b.u)("/analytics/engagements/search?"+Object(p.stringify)(r)),method:"GET"});case 5:return a=e.sent,n=u()(a,"result")?a.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),r=function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function o(e){d(i,a,n,o,c,"next",e)}function c(e){d(i,a,n,o,c,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})(e);var t,r},isDebounced:!0,getOptionIdentifier:function(e){return e.key},getOptionKeywords:function(e){return[e.name]},getFreeTextOptions:function(e,t){return[{key:"name",label:Object(a.createElement)("span",{key:"name",className:"bwf-search-result-name"},l()({mixedString:Object(n.__)("All broadcast with names that include {{query /}}","wp-marketing-automations"),components:{query:Object(a.createElement)("strong",{className:"components-form-token-field__suggestion-match"},e)}})),value:{id:e,name:e,tags:t.map((function(e){return u()(e,"value")?e.value:e})),searchTerm:e}}]},getOptionLabel:function(e,t){var r=Object(b.m)(y(e),t)||{};return Object(a.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":y(e)},r.suggestionBeforeMatch,Object(a.createElement)("strong",{className:"components-form-token-field__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch)},getOptionCompletion:function(e){return e}}},1333:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),i=r(948),o=r(313),c=function(e){var t=e.metrics,r=(0,i.a.getEmailAnalyticsLoading)();return Object(a.createElement)("div",{className:"bwf-crm-emails-report-tiles"},Object(a.createElement)(o.a,{items:t,title:Object(n.__)("Overview","wp-marketing-automations"),isLoading:r}))},l=r(309),s=r(35),u=r(3),m=r(5),f=r(6),b=r.n(f),p=r(14);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var g=function(e){var t=e.query,r=e.metrics,o=t.chart?t.chart:"email_sents",c=i.a.getEmailAnalyticsLoading,f=i.a.getEmailAnalytics,y=c(),g=f(),O=d(Object(a.useState)(r[0]),2),v=O[0],j=O[1],h=Object(s.f)(t),w=Object(s.b)(function(e){return e.period&&null!=e.period&&""!=e.period||(e.period="month"),e.compare&&null!=e.compare&&""!=e.compare||(e.compare="previous_year"),e}(t));w.includes(h)||(h=w[w.length-1]);return Object(a.createElement)(l.a,{isRequesting:y,data:function(e){var t=[];g&&g.hasOwnProperty("intervals")&&g.intervals.map((function(r){"email_sents"===e&&t.push({date:r.start_date,email_sents:{label:Object(n.__)("SMS Sent","wp-marketing-automations"),value:parseInt(r.subtotals.email_sents)}}),"email_click"===e&&t.push({date:r.start_date,email_click:{label:Object(n.__)("SMS Clicks","wp-marketing-automations"),value:parseInt(r.subtotals.email_click)}}),"total_orders"===e&&t.push({date:r.start_date,total_orders:{label:Object(n.__)("Total Orders","wp-marketing-automations"),value:parseInt(r.subtotals.total_orders)}}),"total_revenue"===e&&t.push({date:r.start_date,total_revenue:{label:Object(n.__)("Total Revenue","wp-marketing-automations"),value:parseInt(r.subtotals.total_revenue)}})}));return t}(o),title:Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:""},Object(n.__)("Performance","wp-marketing-automations"))),interval:h,layout:"item-comparison",interactiveLegend:!0,chartType:"curve-line",chartMeta:v,tabs:r,hideTypeSelect:!0,customHeaderItem:Object(a.createElement)(a.Fragment,null,r&&Object(u.isArray)(r)&&Object(a.createElement)("div",{className:"bwf-chart-tabs"},r.filter((function(e){return"convert_time"!==e.key})).map((function(e){return Object(a.createElement)(m.Button,{className:b()({"is-gray-light":v.key!==e.key,"is-secondary-light":v.key===e.key}),key:e.key,onClick:function(r){j(e),r.preventDefault(),delete t.compare,Object(p.k)({chart:e.key},"/",t)}},e.title)}))))})},O=r(4),v=r(323),j=r(335),h=r(37),w=r.n(h),_=r(9),k=r.n(_),E=r(20),S=r(36),A=r.n(S);function P(e,t,r,a,n,i,o){try{var c=e[i](o),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=D(D({},j.a),{options:function(e){return(t=regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return r={search:t,type:1,mode:2,limit:5,offset:0},e.next=5,k()({path:Object(O.u)("/analytics/engagements/search?"+Object(E.stringify)(r)),method:"GET"});case 5:return a=e.sent,n=A()(a,"result")?a.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),r=function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function o(e){P(i,a,n,o,c,"next",e)}function c(e){P(i,a,n,o,c,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})(e);var t,r}});function I(e,t,r,a,n,i,o){try{var c=e[i](o),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=C(C({},r(1024).a),{options:function(e){return(t=regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return r={search:t,type:2,mode:2,limit:5,offset:0},e.next=5,k()({path:Object(O.u)("/analytics/engagements/search?"+Object(E.stringify)(r)),method:"GET"});case 5:return a=e.sent,n=A()(a,"result")?a.result.map((function(e){return{key:e.id,name:e.title,label:e.title}})):[],e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})),r=function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function o(e){I(i,a,n,o,c,"next",e)}function c(e){I(i,a,n,o,c,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})(e);var t,r}});function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var U=function(e){var t=e.query,r=e.children,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(t.hasOwnProperty("filter")){var r=0;return"broadcast"==t.filter?r=2:"automation"==t.filter&&(r=1),k()({path:Object(O.u)("/analytics/entity/data/?type=".concat(r,"&oid=").concat(e)),method:"GET"}).then((function(e){return 200==e.code&&e.hasOwnProperty("result")?[{key:e.result.id,label:e.result.title}]:[]}))}},o=[{staticParams:["page","path","period","chart","chartType"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(n.__)("All SMS","wp-marketing-automations"),value:"all"}]}];if(Object(O.Jb)()){var c=[{label:Object(n.__)("Single Automation","wp-marketing-automations"),value:"select_automation",subFilters:[{component:"Search",value:"automation",path:["select_automation"],autocompleter:L,settings:{type:"custom",param:"id",selected:!0,getLabels:i,labels:{placeholder:Object(n.__)("Type to search for a automation","wp-marketing-automations"),button:Object(n.__)("Automation","wp-marketing-automations")}}}]},{label:Object(n.__)("Single Broadcast","wp-marketing-automations"),value:"select_broadcast",subFilters:[{component:"Search",value:"broadcast",path:["select_broadcast"],autocompleter:x,settings:{type:"custom",param:"id",getLabels:i,labels:{placeholder:Object(n.__)("Type to search for a broadcast","wp-marketing-automations"),button:Object(n.__)("Broadcast","wp-marketing-automations")}}}]}];o[0].filters=[].concat(G(o[0].filters),c)}return Object(a.createElement)("div",{className:"bwf-crm-emails-report-filter"},r,Object(a.createElement)(v.a,{siteLocale:"en-US",path:"/",query:t,filterTitle:Object(n.__)("Email","wp-marketing-automations"),filters:o,onDateSelect:function(e){var r=R(R({},t),e);delete r.compare,Object(p.k)(r,"/",{})},showDatePicker:!0,isoDateFormat:s.g,hideCompare:!0,dateQuery:function(e){e.compare="previous_year";var t=Object(s.e)(e),r=t.period,a=t.compare,n=t.before,i=t.after,o=Object(s.c)(e);return{period:r,compare:a,before:n,after:i,primaryDate:o.primary,secondaryDate:o.secondary}}(t),currency:Object(O.kb)()}))},B=r(965),J=r(966),$=r(50),K=r(49),Q=r(119),z=r(950),V=r(975);function W(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(){var e=Object($.a)(Object(O.kb)()).formatAmount,t=Object(B.a)(),r=t.fetchEmailAnalytics,o=t.fetchEmailTable,l=t.setEmailTableData,m=t.setEmailAnalyticsData;Object(J.a)("sms",!1,"");var f=Object(p.i)(),b=function(e){return e.compare="previous_year",Object(s.c)(e).primary};f.hasOwnProperty("period")||(f.period="month");var d=i.a.getEmailTableLoading,y=i.a.getEmailTableLimit,v=i.a.getEmailTableOffset,j=i.a.getEmailTablePage,h=i.a.getEmailTableList,w=i.a.getEmailTableTotal,_=i.a.getEmailAnalytics,k=d(),E=v(),S=y(),A=j(),P=h(),T=w(),D=f.period,M=f.compare,L=f.interval,I=f.after,N=f.before,C=f.id,Y=f.filter,x=_(),F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,c=b(e),l="",s="";c&&(Object(u.isEmpty)(c.after)||(l=c.after.format("YYYY-MM-DD HH:mm:ss")),Object(u.isEmpty)(c.before)||(s=c.before.format("YYYY-MM-DD 23:59:59")),Object(u.isEmpty)(l)||Object(u.isEmpty)(s)||(a&&r(l,s,t,C,Y,2),o(n,i,l,s,t,C,Y,2)))};Object(a.useEffect)((function(){if(Object(O.k)(Object(n.__)("SMS Analytics","wp-marketing-automations")),Object(O.Jb)()){var e=f.hasOwnProperty("interval")?f.interval:"day";F(f,e,!0,S,E)}else{for(var t=b(f),r=0,a=0,i=0,o=0,c=[],s=t.after;s.isBefore(t.before);s.add(1,"days")){var u=Math.floor(11*Math.random()),p=Math.floor(Math.random()*parseInt(u)),d=Math.floor(Math.random()*parseInt(p)),y=Math.floor(100*Math.random());c.push({date_end_gmt:s.format("YYYY-MM-DD")+" 23:59:59",date_start_gmt:s.format("YYYY-MM-DD")+" 00:00:00",end_date:s.format("YYYY-MM-DD")+" 23:59:59",interval:s.format("YYYY-MM-DD"),start_date:s.format("YYYY-MM-DD")+" 00:00:00",subtotals:{click_rate:(p/u*100).toFixed(2),email_click:p,email_sents:u,total_orders:d,total_revenue:y}}),r+=u,a+=p,i+=d,o+=y}m("data",{totals:{click_rate:(a/r*100).toFixed(2),email_click:a,email_sents:r,total_orders:i,total_revenue:o},intervals:c}),m("isLoading",!1),l("data",[{click_count:a,click_rate:(a/r*100).toFixed(2),conversions:i,oid:"5",revenue:o,sent:r,subject:Object(n.__)("Dummy Message","wp-marketing-automations"),template:"",tid:"52",title:Object(n.__)("Dummy SMS","wp-marketing-automations"),type:"1"}]),l("isLoading",!1)}}),[D,M,L,I,N,C,Y]);var R,q=[{key:"message",label:Object(n.__)("Message","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-360 bwf-max-w-400"},{key:"source",label:Object(n.__)("Source","wp-marketing-automations"),isLeftAligned:!1},{key:"sent",label:Object(n.__)("Sent","wp-marketing-automations"),isLeftAligned:!0,isNumeric:!0},{key:"click",label:Object(n.__)("Click","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0},Object(O.Tb)()?{key:"orders",label:Object(n.__)("Orders","wp-marketing-automations"),isLeftAligned:!0}:{},Object(O.Tb)()?{key:"revenue",label:Object(n.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,isNumeric:!0}:{}],G=function(e){if(e!==S){l("limit",e);var t=f.hasOwnProperty("interval")?f.interval:"day";F(f,t,!1,e,E)}},H=function(e){if(!x||!x.hasOwnProperty("totals"))return 0;var t=x.totals;return t.hasOwnProperty(e)?t[e]:void 0},X=function(t){return[{key:"email_sents",title:Object(n.__)("Sent","wp-marketing-automations"),icon:"sent",value:parseInt(H("email_sents"))},{key:"email_click",title:Object(n.__)("Clicks","wp-marketing-automations"),icon:"open-rate",value:parseInt(H("email_click"))}].concat(W(Object(O.Tb)()?[{key:"total_orders",title:Object(n.__)("Orders","wp-marketing-automations"),icon:"open-rate",value:parseInt(H("total_orders"))},{key:"total_revenue",title:Object(n.__)("Revenue","wp-marketing-automations"),icon:"open-rate",value:e(H("total_revenue")),isCurrency:!0}]:[]))};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-content-header-new"},Object(a.createElement)("div",{className:"bwf-content-header-left"},Object(a.createElement)("div",{className:"bwf-content-header-title"},Object(n.__)("SMS","wp-marketing-automations")))),Object(a.createElement)(K.a,null),Object(a.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-crm-emails-report-wrap bwf-table-with-border"},!O.Hb&&!Object(O.Jb)()&&Object(a.createElement)(z.a,{onPage:!0,modalContent:{proLink:Object(O.T)("upgrade",{utm_medium:"SMS+Analytics+Upgrade+Modal"})}}),Object(a.createElement)(U,{query:f},O.Hb&&Object(a.createElement)(V.a,{title:Object(n.__)("SMS Analytics","wp-marketing-automations"),message:Object(n.__)("Use our sample data to explore SMS Analytics. Use these trends to find out best time to send campaigns.","wp-marketing-automations"),proLink:Object(O.T)("upgrade",{utm_medium:"SMS+Analytics+Sample+Data+Notice"})})),Object(a.createElement)("div",{className:"bwf_clear_2"}),Object(a.createElement)(c,{query:f,metrics:X()}),Object(a.createElement)(g,{query:f,metrics:X()}),Object(a.createElement)(Q.a,{title:Object(n.__)("SMS","wp-marketing-automations"),rows:(R=[],Object(u.isEmpty)(P)||P.map((function(t){var r=parseFloat(t.click_rate)?" ( "+parseFloat(t.click_rate).toFixed(2)+"% ) ":"";R.push([{display:t.template?Object(a.createElement)("div",{className:"bwf-pre-line"},t.template):"-",value:t.subject},{display:t.title?t.title:"-",value:t.title},{display:parseInt(t.sent)?parseInt(t.sent):"-",value:t.sent},{display:parseInt(t.click_count)?t.click_count+r:"-",value:t.click_count},Object(O.Tb)()?{display:parseInt(t.conversions)?parseInt(t.conversions):"-",value:t.conversions}:{},Object(O.Tb)()?{display:t&&t.hasOwnProperty("revenue")&&t.revenue?e(t.revenue):"-",value:t.revenue,isCurrency:!0}:{}])})),R),headers:q,query:{paged:A},rowsPerPage:S?parseInt(S):25,totalRows:T,isLoading:k,onPageChange:function(e,t){var r=(e-1)*S;l("offset",r);var a=f.hasOwnProperty("interval")?f.interval:"day";F(f,a,!1,S,r)},onQueryChange:function(e){return"per_page"!==e?function(){}:G},showMenu:!1,rowHeader:!0,hideHeader:"yes",emptyMessage:Object(n.__)("No SMS found","wp-marketing-automations")})))}},948:function(e,t,r){"use strict";var a=r(52),n=r(307),i=Object(a.a)(n.b.cartAnalytics).getStateProp,o=Object(a.a)(n.b.contactAnalytics).getStateProp,c=Object(a.a)(n.b.emailAnalytics).getStateProp,l=Object(a.a)(n.b.emailTable).getStateProp,s=Object(a.a)(n.b.engagementAnalytics).getStateProp,u=Object(a.a)(n.b.directEmailTable).getStateProp,m={getCartAnalytics:function(){return i("data")},getCartAnalyticsLoading:function(){return i("isLoading")},getContactAnalytics:function(){return o("data")},getContactAnalyticsLoading:function(){return o("isLoading")},getEmailAnalytics:function(){return c("data")},getEmailAnalyticsLoading:function(){return c("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return s("data")},getEngagementAnalyticsLoading:function(){return s("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};t.a=m},950:function(e,t,r){"use strict";var a=r(0),n=r(6),i=r.n(n),o=r(1),c=r(8),l=(r(952),r(39)),s=r(4);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.a=function(e){var t=u(Object(a.useState)(!1),2),r=t[0],n=t[1],m=e.modalContent,f=void 0===m?{}:m,b=e.content,p=e.onPage,d=void 0!==p&&p;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:i()("bwf-upgrade-pro-overlay",{"is-on-page":d}),onClick:function(){d||n(!0)}},d?Object(a.createElement)(l.a,{showHeader:!1,modalContent:f}):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-king-tag-pro"},Object(a.createElement)(c.a,{icon:"king",size:38,color:"#fff"})),Object(a.createElement)("span",{className:"bwf-mt-8"},b||(Object(s.Fb)()?Object(o.__)("Activate your license to continue using premium features without interruption.","wp-marketing-automations"):Object(o.__)("This feature is locked. To get full access of FunnelKit Automation upgrade to PRO","wp-marketing-automations"))))),Object(a.createElement)(l.b,{isOpen:r,onRequestClose:function(){return n(!1)},modalContent:f}))}},952:function(e,t,r){},965:function(e,t,r){"use strict";var a=r(51),n=r(4),i=r(307),o=r(20),c=function(e){var t=0;return"automation"===e?t=1:"broadcast"===e&&(t=2),t};t.a=function(){var e=Object(a.a)(i.b.cartAnalytics).fetch,t=Object(a.a)(i.b.contactAnalytics),r=t.fetch,l=t.setStateProp,s=Object(a.a)(i.b.emailAnalytics),u=s.fetch,m=s.setStateProp,f=Object(a.a)(i.b.emailTable),b=f.fetch,p=f.setStateProp,d=Object(a.a)(i.b.engagementAnalytics),y=d.fetch,g=d.setStateProp,O=Object(a.a)(i.b.directEmailTable),v=O.fetch,j=O.setStateProp;return{fetchCartAnalytics:function(t,r,a){e("GET",Object(n.u)("/analytics/carts/")+"?"+Object(o.stringify)({after:t,before:r,interval:a}))},fetchContactAnalytics:function(e,t,a){r("GET",Object(n.u)("/analytics/contacts/")+"?"+Object(o.stringify)({after:e,before:t,interval:a}))},fetchEmailAnalytics:function(e,t,r,a,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(n.u)("/analytics/emails/chart/")+"?"+Object(o.stringify)({after:e,before:t,interval:r,oid:a,type:c(i),mode:l}))},fetchEmailTable:function(e,t,r,a,i,l,s){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;b("GET",Object(n.u)("/analytics/emails/tabular/")+"?"+Object(o.stringify)({after:r,before:a,interval:i,oid:l,type:c(s),limit:e,offset:t,mode:u}))},setEmailTableData:function(e,t){p(e,t)},fetchEngagementData:function(e,t){y("GET",Object(n.u)("/analytics/engagement")+"?"+Object(o.stringify)({after:e,before:t}))},setContactAnalyticsData:function(e,t){l(e,t)},setEmailAnalyticsData:function(e,t){m(e,t)},setEngagementData:function(e,t){g(e,t)},fetchDirectEmailTable:function(e,t,r,a,i){v("GET",Object(n.u)("/analytics/direct-emails/tabular/")+"?"+Object(o.stringify)({after:r,before:a,interval:i,limit:e,offset:t}))},setDirectEmailTableData:function(e,t){j(e,t)}}}},966:function(e,t,r){"use strict";var a=r(74),n=r(0),i=r(1);t.a=function(e,t,r){var o=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},c=Object(a.a)(),l=c.setActiveMultiple,s=c.resetHeaderMenu,u=c.setL2NavType,m=c.setL2Nav,f=c.setBackLink,b=c.setL2Title,p=c.setPageHeader;return Object(n.useEffect)((function(){s(),!t&&u("menu"),!t&&m(o.reports_nav),l({leftNav:"analytics",rightNav:e+"-analytics"}),t&&f(t),r&&b(r),p(Object(i.__)("Analytics","wp-marketing-automations"))}),[e,r]),!0}},975:function(e,t,r){"use strict";var a=r(0),n=r(1),i=r(6),o=r.n(i),c=r(109),l=(r(979),r(160));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.a=function(e){var t,r=e.className,i=e.align,m=void 0===i?"left":i,f=e.title,b=e.message,p=e.proLink,d=b||Object(n.sprintf)(Object(n.__)("Use our sample data to explore %s. See how it summarises metrics across multiple funnels.","wp-marketing-automations"),f),y=u(Object(a.useState)(!1),2),g=y[0],O=y[1];return Object(a.useEffect)((function(){var e=document.querySelector("body:not(.modal-open) #bwf-header-upgrade-pro-cta");if(e){var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?O(!1):O(!0)}))}),{root:null,rootMargin:"0px",threshold:.1});return t.observe(e),function(){t.disconnect()}}O(!0)}),[]),Object(a.createElement)("div",{className:o()("bwf-lite-noticebar is-sample-data-notice",r,(t={},s(t,"bwf-notice-".concat(m),!!m),s(t,"is-btn-visible",g),t))},Object(a.createElement)("div",{className:"bwf-lite-noticebar__content-wrap"},Object(a.createElement)("div",{className:"bwf-lite-noticebar__title-wrap"},f," ",Object(a.createElement)(c.b,{content:Object(n.__)("Sample Data","wp-marketing-automations"),type:"black"})),Object(a.createElement)("div",{className:"bwf-noticebar-conatiner"},Object(a.createElement)("div",{className:"bwf-noticebar-content"},d))),Object(a.createElement)(l.a,{isPrimary:!0,proLink:p}))}},979:function(e,t,r){}}]);