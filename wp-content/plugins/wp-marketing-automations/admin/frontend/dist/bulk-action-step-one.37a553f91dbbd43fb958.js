(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1355:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(16),c=n(1),o=n(9),l=n.n(o),i=n(3),s=n(985),u=n(971),b=n(182),f=n(4),m=n(14),d=n(50),p=n(18),O=n(318),j=n(33),g=n(304),y=n(119),v=n(6),w=n.n(v),h=n(970),_=n(958),E=n(310),P=n(41);function k(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=Object(d.a)(Object(f.kb)()).formatAmount,A=function(e){var t=e.setContactCount,n=e.excludedIds,a=void 0===n?[]:n,o=e.setExcluded,l=e.query,s=function(e){var t=Object(i.isEmpty)(e.country)?"":E[e.country],n=Object(f.Ub)([e.city,e.state,t],", ");return Object(i.isEmpty)(Object(i.trim)(n))?"":n},u=function(e){var t=s(e);return e.country||t?Object(r.createElement)(p.a,{justify:"start"},!Object(i.isEmpty)(e.country)&&Object(r.createElement)(p.c,null,Object(r.createElement)(O.a,{code:e.country,size:18})),Object(r.createElement)(p.c,null,t&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",null,s(e)),Object(r.createElement)("br",null)))):"-"},b=function(e){return Object(r.createElement)(j.a,{href:"admin.php?page=autonami&path=/contact/"+e.id,className:"bwf-a-no-underline"},Object(r.createElement)(g.a,{contact:e,hideJoiningDate:!0}))},m=function(e){return Object(r.createElement)("div",{className:"bwf-c-contact-details-cell"},e.email&&Object(r.createElement)(p.a,{justify:"start",align:"top"},Object(r.createElement)(p.c,null,Object(r.createElement)(j.a,{href:"mailto:"+e.email,className:"bwf-a-no-underline",type:"external"},e.email))),e.phone&&Object(r.createElement)(p.a,{justify:"start",align:"top"},Object(r.createElement)(p.c,null,Object(r.createElement)(j.a,{href:"tel:"+e.phone,className:"bwf-a-no-underline",type:"external"},e.phone))))},d=Object(h.a)(),v=d.getPageNumber,S=d.getPerPageCount,x=d.getTotalCount,A=d.getLoading,C=d.getContacts,D=Object(_.a)().fetch,T=C(),L=v(),F=S(),q=x(),R=A(),J=N(Object(r.useState)(!0),2),U=J[0],B=J[1],G=N(Object(r.useState)(l),2),M=G[0],V=G[1];Object(r.useEffect)((function(){R||(U&&q>0&&B(!1),t(parseInt(q)))}),[q]),Object(r.useEffect)((function(){U||JSON.stringify(M)===JSON.stringify(l)||(V(l),D(l,0,F,!0,!1,"",!1))}),[l]);var $=[{cellClassName:"is-checkbox-column bwf-col-action bwf-w-30",key:"id",label:"",required:!0},{key:"contact",label:Object(c.__)("Contact","wp-marketing-automations"),isLeftAligned:!0,required:!0},{key:"contact_details",label:Object(c.__)("Details","wp-marketing-automations"),isLeftAligned:!0}];Object(f.Tb)()?($.push({key:"total_spent",label:Object(c.__)("Total Spent","wp-marketing-automations"),isLeftAligned:!0}),$.push({key:"last_order",label:Object(c.__)("Last Order","wp-marketing-automations"),isLeftAligned:!0})):$.push({key:"column_location",label:Object(c.__)("Location","wp-marketing-automations"),isLeftAligned:!0});var z=function(e){var t=e.wc,n=t.total_order_count,a=t.total_order_value;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-c-listing-total-spent"},a&&n?Object(r.createElement)("div",{className:"bwf-c-total-spent-amount"},I(a)," |"," ",n," ",(parseInt(n)>1?Object(c.__)("orders","wp-marketing-automations"):Object(c.__)("order","wp-marketing-automations"),"wp-marketing-automations")):"-"))},Q=function(e){var t=e.wc.l_order_date;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",null,t&&"0000-00-00"!=t?Object(r.createElement)("div",{className:"bwf-c-total-spent-amount"},Object(f.V)(t)):"-"))},H=T.map((function(e){var t=function(e){return Object(i.merge)({id:0,email:"-",first_name:"",last_name:"",creation_date:"",fields:{marketing_status:"0",first_order_date:"",country:"",city:"",state:"",phone:""},wc:{id:1,l_order_date:"",total_order_count:0,total_order_value:0,total_purchased_items:0}},e)}(e),n=[{display:Object(r.createElement)(P.a,{onChange:function(e){return n=t.id,void o(e?a.filter((function(e){return e!==n})):[].concat(k(a),[n]));var n},"aria-label":Object(c.__)("Select"),checked:-1===a.indexOf(t.id)}),value:t.id},{display:b(t),value:Object(f.Ub)([t.first_name,t.last_name]," ")},{display:m(t),value:"".concat(Object(c.__)("Email","wp-marketing-automations"),": ").concat(t.email,", ").concat(Object(c.__)("Phone","wp-marketing-automations"),": ").concat(t.phone)}];return Object(f.Tb)()?(n.push({display:z(t),value:""}),n.push({display:Q(t),value:""})):n.push({display:u(t),value:s(t)}),n})),K=function(e){e!==F&&D(l,0,e,!0,!1,"",!1)},W=w()("bwfcrm-contacts-list",{"has-search":!0}),X=parseInt(q)>0?" ("+(parseInt(q)-parseInt(a.length))+")":"";return Object(r.createElement)(y.a,{className:W,title:Object(c.__)("Contacts ","wp-marketing-automations")+X,rows:H,headers:$,query:{paged:L},rowsPerPage:F,totalRows:q,isLoading:R,onPageChange:function(e,t){D(l,(e-1)*F,F)},onQueryChange:function(e){return"per_page"!==e?function(){}:K},showMenu:!1,emptyMessage:Object(c.__)("No contacts found","wp-marketing-automations")})};A.defaultProps={contacts:[]};var C=A,D=n(964),T=n(967),L=n(184),F=n(49),q=n(31);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t,n,r,a,c,o){try{var l=e[c](o),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.bulkActionId,n=e.setStep,o=e.setPending,d=e.isPending,p=Object(u.a)(!0),O=p.loading,j=void 0===O||O,g=p.filters,y=void 0===g?{}:g,v=Object(m.i)(),w=v.page,h=v.path,E=V(v,["page","path"]),P=Object(_.a)(),k=G(Object(r.useState)(!0),2),N=k[0],S=k[1],x=G(Object(r.useState)(!1),2),I=x[0],A=x[1],R=G(Object(r.useState)(""),2),U=R[0],M=R[1],$=Object(D.a)().setSingleBulkActionValue,z=Object(T.a)(),Q=z.getSingleBulkActionData,H=z.getSingleBulkActionLoad,K=Q(),W=H(),X=K.contactFilters,Y=void 0===X?{}:X,Z=K.count,ee=void 0===Z?0:Z,te=K.exclude_ids,ne=void 0===te?[]:te;Object(r.useEffect)((function(){W||j||(Object(i.isEmpty)(Y)||Object(m.k)(Y,"/",v),setTimeout((function(){S(!1)}),500))}),[Y,j,W]);var re=P.fetch;Object(r.useEffect)((function(){I||N||j||W||re(E,0,10,!0,!1,"",!1)}),[N,j]);var ae=function(){var e,r=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),A(!0),e.next=5,l()({path:Object(f.u)("/bulk-action/".concat(t)),method:"POST",data:J(J({},K),{},{contactFilters:E,exclude_ids:ne,count:parseInt(ee)-parseInt(ne.length)})}).then((function(e){200==e.code?e.hasOwnProperty("result")&&!Object(i.isEmpty)(e.result)&&($("data",e.result),setTimeout((function(){A(!1),n(2),Object(m.k)({page:w,path:h},"/",{}),o(!1)}),1e3)):(M(e.message),A(!1),o(!1))}));case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),M(e.t0.message),o(!1),A(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){B(c,r,a,o,l,"next",e)}function l(e){B(c,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}(),ce=Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-card-wrap"},Object(r.createElement)("div",{className:"bwf-card-header"},Object(c.__)("Contacts","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-bulk-action-step-loading bwf-p-20"},Object(r.createElement)("div",{className:"bwf-filter-placeholder "},Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-display-flex bwf-space-between bwf-p-20 bwf-pt-0 bwf-pb-0"},Object(r.createElement)("div",{className:"bwf-w-150"},Object(r.createElement)("div",{className:"bwf-placeholder-temp"})),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-btn"})),Object(r.createElement)("div",{className:"bwf-w-300 bwf-p-20 bwf-pt-0 bwf-pb-0"},Object(r.createElement)("div",{className:"bwf-placeholder-temp"})),Object(r.createElement)("div",{className:"bwf-display-flex bwf-space-between bwf-p-20 bwf-pt-0 bwf-pb-0"},Object(r.createElement)("div",null),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-btn"})),Object(r.createElement)("div",{className:"bwf_clear_20"})),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-w-150"},Object(r.createElement)("div",{className:"bwf-placeholder-temp"})),Object(r.createElement)(L.a,{numberOfRows:10,headers:[{key:"2",label:Object(r.createElement)("div",{className:"bwf-w-210"},Object(r.createElement)("div",{className:"bwf-placeholder-temp no-margin"}))},{key:"3",label:Object(r.createElement)("div",{className:"bwf-w-210"},Object(r.createElement)("div",{className:"bwf-placeholder-temp no-margin"}))},{key:"4",label:Object(r.createElement)("div",{className:"bwf-w-210"},Object(r.createElement)("div",{className:"bwf-placeholder-temp no-margin"}))}]}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf-bulk-action-footer"},Object(r.createElement)("div",{className:"bwf-display-flex bwf-space-between"},Object(r.createElement)("div",null),Object(r.createElement)("div",{className:"bwf-placeholder-temp bwf-btn"})))));return N||j||W?ce:Object(r.createElement)(r.Fragment,null,Object(r.createElement)(F.a,null),Object(r.createElement)("div",{className:"bwf-card-wrap"},Object(r.createElement)("div",{className:"bwf-card-header"},Object(c.__)("Contacts","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-bulk-action-wrapper"},U&&Object(r.createElement)(q.a,{status:"error",onRemove:function(){return M("")}},U),Object(r.createElement)("div",{className:"bwf-bulk-action-contact-filter"},Object(r.createElement)("div",{className:"bwf-display-flex bwf-mb-16",style:{justifyContent:"space-between"}},Object(r.createElement)("div",{className:"bwf-h3 bwf-w-300"},Object(c.__)("Segment Contacts","wp-marketing-automations")),Object(r.createElement)(s.c,{addAdvance:!1})),Object(r.createElement)("div",{className:"bwf-p-0"},Object(r.createElement)(b.a,{siteLocale:"en-US",currency:Object(f.Tb)()?bwfcrm_contacts_data.currency:{},config:{title:Object(c.__)("Select Rules","wp-marketing-automations"),filters:y,footerComponent:function(e){return Object(r.createElement)(s.a,{filter:e.data,config:e.config})},enableGrouping:!0},path:"/bulk-action/".concat(t),query:v,onAdvancedFilterAction:function(e,t){["filter","clear_all"].includes(e)&&$("data",J(J({},K),{},{exclude_ids:[]}))}}))),Object(r.createElement)("div",{className:"bwf-bulk-action-table-wrapper"},Object(r.createElement)(C,{setContactCount:function(e){$("data",J(J({},K),{},{count:parseInt(e)}))},excludedIds:ne,setExcluded:function(e){$("data",J(J({},K),{},{exclude_ids:e}))},query:E}))),Object(r.createElement)("div",{className:"bwf-bulk-action-footer"},Object(r.createElement)("div",{className:"bwf-display-flex bwf-space-between"},Object(r.createElement)("div",null),Object(r.createElement)(a.a,{className:"bwf-display-flex",isPrimary:!0,onClick:function(){ee>0?ae():M(Object(c.__)("Please select some contacts to perform bulk actions on them.","wp-marketing-automations"))},isBusy:d,disabled:I||N||j||W},Object(c.__)("Next","wp-marketing-automations")))))}},958:function(e,t,n){"use strict";var r=n(51),a=n(4),c=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("contacts"),t=e.fetch,n=e.setStateProp;return l(l({},s(e,["fetch","setStateProp"])),{},{setStateProp:n,fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,b=arguments.length>6&&void 0!==arguments[6]&&arguments[6],f=arguments.length>7&&void 0!==arguments[7]&&arguments[7],m=arguments.length>8&&void 0!==arguments[8]&&arguments[8];n("isLoading",!0);var d=e.s,p=void 0===d?"":d,O=(e.page,e.filter,e.path,s(e,["s","page","filter","path"])),j={offset:r,limit:o,search:p,filters:O,get_wc:Object(a.Tb)(),grab_totals:l,only_count:i,fetch_base:u,grab_custom_fields:!1,exclude_unsubs:b,exclude_unsubs_lists:f},g=Object(a.mb)("table_sort_data"),y=g.hasOwnProperty("contact_sort_data")?g.contact_sort_data:{},v=Object(c.isObject)(y)&&!Object(c.isEmpty)(y)?y:{},w=v.orderby,h=void 0===w?"last_modified":w,_=v.order,E=void 0===_?"desc":_;E&&h&&(j.order=E,j.order_by=h),m&&(j.unopen_broadcast=parseInt(m)),t("GET",Object(a.u)("/contacts"),j)},fetchListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,b=arguments.length>6&&void 0!==arguments[6]&&arguments[6],f=arguments.length>7&&void 0!==arguments[7]&&arguments[7],m=arguments.length>8&&void 0!==arguments[8]&&arguments[8];n("isLoading",!0);var d=e.s,p=void 0===d?"":d,O=(e.page,e.filter,e.path,s(e,["s","page","filter","path"])),j={offset:r,limit:o,search:p,filters:O,get_wc:Object(a.Tb)(),grab_totals:l,only_count:i,fetch_base:u,grab_custom_fields:!1,exclude_unsubs:b,exclude_unsubs_lists:f},g=Object(a.mb)("table_sort_data"),y=g.hasOwnProperty("contact_sort_data")?g.contact_sort_data:{},v=Object(c.isObject)(y)&&!Object(c.isEmpty)(y)?y:{},w=v.orderby,h=void 0===w?"last_modified":w,_=v.order,E=void 0===_?"desc":_;E&&h&&(j.order=E,j.order_by=h),m&&(j.unopen_broadcast=parseInt(m)),t("GET",Object(a.u)("/v3/contacts/listing"),j)},startIndexing:function(){return t("GET",Object(a.u)("/contacts"),{start_indexing:!0})}})}},970:function(e,t,n){"use strict";var r=n(52);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("contacts"),t=e.getStateProp;return c(c({},l(e,["getStateProp"])),{},{getContacts:function(){return t("contacts_list")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getTotalCount:function(){return parseInt(t("total"))},getCountData:function(){return t("countData")}})}}}]);