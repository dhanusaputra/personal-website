(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{116:function(e){e.exports=JSON.parse('{"nothing":"tidak ada yang personal di sini"}')},117:function(e){e.exports=JSON.parse('{"nothing":"nothing personal here"}')},126:function(e,t,n){e.exports=n(215)},131:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),c=n.n(o),u=(n(131),n(122)),i=n(217),l=function(e){return r.a.createElement("div",null,r.a.createElement(i.default.Group,{defaultValue:"ID",size:"large"},r.a.createElement(i.default.Button,{value:"ID",onChange:function(){return e.handleChange("id")}},"ID"),r.a.createElement(i.default.Button,{value:"EN",onChange:function(){return e.handleChange("en")}},"EN")))},s=n(56),p=n(30),d=n(83),f=n(116),g={en:{translation:n(117)},id:{translation:f}};d.a.use(s.a).init({resources:g,lng:"id"});var h=d.a,m=Object(s.b)()((function(e){var t=e.t;return Object(p.c)((function(e){return e})).forEach((function(e){h.addResources(e.id,"translation",JSON.parse(e.description))})),r.a.createElement("div",null,t("something"))})),E=n(218),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANG":return t.lang;case"INIT_LANGS":return t.data;default:return e}},b=n(78),x=n.n(b),N=n(118),y=n(119),O=n.n(y),w={getAll:function(){var e=Object(N.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://morning-ocean-73257.herokuapp.com","/v1/something"));case 2:return t=e.sent,e.abrupt("return",t.data.somethings);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},C=function(){var e=Object(p.b)();r.a.useEffect((function(){w.getAll().then((function(t){return e(function(e){return{type:"INIT_LANGS",data:e}}(t))}))}),[e]);return r.a.createElement(u.a,{basename:"/"},r.a.createElement(E.a,{className:"layout",style:{padding:"100px 650px 100px 150px",backgroundColor:"white"}},r.a.createElement(E.a.Header,{style:{textAlign:"right"}},r.a.createElement(l,{handleChange:function(e){h.changeLanguage(e)}})),r.a.createElement(E.a.Content,{style:{padding:"50px 50px 50px 50px",backgroundColor:"#f5f5f5"}},r.a.createElement("div",{style:{textAlign:"center"},className:"site-layout-content"},r.a.createElement(m,null)))))},I=n(38),k=n(121),A=Object(I.createStore)(v,Object(k.composeWithDevTools)());n(214);c.a.render(r.a.createElement(p.a,{store:A},r.a.createElement(C,null)),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.031c99b8.chunk.js.map