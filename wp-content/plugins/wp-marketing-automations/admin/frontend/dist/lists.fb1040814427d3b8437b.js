(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1258:function(e,t,n){},1259:function(e,t,n){},1298:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20),c=(n(1258),n(1)),o=n(6),i=n.n(o),s=n(3),l=n(9),u=n.n(l),b=n(5),m=n(16),f=n(18),p=n(119),O=n(57),d=n(58),j=n(4),g=n(52);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=function(){var e=Object(g.a)("listdata"),t=e.getStateProp;return y(y({},_(e,["getStateProp"])),{},{getLists:function(){return t("lists")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getTotalCount:function(){return parseInt(t("total"))},getCountData:function(){return t("countData")},getContactCountData:function(){return t("contactCountData")}})},k=n(51);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=function(){var e=Object(k.a)("listdata"),t=e.fetch,n=e.setStateProp;return P(P({},D(e,["fetch","setStateProp"])),{},{fetch:function(e,n,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=e.s,o=(e.page,e.filter,e.path,D(e,["s","page","filter","path"])),i={offset:n,limit:r,search:c,filters:o,get_wc:Object(j.Tb)(),grab_totals:a};t("GET",Object(j.u)("/v3/lists"),i)},setStateListValues:function(e){n("lists",e)},setStateListValuesByKey:function(e,t){n(e,t)}})},x=(n(1259),n(14)),I=n(8),N=n(315),L=n(121),T=n(74),A=n(122),R=n(944),M=n(66);function B(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){B(c,r,a,o,i,"next",e)}function i(e){B(c,r,a,o,i,"throw",e)}o(void 0)}))}}var q=function(e){var t=e.isOpen,n=e.tasks,a=e.onSuccess,o=e.onError,i=e.onRequestClose,s=e.actionType,l=n?n.length:0,b=Object(R.a)(function(){var e=F(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({path:Object(j.u)("/bulk-action/list"),method:"DELETE",data:{ids:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){setTimeout((function(){return b.reset()}),2500),a&&a()},onError:function(){o&&o()}}),m=function(){var e=F(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.mutate(n.map((function(e){return e.ID})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={delete:{title:Object(c._n)("Delete List","Delete Lists",l,"wp-marketing-automations"),description:Object(r.createElement)(r.Fragment,null,Object(c.__)("You are about to delete ","wp-marketing-automations"),Object(c._n)("list","lists",l,"wp-marketing-automations"),Object(c.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations")),confirmBtn:Object(c.__)("Delete","wp-marketing-automations"),cancelBtn:Object(c.__)("Cancel","wp-marketing-automations"),successMsg:Object(c.__)("Bulk action executed successfully","wp-marketing-automations"),errorMsg:Object(c.__)("Unable to delete list","wp-marketing-automations"),confirmDescription:Object(c.__)("This action is irreversible","wp-marketing-automations")}};return Object(r.createElement)(M.a,{modalTitle:f.hasOwnProperty(s)&&f[s].hasOwnProperty("title")?f[s].title:Object(c._n)("Perform Actions","Perform Actions",l,"wp-marketing-automations"),deleteDescriptionText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("description")?f[s].description:"",confirmButtonText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("confirmBtn")?f[s].confirmBtn:Object(c.__)("Confirm","wp-marketing-automations"),cancelButtonText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("cancelBtn")?f[s].cancelBtn:Object(c.__)("Cancel","wp-marketing-automations"),onConfirm:m,isLoading:b.isLoading,successMessage:b.isSuccess&&(f.hasOwnProperty(s)&&f[s].hasOwnProperty("successMsg")?f[s].successMsg:Object(c.__)("Actions Done!","wp-marketing-automations")),errorMessage:b.isError&&(b.error&&b.error.message?b.error.message:f.hasOwnProperty(s)&&f[s].hasOwnProperty("errorMsg")?f[s].errorMsg:Object(c.__)("Unable to perform action","wp-marketing-automations")),onRequestClose:function(){return!!i&&i()},isOpen:t,confirmDescription:f.hasOwnProperty(s)&&f[s].hasOwnProperty("confirmDescription")?f[s].confirmDescription:"",isDelete:!0})},z=n(41),J=n(176),U=n(31),K=n(39),V=n(303);function G(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){G(c,r,a,o,i,"next",e)}function i(e){G(c,r,a,o,i,"throw",e)}o(void 0)}))}}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=function(e){var t=e.query,n=v(),o=S(),l=X(Object(r.useState)(!1),2),g=l[0],w=l[1],y=X(Object(r.useState)(!1),2),h=y[0],_=y[1],k=X(Object(r.useState)(!1),2),E=k[0],P=k[1],C=X(Object(r.useState)({}),2),D=C[0],R=C[1],M=o.fetch,B=o.setStateListValues,F=o.setStateListValuesByKey,G=X(Object(r.useState)(!1),2),H=G[0],$=G[1],ee=X(Object(r.useState)(!1),2),te=ee[0],ne=ee[1],re=t.s,ae=void 0===re?"":re,ce=n.getLists,oe=n.getPageNumber,ie=n.getPerPageCount,se=n.getLoading,le=n.getTotalCount,ue=n.getCountData,be=n.getContactCountData,me=n.getError,fe=Object(r.useContext)(j.h),pe=ce(),Oe=me(),de=oe(),je=ie(),ge=le(),we=se(),ye=ue(),he=be(),_e=X(Object(r.useState)(!1),2),ve=_e[0],ke=_e[1],Ee=X(Object(r.useState)({}),2),Pe=Ee[0],Ce=Ee[1],De=Object(r.useRef)(new AbortController),Se=X(Object(r.useState)([]),2),xe=Se[0],Ie=Se[1],Ne=X(Object(r.useState)(!1),2),Le=Ne[0],Te=Ne[1],Ae=X(Object(r.useState)(""),2),Re=Ae[0],Me=Ae[1],Be=function(){We&&We(),Ie([])},Fe=Object(r.useCallback)((function(e,t){Ie(t),Me(e),Te(!0)}),[]);Object(r.useEffect)((function(){Ce(he)}),[he]),Object(r.useEffect)((function(){M(t,0,25,!0),w(!1),P(!1)}),[t.s]);var qe=Object(r.createElement)(m.a,{isPrimary:!0,key:"add",className:"bwf-display-flex",onClick:function(){R({}),_(!0),$(!1)}},Object(c.__)("Create List","wp-marketing-automations")),ze=Object(L.a)().getPageCountData,Je=Object(T.a)().setPageCountData,Ue=ze();Object(r.useEffect)((function(){Je(W(W({},Ue),ye))}),[ye]),Object(r.useEffect)((function(){return Be(),function(){F("countData",{}),De.current.abort()}}),[]),Object(N.a)("manage_lists","",Object(c.__)("ALL LISTS","wp-marketing-automations"),qe),Object(r.useEffect)((function(){if(!g&&!Object(s.isEmpty)(pe)&&!we)try{var e={list_ids:[]};pe.map((function(t){e.list_ids.push(t.ID)})),u()({method:"GET",path:Object(j.u)("/v3/lists/contacts?"+Object(a.stringify)(e)),signal:De.current.signal}).then((function(e){200==e.code&&(F("contactCountData",W(W({},e.result),he)),w(!0))})).catch((function(e){console.log(e)}))}catch(e){console.log(e)}}),[pe]);var Ke=i()("bwfcrm-contacts-lists",{"has-search":!0}),Ve=Object(r.useMemo)((function(){var e={};if(Array.isArray(pe)){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Z(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw c}}}}(pe);try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r.ID]=r}}catch(e){n.e(e)}finally{n.f()}}return e}),[pe]),Ge=Object(A.b)(Ve),Qe=Ge.singleSelectProps,Ye=Ge.selectAllProps,He=Ge.floatingBarProps,We=Ge.resetSelection,$e=Ge.selected,Xe=Object.keys($e).filter((function(e){return $e[e]})).length,Ze=[{key:"select_list",label:Object(r.createElement)(z.a,Y({type:"checkbox",checked:!1,onChange:function(){}},Ye)),isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-30"},{key:"actions",label:"",isLeftAligned:!1,cellClassName:"bwf-col-action bwf-w-30"},{key:"lists",label:Object(c.__)("Name","wp-marketing-automations"),isLeftAligned:!0},{key:"createdon",label:Object(c.__)("Created On","wp-marketing-automations"),isLeftAligned:!0,cellClassName:""},{key:"contacts",label:Object(c.__)("Contacts","wp-marketing-automations"),isLeftAligned:!0,cellClassName:""}],et=function(e){e!==je&&(M(t,0,e),w(!1))},tt=function(e){return Object(r.createElement)(O.a,{label:Object(c.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(t){var n=t.onToggle;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(d.a,{isClickable:!0,onInvoke:function(){Object(j.Jb)()?Object(x.k)({filter:"advanced",path:"/contacts","lists_any[]":e.ID},"/",{}):ne(!0),n()}},Object(r.createElement)(f.a,{justify:"space-between"},Object(r.createElement)(f.c,null,Object(c.__)("Filter Contacts","wp-marketing-automations")),!Object(j.Jb)()&&Object(r.createElement)(f.c,null,j.e))),Object(r.createElement)(d.a,{isClickable:!0,onInvoke:function(){R(e),_(!0),$(!1),n()}},Object(r.createElement)(f.a,{justify:"flex-start"},Object(r.createElement)(f.c,null,Object(c.__)("Edit","wp-marketing-automations")))),Object(r.createElement)(d.a,{isClickable:!0,onInvoke:function(){R(W(W({},D),{},{delete:!0,deleteid:e.ID,entityName:e.name})),_(!0),n()}},Object(r.createElement)(f.a,{justify:"flex-start"},Object(r.createElement)(f.c,null,Object(c.__)("Delete","wp-marketing-automations")))))}})},nt=function(e){return g?Pe.hasOwnProperty(parseInt(e.ID))&&Pe[parseInt(e.ID)].contact_count>0?Object(r.createElement)("div",{className:"bwf-display-flex bwf-flex-start"},Object(j.Jb)()?Object(r.createElement)("a",{onClick:function(){Object(x.k)({filter:"advanced",path:"/contacts","lists_any[]":e.ID},"/",{})},className:"bwf-a-no-underline"},parseInt(Pe[parseInt(e.ID)].subscribers_count)+" of "+Pe[parseInt(e.ID)].contact_count):Object(r.createElement)("div",{className:"bwf-normal-text"},parseInt(Pe[parseInt(e.ID)].subscribers_count)+" of "+Pe[parseInt(e.ID)].contact_count),Object(r.createElement)("span",null,Object(c.__)("Subscribed","wp-marketing-automations"))):"-":Object(r.createElement)("span",{className:"bwf-placeholder-temp bwf-w-150",title:"Loading"},Object(c.__)("Loading","wp-marketing-automations"))},rt=pe.map((function(e){var t,n,a,c,o,i;return[{display:Qe.hasOwnProperty(e.ID)?Object(r.createElement)(z.a,Y({type:"checkbox",checked:!1,onChange:function(){}},Qe[e.ID])):Object(r.createElement)(r.Fragment,null),value:null},{display:tt(e),value:"action"},{display:(n=e,a=n.name,c=void 0===a?"":a,o=n.description,i=void 0===o?"":o,Object(r.createElement)("div",{className:"bwf-display-flex-column"},Object(r.createElement)("span",null,c),Object(r.createElement)("span",{className:"bwf-normal-text bwf-light"},i))),value:e.ID},{display:(t=e.created_at,Object(r.createElement)("div",{className:"bwf-display-flex-column"},Object(r.createElement)("span",null,Object(j.W)(t)))),value:e.created_at},{display:nt(e),value:""}]})),at=function(){var e=Q(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ID){e.next=13;break}return r=pe.map((function(e){return parseInt(e.ID)===parseInt(n.ID)?n:e})),e.prev=2,e.next=5,u()({path:Object(j.u)("/v3/lists/".concat(n.ID,"/")),method:"POST",data:{list_name:n.name,description:n.description},headers:{"Content-Type":"application/json"}}).then((function(e){if(200!=e.code)throw Error(Object(j.p)(null==e?void 0:e.message));_(!1),B(r),R({}),fe(e.result),Object(j.wb)(fe,3e3)})).catch((function(e){throw Error(Object(j.p)(null==e?void 0:e.message))}));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),$(e.t0.message),R(W(W({},D),{},{loading:!1}));case 11:e.next=22;break;case 13:return e.prev=13,e.next=16,u()({path:Object(j.u)("/v3/list/"),method:"POST",data:{name:n.name,description:n.description},headers:{"Content-Type":"application/json"}}).then((function(e){if(200!=e.code)throw Error(Object(j.p)(null==e?void 0:e.message));_(!1),M(t,(de-1)*je,je),R({}),w(!1),fe(e.message),Object(j.wb)(fe,3e3)})).catch((function(e){throw Error(Object(j.p)(null==e?void 0:e.message))}));case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(13),$(e.t1.message),R(W(W({},D),{},{loading:!1}));case 22:case"end":return e.stop()}}),e,null,[[2,7],[13,18]])})));return function(t){return e.apply(this,arguments)}}(),ct=function(){var e=Q(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=12;break}return ke(!0),e.prev=2,e.next=5,u()({path:Object(j.u)("/v3/lists/".concat(n,"/")),method:"DELETE",data:{list_id:parseInt(n)}}).then((function(e){if(200!=e.code)throw Error(Object(j.p)(null==e?void 0:e.message));setTimeout((function(){fe(e.message),_(!1),M(t,(de-1)*je,je),R({}),w(!1),ke(!1)}),1e3)}));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),ke(!1),R(W(W({},D),{},{error:e.t0.message}));case 11:Object(j.wb)(fe,3e3);case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),ot=[{type:"heading",data:{title:Object(c.__)("Use lists to create your automation efforts","wp-marketing-automations"),desc:Object(c.__)("Effortlessly organize contacts for targeted broadcast and automation workflows.","wp-marketing-automations")}},{type:"image-desc",data:[{img:Object(j.o)()+"list/lists1.png",title:Object(c.__)("Create list","wp-marketing-automations"),desc:Object(c.__)("Automated processes based on list membership to increase engagement and customised for each list.","wp-marketing-automations")},{img:Object(j.o)()+"list/lists2.png",title:Object(c.__)("Manage your lists","wp-marketing-automations"),desc:Object(c.__)("Start list management by organizing, update, and optimize your contact lists.","wp-marketing-automations")}]},{type:"buttons",data:{buttons:[{text:Object(c.__)("Create List","wp-marketing-automations"),onClick:function(){R({}),_(!0),$(!1)}}]}},{type:"link-wth-text",data:{text:Object(c.__)("Curious about lists?","wp-marketing-automations"),link:"https://funnelkit.com/docs/autonami-2/lists/",linkText:Object(c.__)("Learn More","wp-marketing-automations")}}],it=we||Oe||ge>0||""!==ae||E;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-content-header-new"},Object(r.createElement)("div",{className:"bwf-content-header-left"},Object(r.createElement)("div",{className:"bwf-content-header-title"},Object(c.__)("Lists","wp-marketing-automations")),parseInt(ge)>0&&Object(r.createElement)("div",{className:"bwf-content-header-count"},Object(c.sprintf)(Object(c._n)("(%s Result)","(%s Results)",ge,"wp-marketing-automations"),ge))),Object(r.createElement)("div",{className:"bwf-content-header-right"},it&&!we&&qe)),Object(r.createElement)("div",{className:"bwf-c-list-section bwf_w_full"},Oe&&Object(r.createElement)(U.a,{status:"error"},Oe.message),it?Object(r.createElement)(p.a,{className:Ke,rows:rt,headers:Ze,query:{paged:de},rowsPerPage:je,totalRows:ge?parseInt(ge):0,isLoading:we,onPageChange:function(e,n){M(t,(e-1)*je,je),w(!1)},onQueryChange:function(e){return"per_page"!==e?function(){}:et},showMenu:!1,actions:Xe>0?[Object(r.createElement)(A.a,Y({key:"list-bulk-action",actions:[{id:"delete",icon:"trash",hint:Object(c.__)("Delete","wp-marketing-automations")}],onAction:Fe,inLine:!0,reset:Be},He))]:Object(r.createElement)(J.a,{key:"search",isLoading:we,searchTerm:null==t?void 0:t.s,showResultCount:!1,setSearchData:function(e){if(Object(s.size)(e))Object(x.k)({s:e},"/",t);else{var n=Object(s.cloneDeep)(t);P(!0),n.hasOwnProperty("s")&&(null==n||delete n.s),Object(x.k)(n,"/",{})}}}),rowHeader:!0,emptyMessage:Object(c.__)("No lists found","wp-marketing-automations")}):Object(r.createElement)(V.a,{data:ot}),h&&Object(r.createElement)(b.Modal,{shouldCloseOnClickOutside:!1,shouldCloseOnEsc:!1,className:"bwf-admin-modal bwf-h--core-header "+(D.loading?"bwf-admin-modal-no-header ":" ")+(D.delete?" bwf-admin-modal-squeezy ":"bwf-admin-modal-squeezy")},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},!D.delete&&(D.ID?Object(c.__)("Edit List","wp-marketing-automations"):Object(c.__)("Add List","wp-marketing-automations")),D.delete&&Object(c.__)("Delete List")),Object(r.createElement)("span",{onClick:function(){return _(!1)},className:"bwf-modal-close"},Object(r.createElement)(I.a,{icon:"close",color:"#353030"}))),D.success||D.error||D.delete?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-form-buttons"},Object(r.createElement)("div",{className:"bwf-h4 bwf-h4-grey",style:{margin:0,wordBreak:"break-word"}},D.error?D.error:Object(r.createElement)(r.Fragment,null,Object(c.__)("You are about to delete ","wp-marketing-automations"),Object(r.createElement)("strong",null,D.entityName),Object(c.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf_clear_24"}),D.error?Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(m.a,{isPrimary:!0,onClick:function(){R({}),_(!1)}},Object(c.__)("OK","wp-marketing-automations"))):Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(m.a,{className:"bwf-cancel-btn",onClick:function(){R({}),_(!1)},disabled:ve},Object(c.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(m.a,{className:"bwf-delete-btn",onClick:function(){ct(D.deleteid)},isBusy:ve},Object(c.__)("Delete","wp-marketing-automations"))))):Object(r.createElement)("div",{className:"bwf-form-fields",onKeyPress:function(e){"Enter"===e.key&&(Object(s.isEmpty)(D.name)||(R(W(W({},D),{},{loading:!0})),at(D)))}},H&&Object(r.createElement)(U.a,{status:"error",onRemove:function(){return $(!1)}},H),Object(r.createElement)(b.TextControl,{label:Object(c.__)("Name","wp-marketing-automations"),autoFocus:!0,type:"text",value:D.name?D.name:"",placeholder:Object(c.__)("Type here…","wp-marketing-automations"),onChange:function(e){R(W(W({},D),{},{name:e}))},disabled:D.loading}),Object(r.createElement)(b.TextareaControl,{label:Object(c.__)("Description","wp-marketing-automations"),type:"text",value:D.description?D.description:"",placeholder:Object(c.__)("Type here…","wp-marketing-automations"),onChange:function(e){R(W(W({},D),{},{description:e}))},className:"bwf-show-help-text",help:Object(c.__)("This description will be used on Unsubscribe page when List Management is turned on.","wp-marketing-automations"),disabled:D.loading}),Object(r.createElement)("div",{className:"bwf_clear_10"}),Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(m.a,{className:"bwf-cancel-btn",onClick:function(){return _(!1)}},Object(c.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(m.a,{isPrimary:!0,onClick:function(){Object(s.isEmpty)(D.name)?$(Object(c.__)("Name is required","wp-marketing-automations")):(R(W(W({},D),{},{loading:!0})),at(D))},className:"bwf-ml-0",isBusy:D.loading,disabled:D.loading},D.ID?Object(c.__)("Save","wp-marketing-automations"):Object(c.__)("Add","wp-marketing-automations"))))),Object(r.createElement)(q,{tasks:xe,isOpen:Le,onSuccess:function(){M(t,0,25,!0),Be()},onError:Be,onRequestClose:function(){return Te(!1)},screenType:"lists",screenTypeId:"list-bulk",actionType:Re})),!Object(j.Jb)()&&Object(r.createElement)(K.b,{isOpen:te,onRequestClose:function(){return ne(!1)},modalContent:{featureTitle:Object(c.__)("Contact Filters","wp-marketing-automations"),isFeature:!0,proLink:Object(j.T)("upgrade",{utm_medium:"List+Filter+Contacts+Upgrade+Modal"})}}))},ne=n(49);t.default=function(){var e=location&&location.search?Object(a.parse)(location.search.substring(1)):{};return Object(j.k)(Object(c.__)("Lists","wp-marketing-automations")),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(ne.a,null),Object(r.createElement)(te,{query:e}))}}}]);