(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{120:function(e){e.exports=JSON.parse('{"nothing":"tidak ada yang personal di sini"}')},121:function(e){e.exports=JSON.parse('{"nothing":"nothing personal here"}')},132:function(e,t,n){e.exports=n(229)},137:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),i=n.n(o),c=(n(137),n(128)),u=n(231),s=n(8),l=function(e){var t=Object(s.c)((function(e){return e})).sort((function(e,t){return e.id<t.id?-1:Number(e.id>t.id)}));return r.a.createElement("div",null,r.a.createElement(u.default.Group,{defaultValue:"EN",size:"large"},t.map((function(t){return r.a.createElement(u.default.Button,{key:t.id,value:t.id.toUpperCase(),onChange:function(){return e.handleChange(t.id)}},t.id.toUpperCase())}))))},p=n(57),d=n(84),g=n(120),h={en:{translation:n(121)},id:{translation:g}};d.a.use(p.a).init({resources:h,lng:"en"});var f=d.a,m=Object(p.b)()((function(e){var t=e.t;return Object(s.c)((function(e){return e})).forEach((function(e){f.addResources(e.id,"translation",JSON.parse(e.description))})),r.a.createElement("div",null,t("nothing"))})),b=n(232),v=n(233),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANG":return t.lang;case"INIT_LANGS":return t.data;default:return e}},y=n(79),x=n.n(y),N=n(122),O=n(123),w=n.n(O),j=[{id:"en",description:'{"nothing":"nothing personal here","something":"something personal here"}'}],k={getAll:function(){var e=Object(N.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat("https://morning-ocean-73257.herokuapp.com","/v1/something"),{timeout:1e4});case 3:return t=e.sent,e.abrupt("return",t.data.somethings);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",j);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},C=n(124),A=function(){var e=Object(s.b)();r.a.useEffect((function(){k.getAll().then((function(t){return e(function(e){return{type:"INIT_LANGS",data:e}}(t))}))}),[e]);var t=Object(s.c)((function(e){return e})),n=Object(C.useMediaQuery)({query:"(min-width: 1000px)"})?{padding:"10% 50% 10% 10%",backgroundColor:"white"}:{backgroundColor:"white"};return r.a.createElement(c.a,{basename:"/"},r.a.createElement(b.a,{className:"layout",style:n},r.a.createElement(v.a,{tip:"loading...",spinning:t.length<=0},r.a.createElement(b.a.Header,{style:{textAlign:"right"}},r.a.createElement(l,{handleChange:function(e){f.changeLanguage(e)}})),r.a.createElement(b.a.Content,{style:{padding:"50px 50px 50px 50px",backgroundColor:"#f5f5f5"}},r.a.createElement("div",{style:{textAlign:"center"},className:"site-layout-content"},r.a.createElement(m,null))))))},S=n(39),I=n(127),J=Object(S.createStore)(E,Object(I.composeWithDevTools)());n(228);i.a.render(r.a.createElement(s.a,{store:J},r.a.createElement(A,null)),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.0c6b1a8c.chunk.js.map