(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ce5c6a"],{"1dad":function(t,e,n){"use strict";n("438f")},"438f":function(t,e,n){},"8fdc":function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("7a23"),r=Object(o["F"])("data-v-189f0e71");Object(o["s"])("data-v-189f0e71");var a={id:"account-page"},c={key:0},i={id:"favorites"},u=Object(o["g"])("strong",null,"Your Favorites",-1),s={key:0},d={key:1,id:"loginForm"},l=Object(o["g"])("h2",null,"Login",-1),b=Object(o["f"])(" Email: "),f=Object(o["f"])(" Password: "),j={key:0};Object(o["q"])();var p=r((function(t,e,n,r,p,O){return Object(o["p"])(),Object(o["d"])("div",a,[O.user?(Object(o["p"])(),Object(o["d"])("div",c,[Object(o["g"])("h2",null,"Hi, "+Object(o["y"])(O.user.name)+"!",1),Object(o["g"])("div",i,[u,p.favorites&&0==p.favorites.length?(Object(o["p"])(),Object(o["d"])("p",s," No favorites yet. ")):Object(o["e"])("",!0),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(p.favorites,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:e},Object(o["y"])(t.name),1)})),128))]),Object(o["g"])("button",{onClick:e[1]||(e[1]=function(){return O.logout&&O.logout.apply(O,arguments)})},"Logout")])):(Object(o["p"])(),Object(o["d"])("div",d,[l,Object(o["g"])("div",null,[Object(o["g"])("label",null,[b,Object(o["E"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return p.data.email=t})},null,512),[[o["A"],p.data.email]])])]),Object(o["g"])("div",null,[Object(o["g"])("label",null,[f,Object(o["E"])(Object(o["g"])("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=function(t){return p.data.password=t})},null,512),[[o["A"],p.data.password]])])]),Object(o["g"])("button",{onClick:e[4]||(e[4]=function(){return O.login&&O.login.apply(O,arguments)})},"Login"),p.errors?(Object(o["p"])(),Object(o["d"])("ul",j,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(p.errors,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{class:"error",key:e},Object(o["y"])(t),1)})),128))])):Object(o["e"])("",!0)]))])})),O=(n("d81d"),n("0091")),g={data:function(){return{data:{email:"jill@harvard.edu",password:"asdfasdf"},errors:null,favorites:[]}},computed:{user:function(){return this.$store.state.user},products:function(){return this.$store.state.products}},methods:{loadFavorites:function(){var t=this;this.user&&O["a"].get("favorite/query?user_id="+this.user.id).then((function(e){t.favorites=e.data.favorite.map((function(e){return t.$store.getters.getProductById(e.product_id)}))}))},login:function(){var t=this;O["a"].post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},logout:function(){var t=this;O["a"].post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))}},watch:{user:function(){this.loadFavorites()}},mounted:function(){this.loadFavorites()}};n("1dad");g.render=p,g.__scopeId="data-v-189f0e71";e["default"]=g},b0c0:function(t,e,n){var o=n("83ab"),r=n("9bf2").f,a=Function.prototype,c=a.toString,i=/^\s*function ([^ (]*)/,u="name";o&&!(u in a)&&r(a,u,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},d81d:function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),c=a("map");o({target:"Array",proto:!0,forced:!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-15ce5c6a.17dc007b.js.map