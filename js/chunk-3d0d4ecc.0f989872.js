(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0d4ecc"],{"057f":function(t,e,n){var r=n("c6b6"),o=n("fc6a"),i=n("241c").f,c=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return c(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?u(t):i(o(t))}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),o=n("23cb"),i=n("07fa"),c=n("8418"),a=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=i(t),s=o(e,r),f=o(void 0===n?r:n,r),d=a(u(f-s,0)),b=0;s<f;s++,b++)c(d,b,t[s]);return d.length=b,d}},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("2ba4"),a=n("c65b"),u=n("e330"),s=n("c430"),f=n("83ab"),d=n("4930"),b=n("d039"),l=n("1a2d"),p=n("e8b5"),v=n("1626"),h=n("861d"),y=n("3a9b"),m=n("d9b5"),g=n("825a"),O=n("7b0b"),j=n("fc6a"),w=n("a04b"),S=n("577e"),x=n("5c6c"),k=n("7c73"),P=n("df75"),N=n("241c"),$=n("057f"),E=n("7418"),C=n("06cf"),J=n("9bf2"),T=n("37e8"),I=n("d1e7"),F=n("f36a"),U=n("6eeb"),q=n("5692"),z=n("f772"),A=n("d012"),D=n("90e3"),M=n("b622"),Q=n("e538"),R=n("746f"),W=n("d44e"),_=n("69f3"),B=n("b727").forEach,G=z("hidden"),H="Symbol",K="prototype",L=M("toPrimitive"),V=_.set,X=_.getterFor(H),Y=Object[K],Z=o.Symbol,tt=Z&&Z[K],et=o.TypeError,nt=o.QObject,rt=i("JSON","stringify"),ot=C.f,it=J.f,ct=$.f,at=I.f,ut=u([].push),st=q("symbols"),ft=q("op-symbols"),dt=q("string-to-symbol-registry"),bt=q("symbol-to-string-registry"),lt=q("wks"),pt=!nt||!nt[K]||!nt[K].findChild,vt=f&&b((function(){return 7!=k(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=ot(Y,e);r&&delete Y[e],it(t,e,n),r&&t!==Y&&it(Y,e,r)}:it,ht=function(t,e){var n=st[t]=k(tt);return V(n,{type:H,tag:t,description:e}),f||(n.description=e),n},yt=function(t,e,n){t===Y&&yt(ft,e,n),g(t);var r=w(e);return g(n),l(st,r)?(n.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),n=k(n,{enumerable:x(0,!1)})):(l(t,G)||it(t,G,x(1,{})),t[G][r]=!0),vt(t,r,n)):it(t,r,n)},mt=function(t,e){g(t);var n=j(e),r=P(n).concat(St(n));return B(r,(function(e){f&&!a(Ot,n,e)||yt(t,e,n[e])})),t},gt=function(t,e){return void 0===e?k(t):mt(k(t),e)},Ot=function(t){var e=w(t),n=a(at,this,e);return!(this===Y&&l(st,e)&&!l(ft,e))&&(!(n||!l(this,e)||!l(st,e)||l(this,G)&&this[G][e])||n)},jt=function(t,e){var n=j(t),r=w(e);if(n!==Y||!l(st,r)||l(ft,r)){var o=ot(n,r);return!o||!l(st,r)||l(n,G)&&n[G][r]||(o.enumerable=!0),o}},wt=function(t){var e=ct(j(t)),n=[];return B(e,(function(t){l(st,t)||l(A,t)||ut(n,t)})),n},St=function(t){var e=t===Y,n=ct(e?ft:j(t)),r=[];return B(n,(function(t){!l(st,t)||e&&!l(Y,t)||ut(r,st[t])})),r};if(d||(Z=function(){if(y(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,e=D(t),n=function(t){this===Y&&a(n,ft,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),vt(this,e,x(1,t))};return f&&pt&&vt(Y,e,{configurable:!0,set:n}),ht(e,t)},tt=Z[K],U(tt,"toString",(function(){return X(this).tag})),U(Z,"withoutSetter",(function(t){return ht(D(t),t)})),I.f=Ot,J.f=yt,T.f=mt,C.f=jt,N.f=$.f=wt,E.f=St,Q.f=function(t){return ht(M(t),t)},f&&(it(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||U(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),B(P(lt),(function(t){R(t)})),r({target:H,stat:!0,forced:!d},{for:function(t){var e=S(t);if(l(dt,e))return dt[e];var n=Z(e);return dt[e]=n,bt[n]=e,n},keyFor:function(t){if(!m(t))throw et(t+" is not a symbol");if(l(bt,t))return bt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!f},{create:gt,defineProperty:yt,defineProperties:mt,getOwnPropertyDescriptor:jt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:St}),r({target:"Object",stat:!0,forced:b((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(O(t))}}),rt){var xt=!d||b((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,n){var r=F(arguments),o=e;if((h(e)||void 0!==t)&&!m(t))return p(e)||(e=function(t,e){if(v(o)&&(e=a(o,this,t,e)),!m(e))return e}),r[1]=e,c(rt,null,r)}})}if(!tt[L]){var kt=tt.valueOf;U(tt,L,(function(t){return a(kt,this)}))}W(Z,H),A[G]=!0},b727:function(t,e,n){var r=n("0366"),o=n("e330"),i=n("44ad"),c=n("7b0b"),a=n("07fa"),u=n("65f0"),s=o([].push),f=function(t){var e=1==t,n=2==t,o=3==t,f=4==t,d=6==t,b=7==t,l=5==t||d;return function(p,v,h,y){for(var m,g,O=c(p),j=i(O),w=r(v,h),S=a(j),x=0,k=y||u,P=e?k(p,S):n||b?k(p,0):void 0;S>x;x++)if((l||x in j)&&(m=j[x],g=w(m,x,O),t))if(e)P[x]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:s(P,m)}else switch(t){case 4:return!1;case 7:s(P,m)}return d?-1:o||f?f:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},c60b:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),o={class:"container"},i={class:"row justify-content-between mt-4 mb-7"},c={class:"col-md-7"},a={class:"mb-0"},u={class:"fw-bold"},s={class:"my-4"},f=["src","alt"],d={class:"col-md-4"},b=Object(r["f"])('<div class="input-group mb-3 border mt-3"><div class="input-group-prepend"><button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1"><i class="fas fa-minus"></i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2"><i class="fas fa-plus"></i></button></div></div>',1);function l(t,e,n,l,p,v){return Object(r["r"])(),Object(r["d"])("div",o,[Object(r["e"])("div",{style:Object(r["n"])([{"min-height":"400px","background-size":"cover","background-position":"center center"},{backgroundImage:"url(".concat(p.product.imageUrl,")")}])},null,4),Object(r["e"])("div",i,[Object(r["e"])("div",c,[Object(r["e"])("h2",a,Object(r["y"])(p.product.title),1),Object(r["e"])("p",u,"NT$ "+Object(r["y"])(p.product.price),1),Object(r["e"])("p",null,Object(r["y"])(p.product.description),1),Object(r["e"])("div",s,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(p.product.imagesUrl,(function(t){return Object(r["r"])(),Object(r["d"])("img",{key:t,src:t,alt:p.product.title,class:"img-fluid mt-4"},null,8,f)})),128))])]),Object(r["e"])("div",d,[b,Object(r["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(t){return v.addToCart(p.product.id)})}," 加入購物車 ")])])])}n("99af");var p=n("c6e3"),v={data:function(){return{product:[]}},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("jung","/product/").concat(this.id);this.$http.get(e).then((function(e){t.product=e.data.product}))},addToCart:function(){var t="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("jung","/cart"),e={product_id:this.id,qty:1};this.$http.post(t,{data:e}).then((function(t){console.log(t),p["a"].emit("get-cart")}))}},mounted:function(){this.id=this.$route.params.id,this.getProduct()}},h=n("6b0d"),y=n.n(h);const m=y()(v,[["render",l]]);e["default"]=m},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),c=n("e330"),a=n("1a2d"),u=n("1626"),s=n("3a9b"),f=n("577e"),d=n("9bf2").f,b=n("e893"),l=i.Symbol,p=l&&l.prototype;if(o&&u(l)&&(!("description"in p)||void 0!==l().description)){var v={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(p,this)?new l(t):void 0===t?l():l(t);return""===t&&(v[e]=!0),e};b(h,l),h.prototype=p,p.constructor=h;var y="Symbol(test)"==String(l("test")),m=c(p.toString),g=c(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=c("".replace),w=c("".slice);d(p,"description",{configurable:!0,get:function(){var t=g(this),e=m(t);if(a(v,t))return"";var n=y?w(e,7,-1):j(e,O,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-3d0d4ecc.0f989872.js.map