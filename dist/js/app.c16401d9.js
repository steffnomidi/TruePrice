(function(){"use strict";var e={929:function(e,t,i){var s=i(963),r=i(201),n=i(252),l=i(577);const c={class:"container",id:"screen"},o=["innerHTML"],a={class:"card result",id:"result"},u=(0,n.uE)('<a href="https://github.com/steffnomidi/TruePrice" id="githublink"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 249" id="github"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path></g></svg></a>',1),v={class:"header"},d=(0,n._)("h1",null,"НАСТОЯЩАЯ ЦЕНА",-1),p={class:"result-text"},h={class:"description"},m={class:"row",id:"params"},f={class:"col card"},y=(0,n._)("div",{class:"title"},"Введите цену за упаковку",-1),w={class:"price"},b=(0,n._)("div",{class:"empty"},null,-1),g={class:"col card"},_={class:"title"},T={class:"val"},k=(0,n._)("div",{class:"empty"},null,-1),A={class:"row variants"},C=["onClick"];function P(e,t,i,r,P,M){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{id:"table",class:(0,l.C_)({active:e.table.isActive})},[(0,n._)("table",{innerHTML:e.table.html},null,8,o),(0,n._)("div",{class:"clear",onClick:t[0]||(t[0]=t=>e.mClear())},"×")],2),(0,n._)("div",a,[u,(0,n._)("div",v,[d,(0,n._)("p",{class:(0,l.C_)(["memoryPlus",{active:e.memoryPlus.isActive}]),onClick:t[1]||(t[1]=t=>e.mPlus())},"+ сравнить",2)]),(0,n._)("div",p,(0,l.zw)(e.result),1),(0,n._)("div",h,(0,l.zw)(e.priceTitle),1)]),(0,n._)("div",m,[(0,n._)("div",f,[y,(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=t=>e.price=t),class:"remove-arrow",onKeyup:t[3]||(t[3]=(...t)=>e.onKeyup&&e.onKeyup(...t)),placeholder:"0",onkeydown:"return event.keyCode !== 69",onFocus:t[4]||(t[4]=(...t)=>e.selectInput&&e.selectInput(...t))},null,544),[[s.nr,e.price]])]),b]),(0,n._)("div",g,[(0,n._)("div",_,(0,l.zw)(e.valueTitle),1),(0,n._)("div",T,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=t=>e.val=t),class:"remove-arrow",onKeyup:t[6]||(t[6]=(...t)=>e.onKeyup&&e.onKeyup(...t)),placeholder:"0",onkeydown:"return event.keyCode !== 69",onFocus:t[7]||(t[7]=(...t)=>e.selectInput&&e.selectInput(...t))},null,544),[[s.nr,e.val]])]),k])]),(0,n._)("div",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.buttons,((t,i)=>((0,n.wg)(),(0,n.iD)("div",{class:"col",key:i},[(0,n._)("button",{class:(0,l.C_)({active:t.isActive}),onClick:i=>e.onButtonClick(t.id)},(0,l.zw)(t.title),11,C)])))),128))])])}var M={name:"HomePage",data(){return{buttons:[{id:"mass",title:"За КГ",isActive:!0,priceTitle:"за килограмм",valueTitle:"Грамм в упаковке"},{id:"vol",title:"За Литр",isActive:!1,priceTitle:"за литр",valueTitle:"Миллилитров в упаковке"},{id:"count",title:"За Штуку",isActive:!1,priceTitle:"за штуку",valueTitle:"Штук в упаковке"}],priceTitle:"за килограмм",valueTitle:"Грамм в упаковке",price:"",val:"",result:"0.00 ₽",id:"mass",memoryPlus:{isActive:!1},table:{html:"",isActive:!1}}},methods:{selectInput(e){e.target.select()},onButtonClick(e){this.buttons.forEach((t=>{t.id===e?1!=t.isActive&&(t.isActive=!0,this.price="",this.val="",this.result="0.00 ₽",this.priceTitle=t.priceTitle,this.valueTitle=t.valueTitle,this.id=t.id):t.isActive=!1}))},onKeyup(){console.log(this.id);var e=0;if(0!=this.val&&0!=this.price){switch(this.id){case"mass":e=this.price/this.val*1e3;break;case"vol":e=this.price/this.val*1e3;break;case"count":e=this.price/this.val;break}e=Math.round(100*e)/100,this.memoryPlus.isActive=!0}else this.memoryPlus.isActive=!1;this.result=e.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})},mPlus(){var e;e='<tr><td><div class="suptitle">Цена за упаковку</div>'+this.price+'</td><td><div class="suptitle">'+this.valueTitle+"</div>"+this.val+'</td><td><div class="suptitle">Цена '+this.priceTitle+"</div>"+this.result+"</td></tr>",this.table.html+=e,this.table.isActive=!0,this.price="",this.val="",this.result="0.00 ₽",this.memoryPlus.isActive=!1},mClear(){this.table.html="",this.table.isActive=!1}}},O=i(744);const x=(0,O.Z)(M,[["render",P]]);var j=x;const K={class:"container"},I=(0,n._)("h1",{class:"text-center"},"Error 404",-1),B=[I];function F(e,t,i,s,r,l){return(0,n.wg)(),(0,n.iD)("div",K,B)}var H={name:"NotFound"};const z=(0,O.Z)(H,[["render",F]]);var D=z;const E=[{path:"/",name:"Home Page",component:j},{path:"/:catchAll(.*)",name:"NotFound",component:D}],U=(0,r.p7)({mode:"history",history:(0,r.PO)(),routes:E,scrollBehavior(){return window.scrollTo({top:0}),!1}});var Z=U;function L(e,t,i,s,r,l){const c=(0,n.up)("MainPage");return(0,n.wg)(),(0,n.j4)(c)}function R(e,t,i,s,r,l){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(c)}var N={name:"MainPage"};const V=(0,O.Z)(N,[["render",R],["__scopeId","data-v-e2d6a8ae"]]);var Y=V,S={name:"App",components:{MainPage:Y}};const q=(0,O.Z)(S,[["render",L]]);var G=q;(0,s.ri)(G).use(Z).mount("#app")}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,r,n){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var c=!0,o=0;o<s.length;o++)(!1&n||l>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[o])}))?s.splice(o--,1):(c=!1,n<l&&(l=n));if(c){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,l=s[0],c=s[1],o=s[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(o)var u=o(i)}for(t&&t(s);a<l.length;a++)n=l[a],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},s=self["webpackChunkprice"]=self["webpackChunkprice"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(929)}));s=i.O(s)})();
//# sourceMappingURL=app.c16401d9.js.map