(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1035:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(0),r=a(5),c=a(1),i=a(3),l=a(963),o=a(972),s=a(18),u=a(49),m=a(8),b=a(31);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=function(e){var t=e.headersData,a=e.onRequestImport,d=e.submitButtonText,j=e.secondaryButtonText,g=e.onSecondaryButtonClick,w=e.savedData,v=e.buttonAlignClass,_=e.backButtonText,k=e.backButtonClick,E=e.extra,y=e.isSubmitButtonBusy,h=e.sourceHeaderText,S=void 0===h?Object(c.__)("Columns To Import","wp-marketing-automations"):h,x=e.contactHeaderText,C=void 0===x?Object(c.__)("Map Into Field","wp-marketing-automations"):x,N=e.updateExistingText,T=void 0===N?Object(c.__)("Update Existing Contacts","wp-marketing-automations"):N,B=e.secondaryClass,F=void 0===B?"":B,A=t.headers,I=t.fields,P=O(Object(n.useState)(w&&w.mapped_fields?function(e,t){if(!e)return{};var a={},n=function(n){t.find((function(e){return e.index.toString()===n}))&&(a[n]=e[n])};for(var r in e)n(r);return a}(w.mapped_fields,A):{}),2),D=P[0],M=P[1],U=O(Object(n.useState)(0),2),R=U[0],H=U[1],L=w&&w.tags?w.tags.map((function(e){return{key:e.id,label:e.value}})):[],q=w&&w.lists?w.lists.map((function(e){return{key:e.id,label:e.value}})):[],J=O(Object(n.useState)(L),2),z=J[0],V=J[1],$=O(Object(n.useState)(q),2),G=$[0],K=$[1],Q=O(Object(n.useState)(!(!w||!("update_existing"in w))&&w.update_existing),2),W=Q[0],X=Q[1],Y=O(Object(n.useState)(!w||!("update_blank"in w)||w.update_blank),2),Z=Y[0],ee=Y[1],te=O(Object(n.useState)(!w||!("marketing_status"in w)||w.marketing_status),2),ae=te[0],ne=(te[1],O(Object(n.useState)(!(!w||!("trigger_events"in w))&&w.trigger_events),2)),re=ne[0],ce=ne[1],ie=O(Object(n.useState)(null),2),le=ie[0],oe=ie[1],se=(E||{}).disableMarketingStatusCheck,ue=void 0!==se&&se,me=function(){return oe(null),0===Object(i.size)(D)?(setTimeout((function(){return oe(Object(c.__)("Select the contact fields.","wp-marketing-automations"))}),500),!1):!!Object.values(D).includes("email")||(setTimeout((function(){return oe(Object(c.__)("Map contact email with a form field.","wp-marketing-automations"))}),500),!1)},be=function(){if(me()){var e={};A.map((function(t){t.index in D&&(e[t.index]=D[t.index])}));var t={map:e,tags:z.map((function(e){return{id:e.key,value:e.label}})),lists:G.map((function(e){return{id:e.key,value:e.label}})),update_existing:W,trigger_events:re,imported_contact_status:R,dont_update_blank:Z};!ue&&(t.marketing_status=ae),a(t)}},de=function(){if(me()){var e={};A.map((function(t){t.index in D&&(e[t.index]=D[t.index])}));var t={map:e,tags:z.map((function(e){return{id:e.key,value:e.label}})),lists:G.map((function(e){return{id:e.key,value:e.label}})),update_existing:W,trigger_events:re};!ue&&(t.marketing_status=ae),g(t)}},pe={0:Object(c.__)("Unverified","wp-marketing-automations"),1:Object(c.__)("Subscribed","wp-marketing-automations"),2:Object(c.__)("Bounced","wp-marketing-automations"),3:Object(c.__)("Unsubscribed","wp-marketing-automations")};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-c-import-mapper-fields bwf-card-wrap bwf-form-fields bwf-crm-importer-csv-wrap"},Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("span",{className:"bwf-form-title"},Object(c.__)("Mapping","wp-marketing-automations"))),le&&Object(n.createElement)("div",{className:"bwf-mr-16 bwf-ml-16"},Object(n.createElement)(u.a,null),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(b.a,{status:"error",onRemove:function(){return oe(null)}},le)),!Object(i.isArray)(I)||!I.length>0||!Object(i.isArray)(A)||!A.length>0?!Object(i.isArray)(I)||!I.length>0?Object(n.createElement)(b.a,{status:"error"},Object(c.__)("No contact fields found","wp-marketing-automations")):!Object(i.isArray)(A)||!A.length>0?Object(n.createElement)(b.a,{status:"error"},Object(c.__)("No mapping fields found")):void 0:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-crm-import-section"},Object(n.createElement)("div",{className:"bwf-c-import-field",key:"mapper-sel-wrap"},Object(n.createElement)("strong",null,S),Object(n.createElement)("span",null),Object(n.createElement)("strong",null,C)),A.map((function(e,t){return Object(n.createElement)("div",{key:t,className:"bwf-c-import-field"},Object(n.createElement)(r.TextControl,{disabled:!0,value:e.header}),Object(n.createElement)("span",{className:"bwf-display-flex"},Object(n.createElement)(m.a,{icon:"mapper"})),Object(n.createElement)("select",{value:e.index in D?D[e.index]:"",onChange:function(t){return function(e,t){var a=t.target.value,n="index"in e?e.index:"";""===a&&n in D?M(Object(i.omit)(D,n)):""!==a&&""!==n&&M(p(p({},D),{},f({},n,a)))}(e,t)},key:"bwf-select-field"},Object(n.createElement)("option",{value:"",key:"default-key"+t},Object(c.__)("Do Not Import This Field","wp-marketing-automations")),I.map((function(e,a){return"fields"in e&&e.fields.length>0&&Object(n.createElement)("optgroup",{key:e.id+"-"+a+"-"+t,label:e.name},e.fields.map((function(e){return Object(n.createElement)("option",{key:e.id,value:e.id},e.name)})))}))))}))),Object(n.createElement)("div",{className:"bwf-crm-import-section",style:{border:0}},Object(n.createElement)("div",{className:"bwf-h4"},Object(c.__)("Contact Profile","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-import-field",key:"select-tag-list"},Object(n.createElement)(l.a,{onTagsChange:V,selected:z}),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(o.a,{onListsChange:K,selected:G})),!ue&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-heading7-new"},Object(c.__)("Status","wp-marketing-automations")),Object(n.createElement)("select",{className:"bwf-import-csv-status-select",onChange:function(e){H(e.target.value)},key:"bwf-select-status",value:R},Object.keys(pe).map((function(e){return Object(n.createElement)("option",{key:e,value:e},pe[e])}))),Object(n.createElement)("div",{className:"bwf_clear_24"})),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:T,checked:W,className:"bwf-tooglecontrol-advance",onChange:X})),Object(n.createElement)("div",{className:"bwf_clear_24"}),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:Object(c.__)("Don't Update Blank Values","wp-marketing-automations"),checked:Z,className:"bwf-tooglecontrol-advance",onChange:ee})),Object(n.createElement)("div",{className:"bwf_clear_24"}),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:Object(c.__)("Trigger Automations (For Tag & List Related Events)","wp-marketing-automations"),checked:re,className:"bwf-tooglecontrol-advance",onChange:ce})))),Object(n.createElement)("div",{className:"bwf-pt-0"},v?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,null,!!_&&Object(n.createElement)(s.b,null,Object(n.createElement)(r.Button,{isSecondary:!0,onClick:k,className:F},_)),Object(n.createElement)(s.b,{className:v},Object(n.createElement)(r.Button,{onClick:be,isBusy:!!y,disabled:!!y,isPrimary:!0},Object(n.createElement)("span",null,d||Object(c.__)("Import","wp-marketing-automations"))),j&&Object(n.createElement)(r.Button,{onClick:de,className:"bwf-ml-10",isSecondary:!0},j)))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.Button,{onClick:be,isPrimary:!0,isBusy:!!y,disabled:!!y,className:"bwf-display-flex"},Object(n.createElement)("span",null,d||Object(c.__)("Import","wp-marketing-automations"))),j&&Object(n.createElement)(r.Button,{onClick:de,className:"bwf-ml-10",isSecondary:!0},j)))))}},1319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(962),i=a(1035),l=a(957),o=a(49),s=a(61),u=a(4),m=a(31);t.default=function(e){var t=e.feedId,a=Object(c.a)(),b=a.setStep,d=a.fetchMappingData,p=a.updateStepTwo,f=a.resetUpdateStepTwoStatus,O=Object(l.a)(),j=O.getFormFields,g=O.getFormHeaders,w=O.getFeed,v=O.getLoading,_=O.getError,k=O.getEditMapMode,E=O.getUpdateStepTwoStatus,y={fields:j(),headers:g()},h=v(),S=_(),x=w(),C=x&&x.status?parseInt(x.status):1,N=x&&x.data?x.data:{},T=k(),B=E();Object(n.useEffect)((function(){d(parseInt(t))}),[]);var F=Object(n.useContext)(u.h);Object(n.useEffect)((function(){3===B&&F(Object(r.__)("Unable to save mapping data","wp-marketing-automations")),2===B&&(F(Object(r.__)("Mapping data saved successfully","wp-marketing-automations")),b("double_optin")),B&&1!==B&&(f(),setTimeout((function(){return F("")}),3e3))}),[B]);var A=Object(r.__)("Next","wp-marketing-automations");return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(o.a,null),Object(n.createElement)("div",{className:"bwf-crm-stepper-wrap"},Object(n.createElement)("div",{className:"bwf-crm-importer-wrap"},S&&Object(n.createElement)(m.a,{status:"error"},S.message?S.message:Object(r.__)("Unknown error occurred","wp-marketing-automations")),h?Object(n.createElement)(s.a,null):Object(n.createElement)(i.a,{headersData:y,onRequestImport:function(e){p(t,e,C)},submitButtonText:A,submitButtonIcon:"arrow-right-alt",savedData:N,buttonAlignClass:"bwf_text_right bwf-m-20-imp",secondaryClass:"bwf-m-20-imp",backButtonText:!T&&Object(r.__)("Back","wp-marketing-automations"),backButtonClick:!T&&function(){return b("selection")},sourceHeaderText:Object(r.__)("Forms Fields","wp-marketing-automations"),contactHeaderText:Object(r.__)("Contact Fields","wp-marketing-automations"),extra:{disableMarketingStatusCheck:!0},isSubmitButtonBusy:1===B}))))}},963:function(e,t,a){"use strict";var n=a(0),r=a(25),c=a(1),i=a(177);t.a=function(e){var t=e.selected,a=e.onTagsChange;return Object(n.createElement)("div",{className:"bwf-c-field-mapper-terms"},Object(n.createElement)("div",{className:"bwf-input-label"},Object(c.__)("Add Tags","wp-marketing-automations")),Object(n.createElement)(r.a,{autocompleter:i.b,multiple:!1,allowFreeTextSearch:!0,inlineTags:!1,selected:t,onChange:function(e){a(e)},onRemoveTag:function(e,n){var r=t.filter((function(t){return!(t.key==e&&t.label==n)}));a(r)},placeholder:Object(c.__)("Search by tag name","wp-marketing-automations"),showClearButton:!0,disabled:!1}))}},972:function(e,t,a){"use strict";var n=a(0),r=a(25),c=a(1),i=a(177);t.a=function(e){var t=e.selected,a=e.onListsChange;return Object(n.createElement)("div",{className:"bwf-c-field-mapper-terms"},Object(n.createElement)("div",{className:"bwf-input-label"},Object(c.__)("Add to Lists","wp-marketing-automations")),Object(n.createElement)(r.a,{autocompleter:i.a,multiple:!1,allowFreeTextSearch:!0,selected:t,onChange:function(e){a(e)},onRemoveTag:function(e){var n=t.filter((function(t){return t.key!=e}));a(n)},placeholder:Object(c.__)("Search by list name","wp-marketing-automations"),showClearButton:!0,disabled:!1}))}}}]);