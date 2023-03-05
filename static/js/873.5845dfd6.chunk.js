"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[873],{873:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,o,s,d,p,c,l,u,x,m=t(439),h=t(791),f=t(168),b=t(444),g=b.ZP.form(r||(r=(0,f.Z)(["\n  width: 350px;\n  padding: 10px;\n  margin-left: 5px;\n"]))),Z=b.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),j=b.ZP.span(i||(i=(0,f.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n  display: flex;\n  font-style: italic;\n"]))),v=b.ZP.input(o||(o=(0,f.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n  padding: 5px;\n"]))),y=b.ZP.button(s||(s=(0,f.Z)(["\n  background-color: #b6ad90;\n  border-radius: 10px;\n  cursor: pointer;\n  padding: 10px 10px;\n"]))),P=t(434),k=t(792),z=t(286),w=t(184),C=function(){var n=(0,P.I0)(),e=(0,P.v9)(z.V2),t=(0,h.useState)(""),r=(0,m.Z)(t,2),a=r[0],i=r[1],o=(0,h.useState)(""),s=(0,m.Z)(o,2),d=s[0],p=s[1],c=function(){i(""),p("")};return(0,w.jsxs)(g,{onSubmit:function(t){t.preventDefault();var r={name:a,number:d};e.some((function(n){return n.name===r.name}))?alert("".concat(r.name," is already in contacts!")):(n((0,k.X5)(r)),c())},children:[(0,w.jsxs)(Z,{children:[(0,w.jsx)(j,{children:"Name"}),(0,w.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){i(n.target.value)},value:a}),(0,w.jsx)(j,{children:"Number"}),(0,w.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(n){p(n.target.value)}})]}),(0,w.jsx)(y,{type:"submit",children:"Add contact"})]})},_=b.ZP.p(d||(d=(0,f.Z)(["\n  font-size: 14px;\n"]))),A=b.ZP.li(p||(p=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  margin-left: 10px;\n"]))),D=b.ZP.button(c||(c=(0,f.Z)(["\n  font-size: 14px;\n  border: 1px solid silver;\n  border-radius: 10px;\n  cursor: pointer;\n  padding: 5px 10px;\n  margin-left: 20px;\n"]))),F=b.ZP.span(l||(l=(0,f.Z)(["\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: black;\n  margin-right: 10px;\n  margin-left: 20px;\n"])));function I(){var n=(0,P.I0)(),e=(0,P.v9)(z.vp);(0,h.useEffect)((function(){n((0,k.bJ)())}),[n]);return(0,w.jsx)("ul",{children:e.map((function(e){var t=e.name,r=e.id,a=e.number;return(0,w.jsxs)(A,{children:[(0,w.jsx)(F,{}),(0,w.jsxs)(_,{children:[t,": ",a]}),(0,w.jsx)(D,{type:"button",onClick:function(){return function(e){n((0,k.io)(e))}(r)},children:"Delete"})]},r)}))})}var N=b.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n"]))),S=b.ZP.input(x||(x=(0,f.Z)(["\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  padding: 5px;\n  width: 300px;\n"]))),q=t(467);function J(){var n=(0,P.I0)(),e=(0,P.v9)(z.AD);return(0,w.jsxs)("div",{children:[(0,w.jsx)(N,{children:"Find contacts by name:"}),(0,w.jsx)(S,{type:"text",name:"filterTerm",value:e,onChange:function(e){n((0,q.x)(e.target.value))}})]})}var B=function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(C,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(J,{}),(0,w.jsx)(I,{})]})})}}}]);
//# sourceMappingURL=873.5845dfd6.chunk.js.map