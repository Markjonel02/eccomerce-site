(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1339:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(966),i=a(1),c=a(185),o=a(48),l=a(35),s=(a(491),a(14));function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=function(t){var e=t.query;return Object(n.createElement)("div",{className:"bwf-crm-contacts-report-filter"},Object(n.createElement)(o.a,{className:"screen-reader-text"},Object(i.__)("Filters","wp-marketing-automations")),Object(n.createElement)(o.b,{component:"div",className:"bwf-filters"},Object(n.createElement)("div",{className:"bwfcrm-filters-basic-filters"},Object(n.createElement)(c.a,{key:JSON.stringify(e),onRangeSelect:function(t){var a=f(f({},e),t);delete a.compare,Object(s.k)(a,"/",{})},dateQuery:function(t){t.compare="previous_year";var e=Object(l.e)(t),a=e.period,n=e.compare,r=e.before,i=e.after,c=Object(l.c)(t);return{period:a,compare:n,before:r,after:i,primaryDate:c.primary,secondaryDate:c.secondary}}(e),isoDateFormat:l.g,hideCompare:!0}))))},p=(a(309),a(119)),y=a(33),g=a(304),d=a(4),O=a(8),j=a(5),v=a(965),h=a(948),E=a(3),w=a(988);function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var _=function(t){var e=t.query,a=e.period,r=e.compare,c=e.interval,o=e.after,s=e.before,u=e.id,f=e.filter,b=T(Object(n.useState)({}),2),m=b[0],A=b[1],_=T(Object(n.useState)(""),2),k=_[0],D=_[1],S=T(Object(n.useState)(!1),2),P=S[0],L=S[1],I=Object(v.a)(),C=I.fetchDirectEmailTable,N=I.setDirectEmailTableData,M=h.a.getDirectEmailTableList,x=h.a.getDirectEmailTableLimit,q=h.a.getDirectEmailTableLoading,Y=h.a.getDirectEmailTableOffset,G=h.a.getDirectEmailTablePage,R=h.a.getDirectEmailTableTotal,J=function(t){return t.compare="previous_year",Object(l.c)(t).primary};e.hasOwnProperty("period")||(e.period="month");var F=function(t,e){var a=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,r=J(t),i="",c="";r&&(Object(E.isEmpty)(r.after)||(i=r.after.format("YYYY-MM-DD HH:mm:ss")),Object(E.isEmpty)(r.before)||(c=r.before.format("YYYY-MM-DD 23:59:59")),Object(E.isEmpty)(i)||Object(E.isEmpty)(c)||C(a,n,i,c,e))};Object(n.useEffect)((function(){if(Object(d.Jb)()){var t=e.hasOwnProperty("interval")?e.interval:"day";F(e,t,!0,W,Q)}}),[a,r,c,o,s,u,f]);var H,B=M(),U=q(),Q=Y(),$=R(),W=x(),z=G(),K=[{key:"contact",label:Object(i.__)("Contact","wp-marketing-automations"),isLeftAligned:!1},{key:"subject",label:Object(i.__)("Subject","wp-marketing-automations"),isLeftAligned:!1},{key:"sentby",label:Object(i.__)("Sent By","wp-marketing-automations"),isLeftAligned:!0},{key:"last_activity",label:Object(i.__)("Last Activity","wp-marketing-automations"),isLeftAligned:!0},{key:"opens",label:Object(i.__)("Opens","wp-marketing-automations"),isLeftAligned:!0},{key:"clicks",label:Object(i.__)("Clicks","wp-marketing-automations"),isLeftAligned:!0},{key:"view",label:"",isLeftAligned:!0,cellClassName:"bwf-w-60"}],V=function(t){return Object(n.createElement)(y.a,{href:"admin.php?page=autonami&path=/contact/"+t.cid,type:"bwf-crm",className:"bwf-a-no-underline"},Object(n.createElement)(g.a,{contact:t,dateText:Object(i.__)("Sent","wp-marketing-automations"),date:t.date}))};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(p.a,{headers:K,rows:(H=[],Object(E.isEmpty)(B)||(H=B.map((function(t){return[{display:V(t),value:""},{display:t.sub?t.sub:"-",value:t.sub},{display:t.author?(r=t.author,i="-",c="",r.hasOwnProperty("name")&&!Object(E.isEmpty)(r.name)&&(i=r.name[0].toUpperCase()+r.name.slice(1,r.name.length)),r.hasOwnProperty("contact")&&!Object(E.isEmpty)(r.contact)&&parseInt(r.contact)>0&&(c=r.contact),c?Object(n.createElement)(y.a,{href:"admin.php?page=autonami&path=/contact/"+c,type:"bwf-crm",className:"bwf-a-no-underline"},i):i):"-",value:t.sub},{display:t.o_interaction?(e=JSON.parse(t.o_interaction),a=e[e.length-1],Object(d.W)(a)):"-",value:""},{display:parseInt(t.open)>0?parseInt(t.open):"-",value:parseInt(t.open)},{display:parseInt(t.click)>0?parseInt(t.click):"-",value:parseInt(t.click)},{display:Object(n.createElement)(j.Button,{className:"bwf-w-60 bwf-display-flex",onClick:function(){A({ID:t.track_id,mode:1,type:4}),D({id:parseInt(t.cid)}),L(!0)}},Object(n.createElement)(O.a,{icon:"view"})),value:""}];var e,a,r,i,c}))),H),query:{paged:z},totalRows:$,rowsPerPage:W,isLoading:U,showMenu:!1,onPageChange:function(t,a){var n=(t-1)*W;N("offset",n);var r=e.hasOwnProperty("interval")?e.interval:"day";F(e,r,!0,W,n)},onQueryChange:function(t){return"per_page"===t?function(t){if(t!==W){N("limit",t);var a=e.hasOwnProperty("interval")?e.interval:"day";F(e,a,!0,t,Q)}}:function(){return{}}},emptyMessage:Object(i.__)("No emails found","wp-marketing-automations")}),Object(n.createElement)(w.a,{onRequestClose:function(){return L(!1)},conversation:m,contact:k,isOpen:P}))},k=a(49);e.default=function(){Object(r.a)("direct-emails",!1,"");var t=Object(s.i)();return Object(n.useEffect)((function(){Object(d.k)(Object(i.__)("Direct Email Analytics","wp-marketing-automations"))}),[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-content-header-new"},Object(n.createElement)("div",{className:"bwf-content-header-left"},Object(n.createElement)("div",{className:"bwf-content-header-title"},Object(i.__)("Direct Mails","wp-marketing-automations")))),Object(n.createElement)(k.a,null),Object(n.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-crm-emails-report-wrap"},Object(n.createElement)(m,{query:t}),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(_,{query:t})))}},948:function(t,e,a){"use strict";var n=a(52),r=a(307),i=Object(n.a)(r.b.cartAnalytics).getStateProp,c=Object(n.a)(r.b.contactAnalytics).getStateProp,o=Object(n.a)(r.b.emailAnalytics).getStateProp,l=Object(n.a)(r.b.emailTable).getStateProp,s=Object(n.a)(r.b.engagementAnalytics).getStateProp,u=Object(n.a)(r.b.directEmailTable).getStateProp,f={getCartAnalytics:function(){return i("data")},getCartAnalyticsLoading:function(){return i("isLoading")},getContactAnalytics:function(){return c("data")},getContactAnalyticsLoading:function(){return c("isLoading")},getEmailAnalytics:function(){return o("data")},getEmailAnalyticsLoading:function(){return o("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return s("data")},getEngagementAnalyticsLoading:function(){return s("isLoading")},getDirectEmailTableList:function(){return u("data")},getDirectEmailTableTotal:function(){return u("total")},getDirectEmailTableOffset:function(){return u("offset")},getDirectEmailTableLimit:function(){return u("limit")},getDirectEmailTableLoading:function(){return u("isLoading")},getDirectEmailTablePage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1}};e.a=f},965:function(t,e,a){"use strict";var n=a(51),r=a(4),i=a(307),c=a(20),o=function(t){var e=0;return"automation"===t?e=1:"broadcast"===t&&(e=2),e};e.a=function(){var t=Object(n.a)(i.b.cartAnalytics).fetch,e=Object(n.a)(i.b.contactAnalytics),a=e.fetch,l=e.setStateProp,s=Object(n.a)(i.b.emailAnalytics),u=s.fetch,f=s.setStateProp,b=Object(n.a)(i.b.emailTable),m=b.fetch,p=b.setStateProp,y=Object(n.a)(i.b.engagementAnalytics),g=y.fetch,d=y.setStateProp,O=Object(n.a)(i.b.directEmailTable),j=O.fetch,v=O.setStateProp;return{fetchCartAnalytics:function(e,a,n){t("GET",Object(r.u)("/analytics/carts/")+"?"+Object(c.stringify)({after:e,before:a,interval:n}))},fetchContactAnalytics:function(t,e,n){a("GET",Object(r.u)("/analytics/contacts/")+"?"+Object(c.stringify)({after:t,before:e,interval:n}))},fetchEmailAnalytics:function(t,e,a,n,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;u("GET",Object(r.u)("/analytics/emails/chart/")+"?"+Object(c.stringify)({after:t,before:e,interval:a,oid:n,type:o(i),mode:l}))},fetchEmailTable:function(t,e,a,n,i,l,s){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;m("GET",Object(r.u)("/analytics/emails/tabular/")+"?"+Object(c.stringify)({after:a,before:n,interval:i,oid:l,type:o(s),limit:t,offset:e,mode:u}))},setEmailTableData:function(t,e){p(t,e)},fetchEngagementData:function(t,e){g("GET",Object(r.u)("/analytics/engagement")+"?"+Object(c.stringify)({after:t,before:e}))},setContactAnalyticsData:function(t,e){l(t,e)},setEmailAnalyticsData:function(t,e){f(t,e)},setEngagementData:function(t,e){d(t,e)},fetchDirectEmailTable:function(t,e,a,n,i){j("GET",Object(r.u)("/analytics/direct-emails/tabular/")+"?"+Object(c.stringify)({after:a,before:n,interval:i,limit:t,offset:e}))},setDirectEmailTableData:function(t,e){v(t,e)}}}},966:function(t,e,a){"use strict";var n=a(74),r=a(0),i=a(1);e.a=function(t,e,a){var c=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},o=Object(n.a)(),l=o.setActiveMultiple,s=o.resetHeaderMenu,u=o.setL2NavType,f=o.setL2Nav,b=o.setBackLink,m=o.setL2Title,p=o.setPageHeader;return Object(r.useEffect)((function(){s(),!e&&u("menu"),!e&&f(c.reports_nav),l({leftNav:"analytics",rightNav:t+"-analytics"}),e&&b(e),a&&m(a),p(Object(i.__)("Analytics","wp-marketing-automations"))}),[t,a]),!0}},988:function(t,e,a){"use strict";var n=a(0),r=a(1),i=a(9),c=a.n(i),o=a(4),l=a(311);function s(t,e,a,n,r,i,c){try{var o=t[i](c),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}e.a=function(t){var e=t.conversation,a=(e=void 0===e?{}:e).ID,i=e.mode,f=e.type,b=t.onRequestClose,m=t.isOpen,p=t.contact,y=void 0===p?{}:p,g=u(Object(n.useState)(null),2),d=g[0],O=g[1],j=u(Object(n.useState)(!1),2),v=j[0],h=j[1],E=u(Object(n.useState)(null),2),w=E[0],T=E[1],A=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&!(!parseInt(a)>0)){t.next=2;break}return t.abrupt("return");case 2:return h(!0),t.prev=3,t.next=6,c()({method:"GET",path:Object(o.u)("/v3/contacts/".concat(y.id,"/engagement/").concat(parseInt(a),"?mode=1"))});case 6:"result"in(e=t.sent)&&O(e.result),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),t.t0&&"message"in t.t0?T(t.t0.message):Object(r.__)("There are some technical difficulties while getting emails. Please contact support.","wp-marketing-automations");case 14:h(!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})),function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function c(t){s(i,n,r,c,o,"next",t)}function o(t){s(i,n,r,c,o,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m&&A()}),[m]);return Object(n.createElement)(l.a,{isOpen:m,isLoading:v,onRequestClose:function(){b(),O(null),T(null)},error:w,subject:parseInt(i)<2&&d&&d.subject,body:d&&d.body?d.body:"",sourceType:f,mode:i,contact:t.contact,conversation:t.conversation,template:d})}}}]);