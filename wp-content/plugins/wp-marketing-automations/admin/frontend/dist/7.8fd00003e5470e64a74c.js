(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1094:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return E}));var a=n(0),r=n(1),c=n(948),i=n(313),o=function(t){var e=t.metrics,n=(0,c.a.getContactAnalyticsLoading)();return Object(a.createElement)("div",{className:"bwf-crm-contacts-report-tiles"},Object(a.createElement)(i.a,{items:e,title:Object(r.__)("Overview","wp-marketing-automations"),isLoading:n}))},l=n(309),s=n(35),u=n(3),f=n(14),b=n(6),m=n.n(b),p=n(5);function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,c=t}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var g=function(t){var e=t.query,n=t.metrics,i=e.chart?e.chart:"new_contacts",o=c.a.getContactAnalyticsLoading,b=c.a.getContactAnalytics,d=o(),g=b(),O=y(Object(a.useState)(n[0]),2),j=O[0],v=O[1],h=(e.chartType&&e.chartType,Object(s.f)(e)),w=Object(s.b)(function(t){return t.period&&null!=t.period&&""!=t.period||(t.period="month"),t.compare&&null!=t.compare&&""!=t.compare||(t.compare="previous_year"),t}(e));w.includes(h)||(h=w[w.length-1]);var E=0,_=0;return Object(a.createElement)("div",{className:"bwf-mt-24"},Object(a.createElement)(l.a,{isRequesting:d,data:function(t){var e=[];g&&g.hasOwnProperty("intervals")&&g.intervals.map((function(n){"new_contacts"==t&&e.push({date:n.start_date,new_contacts:{label:Object(r.__)("New Contacts","wp-marketing-automations"),value:parseInt(n.subtotals.new_contacts)}}),"total_contacts"===t&&(e.push({date:n.start_date,total_contacts:{label:Object(r.__)("Total Contacts","wp-marketing-automations"),value:parseInt(n.subtotals.total_contacts)}}),E=parseInt(n.subtotals.total_contacts)),"unsubscribers"===t&&e.push({date:n.start_date,unsubscribers:{label:Object(r.__)("Unsubscribers","wp-marketing-automations"),value:parseInt(n.subtotals.unsubscribers)}}),"total_customers"===t&&(e.push({date:n.start_date,total_customers:{label:Object(r.__)("Total Customers","wp-marketing-automations"),value:parseInt(n.subtotals.total_customers)}}),_=parseInt(n.subtotals.total_customers))}));return e}(i),title:Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:""},Object(r.__)("Performance","wp-marketing-automations"))),interval:h,layout:"item-comparison",legendTotals:"total_contacts"==i?{total_contacts:E}:"total_customers"==i?{total_customers:_}:null,interactiveLegend:!0,chartType:"curve-line",chartMeta:j,tabs:n,hideTypeSelect:!0,customHeaderItem:Object(a.createElement)(a.Fragment,null,n&&Object(u.isArray)(n)&&Object(a.createElement)("div",{className:"bwf-chart-tabs"},n.filter((function(t){return"convert_time"!==t.key})).map((function(t){return Object(a.createElement)(p.Button,{className:m()({"is-gray-light":j.key!==t.key,"is-secondary-light":j.key===t.key}),key:t.key,onClick:function(n){v(t),n.preventDefault(),delete e.compare,Object(f.k)({chart:t.key},"/",e)}},t.title)}))))}))},O=n(185),j=n(48);n(491);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(t){var e=t.query,n=t.children;return Object(a.createElement)("div",{className:"bwf-crm-contacts-report-filter"},n,Object(a.createElement)(j.a,{className:"screen-reader-text"},Object(r.__)("Filters","wp-marketing-automations")),Object(a.createElement)(j.b,{component:"div",className:"bwf-filters"},Object(a.createElement)("div",{className:"bwfcrm-filters-basic-filters"},Object(a.createElement)(O.a,{key:JSON.stringify(e),onRangeSelect:function(t){var n=h(h({},e),t);delete n.compare,Object(f.k)(n,"/",{})},dateQuery:function(t){t.compare="previous_year";var e=Object(s.e)(t),n=e.period,a=e.compare,r=e.before,c=e.after,i=Object(s.c)(t);return{period:n,compare:a,before:r,after:c,primaryDate:i.primary,secondaryDate:i.secondary}}(e),isoDateFormat:s.g,hideCompare:!0}))))}},948:function(t,e,n){"use strict";var a=n(52),r=n(307),c=Object(a.a)(r.b.cartAnalytics).getStateProp,i=Object(a.a)(r.b.contactAnalytics).getStateProp,o=Object(a.a)(r.b.emailAnalytics).getStateProp,l=Object(a.a)(r.b.emailTable).getStateProp,s=Object(a.a)(r.b.engagementAnalytics).getStateProp,u=Object(a.a)(r.b.directEmailTable).getStateProp,f={getCartAnalytics:function(){return c("data")},getCartAnalyticsLoading:function(){return c("isLoading")},getContactAnalytics:function(){return i("data")},getContactAnalyticsLoading:function(){return i("isLoading")},getEmailAnalytics:function(){return o("data")},getEmailAnalyticsLoading:function(){return o("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return s("data")},getEngagementAnalyticsLoading:function(){return s("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};e.a=f},950:function(t,e,n){"use strict";var a=n(0),r=n(6),c=n.n(r),i=n(1),o=n(8),l=(n(952),n(39)),s=n(4);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,c=t}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.a=function(t){var e=u(Object(a.useState)(!1),2),n=e[0],r=e[1],f=t.modalContent,b=void 0===f?{}:f,m=t.content,p=t.onPage,y=void 0!==p&&p;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:c()("bwf-upgrade-pro-overlay",{"is-on-page":y}),onClick:function(){y||r(!0)}},y?Object(a.createElement)(l.a,{showHeader:!1,modalContent:b}):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-king-tag-pro"},Object(a.createElement)(o.a,{icon:"king",size:38,color:"#fff"})),Object(a.createElement)("span",{className:"bwf-mt-8"},m||(Object(s.Fb)()?Object(i.__)("Activate your license to continue using premium features without interruption.","wp-marketing-automations"):Object(i.__)("This feature is locked. To get full access of FunnelKit Automation upgrade to PRO","wp-marketing-automations"))))),Object(a.createElement)(l.b,{isOpen:n,onRequestClose:function(){return r(!1)},modalContent:b}))}},952:function(t,e,n){},965:function(t,e,n){"use strict";var a=n(51),r=n(4),c=n(307),i=n(20),o=function(t){var e=0;return"automation"===t?e=1:"broadcast"===t&&(e=2),e};e.a=function(){var t=Object(a.a)(c.b.cartAnalytics).fetch,e=Object(a.a)(c.b.contactAnalytics),n=e.fetch,l=e.setStateProp,s=Object(a.a)(c.b.emailAnalytics),u=s.fetch,f=s.setStateProp,b=Object(a.a)(c.b.emailTable),m=b.fetch,p=b.setStateProp,y=Object(a.a)(c.b.engagementAnalytics),d=y.fetch,g=y.setStateProp,O=Object(a.a)(c.b.directEmailTable),j=O.fetch,v=O.setStateProp;return{fetchCartAnalytics:function(e,n,a){t("GET",Object(r.u)("/analytics/carts/")+"?"+Object(i.stringify)({after:e,before:n,interval:a}))},fetchContactAnalytics:function(t,e,a){n("GET",Object(r.u)("/analytics/contacts/")+"?"+Object(i.stringify)({after:t,before:e,interval:a}))},fetchEmailAnalytics:function(t,e,n,a,c){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(r.u)("/analytics/emails/chart/")+"?"+Object(i.stringify)({after:t,before:e,interval:n,oid:a,type:o(c),mode:l}))},fetchEmailTable:function(t,e,n,a,c,l,s){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;m("GET",Object(r.u)("/analytics/emails/tabular/")+"?"+Object(i.stringify)({after:n,before:a,interval:c,oid:l,type:o(s),limit:t,offset:e,mode:u}))},setEmailTableData:function(t,e){p(t,e)},fetchEngagementData:function(t,e){d("GET",Object(r.u)("/analytics/engagement")+"?"+Object(i.stringify)({after:t,before:e}))},setContactAnalyticsData:function(t,e){l(t,e)},setEmailAnalyticsData:function(t,e){f(t,e)},setEngagementData:function(t,e){g(t,e)},fetchDirectEmailTable:function(t,e,n,a,c){j("GET",Object(r.u)("/analytics/direct-emails/tabular/")+"?"+Object(i.stringify)({after:n,before:a,interval:c,limit:t,offset:e}))},setDirectEmailTableData:function(t,e){v(t,e)}}}},966:function(t,e,n){"use strict";var a=n(74),r=n(0),c=n(1);e.a=function(t,e,n){var i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},o=Object(a.a)(),l=o.setActiveMultiple,s=o.resetHeaderMenu,u=o.setL2NavType,f=o.setL2Nav,b=o.setBackLink,m=o.setL2Title,p=o.setPageHeader;return Object(r.useEffect)((function(){s(),!e&&u("menu"),!e&&f(i.reports_nav),l({leftNav:"analytics",rightNav:t+"-analytics"}),e&&b(e),n&&m(n),p(Object(c.__)("Analytics","wp-marketing-automations"))}),[t,n]),!0}},975:function(t,e,n){"use strict";var a=n(0),r=n(1),c=n(6),i=n.n(c),o=n(109),l=(n(979),n(160));function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,c=t}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.a=function(t){var e,n=t.className,c=t.align,f=void 0===c?"left":c,b=t.title,m=t.message,p=t.proLink,y=m||Object(r.sprintf)(Object(r.__)("Use our sample data to explore %s. See how it summarises metrics across multiple funnels.","wp-marketing-automations"),b),d=u(Object(a.useState)(!1),2),g=d[0],O=d[1];return Object(a.useEffect)((function(){var t=document.querySelector("body:not(.modal-open) #bwf-header-upgrade-pro-cta");if(t){var e=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?O(!1):O(!0)}))}),{root:null,rootMargin:"0px",threshold:.1});return e.observe(t),function(){e.disconnect()}}O(!0)}),[]),Object(a.createElement)("div",{className:i()("bwf-lite-noticebar is-sample-data-notice",n,(e={},s(e,"bwf-notice-".concat(f),!!f),s(e,"is-btn-visible",g),e))},Object(a.createElement)("div",{className:"bwf-lite-noticebar__content-wrap"},Object(a.createElement)("div",{className:"bwf-lite-noticebar__title-wrap"},b," ",Object(a.createElement)(o.b,{content:Object(r.__)("Sample Data","wp-marketing-automations"),type:"black"})),Object(a.createElement)("div",{className:"bwf-noticebar-conatiner"},Object(a.createElement)("div",{className:"bwf-noticebar-content"},y))),Object(a.createElement)(l.a,{isPrimary:!0,proLink:p}))}},979:function(t,e,n){}}]);