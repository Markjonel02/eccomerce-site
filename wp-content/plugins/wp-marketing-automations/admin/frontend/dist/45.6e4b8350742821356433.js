(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1026:function(e,t,n){},1092:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n(119),c=n(969),i=n(954),l=n(120),s=n(302),u=n(50),m=n(4),b=n(123),f=n(3),p=(n(1026),n(49)),d=n(33),O=n(304),j=n(949),w=n(74),y=n(121),g=n(6),h=n.n(g);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.match.params.automationId,n=e.isV2,g=void 0===n||n,E=Object(i.a)(),_=E.getConversionData(),k=E.getConversionAutomation(),C=E.getConversionSingleAutomationFailedCount(),N=Object(w.a)(),A=N.setL2NavAlign,I=N.setL2Title,S=N.setPageCountData,D=(0,Object(y.a)().getPageCountData)(),F=Object(c.a)(),L=F.fetchConversion,T=F.setConversionValues,V=Object(l.a)(),M=V.getAutomationData,x=V.getAutomationId,z=M().title,H=void 0===z?"":z,R=(k.v,k.title),q=void 0===R?"":R,J=x(),U=Object(s.a)().setAutomationData;Object(a.useEffect)((function(){Object(f.isEmpty)(k)||U("data",k)}),[k]),Object(a.useEffect)((function(){$||S(P(P({},D),{},{single_a_contacts:C}))}),[C]),Object(a.useEffect)((function(){return function(){T("automation",{})}}),[]),Object(j.a)("orders","",!0,!1,null,t,!1,g);var $=E.getConversionLoading(),Q=E.getConversionLimit(),B=E.getConversionOffset(),G=E.getConversionTotal(),K=Object(u.a)(Object(m.kb)()).formatAmount;Object(a.useEffect)((function(){I(parseInt(t)===parseInt(J)&&""!==H&&""===q?H:""!==q?q:Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"}))}),[H,q,t]),Object(a.useEffect)((function(){L(t,Q,B)}),[Q,B]),Object(a.useEffect)((function(){A("left"),Object(m.k)("Automation #"+t)}),[$]);var W=h()("bwf-crm-campaign-report-conversion"),X=[{key:"orderid",label:Object(r.__)("Order ID","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-w-120"},{key:"contact",label:Object(r.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact bwf-w-210"},{key:"purchaseitems",label:Object(r.__)("Purchased Items","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details "},{key:"revenue",label:Object(r.__)("Revenue","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-w-210"},{key:"date",label:Object(r.__)("Date","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"}],Y=E.getConversionPage(),Z=function(e){e!==Q&&(T("limit",e),T("offset",0))},ee=function(e){return Object(a.createElement)(a.Fragment,null,e.hasOwnProperty("cid")&&e.cid>0?Object(a.createElement)(d.a,{href:"admin.php?page=autonami&path=/contact/"+e.cid,type:"bwf-crm",className:"bwf-crm-campaign-order-contact-link bwf-a-no-underline",key:e.cid},Object(a.createElement)(O.a,{contact:e,date:e.date,dateText:Object(r.__)("Placed on","wp-marketing-automations")})):Object(a.createElement)(O.a,{contact:e,date:e.date,dateText:Object(r.__)("Placed on","wp-marketing-automations")})," ")},te=function(e){return e.hasOwnProperty("order_deleted")&&e.order_deleted?Object(a.createElement)(a.Fragment,null,"#"+e.wcid):Object(a.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?post="+e.wcid+"&action=edit",rel:"noreferrer"},"#"+e.wcid)};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:"<style>#bwfcrm-page{ overflow: auto !important; }</style>"}}),Object(a.createElement)(p.a,null),Object(a.createElement)("div",{className:"bwf-single-automation-body-header bwf-conversion-recipient"},Object(a.createElement)("div",{className:"bwf-content-header-left"},Object(a.createElement)("div",{className:"bwf-content-header-title2"},Object(r.__)("Orders","wp-marketing-automations")),parseInt(G)>0&&Object(a.createElement)("div",{className:"bwf-content-header-count"},Object(r.sprintf)(Object(r.__)("(%s Results)","wp-marketing-automations"),G)))),Object(a.createElement)("div",{className:"bwf-position-relative"},Object(a.createElement)(o.a,{className:W,rows:_.map((function(e){return[{display:e.hasOwnProperty("wcid")?te(e):"-",value:e.hasOwnProperty("wcid")?e.wcid:"-"},{display:ee(e),value:e.hasOwnProperty("contact_name")?e.contact_name:"-"},{display:e.hasOwnProperty("items")?(n=e.items,o="",c=[],Object.entries(n).map((function(e){var t=v(e,2),n=t[0],r=t[1];Object(f.isEmpty)(o)&&(o=Object(a.createElement)("a",{className:"bwf-a-no-underline",target:"_blank",href:"post.php?action=edit&post="+n,rel:"noreferrer"},r)),c.push(Object(a.createElement)("a",{className:"bwf-a-no-underline",target:"_blank",href:"post.php?action=edit&post="+n,rel:"noreferrer"},r))})),Object(a.createElement)(a.Fragment,null,Object(f.isEmpty)(o)?"-":o,!Object(f.isEmpty)(c)&&c.length>1&&Object(a.createElement)(b.a,{items:c}))):Object(r.__)("Order Deleted","wp-marketing-automations"),value:"purchase_item"},{display:(t=e,t.hasOwnProperty("wctotal")?t.hasOwnProperty("currency")?Object(a.createElement)("span",{className:"bwf-tags bwf-tag-green"},Object(u.a)(t.currency).formatAmount(t.wctotal)):Object(a.createElement)(a.Fragment,null,parseFloat(t.wctotal)>0?Object(a.createElement)("span",{className:"bwf-tags bwf-tag-green"},K(t.wctotal)):"-"):"-"),value:e.hasOwnProperty("wctotal")?e.wctotal:0},{display:e.hasOwnProperty("date")?Object(m.V)(e.date):"-",value:e.hasOwnProperty("date")?e.date:"-"}];var t,n,o,c})),headers:X,query:{paged:Y},rowsPerPage:Q,totalRows:G,isLoading:$,onPageChange:function(e){T("offset",(e-1)*Q)},onQueryChange:function(e){return"per_page"!==e?function(){}:Z},rowHeader:!0,showMenu:!1,emptyMessage:Object(r.__)("No orders found","wp-marketing-automations"),hideHeader:"yes"})))}},1250:function(e,t,n){},1350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(126),o=(n(1250),n(934)),c=n(69),i=n(1299),l=n(1092);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=Object(a.lazy)((function(){return Promise.all([n.e(6),n.e(34)]).then(n.bind(null,1329))})),m=Object(a.lazy)((function(){return n.e(58).then(n.bind(null,1331))})),b=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(50)]).then(n.bind(null,1328))})),f=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(54)]).then(n.bind(null,1334))})),p=function(){return[{path:["/automations-v1","/automations-v1/list/:type"],render:function(e){return Object(a.createElement)(u,e)}},{path:["/automations-v1/task-history","/automations-v1/task-history/:type"],render:function(e){return Object(a.createElement)(m,e)}},{path:["/automations/create"],render:function(e){return Object(a.createElement)(b,e)}},{path:["/automation-contacts","/automation-contacts/:type"],render:function(e){return Object(a.createElement)(f,e)}},{path:["/automations","/automations/:type"],render:function(e){return Object(a.createElement)(u,s({},e,{automationV2:!0}))}},{path:["/automation-v1/:automationId/engagements"],render:function(e){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.default,s({},e,{isV2:!1})))}},{path:["/automation-v1/:automationId/orders"],render:function(e){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(l.default,s({},e,{isV2:!1})))}}]};function d(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=d(p());return Object(a.createElement)("div",{className:"bwf-automationlist-main-wrapper"},Object(a.createElement)("div",{className:"bwf-automationlist-section-sidebar"},Object(a.createElement)(r.a,{showHeaderLabal:!0})),Object(a.createElement)("div",{className:"bwf-automationlist-section-body"},Object(a.createElement)(a.Suspense,{fallback:Object(a.createElement)(a.Fragment,null)},Object(a.createElement)(o.c,null,e.map((function(e,t){return Object(a.createElement)(o.a,{exact:!0,path:e.path,render:e.render,key:t})})),Object(a.createElement)(o.a,{component:c.default})))))}}}]);