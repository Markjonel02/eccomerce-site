import{a as b}from"./links.cMjoa9mX.js";import{J as v}from"./JsonValues.D25FTfEu.js";import{B as O,S as C}from"./Caret.iRBf3wcH.js";import{b as $}from"./index.BB7B6rSp.js";import{S as k}from"./AddPlus.CVj47h4P.js";import{S}from"./External.Bfg4674G.js";import{x as p,o as T,c as B,C as a,m as r,D as _,t as o,a as n,G as d}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as V}from"./_plugin-vue_export-helper.BN1snXvA.js";const L={setup(){return{optionsStore:b()}},components:{BaseButton:O,BaseSelect:$,SvgAddPlus:k,SvgClose:C,SvgExternal:S},mixins:[v],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{excludeOptions:[],strings:{typeToSearch:this.$t.__("Type to search...",this.$td),noOptionsPosts:this.$t.__("Begin typing a post ID, title or slug to search...",this.$td),noOptionsTerms:this.$t.__("Begin typing a term ID or name to search...",this.$td),noResult:this.$t.__("No results found for your search. Try again!",this.$td),clear:this.$t.__("Clear",this.$td),id:this.$t.__("ID",this.$td),type:this.$t.__("Type",this.$td)}}},computed:{optionName:{get(){return this.type==="posts"?this.options.excludePosts:this.options.excludeTerms},set(e){if(this.type==="posts"){this.options.excludePosts=e;return}this.options.excludeTerms=e}},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{processGetObjects(e){return this.optionsStore.getObjects({query:e,type:this.type}).then(s=>{this.excludeOptions=s.body.objects})},getOptionTitle(e,s){e=e.replace(/<\/?[^>]+(>|$)/g,""),s=s.replace(/<\/?[^>]+(>|$)/g,"");const c=new RegExp(`(${s})`,"gi");return e.replace(c,'<span class="search-term">$1</span>')},searchableLabel({value:e,label:s,slug:c}){return`${e} ${s} ${c}`}}},N={class:"aioseo-exclude-posts"},j={class:"option"},P=["innerHTML"],w={class:"option-details"},D=["href"],R={class:"multiselect__tag"},A={class:"multiselect__tag-value"},E=["onClick"];function J(e,s,c,q,l,i){const h=p("svg-add-plus"),m=p("base-button"),g=p("svg-external"),y=p("svg-close"),x=p("base-select");return T(),B("div",N,[a(x,{options:l.excludeOptions,"ajax-search":i.processGetObjects,customLabel:i.searchableLabel,size:"medium",multiple:"",modelValue:e.getJsonValues(i.optionName),"onUpdate:modelValue":s[0]||(s[0]=t=>i.optionName=e.setJsonValues(t)),placeholder:l.strings.typeToSearch},{noOptions:r(()=>[_(o(i.noOptions),1)]),noResult:r(()=>[_(o(l.strings.noResult),1)]),caret:r(({toggle:t})=>[a(m,{class:"multiselect-toggle",style:{padding:"10px 13px",width:"40px",position:"absolute",height:"36px",right:"2px",top:"2px","text-align":"center",transition:"transform .2s ease"},type:"gray",onClick:t},{default:r(()=>[a(h,{style:{width:"14px",height:"14px",color:"black"}})]),_:2},1032,["onClick"])]),option:r(({option:t,search:u})=>[n("div",j,[n("div",{class:"option-title",innerHTML:i.getOptionTitle(t.label,u)},null,8,P),n("div",w,[n("span",null,o(l.strings.id)+": #"+o(t.value),1),n("span",null,o(l.strings.type)+": "+o(t.type),1)])]),n("a",{class:"option-permalink",href:t.link,target:"_blank",onClick:d(()=>{},["stop"])},[a(g)],8,D)]),tag:r(({option:t,remove:u})=>[n("div",R,[n("div",A,o(t.label)+" - #"+o(t.value),1),n("div",{class:"multiselect__tag-remove",onClick:d(f=>u(t),["stop"])},[a(y,{onClick:d(f=>u(t),["stop"])},null,8,["onClick"])],8,E)])]),_:1},8,["options","ajax-search","customLabel","modelValue","placeholder"]),a(m,{type:"gray",size:"medium",onClick:s[1]||(s[1]=t=>i.optionName=[])},{default:r(()=>[_(o(l.strings.clear),1)]),_:1})])}const Q=V(L,[["render",J]]);export{Q as C};
