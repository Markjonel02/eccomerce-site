(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1110:function(e,t,n){},1345:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(3),c=n(1),o=n(9),i=n.n(o),l=n(5),s=n(10),b=n.n(s),m=n(94),u=n(52);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j=function(){var e=Object(u.a)("singleContactNotes"),t=e.getStateProp;return d(d({},O(e,["getStateProp"])),{},{getNotes:function(){return t("notes")},isLoading:function(){return t("isLoading")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getOffset:function(){return parseInt(t("offset"))},getTotalCount:function(){return parseInt(t("total"))},getContactId:function(){return parseInt(t("contactId"))}})},g=n(51),w=n(4);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=function(){var e=Object(g.a)("singleContactNotes"),t=e.fetch,n=e.setStateProp;return v(v({},E(e,["fetch","setStateProp"])),{},{fetch:function(e,a,r){n("contactId",r),n("isLoading",!0);var c={offset:e,limit:a};t("GET",Object(w.u)("/v3/contacts/".concat(r,"/notes")),c)},setStateValue:function(e,t){n(e,t)}})},N=n(246),k=n(147),P=n(181),C=(n(497),n(8)),S=n(75),x=n(16),I=n(145),T=n(303),D=(n(1110),function(e){var t=e.addNote,n=[{type:"icon",data:{class:"bwf-pb-gap",content:Object(a.createElement)(C.a,{icon:"zero-notes"})}},{type:"content",data:{class:"bwf-heading-1 bwf-pb-10",content:Object(c.__)("You haven't added any notes to this profile yet.","wp-marketing-automations")}},{type:"content",data:{class:"bwf-heading-2 bwf-pb-gap",content:Object(c.__)("After adding notes, they will start to appear here.","wp-marketing-automations")}},{type:"buttons",data:{buttons:[{text:Object(c.__)("Add a Note","wp-marketing-automations"),proCheck:!1,onClick:function(){t()}}]}}];return Object(a.createElement)(T.a,{data:n})}),A=n(31);function F(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t,n,a,r,c,o){try{var i=e[c](o),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,r)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){B(c,a,r,o,i,"next",e)}function i(e){B(c,a,r,o,i,"throw",e)}o(void 0)}))}}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||V(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=Object(a.useContext)(w.h),n={id:0,cid:0,type:"",created_by:"0",created_date:"0000-00-00 00:00:00",private:0,title:"",body:"",modified_by:null,modified_date:null,date_time:"0000-00-00 00:00:00"},o=e.contactId,s=m.a.getContact(),u=G(Object(a.useState)(!1),2),f=u[0],d=u[1],p=G(Object(a.useState)(!1),2),O=p[0],g=p[1],y=G(Object(a.useState)(n),2),v=y[0],h=y[1],E=G(Object(a.useState)({message:"",type:1}),2),T=E[0],L=E[1],z=[{value:"",label:Object(c.__)("Select Type","wp-marketing-automations")}].concat(Object(w.F)()).map((function(e){return{key:e.value,label:e.label}})),B=Object(N.a)().fetchConversations,V=j(),J=_(),K=J.fetch,Y=J.setStateValue,q=V.getNotes(),H=V.isLoading(),U=m.a.getContactLoading(),$=V.getPerPageCount(),Q=V.getPageNumber(),W=V.getTotalCount(),X=V.getContactId(),Z=V.getOffset(),ee=function(){var e=M(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={title:n.title,body:n.body,type:n.type,private:n.send,modified_by:Object(w.G)()},Object(r.isEmpty)(n.id)){e.next=14;break}return h(R(R({},v),{},{loading:!0})),e.prev=3,e.next=6,i()({path:Object(w.u)("/v3/contacts/".concat(s.id,"/notes/").concat(n.id)),method:"POST",data:{notes:a},headers:{"Content-Type":"application/json"}}).then((function(e){h(R(R({},v),{},{success:!0,loading:!0,message:e.message})),t(e.message),setTimeout((function(){var e=q.map((function(e){return e.id==n.id&&(e.title=n.title,e.body=n.body,e.type=n.type,e.private=n.send),e}));Y("notes",e),d(!1),h({})}),1e3)})).catch((function(e){throw Error(Object(w.p)(null==e?void 0:e.message))}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),g(e.t0.message),h(R(R({},v),{},{loading:!1}));case 12:e.next=24;break;case 14:return a.created_by=Object(w.G)(),e.prev=15,e.next=18,i()({path:Object(w.u)("/v3/contacts/".concat(s.id,"/notes/")),method:"POST",data:{notes:a},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(h(R(R({},v),{},{success:!0,loading:!0,message:e.message})),t(e.message),setTimeout((function(){d(!1),h({}),K((Q-1)*$,$,s.id),B(s.id,0,25)}),1e3)):(h(R(R({},v),{},{error:!0,loading:!0,message:e.message,delete:!0})),t(e.message),setTimeout((function(){d(!1),h({})}),1e3))})).catch((function(e){throw Error(Object(w.p)(null==e?void 0:e.message))}));case 18:e.next=24;break;case 20:e.prev=20,e.t1=e.catch(15),g(e.t1.message),h(R(R({},v),{},{loading:!1}));case 24:Object(w.wb)(t,3e3);case 25:case"end":return e.stop()}}),e,null,[[3,8],[15,20]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=M(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({path:Object(w.u)("/v3/contacts/".concat(s.id,"/notes/").concat(n,"/")),method:"DELETE"}).then((function(e){t(e.message),setTimeout((function(){d(!1),K((Q-1)*$,$,s.id),h({})}),1e3)})).catch((function(e){throw Error(Object(w.p)(null==e?void 0:e.message))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),h(R(R({},v),{},{error:e.t0.message,loading:!1,delete:!0}));case 8:Object(w.wb)(t,3e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(Object(r.isEmpty)(q)||parseInt(o)!==parseInt(X))&&K(Z,$,o)}),[Z,$]);return Object(a.createElement)("div",{className:"bwf-cs-contact-tab-data"},f&&Object(a.createElement)(l.Modal,{shouldCloseOnEsc:!1,shouldCloseOnClickOutside:!1,className:"bwf-admin-modal bwf-message-modal "+(v.loading?"bwf-admin-modal-no-header ":" ")+(v.delete?" bwf-admin-modal-squeezy ":"bwf-admin-modal-large")},Object(a.createElement)("div",{className:"bwf-modal-header"},Object(a.createElement)("div",{className:"bwf-modal-heading"},v.delete?Object(c.__)("Delete Note?","wp-marketing-automations"):0==v.id?Object(c.__)("Add a Note","wp-marketing-automations"):Object(c.__)("Edit Note","wp-marketing-automations")),Object(a.createElement)("span",{onClick:function(){return d(!1)},className:"bwf-modal-close"},Object(a.createElement)(C.a,{icon:"close",color:"#353030"}))),v.delete?Object(a.createElement)("div",{className:"bwf-form-buttons"},Object(a.createElement)("div",{className:"bwf-h4 bwf-h4-grey",style:{margin:0}},v.error?v.error:Object(a.createElement)(a.Fragment,null,Object(c.__)("You are about to delete ","wp-marketing-automations"),Object(a.createElement)("strong",null,v.entityName),Object(c.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf_clear_24"}),v.error?Object(a.createElement)("div",{className:"bwf_text_right"},Object(a.createElement)(x.a,{isPrimary:!0,onClick:function(){h({}),d(!1)}},Object(c.__)("OK","wp-marketing-automations"))):Object(a.createElement)("div",{className:"bwf_text_right"},Object(a.createElement)(x.a,{className:"bwf-cancel-btn",onClick:function(){h({}),d(!1)},disabled:v.loading&&v.deleteconfirm},Object(c.__)("Cancel","wp-marketing-automations")),Object(a.createElement)(x.a,{isPrimary:!0,isBusy:v.loading&&v.deleteconfirm,disabled:v.loading&&v.deleteconfirm,onClick:function(){h(R(R({},v),{},{loading:!0,deleteconfirm:!0,deleteid:v.deleteid,delete:!0})),te(v.deleteid)}},Object(c.__)("Delete","wp-marketing-automations")))):Object(a.createElement)("div",{className:"bwf-form-fields"},O&&Object(a.createElement)(A.a,{status:"error",onRemove:function(){return g(!1)}},O),Object(a.createElement)("div",{className:"bwf-message-wrap"},Object(a.createElement)("div",{className:"bwf-mb-24 bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-w-120 bwf_bold"},Object(c.__)("Type","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-select-full-wrap"},Object(a.createElement)(S.b,{selected:v.type,className:"bwf-w-100p bwf-mb-0",options:z,onChange:function(e){return h(R(R({},v),{},{type:e}))},disabled:v.loading}))),Object(a.createElement)("div",{className:"bwf-mb-24"},Object(a.createElement)("div",{className:"bwf-w-120 bwf_bold"},Object(c.__)("Title","wp-marketing-automations")),Object(a.createElement)(l.TextControl,{type:"text",value:v.title,placeholder:Object(c.__)("Type here …","wp-marketing-automations"),onChange:function(e){return h(R(R({},v),{},{title:e}))},disabled:v.loading})),Object(a.createElement)("div",{className:"bwf-message-textarea"},Object(a.createElement)(I.a,{keyid:"bwf-note-editor",content:v.body,setContent:function(e){return h(R(R({},v),{},{body:e}))},height:200})),Object(a.createElement)("div",{className:"bwf-message-footer"},0==parseInt(v.id)?Object(a.createElement)("div",{className:"bwf-note-send"},Object(a.createElement)(l.ToggleControl,{label:Object(c.__)("Send Note to Contact","wp-marketing-automations"),className:"bwf-tooglecontrol-advance",checked:Boolean(parseInt(v.send)),onChange:function(e){return h(R(R({},v),{},{send:e?"1":"0"}))}})):Object(a.createElement)("div",null),Object(a.createElement)("div",{className:"bwf_text_right"},Object(a.createElement)(x.a,{className:"bwf-cancel-btn",onClick:function(){return d(!1)}},Object(c.__)("Cancel","wp-marketing-automations")),Object(a.createElement)(x.a,{isPrimary:!0,onClick:function(){Object(r.isEmpty)(v.title)||Object(r.isEmpty)(v.body)||Object(r.isEmpty)(v.type)?g(Object(c.__)("Title, type and body are mandatory field. Kindly fill them.","wp-marketing-automations")):(g(!1),h(R(R({},v),{},{loading:!0})),ee(v))},disabled:v.loading,isBusy:v.loading},0==v.id?Object(c.__)("Add","wp-marketing-automations"):Object(c.__)("Save","wp-marketing-automations"))))))),Object(a.createElement)("div",{className:"bwf-c-s-section"},Object(a.createElement)(P.a,{message:T.message,type:T.type,removeMessage:function(){return L({message:"",type:1})}}),H||U?Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-content-header-new"},Object(a.createElement)("div",{className:"bwf-content-header-left"},Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-w-150 bwf-h-15"})),Object(a.createElement)("div",{className:"bwf-content-header-right"},Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-w-60 bwf-h-30"}))),Object(a.createElement)("div",{className:"bwf-cs-timeline__placeholder"},Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-30 bwf-w-90 bwf-mb-24"}),F(Array(5)).map((function(e,t){return Object(a.createElement)("div",{className:"bwf-mb-16",key:"bwf-cs-timeline__placeholder-".concat(t)},Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-20 bwf-w-210 bwf-mb-4"}),Object(a.createElement)("div",null,Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-20 bwf-w-400"})),Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-20 bwf-w-240 ".concat(4!==t?"bwf-mb-24":"")}))})))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-notes-wrap bwf-conversion"},Object(r.isEmpty)(q)?Object(a.createElement)("div",{className:"bwf-empty-note-item"},Object(a.createElement)(D,{addNote:function(){h(n),d(!0)}})):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-content-header-new"},Object(a.createElement)("div",{className:"bwf-content-header-left"},Object(a.createElement)("div",{className:"bwf-normal-text"},parseInt(W)>0&&Object(c.sprintf)(Object(c.__)("All Notes (%s)","wp-marketing-automations"),W))),Object(a.createElement)("div",{className:"bwf-content-header-right"},Object(a.createElement)(x.a,{className:"bwf-btn-small is-blue",isPrimary:!0,onClick:function(){h(n),d(!0)}},Object(c.__)("Add a Note","wp-marketing-automations")))),q.map((function(e){return Object(a.createElement)("div",{className:"bwf-cs__timeline-item",key:e.id},Object(a.createElement)("div",{className:"bwf-timeline-header"},Object(a.createElement)("span",{className:"bwf-cs__timeline-status no-margin"}),Object(a.createElement)("div",{className:"bwf-display-flex bwf-flex-start gap-8"},Object(a.createElement)("div",null,e.title),Object(a.createElement)("div",{className:"bwf-tags bwf-tag-gray"},e.type))),Object(a.createElement)("div",{className:"bwf-p bwf-timeline-body",dangerouslySetInnerHTML:{__html:e.body}}),Object(a.createElement)("div",{className:"bwf-timeline-footer"},Object(a.createElement)("span",{className:"bwf-note-added"},!Object(r.isEmpty)(e.created_username)&&Object(a.createElement)(a.Fragment,null,"By"," ",Object(a.createElement)("span",null,e.created_username))," ","on"," ",Object(a.createElement)("span",null,Object(w.V)(e.created_date))," ","at"," ",Object(a.createElement)("span",null,b()(e.created_date).format("hh:mm A"))),Object(a.createElement)("a",{href:"#",onClick:function(t){t.preventDefault(),h(e),d(!0)},className:"bwf-ml-12"},Object(a.createElement)(C.a,{icon:"edit",color:"#82838E",size:"16"})),Object(a.createElement)("a",{href:"#",className:"link-danger bwf-ml-16",onClick:function(t){t.preventDefault(),h(R(R({},v),{},{loading:!0,delete:!0,deleteid:e.id,entityName:e.title})),d(!0)}},Object(a.createElement)(C.a,{icon:"trash",color:"#82838E",size:"16"}))))})))),parseInt(W)>0&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf_clear_30"}),Object(a.createElement)(k.a,{page:Q,perPage:$,total:W,onPageChange:function(e){Y("offset",(e-1)*$),K((e-1)*$,$,o)},onPerPageChange:function(e){e!==$&&(Y("limit",e),K(Z,e,o))}})))))}}}]);