(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1188:function(e,t,a){"use strict";a.r(t);var n=a(26),s=a(27),c=a(29),r=a(28),o=a(30),i=a(0),l=a.n(i),u=a(36),m=a(34),p=a(566),d=a(129),h=a(262),b=a(37),y=a(13),v=a(10),f=a.n(v),E=a(716),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={errClass:"hidden",errMsg:""},a.hideError=a.hideError.bind(Object(y.a)(Object(y.a)(a))),a.updateReadStatus=a.updateReadStatus.bind(Object(y.a)(Object(y.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"hideError",value:function(e){e.preventDefault(),this.setState({errClass:"hidden",errMsg:""})}},{key:"updateReadStatus",value:function(e,t){var a=[];f.a.map(this.props.policyDocuments.data,function(e,t){0!==e.read&&a.push(e.name)}),a.push(e.name),this.props.onUpdateReadStatus(a)}},{key:"render",value:function(){var e=this,t=f.a.map(this.props.policyDocuments.data,function(t,a){var n=t.name.replace(/ /g,""),s=t.read?" is-read-document":" is-not-read-document";return l.a.createElement("div",{key:a,id:n,className:"m-y-sm policyDocumentsList clear"+s},l.a.createElement("h5",null,t.name),l.a.createElement("a",{href:t.link,target:"_blank",onClick:function(){return e.updateReadStatus(t)}},t.link))});return l.a.createElement("div",{className:"app-body",id:"view"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(E.a,{className:this.state.errClass,message:this.state.errMsg,onClick:this.hideError})),l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"policyDocumentsList m-t-md clear"},l.a.createElement("h4",null,"Policy Documents List"),l.a.createElement("small",{className:"text-danger"},l.a.createElement("i",null,"(Please read & accept all the policy documents to get access to this site. Incase of issues contact HR)"))),t))}}]),t}(l.a.Component),j=a(4),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).props.isAlreadyLogin(),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.requestUserPolicyDocument()}},{key:"componentWillReceiveProps",value:function(e){var t=Object(b.e)(this.props.location.pathname,e.loggedUser);t.status&&"/policy_documents"!==t.redirectTo&&this.props.history.push(t.redirectTo)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,this.props),l.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},l.a.createElement(h.a,{pageTitle:"Policy Documents",showLoading:this.props.policyDocuments.isLoading}),l.a.createElement(g,{policyDocuments:this.props.policyDocuments,onUpdateReadStatus:this.props.requestUpdateReadStatus})))}}]),t}(l.a.Component);t.default=Object(p.a)(Object(u.b)(function(e){return{loggedUser:e.logged_user.userLogin,policyDocuments:e.policyDocuments.policyDocument}},function(e){return Object(m.b)(j,e)})(O))},716:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){var t=e.message,a=e.style,n=e.className,c=e.onClick,r="alert "+(n||"hidden");return s.a.createElement("div",{className:r,style:a},s.a.createElement("a",{href:"#",className:"close",onClick:c,"aria-label":"close"},"\xd7"),s.a.createElement("span",null,t))}}}]);
//# sourceMappingURL=44.de8bcf64.chunk.js.map