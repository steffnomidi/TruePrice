(function(){"use strict";var e={213:function(e,t,i){var s=i(963),r=i(201),n=i(252),l=i(577);const c={class:"container",id:"screen"},o=["innerHTML"],a={class:"card result",id:"result"},u={class:"header"},v=(0,n._)("h1",null,"НАСТОЯЩАЯ ЦЕНА",-1),d={class:"result-text"},p={class:"description"},h={class:"row",id:"params"},m={class:"col card"},f=(0,n._)("div",{class:"title"},"Введите цену за упаковку",-1),y={class:"price"},b=(0,n._)("div",{class:"empty"},null,-1),w={class:"col card"},_={class:"title"},g={class:"val"},T=(0,n._)("div",{class:"empty"},null,-1),k={class:"row variants"},A=["onClick"];function P(e,t,i,r,P,C){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{id:"table",class:(0,l.C_)({active:e.table.isActive})},[(0,n._)("table",{innerHTML:e.table.html},null,8,o),(0,n._)("div",{class:"clear",onClick:t[0]||(t[0]=t=>e.mClear())},"×")],2),(0,n._)("div",a,[(0,n._)("div",u,[v,(0,n._)("p",{class:(0,l.C_)(["memoryPlus",{active:e.memoryPlus.isActive}]),onClick:t[1]||(t[1]=t=>e.mPlus())},"+ сравнить",2)]),(0,n._)("div",d,(0,l.zw)(e.result),1),(0,n._)("div",p,(0,l.zw)(e.priceTitle),1)]),(0,n._)("div",h,[(0,n._)("div",m,[f,(0,n._)("div",y,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=t=>e.price=t),class:"remove-arrow",onKeyup:t[3]||(t[3]=(...t)=>e.onKeyup&&e.onKeyup(...t)),placeholder:"0",onkeydown:"return event.keyCode !== 69",onFocus:t[4]||(t[4]=(...t)=>e.selectInput&&e.selectInput(...t))},null,544),[[s.nr,e.price]])]),b]),(0,n._)("div",w,[(0,n._)("div",_,(0,l.zw)(e.valueTitle),1),(0,n._)("div",g,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=t=>e.val=t),class:"remove-arrow",onKeyup:t[6]||(t[6]=(...t)=>e.onKeyup&&e.onKeyup(...t)),placeholder:"0",onkeydown:"return event.keyCode !== 69",onFocus:t[7]||(t[7]=(...t)=>e.selectInput&&e.selectInput(...t))},null,544),[[s.nr,e.val]])]),T])]),(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.buttons,((t,i)=>((0,n.wg)(),(0,n.iD)("div",{class:"col",key:i},[(0,n._)("button",{class:(0,l.C_)({active:t.isActive}),onClick:i=>e.onButtonClick(t.id)},(0,l.zw)(t.title),11,A)])))),128))])])}var C={name:"HomePage",data(){return{buttons:[{id:"mass",title:"За КГ",isActive:!0,priceTitle:"за килограмм",valueTitle:"Грамм в упаковке"},{id:"vol",title:"За Литр",isActive:!1,priceTitle:"за литр",valueTitle:"Миллилитров в упаковке"},{id:"count",title:"За Штуку",isActive:!1,priceTitle:"за штуку",valueTitle:"Штук в упаковке"}],priceTitle:"за килограмм",valueTitle:"Грамм в упаковке",price:"",val:"",result:"0.00 ₽",id:"mass",memoryPlus:{isActive:!1},table:{html:"",isActive:!1}}},methods:{selectInput(e){e.target.select()},onButtonClick(e){this.buttons.forEach((t=>{t.id===e?1!=t.isActive&&(t.isActive=!0,this.price="",this.val="",this.result="0.00 ₽",this.priceTitle=t.priceTitle,this.valueTitle=t.valueTitle,this.id=t.id):t.isActive=!1}))},onKeyup(){console.log(this.id);var e=0;if(0!=this.val&&0!=this.price){switch(this.id){case"mass":e=this.price/this.val*1e3;break;case"vol":e=this.price/this.val*1e3;break;case"count":e=this.price/this.val;break}e=Math.round(100*e)/100,this.memoryPlus.isActive=!0}else this.memoryPlus.isActive=!1;this.result=e.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})},mPlus(){var e;e='<tr><td><div class="suptitle">Цена за упаковку</div>'+this.price+'</td><td><div class="suptitle">'+this.valueTitle+"</div>"+this.val+'</td><td><div class="suptitle">Цена '+this.priceTitle+"</div>"+this.result+"</td></tr>",this.table.html+=e,this.table.isActive=!0,this.price="",this.val="",this.result="0.00 ₽",this.memoryPlus.isActive=!1},mClear(){this.table.html="",this.table.isActive=!1}}},O=i(744);const j=(0,O.Z)(C,[["render",P]]);var K=j;const x={class:"container"},I=(0,n._)("h1",{class:"text-center"},"Error 404",-1),M=[I];function F(e,t,i,s,r,l){return(0,n.wg)(),(0,n.iD)("div",x,M)}var H={name:"NotFound"};const z=(0,O.Z)(H,[["render",F]]);var B=z;const D=[{path:"/",name:"Home Page",component:K},{path:"/:catchAll(.*)",name:"NotFound",component:B}],U=(0,r.p7)({mode:"history",history:(0,r.PO)(),routes:D,scrollBehavior(){return window.scrollTo({top:0}),!1}});var Z=U;function E(e,t,i,s,r,l){const c=(0,n.up)("MainPage");return(0,n.wg)(),(0,n.j4)(c)}function L(e,t,i,s,r,l){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(c)}var N={name:"MainPage"};const R=(0,O.Z)(N,[["render",L],["__scopeId","data-v-e2d6a8ae"]]);var V=R,S={name:"App",components:{MainPage:V}};const Y=(0,O.Z)(S,[["render",E]]);var q=Y;(0,s.ri)(q).use(Z).mount("#app")}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,r,n){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var c=!0,o=0;o<s.length;o++)(!1&n||l>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[o])}))?s.splice(o--,1):(c=!1,n<l&&(l=n));if(c){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,l=s[0],c=s[1],o=s[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(o)var u=o(i)}for(t&&t(s);a<l.length;a++)n=l[a],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},s=self["webpackChunkprice"]=self["webpackChunkprice"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(213)}));s=i.O(s)})();
//# sourceMappingURL=app.83a15872.js.map