(function(e){function t(t){for(var i,o,a=t[0],p=t[1],d=t[2],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],i=!0,a=1;a<c.length;a++){var p=c[a];0!==n[p]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var c=i[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=i,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(c,i,function(t){return e[t]}.bind(null,i));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var u=p;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0249":function(e,t,c){},"0d15":function(e,t,c){e.exports=c.p+"img/2.c31d1276.jpg"},"11c6":function(e,t,c){e.exports=c.p+"img/6.34fe675c.jpg"},"18af":function(e,t,c){},"1dbb":function(e,t,c){"use strict";c("0249")},"20c9":function(e,t,c){"use strict";c("a11c")},"3b95":function(e,t,c){e.exports=c.p+"img/1.dda23969.jpg"},"3eb8":function(e,t,c){},4882:function(e,t,c){e.exports=c.p+"img/3.e81163cc.jpg"},"4b8c":function(e,t,c){e.exports=c.p+"img/5.7a93b2c8.jpg"},"53d2":function(e,t,c){e.exports=c.p+"img/8.c0056950.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var i,n=c("7a23"),r=c("b65f"),o=c.n(r),a={class:"nav-header"},p=Object(n["g"])("div",null,[Object(n["g"])("img",{id:"logo",src:o.a})],-1),d={id:"nav"};function u(e,t,c,i,r,o){var u=Object(n["w"])("router-link"),s=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",a,[p,Object(n["g"])("div",d,[Object(n["g"])("nav",null,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.links,(function(e){return Object(n["p"])(),Object(n["d"])(u,{key:e,to:r.paths[e]},{default:Object(n["C"])((function(){return[Object(n["f"])(Object(n["y"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(n["g"])(s,{recipes:r.recipes,onUpdateRecipes:o.loadRecipes},null,8,["recipes","onUpdateRecipes"])])])}var s=c("bc3a").create({baseURL:null!==(i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL)&&void 0!==i?i:"http://e28api.kimdo.me",responseType:"json"}),l={name:"App",data:function(){return{recipes:[],links:["home","all recipes","add a recipe"],paths:{home:"/","all recipes":"/recipes","add a recipe":"/recipe/new"}}},mounted:function(){this.loadRecipes()},methods:{loadRecipes:function(){var e=this;s.get("recipe").then((function(t){e.recipes=t.data.recipe}))}}};c("e700");l.render=u;var b=l,j=c("6c02"),f=(c("fb6a"),Object(n["E"])("data-v-160a9506"));Object(n["s"])("data-v-160a9506");var O={id:"home-page"},g=Object(n["g"])("h1",null,"Need An Idea?",-1),v={id:"random-recipe"},h=Object(n["g"])("h1",null,"Latest Recipes",-1),m={id:"latest-recipes"},y={id:"recipe"};Object(n["q"])();var w=f((function(e,t,c,i,r,o){var a=Object(n["w"])("show-recipe"),p=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",O,[g,Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return o.choose&&o.choose.apply(o,arguments)}),id:"choose-button"},"Give me a random recipe")]),Object(n["g"])("div",null,[Object(n["g"])(p,{to:"/recipe/"+r.randomRecipe.id},{default:f((function(){return[Object(n["g"])("div",v,[Object(n["g"])(a,{recipe:r.randomRecipe},null,8,["recipe"])])]})),_:1},8,["to"])]),Object(n["g"])("div",null,[h,Object(n["g"])("div",m,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.recipes.slice(7).reverse(),(function(e){return Object(n["p"])(),Object(n["d"])(p,{key:e.id,to:"/recipe/"+e.id},{default:f((function(){return[Object(n["g"])("div",y,[Object(n["g"])(a,{recipe:e},null,8,["recipe"])])]})),_:2},1032,["to"])})),128))])])])})),_=(c("b0c0"),c("a4d3"),c("e01a"),Object(n["E"])("data-v-6f7f4007"));Object(n["s"])("data-v-6f7f4007");var x={class:"show-recipe"},k={class:"name"},R={class:"description"};Object(n["q"])();var A=_((function(e,t,c,i,r,o){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",x,[Object(n["g"])("div",k,Object(n["y"])(c.recipe.name),1),Object(n["g"])("img",{class:"thumb",src:o.imgSrc},null,8,["src"])]),Object(n["g"])("p",R,Object(n["y"])(c.recipe.description),1)])})),S={props:{recipe:{type:Object},id:{type:String}},computed:{imgSrc:function(){try{return c("ce8b")("./"+this.recipe.id+".jpg")}catch(e){return c("aa67")}}}};c("9151");S.render=A,S.__scopeId="data-v-6f7f4007";var U=S,E={components:{"show-recipe":U},props:{recipes:{type:Array,default:null}},data:function(){return{randomRecipe:0}},methods:{choose:function(){var e=Math.floor(Math.random()*this.recipes.length);this.randomRecipe=this.recipes[e]}}};c("20c9");E.render=w,E.__scopeId="data-v-160a9506";var D=E,P=Object(n["E"])("data-v-4d10f722");Object(n["s"])("data-v-4d10f722");var C={id:"recipes-page"},I=Object(n["g"])("h1",null,"Recipes",-1),M={id:"recipes"},N={id:"recipe"};Object(n["q"])();var T=P((function(e,t,c,i,r,o){var a=Object(n["w"])("show-recipe"),p=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",C,[I,Object(n["g"])("div",M,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.recipes,(function(e){return Object(n["p"])(),Object(n["d"])(p,{key:e.id,to:"/recipe/"+e.id},{default:P((function(){return[Object(n["g"])("div",N,[Object(n["g"])(a,{recipe:e},null,8,["recipe"])])]})),_:2},1032,["to"])})),128))])])})),V={components:{"show-recipe":U},props:{recipes:{type:Array,default:null}},data:function(){return{}}};c("7dcf");V.render=T,V.__scopeId="data-v-4d10f722";var q=V,L=(c("a15b"),c("1276"),c("ac1f"),Object(n["E"])("data-v-1d30d072"));Object(n["s"])("data-v-1d30d072");var B={id:"show-recipe"},F={id:"recipe-details"},G=Object(n["g"])("h3",null,"Ingredients",-1),J=Object(n["g"])("h3",null,"Directions",-1),Y=Object(n["g"])("h3",null,"Categories",-1);Object(n["q"])();var $=L((function(e,t,c,i,r,o){return Object(n["p"])(),Object(n["d"])("div",B,[Object(n["g"])("img",{id:"recipe-img",src:o.imgSrc},null,8,["src"]),Object(n["g"])("div",F,[Object(n["g"])("h1",null,Object(n["y"])(o.recipe.name),1),Object(n["g"])("p",null,Object(n["y"])(o.recipe.description),1),G,Object(n["g"])("ul",null,Object(n["y"])(o.recipe.ingredients.split("|").join(" •  ")),1),J,Object(n["g"])("ul",null,Object(n["y"])(o.recipe.directions.split("|").join(" ")),1),Y,Object(n["g"])("ul",null,Object(n["y"])(o.recipe.categories.split("|").join(", ")),1)])])})),z=(c("4de4"),c("d81d"),{props:{recipes:{type:Array,default:null},id:{type:String},name:{type:String}},data:function(){return{}},computed:{recipe:function(){var e=this;return this.recipes.filter((function(t){return t.id==e.id}),this.id)[0]},imgSrc:function(){try{return c("ce8b")("./"+this.recipe.id+".jpg")}catch(e){return c("aa67")}},ingredientsSplit:function(){var e=this.recipes.map((function(e){return e.ingredients.split("|")}));return e}}});c("de14");z.render=$,z.__scopeId="data-v-1d30d072";var H=z,K=Object(n["E"])("data-v-9ed573aa");Object(n["s"])("data-v-9ed573aa");var Q={id:"add-recipe"},W=Object(n["g"])("h1",null,"Add a New Recipe",-1),X={key:0,id:"confirm"},Z={id:"inputs"},ee=Object(n["g"])("label",{for:"name"},"Name ",-1),te=Object(n["g"])("label",{for:"description"},"Description ",-1),ce=Object(n["g"])("label",{for:"ingredients"},"Ingredients ",-1),ie=Object(n["g"])("label",{for:"directions"},"Directions ",-1);Object(n["q"])();var ne=K((function(e,t,c,i,r,o){return Object(n["p"])(),Object(n["d"])("div",Q,[W,r.showConfirmation?(Object(n["p"])(),Object(n["d"])("div",X,"Your recipe was added")):Object(n["e"])("",!0),Object(n["g"])("div",null,[Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.errors,(function(e){return Object(n["p"])(),Object(n["d"])("li",{id:"errors",key:e},Object(n["y"])(e.join("")),1)})),128))])]),Object(n["g"])("div",Z,[Object(n["g"])("div",null,[ee,Object(n["D"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.recipe.name=e}),id:"name"},null,512),[[n["A"],r.recipe.name]])]),Object(n["g"])("div",null,[te,Object(n["D"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.recipe.description=e}),id:"description"},null,512),[[n["A"],r.recipe.description]])]),Object(n["g"])("div",null,[ce,Object(n["D"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.recipe.ingredients=e}),id:"ingredient"},null,512),[[n["A"],r.recipe.ingredients]])]),Object(n["g"])("div",null,[ie,Object(n["D"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.recipe.directions=e}),id:"direction"},null,512),[[n["A"],r.recipe.directions]])])]),Object(n["g"])("button",{onClick:t[5]||(t[5]=function(){return o.addRecipe&&o.addRecipe.apply(o,arguments)})},"Add Recipe")])})),re={data:function(){return{showConfirmation:!1,errors:null,recipe:{name:"Thai Basil Fried Rice",description:"A fragrant fried-rice recipe, with strong Thai basil and spicy umami flavors. Add as much chili as you like for a kick.",ingredients:"5 garlic cloves",directions:"Grind garlic and thai chili together in a mortar and pestle."}}},methods:{addRecipe:function(){var e=this;s.post("/recipe",this.recipe).then((function(t){t.data.errors?(e.errors=t.data.errors,e.showConfirmation=!1):(e.$emit("update-products"),e.showConfirmation=!0)})),this.recipe={}}}};c("1dbb");re.render=ne,re.__scopeId="data-v-9ed573aa";var oe=re,ae=Object(j["a"])({history:Object(j["b"])(),routes:[{path:"/",component:D},{path:"/recipes",component:q},{path:"/recipe/:id",component:H,props:!0},{path:"/recipe/new",component:oe}]});Object(n["c"])(b).use(ae).mount("#app")},"5a0d":function(e,t,c){e.exports=c.p+"img/4.7d6c6ce6.jpg"},"60b5":function(e,t,c){},"6b3a":function(e,t,c){},"7dcf":function(e,t,c){"use strict";c("18af")},9151:function(e,t,c){"use strict";c("6b3a")},a11c:function(e,t,c){},a795:function(e,t,c){e.exports=c.p+"img/7.9f4ab887.jpg"},aa67:function(e,t,c){e.exports=c.p+"img/food_icon.8c2a462a.jpg"},b65f:function(e,t,c){e.exports=c.p+"img/kimskitchen-logo.7a67cbd1.png"},bfa3:function(e,t,c){e.exports=c.p+"img/10.fde8abfb.jpg"},ce8b:function(e,t,c){var i={"./1.jpg":"3b95","./10.jpg":"bfa3","./11.jpg":"f940","./2.jpg":"0d15","./3.jpg":"4882","./4.jpg":"5a0d","./5.jpg":"4b8c","./6.jpg":"11c6","./7.jpg":"a795","./8.jpg":"53d2","./9.jpg":"d890"};function n(e){var t=r(e);return c(t)}function r(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="ce8b"},d890:function(e,t,c){e.exports=c.p+"img/9.32c89745.jpg"},de14:function(e,t,c){"use strict";c("3eb8")},e700:function(e,t,c){"use strict";c("60b5")},f940:function(e,t,c){e.exports=c.p+"img/11.e035801e.jpg"}});
//# sourceMappingURL=app.0fb3f3db.js.map