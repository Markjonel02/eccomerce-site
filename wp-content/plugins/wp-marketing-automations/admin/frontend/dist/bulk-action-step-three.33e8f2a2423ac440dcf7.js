(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(308),c=a(1),o=a(16),i=a(9),s=a.n(i),l=a(4),b=a(3),u=a(955),m=a(14),f=a(967),v=a(964),w=a(49);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){j(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t,a,n,r,c,o){try{var i=e[c](o),s=i.value}catch(e){return void a(e)}i.done?t(s):Promise.resolve(s).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function o(e){d(c,n,r,o,i,"next",e)}function i(e){d(c,n,r,o,i,"throw",e)}o(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=Object(m.i)(),a=Object(n.useContext)(l.h),i=e.bulkActionId,O=k(Object(n.useState)(!1),2),j=O[0],d=O[1],E=k(Object(n.useState)(!0),2),y=E[0],h=E[1],_=k(Object(n.useState)({}),2),N=_[0],P=_[1],I=k(Object(n.useState)(0),2),S=I[0],C=I[1],A=Object(f.a)().getSingleBulkActionData,x=Object(v.a)().setSingleBulkActionValue,D=A(),B=D.status,R=D.offset,T=void 0===R?0:R,F=D.count,L=void 0===F?0:F;Object(n.useEffect)((function(){D.hasOwnProperty("offset")&&D.hasOwnProperty("count")&&C(parseInt(parseInt(D.offset)/parseInt(D.count)*100))}),[D]);var U=function(){var e=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!1),e.next=4,s()({method:"GET",path:Object(l.u)("/bulk-action/status/".concat(i))}).then((function(e){200==e.code&&P(e.result)}));case 4:h(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(b.isEmpty)(N)||(2==N.status||parseInt(N.percent)>=100?(d(!0),C(100),N.hasOwnProperty("offset")&&x("data",p(p({},D),{},{offset:N.offset}))):(C(parseInt(N.percent)<100?parseInt(N.percent):100),N.hasOwnProperty("offset")&&x("data",p(p({},D),{},{offset:N.offset}))))}),[N]),Object(u.a)((function(){!j&&1===parseInt(B)&&y&&U()}),5e3);var J=function(){var e=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(Object(c.__)("Pausing bulk action status …","wp-marketing-automations")),e.next=4,s()({path:Object(l.u)("/bulk-action/".concat(i)),method:"POST",data:p(p({},D),{},{status:3,stop_bulk_action:!0})}).then((function(e){200===e.code?e.hasOwnProperty("result")&&!Object(b.isEmpty)(e.result)&&(x("data",e.result),a("Updated")):a(e.message)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a(e.t0.message);case 9:Object(l.wb)(a,3e3);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(w.a,null),Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)("div",{className:"bwf-bulk-action-wrapper bwf-bulk-action-progress-wrap"},Object(n.createElement)("div",{className:"bwf-bulk-action-progress-title"},Object(c.__)("Bulk Action Progress","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-progress-desc"},Object(c.__)("The actions are being processing in the background. We will let you know when it completes.","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-progress-bar"},Object(n.createElement)(r.a,{noStriped:!0,size:"sm",progress:parseInt(S)}),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)("div",{className:"bwf-display-flex"},Object(c.__)("Contact Processed","wp-marketing-automations")," ",":"," ",parseInt(T)!==parseInt(L)?parseInt(T)+" / "+parseInt(L):parseInt(L))),Object(n.createElement)("div",{className:"bwf-display-flex gap-12"},1===parseInt(B)&&!j&&Object(n.createElement)(o.a,{isSecondary:!0,onClick:function(){J()}},Object(c.__)("Pause Action","wp-marketing-automations")),Object(n.createElement)(o.a,{isPrimary:!0,onClick:function(){Object(m.k)({path:"/bulk-actions"},"/",t)}},Object(c.__)("Go to Bulk Action List","wp-marketing-automations"))))))}},1318:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(5),o=a(16),i=a(967),s=a(964),l=a(327),b=a(58),u=a(18),m=a(57),f=a(9),v=a.n(f),w=a(4),O=a(3),p=a(984),j=a(49);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function E(e,t,a,n,r,c,o){try{var i=e[c](o),s=i.value}catch(e){return void a(e)}i.done?t(s):Promise.resolve(s).then(n,r)}t.default=function(e){var t=e.bulkActionId,a=e.isLoading,f=Object(n.useContext)(w.h),d=Object(i.a)(),k=d.getSingleBulkActionData,y=d.getActionList,h=d.getActionSchemaList,_=Object(s.a)().setSingleBulkActionValue,N=k(),P=N.title,I=void 0===P?"-":P,S=N.status,C=N.count,A=void 0===C?0:C,x=N.actions,D=N.contactFilters,B=N.created_at,R=N.log_file,T=N.offset,F=void 0===T?0:T,L=N.enable_automation_run,U=void 0!==L&&L,J=h(),z=y(),G={0:"bwf-tags bwf-tag-orange",1:"bwf-tags bwf-tag-orange",2:"bwf-tags bwf-tag-green",3:"bwf-tags bwf-tag-red"},H={0:Object(r.__)("Draft","wp-marketing-automations"),1:Object(r.__)("Ongoing","wp-marketing-automations"),2:Object(r.__)("Completed","wp-marketing-automations"),3:Object(r.__)("Paused","wp-marketing-automations")},V=function(){var e,a=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(Object(r.__)("Updating bulk action status …","wp-marketing-automations")),e.next=4,v()({path:Object(w.u)("/bulk-action/".concat(t)),method:"POST",data:g(g({},N),{},{start_bulk_action:!0})}).then((function(e){200===e.code?e.hasOwnProperty("result")&&!Object(O.isEmpty)(e.result)&&(_("data",e.result),f(Object(r.__)("Updated","wp-marketing-automations"))):f(e.message)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),f(e.t0.message);case 9:Object(w.wb)(f,3e3);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function o(e){E(c,n,r,o,i,"next",e)}function i(e){E(c,n,r,o,i,"throw",e)}o(void 0)}))});return function(){return a.apply(this,arguments)}}();return a?Object(n.createElement)("div",{className:"bwf-crm-bulk-action-init"},Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)(c.Card,{className:"bwf-bulk-action-overview-wrap"},Object(n.createElement)(c.CardHeader,{className:"bwf-bulk-action-overview-header"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-title"},Object(r.__)("Overview","wp-marketing-automations"))),Object(n.createElement)(c.CardBody,null,[1,2,3,4,5,6,7,8,9].map((function(e){return Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list",key:e},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-150"})),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-300"})))})))))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(j.a,null),Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)(c.Card,{className:"bwf-bulk-action-overview-wrap"},Object(n.createElement)(c.CardHeader,{className:"bwf-bulk-action-overview-header"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-title"},Object(r.__)("Overview","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-menu"},G.hasOwnProperty(parseInt(S))&&Object(n.createElement)("span",{className:G[parseInt(S)]},H.hasOwnProperty(S)?H[S]:"-"),Object(w.Jb)()&&Object(n.createElement)(m.a,{label:Object(r.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(e){var t=e.onToggle;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(b.a,{isClickable:!0,onInvoke:function(){V(),t()}},Object(n.createElement)(u.a,{justify:"flex-start"},Object(n.createElement)(u.c,null,Object(r.__)("Resume","wp-marketing-automations")))))}}))),Object(n.createElement)(c.CardBody,null,Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Title","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},I)),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Created On","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(w.W)(B))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Actions","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)(l.a,{actions:z,actionSchema:J,value:x}))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Contact Filters","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(O.isEmpty)(D)?"-":Object(p.b)(D))),3===parseInt(S)&&parseInt(F)!==parseInt(A)&&Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Contact Processed","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},parseInt(F))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Contact Count","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},A)),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Trigger automations","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},U?"Enable":"Disable")),!Object(O.isEmpty)(R)&&Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(r.__)("Download Log file","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)("a",{target:"_blank",href:"/wp-json"+Object(w.u)("/bulk-action/download/".concat(t,"?bwf-nonce=").concat(Object(w.z)())),title:"Download",className:"bwf-a-no-underline",rel:"noreferrer"},Object(n.createElement)(o.a,{isSecondary:!0},Object(O.isEmpty)(R)?"-":R))))))))}},955:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);var r=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}}}]);