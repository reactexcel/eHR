(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1176:function(e,t,a){"use strict";a.r(t);var n=a(26),o=a(27),r=a(29),c=a(28),l=a(30),s=a(0),i=a.n(s),u=a(36),m=a(566),p=a(129),d=a(37),f=a(262),h=a(13),b=a(24),v=a(45),g=a(10),y=a.n(g),E=function(e){var t=e.myDocuments,a=e.deleteDocument,n=y.a.map(t,function(e,t){return i.a.createElement("li",{key:t,className:"list-group-item"},i.a.createElement("div",{className:"clear"},i.a.createElement("h5",null,e.document_type,i.a.createElement("span",{className:"glyphicon glyphicon-remove-circle pull-right pointer",onClick:function(){a(e.id)}})),"undefined"===typeof e.link_1?"":i.a.createElement("div",{className:"col-xs-12",dangerouslySetInnerHTML:{__html:e.link_1}})))});return y.a.isEmpty(n)&&(n=i.a.createElement("li",{className:"list-group-item text-center"},i.a.createElement("span",null,"No document uploaded"))),i.a.createElement("div",{className:"col-sm-6 p-x-md"},i.a.createElement("h6",{className:"text-center"},"Uploaded Documents"),i.a.createElement("ul",{className:"list-group m-b thumbnail"},n))},O=a(609),j=a(130),D=a.n(j),N=a(131),U=a.n(N),_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a.state={document_type:"",token:"",file:[],user_id:a.props.user_id,page_url:window.location.href},a.deleteDocument=a.deleteDocument.bind(Object(h.a)(Object(h.a)(a))),a.callUpdateDocuments=a.callUpdateDocuments.bind(Object(h.a)(Object(h.a)(a))),a.handleFileChange=a.handleFileChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:Object(d.c)()})}},{key:"handleFileChange",value:function(e){var t=this;this.setState({file:Array.from(e.target.files)});var a=this.refs.file.files[0],n=new FileReader;n.onloadend=function(){t.setState({imageUrl:n.result})},a?(n.readAsDataURL(a),this.setState({imageUrl:n.result})):this.setState({imageUrl:""})}},{key:"callUpdateDocuments",value:function(e){var t=this.state.document_type,a=this.refs.file.value,n=(this.state.file[0],!1);""===t?(n=!0,Object(v.b)("Warning!","Please select document type.","warning")):""===a?(n=!0,Object(v.b)("Warning!","Please select a file","warning")):!0!==this.refs.declear.checked&&(n=!0,Object(v.b)("Warning!","Mark declearation before submit","warning")),n&&e.preventDefault()}},{key:"deleteDocument",value:function(e){var t=this;this.props.onDeleteDocument(e).then(function(e){t.props.onGetMydocuments(),Object(v.b)("Success!",e.toString(),"success")}).catch(function(e){Object(v.b)("Error!",e.toString(),"error")})}},{key:"render",value:function(){var e=this,t=[i.a.createElement(U.a,{label:"Close",primary:!0,onClick:this.handleClose})];return i.a.createElement("div",{className:"row p-t-md"},i.a.createElement("div",{className:"col-sm-6 p-x-md"},i.a.createElement("h6",{id:"uploadMyDoc",className:"text-center pointer in"},"Upload New Documents"),i.a.createElement("div",{className:"row box p-a-md m-b-lg ",id:"uploadDoc"},i.a.createElement("form",{action:b.a.upload_url,method:"POST",encType:"multipart/form-data"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"col-sm-12"},"Document Type"),i.a.createElement("select",{className:"form-control",ref:"document_type",onChange:function(){e.setState({document_type:e.refs.document_type.value,file:[]}),e.refs.file.value=""},value:this.state.document_type},i.a.createElement("option",{value:""},"--- Select Doc Type ---"),i.a.createElement("option",{value:"CV"},"CV"),i.a.createElement("option",{value:"PAN Card"},"PAN Card"),i.a.createElement("option",{value:"Address Proof"},"Address Proof"),i.a.createElement("option",{value:"Photo"},"Photo"),i.a.createElement("option",{value:"Offer Letter"},"Offer Letter"),i.a.createElement("option",{value:"Appointment Letter"},"Appointment Letter"),i.a.createElement("option",{value:"Previous Company Experience Letter"},"Previous Company Experience Letter"),i.a.createElement("option",{value:"Previous Company Offer Letter"},"Previous Company Offer Letter"),i.a.createElement("option",{value:"Previous Company Salary Slip"},"Previous Company Salary Slip"),i.a.createElement("option",{value:"Previous Company Other Documents"},"Previous Company Other Documents"),i.a.createElement("option",{value:"Qualification Certificate"},"Qualification Certificate"),i.a.createElement("option",{value:"Other Documents"},"Other Documents"))),i.a.createElement("input",{type:"hidden",name:"document_type",value:this.state.document_type}),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"col-sm-12"},"Attachment "),i.a.createElement("input",{type:"file",className:"form-control",ref:"file",name:"link_1",multiple:"multiple",onChange:this.handleFileChange})),i.a.createElement("div",{className:"form-group col-sm-12"},i.a.createElement("input",{type:"checkbox",ref:"declear",className:"vertical-middle"}),i.a.createElement("span",{className:"declaration"},i.a.createElement("b",null,"*IMPORTANT: "),"\xa0By uploading this document you certify that these document are true and all information is correct")),i.a.createElement("div",{className:"form-group"},this.state.file[0]?i.a.createElement("div",null,i.a.createElement("label",{className:"col-xs-12"},"Image Preview "),i.a.createElement("img",{src:this.state.imageUrl,onClick:function(){e.handleOpen()},className:"small"}),i.a.createElement("br",null)):null,i.a.createElement(D.a,{actions:t,modal:!1,open:this.state.open,onRequestClose:this.handleClose,autoScrollBodyContent:!0},i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{src:this.state.imageUrl})))),i.a.createElement("div",{className:"form-group col-sm-12"},i.a.createElement(O.a,{callUpdateDocuments:this.callUpdateDocuments,url:b.a.upload_url,params:this.state,file:this.state.file[0],fileName:"link_1"}))))),i.a.createElement(E,{myDocuments:this.props.my_documents,deleteDocument:this.deleteDocument}))}}]),t}(i.a.Component),S=a(4),C=a(583),P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).props.onIsAlreadyLogin(),a.state={my_document:[],message:""},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.onGetMydocuments()}},{key:"componentWillReceiveProps",value:function(e){window.scrollTo(0,0);var t=Object(d.e)(this.props.location.pathname,e.loggedUser);t.status&&this.props.history.push(t.redirectTo),this.setState({my_document:e.myDocuments.my_document,message:e.myDocuments.status_message})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.a,this.props),i.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},i.a.createElement(f.a,Object.assign({pageTitle:"My Document"},this.props)),i.a.createElement("div",{className:"app-body",id:"view"},i.a.createElement("div",{className:"padding"},i.a.createElement(_,Object.assign({my_documents:this.state.my_document,user_id:this.props.loggedUser.data.id,callUpdateDocuments:this.props.onUpdatedocuments},this.props))))))}}]),t}(i.a.Component);var k=Object(u.b)(function(e){return{frontend:e.frontend.toJS(),loggedUser:e.logged_user.userLogin,myProfile:e.myProfile.toJS(),myDocuments:e.myDocument.toJS()}},function(e){return{onIsAlreadyLogin:function(){return e(S.isAlreadyLogin())},onGetMydocuments:function(){return e(C.b())},onDeleteDocument:function(t){return e(C.a(t))}}})(P),w=Object(m.a)(k);t.default=w},583:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return i});var n=a(5),o=(a(24),a(12)),r=a(33),c=a(1);function l(e){return Object(n.a)(c.O)(e)}function s(){return function(e,t){return new Promise(function(t,a){e(Object(r.b)()),Object(o.b)("POST","",{action:"get_user_document"}).then(function(t){var a;e(Object(r.a)()),0===t.error?e((a=t.data,Object(n.a)(c.jc)(a))):e(l(t.data.message))},function(t){e(Object(r.a)()),e(l("error occurs!!!"))})})}}function i(e){return function(t,a){return new Promise(function(a,n){t(Object(r.b)()),function(e){return Object(o.b)("POST","",{action:"delete_user_document",id:e})}(e).then(function(e){t(Object(r.a)()),0===e.error?a(e.data.message):n(e.data.message)},function(e){t(Object(r.a)()),n("error occurs!!")})})}}},609:function(e,t,a){"use strict";var n=a(26),o=a(27),r=a(29),c=a(28),l=a(30),s=a(13),i=a(0),u=a.n(i),m=a(635),p=a(45),d=a(36),f=a(178),h=a(181),b=a.n(h),v=a(105),g=a.n(v),y=a(580),E=a(12),O=(a(33),a(583)),j=(a(637),function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).state={loading:!1},e.handleSubmit=e.handleSubmit.bind(Object(s.a)(Object(s.a)(e))),e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.props.params,n=this.props.file,o=this.props.fileName,r=this.props.url;if(n)if(n.type.includes("image")){this.setState({loading:!0});var c=Object(f.b)(n);(new m.a).compress(n,{quality:c}).then(function(e){var n=new FormData;for(var c in a)n.append(c,a[c]);n.delete("imageUrl"),n.append(o,e,e.name),n.append("submit","Upload"),b.a.post(r,n).then(function(e){if(Object(p.b)("Success !","File uploaded successfully","success"),t.setState({loading:!1}),"Admin"===t.props.loggedUser.data.role)t.props.onFetchDevice(),t.props.onFetchUnapprovedUser(),t.props.onGetMyDocuments();else{if("HR"===t.props.loggedUser.data.role)return;t.props.onGetMyDocuments()}}).catch(function(e){413===e.request.status?(Object(p.b)("Error","File too large to upload","error"),t.setState({loading:!1})):(Object(p.b)("Error",e.request.statusText,"error"),t.setState({loading:!1}))})})}else{var l=new FormData,s=this.props.loggedUser.data.role;for(var i in a)l.append(i,a[i]);l.delete("imageUrl"),l.append(o,n),l.append("submit","Upload"),this.props.onUploadFile(l,r,s)}}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.props.loading||this.state.loading?u.a.createElement(g.a,{size:30,thickness:3,style:{marginLeft:"50%"}}):u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{type:"submit",name:"submit",value:"Upload",className:"col-xs-12 md-btn md-raised indigo",onClick:function(t){return e.props.callUpdateDocuments(t)}})))}}]),t}(i.Component));t.a=Object(d.b)(function(e){return{loading:e.uploadImage.loading,loggedUser:e.logged_user.userLogin}},function(e){return{onFetchDevice:function(){return e(y.p())},onUploadFile:function(){return e(function(e){e({type:"UPLOADING_FILE"}),Object(E.c)(t,a).then(function(t){if(e({type:"UPLOAD_FILE",payload:t}),Object(p.b)("Success !","File uploaded successfully","success"),"Admin"===n)e(y.p()),e(y.s()),e(O.b());else{if("HR"===n)return;e(O.b())}}).catch(function(t){e({type:"UPLOAD_FILE",payload:!1}),Object(p.b)("Error",t,"error")})});var t,a,n},onFetchUnapprovedUser:function(){return e(y.s())},onGetMyDocuments:function(){return e(O.b())}}})(j)}}]);
//# sourceMappingURL=42.5572ef9e.chunk.js.map