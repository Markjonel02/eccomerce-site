(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1095:function(e,t,a){},1330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(180),i=a(50),o=a(4),l=a(313),s=function(){var e=c.a.getAnalyticsData,t=(0,c.a.getLoading)(),a=e(),s=Object(i.a)(Object(o.kb)()).formatAmount,b=function(e){return a&&a.hasOwnProperty(e)?a[e]:0},u=[{key:"total_contact",title:Object(r.__)("Contacts","wp-marketing-automations"),value:Object(o.Wb)(b("total_contact")),icon:"contact-new",isCurrency:!1},{key:"email_sents",title:Object(r.__)("Emails Sent","wp-marketing-automations"),value:Object(o.Wb)(b("email_sents")),icon:"email",isCurrency:!1},{key:"sms_sent",title:Object(r.__)("SMS Sent","wp-marketing-automations"),value:o.Hb?"-":Object(o.Wb)(b("sms_sent")),icon:"sms-sent",isCurrency:!1,isPro:!Object(o.Jb)()}];return Object(o.Tb)()&&u.push({key:"total_orders",title:Object(r.__)("Total Orders","wp-marketing-automations"),value:Object(o.Wb)(b("total_orders")),icon:"order-new",isCurrency:!1},{key:"total_revenue",title:Object(r.__)("Revenue","wp-marketing-automations"),value:s(b("total_revenue")),icon:"revenue-new",isCurrency:!1}),Object(n.createElement)(l.a,{items:u,title:Object(r.__)("Overview","wp-marketing-automations"),isLoading:t})},b=a(6),u=a.n(b),m=a(119),f=a(184),d=a(148);function p(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||j(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=function(e){var t=e.rows,a=e.title,r=e.currentpage,c=e.perpage,i=e.isLoading,o=e.headers,l=e.actions,s=e.footer,b=e.className,j=e.radioShimmer,w=void 0===j?0:j,g=e.afterTableContent,v=void 0===g?Object(n.createElement)(n.Fragment,null):g,y=O(Object(n.useState)([]),2),h=y[0],E=y[1];return Object(n.useEffect)((function(){E(t)}),[t]),Object(n.createElement)(n.Fragment,null,i?Object(n.createElement)("div",{className:u()("bwf-card bwf-table bwf-analytics-card has-menu",b)},Object(n.createElement)("div",{className:"bwf-display-flex bwf-space-between bwf-mb-16"},Object(n.createElement)("div",null,Object(n.createElement)(d.a,{h:28,w:200})),w?Object(n.createElement)("div",{className:"bwf-display-flex"},p(Array(w)).map((function(e,t){return Object(n.createElement)("div",{className:"bwf-display-flex",key:t},Object(n.createElement)(d.a,{h:24,w:24,ml:16}),Object(n.createElement)(d.a,{h:24,w:82,ml:8}))}))):null),Object(n.createElement)(f.a,{caption:a,headers:o,numberOfRows:5})):Object(n.createElement)(m.a,{title:a,className:b,rows:h,headers:o,query:{paged:r},rowsPerPage:c,totalRows:5,isLoading:i,showMenu:!1,actions:l,footer:s,afterTableContent:v}))},v=(a(309),a(35),a(1095),a(444)),y=a(14),h=a(74),E=a(8),_=a(49),k=a(16),N=a(39),A=a(3),S=a(33);function C(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=function(){var e=c.a.getLoading,t=c.a.getContacts,a=e(),i=t();return Object(n.createElement)("div",{className:"bwf-card bwf-table bwf-analytics-card"},Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("div",{className:"bwf-card-title-wrapper"},Object(n.createElement)("div",{className:"bwf-card-title bwf-card-header-item"},Object(r.__)("Recent Contacts","wp-marketing-automations")))),a?Object(n.createElement)("div",{className:"bwf-card-body bwf-placeholder-content"},C(Array(9)).map((function(e,t){return Object(n.createElement)("div",{className:"bwf-activity-item",key:"dahboard-activity-".concat(t)},Object(n.createElement)("div",{className:"bwf-activity-media is-placeholder"}),Object(n.createElement)("div",{className:"bwf-activity-data",style:{width:"100%"}},Object(n.createElement)("div",{className:"bwf-activity-label is-placeholder long"}),Object(n.createElement)("span",{className:"bwf-activity-time is-placeholder long"})))}))):Object(A.isEmpty)(i)?Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state"},Object(n.createElement)(E.a,{icon:"no-data",height:"82",width:"112"}),Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state__heading"},Object(r.__)("No Data","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state__subheading"},Object(r.__)("Once the user comes on your store and start activities on your store/funnel we will show here","wp-marketing-automations"))):Object(n.createElement)("div",{className:"bwf-card-body"},Object(A.isEmpty)(i)?Object(n.createElement)("div",{className:"bwf-activity-item"},Object(r.__)("No contact Activity","wp-marketing-automations")):Object(n.createElement)(n.Fragment,null,i.map((function(e,t){if(e&&"ID"in e&&parseInt(e.ID)>0){var a=e.f_name,c=void 0===a?"":a,i=e.l_name,l=void 0===i?"":i,s=e.creation_date,b=void 0===s?"":s,u=""!==c||""!==l?(c+" "+l).trim():"";return Object(n.createElement)("div",{className:"bwf-activity-item",key:t},Object(n.createElement)("span",{className:"bwf-activity-media"},""!==u?Object(o.bb)(c,l):"-"),Object(n.createElement)("div",{className:"bwf-activity-data"},function(e){var t=e.type,a=void 0===t?"":t,c=e.ID,i=void 0===c?"":c,l=e.f_name,s=void 0===l?"":l,b=e.l_name,u=void 0===b?"":b,m={contact:Object(r.__)("has joined recently","wp-marketing-automations"),unsubscribe:Object(r.__)("unsubscribed you","wp-marketing-automations"),conversion:Object(r.__)("placed an order","wp-marketing-automations")},f=m.hasOwnProperty(a)?m[a]:"",d=""!==s||""!==u?(s+" "+u).trim():Object(r.__)("Someone","wp-marketing-automations");return Object(n.createElement)("div",{className:"bwf-activity-label"},parseInt(i)>0?Object(n.createElement)(S.a,{href:Object(o.Y)("/contact/".concat(i))+"&return_to=",className:"bwf-normal-a-t bwf-m-0"},d):d," ",""!==f&&Object(n.createElement)("span",{className:"bwf-heading5-new"},f))}(e),""!==b?Object(n.createElement)("span",{className:"bwf-activity-time",title:Object(o.V)(b,!0,!1)},Object(o.V)(b,!0,!1)):null))}})))))},I=a(304);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e){var t=L({},e),a=c.a.getCartData,l=(0,c.a.getLoading)(),s=a(),b=Object(i.a)(Object(o.kb)()).formatAmount,u=[{key:"contact",label:Object(r.__)("Contact","wp-marketing-automations"),isLeftAligned:!1,required:!0,cellClassName:"bwf-word-break bwf-w-210"},{key:"details",label:Object(r.__)("Details","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"status",label:Object(r.__)("Status","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"createdOn",label:Object(r.__)("Created On","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"revenune",label:Object(r.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,required:!0,cellClassName:"bwf-word-break bwf-w-120"}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t={1:"green",2:"orange",3:"red"},a={1:Object(r.__)("Recovered","wp-marketing-automations"),2:Object(r.__)("Recoverable","wp-marketing-automations"),3:Object(r.__)("Lost","wp-marketing-automations")};return Object(n.createElement)("span",{className:"bwf-tags bwf-tag-".concat(t[e])},a[e])},f=s.map((function(e){var t,a,r=e.type,c=void 0===r?"":r;return[{display:(t=e,a={},a.f_name=t.hasOwnProperty("f_name")?t.f_name:"",a.l_name=t.hasOwnProperty("l_name")?t.l_name:"",a.id=t.id,a.email=t.email,parseInt(t.id)>0?Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/contact/"+t.id+"&return_to=",type:"bwf-crm",className:"bwf-a-no-underline"},Object(n.createElement)(I.a,{contact:a,hideJoiningDate:!0})):Object(n.createElement)(I.a,{contact:a,hideJoiningDate:!0})),value:e.title},{display:Object(A.isEmpty)(e.email)?"-":e.email,value:e.email},{display:m(c),value:""},{display:Object(A.isEmpty)(e.created_on)?"-":Object(o.V)(e.created_on),value:""},{display:parseFloat(e.revenue)>0?e.currency?Object(n.createElement)("span",{className:"bwf-tags bwf-tag-".concat("lost"===c?"red":"green")},Object(i.a)(e.currency).formatAmount(e.revenue)):Object(n.createElement)("span",{className:"bwf-tags bwf-tag-green"},b(parseFloat(e.revenue))):"-",value:""}]})),d=Object(n.createElement)(n.Fragment,null,Object(r.__)("Recent Carts","wp-marketing-automations")),p=Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/carts/"},Object(r.__)("View Carts","wp-marketing-automations")," ",Object(n.createElement)(E.a,{icon:"arrow-right",height:"16",width:"16",color:"#0073aa"})),O=Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("div",{className:"bwf-card-title-wrapper"},Object(n.createElement)("h2",{className:"bwf-card-title bwf-card-header-item"},d)));return Object(A.isEmpty)(s)&&!l?Object(n.createElement)("div",{className:"bwf-card bwf-table bwf-analytics-card bwf-top-funnels-card"},O,Object(A.isEmpty)(s)&&Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state"},Object(n.createElement)(E.a,{icon:"no-data",height:"82",width:"112"}),Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state__heading"},Object(r.__)("No Data Available","wp-marketing-automations")))):Object(n.createElement)(g,L({isLoading:l},t,{rows:f,headers:u,title:d,footer:p,currentPage:1,perpage:5,className:"bwf-top-funnels-table"}))}var R=a(9),D=a.n(R),F=a(20),q=a(18),M=(a(5),a(24));function z(e,t,a,n,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,r)}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e){var t=W({},e),a=Object(i.a)(Object(o.kb)()).formatAmount,l=c.a.getAutomations,s=c.a.getLoading,b=Object(y.i)(),u=Object(n.useRef)(new AbortController),m=J(Object(n.useState)(!0),2),f=m[0],d=m[1],p=J(Object(n.useState)([]),2),O=p[0],j=p[1],w=[{key:"name",label:Object(r.__)("Name","wp-marketing-automations"),isLeftAligned:!1,required:!0,cellClassName:"bwf-word-break"},{key:"events",label:Object(r.__)("Events","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"contactActivity",label:Object(r.__)("Contact Activity","wp-marketing-automations"),isLeftAligned:!0,required:!0,cellClassName:"bwf-w-240"},Object(o.Tb)()&&{key:"revenune",label:Object(r.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,required:!0,cellClassName:"bwf-w-120 bwf-no-wrap"}],v=s(),h=l(),_=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],h.map((function(e){e.hasOwnProperty("v")&&2===parseInt(e.v)&&t.push(e.aid)})),e.next=5,D()({method:"GET",path:Object(o.u)("/automations-stats?"+Object(F.stringify)({automation_ids:t,version:2})),signal:u.current.signal});case 5:200==(a=e.sent).code&&(j(a.result),d(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),d(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function i(e){z(c,n,r,i,o,"next",e)}function o(e){z(c,n,r,i,o,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){!v&&f?h.length>0?_():d(!1):d(!0)}),[v]),Object(n.useEffect)((function(){return function(){u.current.abort()}}),[]);var k=function(e){return e.aid?2===parseInt(e.v)?Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/automation/"+e.aid+"&return_to=",onClick:function(t){t.preventDefault(),Object(y.k)({path:"/automation/".concat(e.aid)},"/",b)},className:"bwf-a-no-underline"},e.name):Object(n.createElement)("a",{target:"_blank",href:"admin.php?page=autonami-automations&edit="+e.aid,className:"bwf-a-no-underline",rel:"noreferrer"},e.name,Object(n.createElement)("div",{className:"bwf-tags bwf-tag-orange bwf-display-inline bwf-ml-8"},Object(r.__)("Legacy","wp-marketing-automations"))):"-"},N=Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/automations"},Object(r.__)("View Automations","wp-marketing-automations")," ",Object(n.createElement)(E.a,{icon:"arrow-right",height:"16",width:"16",color:"#0073aa"})),C=function(e){if(f)return Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-w-210 bwf-h-15"});if(1===parseInt(e.v))return Object(r.__)("Legacy Data Not Available","wp-marketing-automations");var t=O.hasOwnProperty(e.aid)?O[e.aid]:{};return Object(n.createElement)(q.a,{gap:2,justify:"start"},Object(n.createElement)(q.c,null,Object(n.createElement)(M.a,{toolTipText:Object(r.__)("Active","wp-marketing-automations")},Object(n.createElement)("div",{className:"bwf-tag-tooltip"},Object(n.createElement)("a",{className:"bwf-a-no-underline",onClick:function(){Object(y.k)({path:"/automation/".concat(e.aid,"/contacts/active&return_to=")},"/",b)},style:{display:"inline-flex"}},Object(n.createElement)(E.a,{icon:"status-scheduled",width:16,height:16}),Object(n.createElement)("span",null,t.hasOwnProperty("active")?Object(o.Wb)(parseInt(t.active)):0))))),Object(n.createElement)(q.c,null,Object(n.createElement)(M.a,{toolTipText:Object(r.__)("Paused","wp-marketing-automations")},Object(n.createElement)("div",{className:"bwf-tag-tooltip"},Object(n.createElement)("a",{className:"bwf-a-no-underline",onClick:function(){Object(y.k)({path:"/automation/".concat(e.aid,"/contacts/paused&return_to=")},"/",b)},style:{display:"inline-flex"}},Object(n.createElement)(E.a,{icon:"status-paused",width:16,height:16}),Object(n.createElement)("span",null,t.hasOwnProperty("paused")?Object(o.Wb)(parseInt(t.paused)):0))))),Object(n.createElement)(q.c,null,Object(n.createElement)(M.a,{toolTipText:Object(r.__)("Completed","wp-marketing-automations")},Object(n.createElement)("div",{className:"bwf-tag-tooltip"},Object(n.createElement)("a",{className:"bwf-a-no-underline",onClick:function(){Object(y.k)({path:"/automation/".concat(e.aid,"/contacts/completed&return_to=")},"/",b)},style:{display:"inline-flex"}},Object(n.createElement)(E.a,{icon:"status-completed",width:16,height:16}),Object(n.createElement)("span",null,t.hasOwnProperty("complete")?Object(o.Wb)(parseInt(t.complete)):0))))),Object(n.createElement)(q.c,null,Object(n.createElement)(M.a,{toolTipText:Object(r.__)("Failed","wp-marketing-automations")},Object(n.createElement)("div",{className:"bwf-tag-tooltip"},Object(n.createElement)("a",{className:"bwf-a-no-underline",onClick:function(){Object(y.k)({path:"/automation/".concat(e.aid,"/contacts/failed&return_to=")},"/",b)},style:{display:"inline-flex"}},Object(n.createElement)(E.a,{icon:"status-failed",width:16,height:16}),Object(n.createElement)("span",null,t.hasOwnProperty("failed")?Object(o.Wb)(parseInt(t.failed)):0))))))},P=Object(n.useMemo)((function(){var e=[];return Object(A.isEmpty)(h)||h.map((function(t){var r=[{display:k(t),value:t.name},{display:Object(A.isEmpty)(t.event)?"-":t.event,value:t.event},{display:C(t),value:""}];Object(o.Tb)()&&r.push({display:parseFloat(t.total_revenue)>0?Object(n.createElement)("span",{className:"bwf-tags bwf-tag-green"},a(parseFloat(t.total_revenue))):"-",value:t.total_revenue}),e.push(r)})),e}),[h,O]),T=Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("div",{className:"bwf-card-title-wrapper"},Object(n.createElement)("h2",{className:"bwf-card-title bwf-card-header-item"},Object(r.__)("Top Performing Automations","wp-marketing-automations"))));return Object(A.isEmpty)(P)&&!v?Object(n.createElement)("div",{className:"bwf-card bwf-table bwf-analytics-card bwf-top-funnels-card"},T,Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state"},Object(n.createElement)(E.a,{icon:"no-data",height:"82",width:"112"}),Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state__heading"},Object(r.__)("No Data Available","wp-marketing-automations")))):Object(n.createElement)(g,W({isLoading:v},t,{rows:P,headers:w.filter((function(e){return!!e})),title:Object(r.__)("Top Automations","wp-marketing-automations"),currentPage:1,perpage:25,footer:N,className:"bwf-top-funnels-table"}))}var V=a(90),$=a(950);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){K(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Y(e,t,a,n,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,r)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ee(e){var t=Z({},e),a=c.a.getBroadcasts,l=c.a.getBroadcastSms,s=(0,c.a.getLoading)(),b=a(),u=l(),m=Q(Object(n.useState)("email"),2),f=m[0],d=m[1],p=Object(i.a)(Object(o.kb)()).formatAmount,O=[1,2,3,4,5].map((function(e){return{id:e,title:Object(r.sprintf)(Object(r.__)("Broadcast %s","wp-marketing-automations"),e),count:e,revenue:p(e)}})),j=Object(n.useRef)(new AbortController),w=Q(Object(n.useState)(!0),2),v=w[0],y=w[1],h=Q(Object(n.useState)([]),2),_=h[0],k=h[1],N=Object(n.useMemo)((function(){if(y(!0),!Object(o.Jb)())return O;switch(f){case"email":return b;case"sms":return u;default:return[]}}),[f,s]),C=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=[],N.map((function(e){_.hasOwnProperty(e.id)||t.push(e.id)})),!Object(A.isEmpty)(t)){e.next=6;break}return y(!1),e.abrupt("return");case 6:return e.next=8,D()({method:"GET",path:Object(o.u)("/broadcasts-stats?"+Object(F.stringify)({broadcast_ids:t,force:!0})),signal:j.current.signal}).then((function(e){200==e.code&&(k(G(G({},_),e.result)),y(!1))})).catch((function(e){console.log(e)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),y(!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function i(e){Y(c,n,r,i,o,"next",e)}function o(e){Y(c,n,r,i,o,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){!s&&v?N.length>0&&Object(o.Jb)()?C():y(!1):(k({}),y(!0))}),[s,f]),Object(n.useEffect)((function(){return function(){j.current.abort()}}),[]);var P=[{key:"name",label:Object(r.__)("Name","wp-marketing-automations"),isLeftAligned:!1,required:!0,cellClassName:"bwf-word-break"},{key:"contact",label:Object(r.__)("Contact","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"sent",label:Object(r.__)("Sent","wp-marketing-automations"),isLeftAligned:!1,required:!0},"email"===f&&{key:"openRate",label:Object(r.__)("Open Rate","wp-marketing-automations"),isLeftAligned:!1,required:!0},{key:"clickRate",label:Object(r.__)("Click Rate","wp-marketing-automations"),isLeftAligned:!1,required:!0},Object(o.Tb)()&&{key:"revenue",label:Object(r.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1,required:!0}],T=function(e){return e.id?Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/broadcast/"+e.id+"&return_to=",type:"bwf-crm",className:"bwf-a-no-underline"},Object(n.createElement)("b",null,e.title?e.title.charAt(0).toUpperCase()+e.title.slice(1)+" ":"- "),"("," ",2===parseInt(e.type)?Object(r.__)("SMS","wp-marketing-automations"):Object(r.__)("Email","wp-marketing-automations")," ",")"):"-"},I=function(e){return e.count>0?Object(n.createElement)(q.a,{justify:"start",align:"top"},Object(n.createElement)(q.c,null,e.count)):" - "},L=function(e,t){if(!Object(o.Jb)())return"-";if(v)return Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-w-60 bwf-h-15"});var a=_.hasOwnProperty(t.id)?_[t.id]:{};return"revenue"===e?Object(n.createElement)(n.Fragment,null,a.hasOwnProperty(e)&&parseFloat(a.revenue)>0?Object(n.createElement)("span",{className:"bwf-tags bwf-tag-green"},p(parseFloat(a.revenue))):"-"):a.hasOwnProperty(e)&&parseFloat(a[e])>0?parseFloat(a[e]).toFixed(2)+("sent"!==e?"%":""):"-"},x=N.map((function(e){var t=[];return t.push({display:T(e),value:e.title},{display:I(e),value:e.count},{display:L("sent",e),value:""}),"email"===f&&t.push({display:L("open_rate",e),value:""}),t.push({display:L("click_rate",e),value:""}),Object(o.Tb)()&&t.push({display:L("revenue",e),value:""}),t})),R=Object(n.createElement)(V.a,{options:[{value:"email",label:Object(r.__)("Emails","wp-marketing-automations")},{value:"sms",label:Object(r.__)("SMS","wp-marketing-automations")}],selected:f,onChange:function(e){d(e)},className:"bwf-dashboard-top-funnel_radio-items"}),M=Object(n.createElement)("div",{className:"bwf-display-flex bwf-flex-start gap--8"},Object(r.__)("Top Performing Broadcast","wp-marketing-automations"),!Object(o.Jb)()&&!o.Hb&&o.e),z=Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/broadcasts/".concat(f)},Object(r.__)("View Broadcasts","wp-marketing-automations")+" ",Object(n.createElement)(E.a,{icon:"arrow-right",height:"16",width:"16",color:"#0073aa"})),J=Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("div",{className:"bwf-card-title-wrapper"},Object(n.createElement)("h2",{className:"bwf-card-title bwf-card-header-item"},M)),!o.Hb&&R&&Object(n.createElement)("div",{className:"bwf-card-action bwf-card-header-item"},R));return Object(o.Jb)()?Object(A.isEmpty)(N)&&!s?Object(n.createElement)("div",{className:"bwf-card bwf-table bwf-analytics-card bwf-top-funnels-card"},J,Object(A.isEmpty)(N)&&Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state"},Object(n.createElement)(E.a,{icon:"no-data",height:"82",width:"112"}),Object(n.createElement)("div",{className:"bwf-dashboard-card-zero-state__heading"},Object(r.__)("No Data Available","wp-marketing-automations")))):Object(n.createElement)(g,Z({isLoading:s},t,{rows:x,headers:P.filter((function(e){return!!e})),title:M,footer:z,actions:R,currentPage:1,perpage:25,radioShimmer:2,className:"bwf-top-funnels-table"})):Object(n.createElement)(g,{isLoading:!1,rows:x,headers:P.filter((function(e){return!!e})),title:M,footer:"",actions:[],currentPage:1,perpage:25,radioShimmer:2,afterTableContent:Object(n.createElement)($.a,{modalContent:{isFeature:!0,featureTitle:Object(r.__)("Top Performing Broadcasts","wp-marketing-automations"),proLink:Object(o.T)("upgrade",{utm_medium:"Dashboard+Top+Performing+Broadcast"}),image:Object(o.db)("email-broadcast.png"),benefit:Object(r.__)("Unlock Broadcast and other awesome features.","wp-marketing-automations")},content:Object(r.__)("We're sorry, this feature is not available on your plan. Learn more about Broadcast.","wp-marketing-automations")})})}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(v.a)(),t=Object(n.useContext)(o.h),a=e.fetchDashboardData,i=c.a.getLoading,l=c.a.getContacts,b=i(),u=l(),m=Object(y.i)(),f=te(Object(n.useState)(!1),2),d=f[0],p=f[1],O=te(Object(n.useState)(!1),2),j=O[0],w=O[1],g=te(Object(n.useState)(!1),2),C=g[0],P=g[1];Object(n.useEffect)((function(){j&&!b&&(t(Object(r.__)("Data Updated","wp-marketing-automations")),Object(o.wb)(t,3e3),w(!1))}),[j,b]);var I=Object(h.a)(),L=I.resetHeaderMenu,R=I.setL2Title,D=I.setActiveMultiple;Object(n.useEffect)((function(){Object(o.k)(Object(r.__)("Dashboard","wp-marketing-automations")),a(),L(),D({leftNav:"dashboard",rightNav:"overview"}),R(Object(r.__)("OVERVIEW","wp-marketing-automations"))}),[]);return Object(n.createElement)("div",{className:"bwf-p-24"},Object(n.createElement)(_.a,null),Object(n.createElement)("div",{className:"bwf-content-header-new"},Object(n.createElement)("div",{className:"bwf-content-header-left"},Object(n.createElement)("div",{className:"bwf-content-header-title"},Object(r.__)("Dashboard","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf-content-header-right"},Object(n.createElement)(k.a,{className:"bwf-btn-small bwf-btn-gray is-light",title:Object(r.__)("Refresh Stats","wp-marketing-automations"),onClick:function(){w(!0),a(!0)},isGray:!0,disabled:b,isBusy:b&&j},Object(n.createElement)(E.a,{icon:"retry",size:16}),Object(r.__)("Refresh","wp-marketing-automations")))),Object(n.createElement)("div",{className:"bwf-crm-dashboard-wrap bwf-dashboard-wrap"},Object(n.createElement)(s,{query:m,showProModal:function(){return p(!0)},setProModalContent:P}),Object(n.createElement)("div",{className:"bwf-widgets-wrap"},Object(n.createElement)("div",{className:"bwf-dashboard-widget-wrapper"},Object(n.createElement)("div",{className:"bwf-dashboard-widget-s-half",key:1},Object(o.Tb)()?Object(n.createElement)(x,null):Object(n.createElement)(ee,null),Object(n.createElement)(U,null))),Object(n.createElement)("div",{className:"bwf-dashboard-right-sidebar"},Object(n.createElement)("div",{className:"bwf-widgets-activity"},Object(n.createElement)(T,null),Object(A.size)(u)?Object(n.createElement)("div",{className:"bwf-card-footer"},Object(n.createElement)(S.a,{href:"admin.php?page=autonami&path=/contacts"},Object(r.__)("View Contacts","wp-marketing-automations")," ",Object(n.createElement)(E.a,{icon:"arrow-right",height:"16",width:"16",color:"#0073aa"}))):null))),Object(o.Tb)()&&Object(n.createElement)("div",{className:"bwf-dashboard-widget-wrapper bwf-w-full"},Object(n.createElement)(ee,null))),!Object(o.Jb)()&&Object(n.createElement)(N.b,{isOpen:d,onRequestClose:function(){return p(!1)},modalContent:C}))}},950:function(e,t,a){"use strict";var n=a(0),r=a(6),c=a.n(r),i=a(1),o=a(8),l=(a(952),a(39)),s=a(4);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=b(Object(n.useState)(!1),2),a=t[0],r=t[1],u=e.modalContent,m=void 0===u?{}:u,f=e.content,d=e.onPage,p=void 0!==d&&d;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:c()("bwf-upgrade-pro-overlay",{"is-on-page":p}),onClick:function(){p||r(!0)}},p?Object(n.createElement)(l.a,{showHeader:!1,modalContent:m}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-king-tag-pro"},Object(n.createElement)(o.a,{icon:"king",size:38,color:"#fff"})),Object(n.createElement)("span",{className:"bwf-mt-8"},f||(Object(s.Fb)()?Object(i.__)("Activate your license to continue using premium features without interruption.","wp-marketing-automations"):Object(i.__)("This feature is locked. To get full access of FunnelKit Automation upgrade to PRO","wp-marketing-automations"))))),Object(n.createElement)(l.b,{isOpen:a,onRequestClose:function(){return r(!1)},modalContent:m}))}},952:function(e,t,a){}}]);