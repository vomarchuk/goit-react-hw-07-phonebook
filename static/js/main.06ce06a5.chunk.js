(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={title:"App_title__1YcTA"}},14:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn__delete:"ContactList_btn__delete__2u4p9"}},19:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK"}},20:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},30:function(t,e,n){t.exports={container:"Container_container__3RIox"}},31:function(t,e,n){t.exports={input:"Input_input__3PNbO"}},32:function(t,e,n){t.exports={label:"Label_label__2bY5z"}},38:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(0),u=n.n(o),i=n(9),s=n.n(i),b=(n(38),n(6)),l=n(10),j=function(t){return t.contacts.items},d=function(t){return j(t).length},f=Object(l.a)([j,function(t){return t.contacts.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),O=n(2),m=Object(O.b)("contacts/addContactsRequest"),h=Object(O.b)("contacts/addContactsSuccess"),p=Object(O.b)("contacts/addContactsError"),_=Object(O.b)("contacts/removeContactRequest"),x=Object(O.b)("contacts/removeContactSuccess"),v=Object(O.b)("contacts/removeContactError"),C=Object(O.b)("contacts/getContactsRequest"),g=Object(O.b)("contacts/getContactsSuccess"),y=Object(O.b)("contacts/getContactsError"),N=Object(O.b)("contacts/filter"),k=n(12),w=n.n(k),A="http://localhost:4040",L=n(13),F=n.n(L),S=n(30),z=n.n(S),Z=n(1),E=function(t){var e=t.children;return Object(Z.jsx)("div",{className:z.a.container,children:e})},q=n(21),D=n(65),R=n(19),T=n.n(R),I=n(31),J=n.n(I),M=function(t){var e=t.id,n=t.type,c=t.name,a=t.value,r=t.handleChange,o=t.options;return Object(Z.jsx)("input",{className:J.a.input,id:e,type:n,name:c,value:a,onChange:function(t){r(t)},pattern:o.pattern,title:o.title,required:!0})},P=n(32),Y=n.n(P),B=function(t){var e=t.id,n=t.title,c=t.children;return Object(Z.jsxs)("label",{className:Y.a.label,htmlFor:e,children:[n,c]})},K={name:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},number:{pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}},G=function(){var t=Object(o.useState)(""),e=Object(q.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(""),r=Object(q.a)(a,2),u=r[0],i=r[1],s=Object(D.a)(),l=Object(D.a)(),d=Object(b.c)(j),f=Object(b.b)(),O=function(){return f(function(t,e){return function(n){var c={name:t,number:e};n(m()),w.a.post("".concat(A,"/contacts"),c).then((function(t){var e=t.data;return n(h(e))})).catch((function(t){return n(p(t))}))}}(n,u))},_=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}},x=function(){c(""),i("")};return Object(Z.jsxs)("form",{className:T.a.form,onSubmit:function(t){var e;t.preventDefault();var c=function(t){return d.find((function(e){return e.name===t}))};if(null!==(e=!c(n))&&void 0!==e?e:void 0!==c(n))return O(),void x();alert("".concat(n," is already in contacts"))},autoComplete:"off",children:[Object(Z.jsx)(B,{id:s,title:"Name",children:Object(Z.jsx)(M,{id:s,type:"text",name:"name",value:n,handleChange:_,options:K.name})}),Object(Z.jsx)(B,{id:l,title:"Number",children:Object(Z.jsx)(M,{id:l,type:"tel",name:"number",value:u,handleChange:_,options:K.number})}),Object(Z.jsx)("button",{className:T.a.button,type:"submit",children:"add Contact"})]})},V=n(14),$=n.n(V),H=function(){var t=Object(b.c)(f),e=Object(b.b)();return Object(Z.jsx)("ul",{className:$.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(Z.jsxs)("li",{className:$.a.item,children:[c,": ",a,Object(Z.jsx)("button",{className:$.a.btn__delete,type:"button",onClick:function(){return e(function(t){return function(e){e(_),w.a.delete("".concat(A,"/contacts/").concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(v(t))}))}}(n))},children:"Delete"})]},n)}))})},Q=n(20),U=n.n(Q),W=function(t){var e=t.value,n=Object(b.b)();return Object(Z.jsxs)("label",{className:U.a.label,children:["Find contacts by name",Object(Z.jsx)("input",{className:U.a.input,type:"text",value:e,onChange:function(t){return n(N(t.target.value))}})]})},X=function(){var t=Object(b.c)(d),e=Object(b.b)();return Object(o.useEffect)((function(){return e((function(t){t(C()),w.a.get("".concat(A,"/contacts")).then((function(e){var n=e.data;return t(g(n))})).catch((function(e){return t(y(e))}))}))}),[e]),Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(E,{children:[Object(Z.jsx)("h1",{className:F.a.title,children:"Phonebook"}),Object(Z.jsx)(G,{})]}),t>0?Object(Z.jsxs)(E,{children:[Object(Z.jsx)("h2",{className:F.a.title,children:"Contacts"}),Object(Z.jsx)(W,{}),Object(Z.jsx)(H,{})]}):Object(Z.jsx)(E,{children:Object(Z.jsx)("h2",{className:F.a.title,children:"Phone book is empty"})})]})},tt=n(7),et=n(3),nt=n(33),ct=n(4),at=Object(O.c)([],(c={},Object(et.a)(c,g,(function(t,e){return e.payload})),Object(et.a)(c,h,(function(t,e){var n=e.payload;return[].concat(Object(nt.a)(t),[n])})),Object(et.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),rt=Object(O.c)(!1,(a={},Object(et.a)(a,m,(function(){return!0})),Object(et.a)(a,h,(function(){return!1})),Object(et.a)(a,p,(function(){return!1})),Object(et.a)(a,_,(function(){return!0})),Object(et.a)(a,x,(function(){return!1})),Object(et.a)(a,v,(function(){return!1})),Object(et.a)(a,C,(function(){return!0})),Object(et.a)(a,g,(function(){return!1})),Object(et.a)(a,y,(function(){return!1})),a)),ot=Object(O.c)(null,(r={},Object(et.a)(r,p,(function(t,e){return e.payload})),Object(et.a)(r,m,(function(){return null})),Object(et.a)(r,v,(function(t,e){return e.payload})),Object(et.a)(r,_,(function(){return null})),Object(et.a)(r,y,(function(t,e){return e.payload})),Object(et.a)(r,C,(function(){return null})),r)),ut=Object(O.c)("",Object(et.a)({},N,(function(t,e){return e.payload}))),it=Object(ct.b)({items:at,filter:ut,isLoading:rt,error:ot}),st=Object(O.a)({reducer:{contacts:it},middleware:Object(O.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}}),devTools:!1});s.a.render(Object(Z.jsx)(u.a.StrictMode,{children:Object(Z.jsx)(b.a,{store:st,children:Object(Z.jsx)(X,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.06ce06a5.chunk.js.map