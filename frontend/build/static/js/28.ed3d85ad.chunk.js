(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1140:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},1178:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a(27),i=a(29),r=a(28),s=a(30),o=a(0),c=a.n(o),m=a(36),u=a(566),p=a(129),d=a(37),f=a(262),b=a(13),h=a(10),v=a.n(h),y=a(897),g=a.n(y),E=a(86),j=a.n(E),N=a(24),C=a(130),O=a.n(C),_=a(665),S=a.n(_),k=a(45),w=a(263),T=a.n(w),x=a(131),D=a.n(x),P=(a(264),a(132)),M=a.n(P),V=a(693),F=a.n(V),L=(a(628),a(61)),B=function(e){var t=e.data,a=e.onClick,n=e.onClear,l=function(e,t){a&&a(e,t)},i=[];return t&&Object(h.forEach)(t,function(e,t){i[t]=c.a.createElement("span",{key:t,className:"filter-label label label-info"},c.a.createElement("a",{className:"filter-remove",onClick:function(){return l(e,t)}},c.a.createElement("i",{className:"fa fa-times"})),c.a.createElement("span",{className:"option-name"},e.name))}),c.a.createElement("div",null,i,t.length>0&&n&&c.a.createElement("a",{onClick:function(){n&&n()},className:"filter-label label label-info clear-all",style:{backgroundColor:"#747474"}},"Clear ",c.a.createElement("span",{style:{textTransform:"lowercase"}},"all")))},I=a(41),R=a.n(I),A=a(1140),U=a(71),W=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).props.onIsAlreadyLogin(),a.state={usersList:[],openDialog:!1,templateId:"",templateName:"",templateSubject:"",templateBody:g.a.createEmptyValue(),errName:"",errSubject:"",pValue:[],openSendMailDialog:!1,recipient:[],cc:[],bcc:[],recipientType:"Recipient",openVarDialog:!1,openPreview:!1,sentMail:{},recipientEmailId:"",recipientNotFound:!1,emailValidationError:"",upload_file:[],uploadedPDF:[],LinearProgressBar:[],header:""},a.openCreateTemplate=a.openCreateTemplate.bind(Object(b.a)(Object(b.a)(a))),a.handleCloseDialog=a.handleCloseDialog.bind(Object(b.a)(Object(b.a)(a))),a.handleCloseDialog1=a.handleCloseDialog1.bind(Object(b.a)(Object(b.a)(a))),a.saveTemplate=a.saveTemplate.bind(Object(b.a)(Object(b.a)(a))),a.editTemplate=a.editTemplate.bind(Object(b.a)(Object(b.a)(a))),a.deleteTemplate=a.deleteTemplate.bind(Object(b.a)(Object(b.a)(a))),a.forwardTemplate=a.forwardTemplate.bind(Object(b.a)(Object(b.a)(a))),a.onClickLabel=a.onClickLabel.bind(Object(b.a)(Object(b.a)(a))),a.handleContentChange=a.handleContentChange.bind(Object(b.a)(Object(b.a)(a))),a.sendMail=a.sendMail.bind(Object(b.a)(Object(b.a)(a))),a.applyVariables=a.applyVariables.bind(Object(b.a)(Object(b.a)(a))),a.handleClose=a.handleClose.bind(Object(b.a)(Object(b.a)(a))),a.setVariable=a.setVariable.bind(Object(b.a)(Object(b.a)(a))),a.openMailPreview=a.openMailPreview.bind(Object(b.a)(Object(b.a)(a))),a.closeMailPreview=a.closeMailPreview.bind(Object(b.a)(Object(b.a)(a))),a.submitEmail=a.submitEmail.bind(Object(b.a)(Object(b.a)(a))),a.hideError=a.hideError.bind(Object(b.a)(Object(b.a)(a))),a.download_mail_preview=a.download_mail_preview.bind(Object(b.a)(Object(b.a)(a))),a.uploadPDF=a.uploadPDF.bind(Object(b.a)(Object(b.a)(a))),a.deleteAttachment=a.deleteAttachment.bind(Object(b.a)(Object(b.a)(a))),a.variables=[],a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){window.scrollTo(0,0),e.loggedUser.isLoggedIn?e.loggedUser.data.role==N.a.ADMIN||e.loggedUser.data.role==N.a.HR||this.props.history.push("/home"):this.props.history.push("/logout"),this.setState({usersList:e.employee.employee})}},{key:"saveTemplate",value:function(){var e=this,t=this.state.templateId.trim(),a=this.state.templateName.trim(),n=this.state.templateSubject.trim(),l=this.state.templateBody.toString("html"),i="",r="";v.a.isEmpty(a)&&(i="Name empty"),v.a.isEmpty(n)&&(r="Subject empty"),this.setState({errName:i,errSubject:r}),v.a.isEmpty(a)||v.a.isEmpty(n)||v.a.isEmpty(l)||this.props.onSaveTemplate(t,a,n,l).then(function(t){e.showError("mailsentsuccessfully",t),e.handleCloseDialog()}).catch(function(t){e.showError("previewalert",t)})}},{key:"editTemplate",value:function(e){this.setState({openDialog:!0,templateId:e.id,templateName:e.name,templateSubject:e.subject,templateBody:g.a.createValueFromString(e.body,"html")})}},{key:"deleteTemplate",value:function(e){var t=this;Object(k.a)("Are you sure ?","Do you want to delete this template","warning").then(function(a){a&&t.props.onDeleteTemplate(e.id).then(function(){}).catch(function(e){t.showError("previewalert",e)})})}},{key:"replaceVariablesWithValue",value:function(e,t,a){if(void 0!==a){if(a.indexOf("<p>")>-1){var n=a.split("\n").length;a=n>1?(a=a.replace(/<p/gim,"<div")).replace(/<\/p/gim,"</div"):a.replace(/(<p[^>]+?>|<p>|<\/p>)/gim,"")}var l;e.body.indexOf(t);for(l=0;l<=20&&-1!==e.body.indexOf(t);l++)e.body=v.a.replace(e.body,t,a);e.name=v.a.replace(e.name,t,a),e.subject=v.a.replace(e.subject,t,a)}return e}},{key:"applyVariables",value:function(e){var t=this,a="",n="";if(v.a.map(this.props.templates.templates,function(t,n){t.id===e&&(a=v.a.clone(t))}),this.state.recipient.length>0){var l=this.state.recipient[0].user_Id;n=v.a.find(this.state.usersList,function(e){return e.user_Id==l})}var i="DD-MM-YYYY",r=a.name.concat(" ",a.subject," ",a.body).match(/#[\w\/|-]*/g);null!==r&&r.length>0&&(r=v.a.uniq(r)).map(function(e,l){var r=!1;if(-1!==e.indexOf("|")){r=e;var s=e.split("|");e=s[0],i=s[1]}var o=v.a.find(t.props.templates.variable,function(t){return t.name==e});if("undefined"!==typeof o&&o.name===e){if("user"!==o.variable_type&&"#logo"!==o.name||(a=t.replaceVariablesWithValue(a,e,o.value)),v.a.includes(o.name,"#date")){var c=new Date;c=U(c).format(i),a=!1===r?t.replaceVariablesWithValue(a,e,c):t.replaceVariablesWithValue(a,r,c)}if("system"===o.variable_type&&!v.a.isEmpty(n)&&!v.a.includes(o.name,"#date")){var m;if("#joining_date"===o.name)m=n.dateofjoining,m=U(m).format(i);else if("#employee_title"===o.name)m=n.jobtitle;else if("#employee_name"===o.name)m=n.name;else if("#salary"===o.name)m=(m=n.salary_detail).toString();else if("#employee_user_name"===o.name)m=n.username;else if("#employee_email_id"===o.name)m=n.work_email;else if("#page_break"===o.name)m=o.value;else if("#employee_user_id"===o.name)m=n.user_Id;else if("#employee_number"===o.name)m=n.emergency_ph1;else if("#training_completion_date"===o.name){var u=new Date(n.training_completion_date);m="Invalid Date"!==u?U(u).format(i):"#training_completion_date"}else"#termination_date"==o.name&&(m="Invalid Date"!=(u=new Date(n.termination_date))?U(u).format(i):"#termination_date");a=!1===r?t.replaceVariablesWithValue(a,e,m):t.replaceVariablesWithValue(a,r,m)}}}),this.setState({templateName:a.name,templateSubject:a.subject,templateBody:g.a.createValueFromString(a.body,"html")})}},{key:"forwardTemplate",value:function(e){this.setState({openSendMailDialog:!0,templateId:e.id,templateName:e.name,templateSubject:e.subject,templateBody:g.a.createValueFromString(e.body,"html"),uploadedPDF:[],upload_file:[]}),this.applyVariables(e.id)}},{key:"openCreateTemplate",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1,templateId:"",templateName:"",templateSubject:"",templateBody:g.a.createEmptyValue(),errName:"",errSubject:"",openSendMailDialog:!1,recipient:[]})}},{key:"handleCloseDialog1",value:function(){this.setState({openDialog:!1,templateId:"",templateName:"",templateSubject:"",templateBody:g.a.createEmptyValue(),errName:"",errSubject:"",openSendMailDialog:!1,recipient:[],uploadedPDF:[]})}},{key:"toggleDialog",value:function(e,t){R()("#"+e).toggle(),R()("#"+t).toggle()}},{key:"filterList",value:function(e){var t=this.props.employee.employee,a=[];t.map(function(t){-1!==t.name.toLowerCase().indexOf(e)&&a.push(t)}),this.setState({usersList:a})}},{key:"selectUser",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.recipientType;if("Recipient"===a){var n=this.state.recipient;t?n[0]=e:v.a.pullAllBy(n,[e],"email"),this.setState({recipient:n}),this.applyVariables(this.state.templateId)}else if("CC"===a){var l=this.state.cc;t?l.push(e):v.a.pullAllBy(l,[e],"user_Id"),this.setState({cc:l})}else if("BCC"===a){var i=this.state.bcc;t?i.push(e):v.a.pullAllBy(i,[e],"user_Id"),this.setState({bcc:i})}}},{key:"submitEmail",value:function(e){e=e.trim(),v.a.isEmpty(e)?this.setState({emailValidationError:"Empty field"}):e.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(this.setState({emailValidationError:"",recipientEmailId:""}),this.selectUser({user_Id:"#",name:e,email:e},!0,this.state.recipientType)):this.setState({emailValidationError:"Not a valid email"})}},{key:"onClickLabel",value:function(e,t,a){this.selectUser(e,!1,a)}},{key:"download_mail_preview",value:function(e){var t=U().unix();this.props.onDownloadPdf(R()("#dialogContent").html(),"mail-preview").then(function(e){var a=document.createElement("a");a.href=N.a.pdf_url+e.message+"?"+t,a.target="_blank",document.body.appendChild(a),a.click()}).catch(function(e){})}},{key:"handleContentChange",value:function(e){this.setState({templateBody:e})}},{key:"closeMailPreview",value:function(){this.setState({openPreview:!1,sentMail:{}})}},{key:"showError",value:function(e,t){R()("#"+e+" span").remove(),R()("#"+e).fadeIn().append("<span>"+t+"<span>")}},{key:"hideError",value:function(e,t){e.preventDefault(),R()("#"+t).fadeOut(0),R()("#"+t+" span").remove()}},{key:"openMailPreview",value:function(){var e=this.state.recipient,t=this.state.templateName.trim(),a=this.state.templateSubject.trim(),n=this.state.templateBody.toString("html"),l=!0,i="";if(0===e.length&&(l=!1,i="Please select a recipient"),(l&&v.a.isEmpty(t)||v.a.isEmpty(a)||v.a.isEmpty(n))&&(l=!1,i="Please select a template"),l){var r=t.concat(" ",a," ",n).match(/#[\w-]+\|[\w -\.,@$%&*!%^\\\/]+\||#[\w-]+/gi),s=[];null!==r&&r.length>0&&(l=!1,i="Please put all variable's value",(r=v.a.uniq(r)).map(function(e){var t=e.indexOf("|")+1,a=e.indexOf("|",t),n=e.substring(t,a);s.push({name:e,value:n})}),this.setState({pValue:s,openVarDialog:!0}))}if(l){var o=v.a.map(this.state.cc,function(e){return[e.email,e.name]}),c=v.a.map(this.state.bcc,function(e){return[e.email,e.name]}),m=[{email_id:e[0].email,name:e[0].name,subject:a,body:n,cc_detail:o,bcc_detail:c}];this.setState({openPreview:!0,sentMail:{status:l,email:m}})}else this.showError("previewalert",i)}},{key:"sendMail",value:function(){var e=this;this.closeMailPreview();var t=this.state.sentMail,a=this.state.upload_file;t.email[0].upload_file=a,t.status&&this.props.onSendMail(t.email).then(function(){e.handleCloseDialog(),e.showError("mailsentsuccessfully","Mail sent successfully.")}).catch(function(){e.showError("previewalert","Mail not sent. try again")})}},{key:"handleClose",value:function(){this.setState({openVarDialog:!1,pValue:v.a.remove(this.state.pValue)})}},{key:"setVariable",value:function(){var e=this,t=this.state.pValue,a={name:this.state.templateName.trim(),subject:this.state.templateSubject.trim(),body:this.state.templateBody.toString("html")};v.a.map(t,function(t,n){"undefined"!==typeof t.value&&(a=e.replaceVariablesWithValue(a,t.name,t.value))}),this.setState({templateName:a.name,templateSubject:a.subject,templateBody:g.a.createValueFromString(a.body,"html"),pValue:null},function(){e.handleClose(),e.openMailPreview()})}},{key:"uploadPDF",value:function(e){var t=this,a=R()("#file_image").prop("files"),n=new A,l=[];for(var i in n.append("token",Object(d.c)()),a)n.append(i.toString(),a[i]);for(i=0;i<a.length;i++)l.push(c.a.createElement("div",{key:i,className:"row uploaded-pdf-block-style"},c.a.createElement("div",{className:"col-xs-7"},a[i].name),c.a.createElement("div",{className:"col-xs-5"},c.a.createElement(F.a,{mode:"indeterminate"}))));t.setState({LinearProgressBar:l}),R.a.ajax({url:N.a.upload_email_attachment,contentType:!1,processData:!1,data:n,type:"post",success:function(e){var a=JSON.parse(e),n=t.state.uploadedPDF,l=t.state.upload_file;n.length;if(0===a.error){var i=a.data;v.a.map(i,function(e,t){n.push(e.name),l.push(e.path)})}t.setState({uploadedPDF:n,upload_file:l,LinearProgressBar:[]})},error:function(e){}})}},{key:"deleteAttachment",value:function(e){var t=this.state.uploadedPDF,a=[],n=this.state.upload_file,l=[];v.a.map(t,function(i,r){e!=r&&(a.push(t[r]),l.push(n[r]))}),this.setState({uploadedPDF:a,upload_file:l})}},{key:"render",value:function(){var e=this,t=[];v.a.map(this.state.uploadedPDF,function(a,n){t.push(c.a.createElement("div",{key:n},a,c.a.createElement("i",{onClick:function(){return e.deleteAttachment(n)},className:"fa fa-remove uploaded-pdf-block-style cross-button-style"})))});var a=[c.a.createElement(D.a,{label:"Close",className:"m-r-5",primary:!0,onClick:this.handleCloseDialog}),c.a.createElement(M.a,{label:v.a.isEmpty(this.state.templateId)?"SAVE":"Update",primary:!0,onClick:this.saveTemplate})],n=[c.a.createElement(D.a,{label:"Close",primary:!0,onClick:this.handleCloseDialog}),c.a.createElement(M.a,{label:"Preview",primary:!0,onClick:this.openMailPreview})],l=[],i=this.state.recipientType,r=[];"Recipient"===i?r=this.state.recipient:"CC"===i?r=this.state.cc:"BCC"===i&&(r=this.state.bcc),v.a.map(this.state.usersList,function(t,a){var n=!1;v.a.filter(r,v.a.matches({user_Id:t.user_Id})).length>0&&(n=!0),l.push(c.a.createElement("li",{className:"mb-sm b-b p-t p-b",key:a},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"checkbox",id:"user",className:"check",checked:n,onChange:function(a){return e.selectUser({user_Id:t.user_Id,name:t.name,email:t.work_email},a.target.checked)}}),t.name)))});var s=[];return v.a.map(this.state.pValue,function(t,a){s.push(c.a.createElement("div",{className:"form-group",key:a},c.a.createElement("label",null,"Enter value for ",t.name," :"),c.a.createElement("input",{type:"text",className:"form-control",onChange:function(a){t.value=a.target.value,e.setState({pValue:e.state.pValue})},value:t.value})))}),c.a.createElement("div",{className:"app-body",id:"view",style:{marginTop:10}},c.a.createElement("div",{className:"col-xs-12 col-sm-12",style:{float:"right"}},c.a.createElement(O.a,{title:v.a.isEmpty(this.state.templateId)?"Create Template":"Edit Template",actions:a,modal:!1,bodyStyle:{minHeight:"70vh"},contentStyle:{maxWidth:"90%",width:"90%",transform:"translate(0px, 0px)"},open:this.state.openDialog,onRequestClose:this.handleCloseDialog,autoDetectWindowHeight:!0,autoScrollBodyContent:!0},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-sm-12"},c.a.createElement(L.a,this.props))),c.a.createElement("div",{className:"col-md-9 border-right-style"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(T.a,{ref:"value",floatingLabelText:"Name",floatingLabelFixed:!0,hintText:"Template Name",fullWidth:!0,errorText:this.state.errName,value:this.state.templateName,onChange:function(t){return e.setState({templateName:t.target.value})}})),c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(T.a,{ref:"Name",floatingLabelText:"Subject",floatingLabelFixed:!0,hintText:"Subject",fullWidth:!0,errorText:this.state.errSubject,value:this.state.templateSubject,onChange:function(t){return e.setState({templateSubject:t.target.value})}})),c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(g.a,{className:"editor-style",value:this.state.templateBody,onChange:this.handleContentChange})))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("h5",null,"System Variables"),c.a.createElement(S.a,null),v.a.map(this.props.templates.variable,function(e){if("system"===e.variable_type)return c.a.createElement("div",{key:e.id},c.a.createElement("span",{className:"select-variable"},e.name),c.a.createElement(S.a,null))}),c.a.createElement("h5",null,"User Variables"),c.a.createElement(S.a,null),v.a.map(this.props.templates.variable,function(e){if("user"==e.variable_type)return c.a.createElement("div",{key:e.id},c.a.createElement("span",{className:"select-variable"},e.name),c.a.createElement(S.a,null))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12 m-t-xs"},c.a.createElement("button",{className:"md-btn md-raised m-b-sm indigo",id:"createNewTemplate",onClick:this.openCreateTemplate},"Create New Template")),c.a.createElement("div",{className:"col-md-12 col-xs-12 col-sm-12",style:{paddingTop:"10px",paddingRight:"0px",textAlign:"center"}},c.a.createElement("div",{id:"mailsentsuccessfully",className:"alert alert-success pull-left error-alert-style"},c.a.createElement("a",{href:"#",className:"close",onClick:function(t){return e.hideError(t,"mailsentsuccessfully")},"aria-label":"close"},"\xd7"))),c.a.createElement("div",{className:this.state.paper,id:"templatesList",style:{marginTop:"8%"}},v.a.map(this.props.templates.templates,function(t,a){return c.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-12 body-space",id:"template-".concat(a),key:a},c.a.createElement(j.a,{zDepth:0,className:"paper scroll"},c.a.createElement("div",{className:"delete-style"},c.a.createElement("span",{className:"pull-right",style:{fontSize:"13px",fontStyle:"italic",color:"#000",cursor:"pointer",padding:"5px 10px"},onClick:function(){return e.toggleDialog(t.id+"_menuBack",t.id+"_menu")}},c.a.createElement("i",{className:"fa fa-ellipsis-v","aria-hidden":"true"})),c.a.createElement("div",{id:t.id+"_menuBack",className:"dropdown-backdrop-custom",style:{display:"none",opacity:.5},onClick:function(){return e.toggleDialog(t.id+"_menuBack",t.id+"_menu")}}),c.a.createElement("div",{id:t.id+"_menu",className:"menuOptions",onClick:function(){return e.toggleDialog(t.id+"_menuBack",t.id+"_menu")}},c.a.createElement("span",{className:"b-b",onClick:function(){return e.forwardTemplate(t)}},c.a.createElement("i",{className:"fa fa-share tempalate-btn forward-mail","aria-hidden":"true",title:"forword"}),"Forward Mail"),c.a.createElement("span",{className:"b-b",onClick:function(){return e.editTemplate(t)}},c.a.createElement("i",{className:"fa fa-pencil-square-o tempalate-btn edit","aria-hidden":"true",title:"Edit"}),"Edit Template"),c.a.createElement("span",{className:"b-b",onClick:function(){return e.deleteTemplate(t)}},c.a.createElement("i",{className:"fa fa-trash tempalate-btn delete","aria-hidden":"true",title:"Delete"}),"Delete Template"))),c.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12 m-b"},c.a.createElement("span",{className:"flex-style"},c.a.createElement("b",null,"Name:"),c.a.createElement("div",{className:"p-l",dangerouslySetInnerHTML:{__html:t.name}}))),c.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12 m-b"},c.a.createElement("span",{className:"flex-style"},c.a.createElement("b",null,"Subject: "),c.a.createElement("div",{className:"p-l",dangerouslySetInnerHTML:{__html:t.subject}}))),c.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12 m-b"},c.a.createElement("span",{className:"flex-style"},c.a.createElement("b",null,"Body: "),c.a.createElement("div",{className:"p-l",dangerouslySetInnerHTML:{__html:t.body}})))))}))))),c.a.createElement(O.a,{title:"Send Mail",actions:n,modal:!1,bodyClassName:"template-dialog-style",contentClassName:"dialog-content-style",open:this.state.openSendMailDialog,onRequestClose:this.handleCloseDialog,autoDetectWindowHeight:!0,autoScrollBodyContent:!0},c.a.createElement(O.a,{title:"Enter values",actions:[c.a.createElement(D.a,{label:"Close",primary:!0,onClick:this.handleClose,style:{marginRight:5}}),c.a.createElement(M.a,{label:"Set Variables",primary:!0,onClick:this.setVariable})],modal:!1,bodyClassName:"template-dialog-style",contentClassName:"nextdialog-content-style",open:this.state.openVarDialog,onRequestClose:this.handleClose,autoDetectWindowHeight:!0,autoScrollBodyContent:!0},c.a.createElement("div",null," ",c.a.createElement("div",{className:"col-sx-12"}),s," ")),c.a.createElement(O.a,{title:"Mail Preview",titleClassName:"templates-dialog-title",actions:[c.a.createElement(D.a,{label:"Cancel",primary:!0,onClick:this.closeMailPreview,style:{marginRight:5}}),c.a.createElement(M.a,{label:"Continue",primary:!0,onClick:this.sendMail}),c.a.createElement(D.a,{label:"Download Preview",primary:!0,style:{float:"left"},onClick:function(t){e.download_mail_preview(t)}})],modal:!1,bodyClassName:"template-dialog-style",contentClassName:"nextdialog-content-style",open:this.state.openPreview,onRequestClose:this.closeMailPreview,autoDetectWindowHeight:!0,autoScrollBodyContent:!0},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(L.a,this.props))),c.a.createElement("div",{id:"dialogContent",className:"template-dialog-content-style"},c.a.createElement("div",{className:"p-t p-b template-send-email",style:{textAlign:"center",fontWeight:"600",fontSize:"17px",marginTop:"5px",textDecoration:"underline"},dangerouslySetInnerHTML:{__html:this.state.sentMail&&this.state.sentMail.email&&this.state.sentMail.email[0].subject}}),c.a.createElement("div",{className:"p-t p-b",dangerouslySetInnerHTML:{__html:this.state.sentMail&&this.state.sentMail.email&&this.state.sentMail.email[0].body}}))),c.a.createElement("div",{className:"col-md-9 b-r-gainsboro"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("span",{className:"pull-right add-recipient-style",onClick:function(){return e.toggleDialog("FilterBack","Filter")}},"Add recipient"),c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{id:"FilterBack",className:"dropdown-backdrop-custom filter-back-style",onClick:function(){return e.toggleDialog("FilterBack","Filter")}}),c.a.createElement("div",{id:"Filter",className:"dropdown-menu has-child has-arrow selectUser mail-recipient"},c.a.createElement("ul",{className:"list-unstyled pt-xs"},c.a.createElement("li",{className:"mb-sm b-b p-t p-b"},c.a.createElement("div",{className:"form-group form-group-full-width"},c.a.createElement("input",{type:"checkbox",id:"notListed",className:"not-listed",checked:this.state.recipientNotFound,onChange:function(t){return e.setState({recipientNotFound:t.target.checked})}})," Recipient Not Listed")),c.a.createElement("li",{className:"mb-sm b-b p-t p-b"},c.a.createElement("div",{className:"form-group form-group-p-0-w-4"},c.a.createElement("input",{type:"radio",id:"recipient",className:"recipient",name:"recipientType",checked:"Recipient"==i,value:"Recipient",onChange:function(t){e.setState({recipientType:t.target.value})}})," Recipient"),c.a.createElement("div",{className:"form-group",style:{width:"30%",paddingLeft:"0px"}},c.a.createElement("input",{type:"radio",id:"cc",className:"cc",name:"recipientType",checked:"CC"==i,value:"CC",onChange:function(t){e.setState({recipientType:t.target.value})}})," CC"),c.a.createElement("div",{className:"form-group",style:{width:"30%",paddingLeft:"0px"}},c.a.createElement("input",{type:"radio",id:"bcc",className:"bcc",name:"recipientType",checked:"BCC"==i,value:"BCC",onChange:function(t){e.setState({recipientType:t.target.value})}})," BCC")),this.state.recipientNotFound?c.a.createElement("li",{className:"mb-sm b-b p-t p-b"},c.a.createElement("div",{className:"form-group",style:{width:"100%"}},c.a.createElement("label",null,"Enter Email Id:"),c.a.createElement("input",{type:"text",style:{width:"100%"},className:"form-control",placeholder:"enter email...",onChange:function(t){return e.setState({recipientEmailId:t.target.value})},value:this.state.recipientEmailId}),c.a.createElement("span",{style:{color:"#FF0000",padding:"5px",display:"block"}},this.state.emailValidationError),c.a.createElement("button",{type:"button",className:"btn m-t btn-primary btn-block",onClick:function(){return e.submitEmail(e.state.recipientEmailId)}},"Submit"))):c.a.createElement("span",null,c.a.createElement("li",{className:"mb-sm b-b p-t p-b"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"search",className:"form-control select-all search-box",placeholder:"search",onKeyUp:function(t){return e.filterList(t.target.value)}}))),l)))),c.a.createElement("div",{id:"previewalert",className:"alert alert-danger pull-left error-alert-style"},c.a.createElement("a",{href:"#",className:"close",onClick:function(t){return e.hideError(t,"previewalert")},"aria-label":"close"},"\xd7")),c.a.createElement("div",{className:"form-group selected-recipient form-input-style"},c.a.createElement("div",{className:"pull-left to"},"To"),c.a.createElement("div",{className:"pull-left filter-tags",style:{fontSize:"12px"}},this.state.recipient.length>0?c.a.createElement(B,{data:this.state.recipient,onClick:function(t,a){return e.onClickLabel(t,a,"Recipient")},onClear:this.onclearFilter}):"")),this.state.cc.length>0?c.a.createElement("div",{className:"form-group selected-recipient form-input-style"},c.a.createElement("div",{className:"pull-left to"},"CC"),c.a.createElement("div",{className:"pull-left filter-tags",style:{fontSize:"12px"}},c.a.createElement(B,{data:this.state.cc,onClick:function(t,a){return e.onClickLabel(t,a,"CC")},onClear:this.onclearFilter}))):"",this.state.bcc.length>0?c.a.createElement("div",{className:"form-group selected-recipient form-input-style"},c.a.createElement("div",{className:"pull-left to"},"BCC"),c.a.createElement("div",{className:"pull-left filter-tags",style:{fontSize:"12px"}},c.a.createElement(B,{data:this.state.bcc,onClick:function(t,a){return e.onClickLabel(t,a,"BCC")},onClear:this.onclearFilter}))):"",c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(T.a,{ref:"value",floatingLabelText:"Name",floatingLabelFixed:!0,hintText:"Template Name",fullWidth:!0,disabled:!0,errorText:this.state.errName,value:this.state.templateName,onChange:function(t){return e.setState({templateName:t.target.value})}})),c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(T.a,{ref:"Name",floatingLabelText:"Subject",floatingLabelFixed:!0,hintText:"Subject",fullWidth:!0,errorText:this.state.errSubject,value:this.state.templateSubject,onChange:function(t){return e.setState({templateSubject:t.target.value})}})),c.a.createElement("div",{className:"form-group form-input-style"},c.a.createElement(g.a,{id:"editor",className:"editor-style",value:this.state.templateBody,onChange:this.handleContentChange,readOnly:!0}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},this.state.LinearProgressBar," ",t)),c.a.createElement("form",{action:"",method:"POST",encType:"multipart/form-data"},c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-blue upload-button-style"},c.a.createElement("i",{className:"fa fa-file-pdf-o",style:{marginRight:"5px",cursor:"pointer"}}),c.a.createElement("input",{multiple:!0,id:"file_image",type:"file",name:"image[]",ref:"file",className:"form-control",onChange:function(t){return e.uploadPDF(t)}})," Attachment")))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("h5",{style:{textAlign:"center",color:"#000"}},"System Variables"),c.a.createElement(S.a,null),v.a.map(this.props.templates.variable,function(e){if("system"===e.variable_type)return c.a.createElement("div",{key:e.id},c.a.createElement("span",{className:"select-variable"},e.name),c.a.createElement(S.a,null))}),c.a.createElement("h5",{style:{textAlign:"center",color:"#000"}},"User Variables"),c.a.createElement(S.a,null),v.a.map(this.props.templates.variable,function(e){if("user"==e.variable_type)return c.a.createElement("div",{key:e.id},c.a.createElement("span",{className:"select-variable"},e.name),c.a.createElement(S.a,null))})))))}}]),t}(c.a.Component),z=a(4),H=a(621),q=a(826),J=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).props.onIsAlreadyLogin(),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.onFetchUserSalaryDetails().then(function(){e.props.onFetchTemplate(),e.props.onFetchVariables()})}},{key:"componentWillReceiveProps",value:function(e){var t=Object(d.e)(e.match.path,e.loggedUser);t.status&&this.props.history.push(t.redirectTo)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.a,this.props),c.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},c.a.createElement(f.a,Object.assign({pageTitle:"Email Template"},this.props)),c.a.createElement(W,this.props)))}}]),t}(c.a.Component);var Y=Object(m.b)(function(e){return{frontend:e.frontend.toJS(),loggedUser:e.logged_user.userLogin,templates:e.template.toJS(),employee:e.empSalaryList.toJS()}},function(e){return{onIsAlreadyLogin:function(){return e(z.isAlreadyLogin())},onFetchTemplate:function(){return e(q.d())},onFetchVariables:function(){return e(q.e())},onSaveTemplate:function(t,a,n,l){return e(q.g(t,a,n,l))},onDeleteTemplate:function(t){return e(q.b(t))},onSendMail:function(t){return e(q.h(t))},onDownloadPdf:function(t,a){return e(q.c(t,a))},onFetchUserSalaryDetails:function(){return e(H.a())}}})(J),Z=Object(u.a)(Y);t.default=Z},621:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c});var n=a(5),l=(a(10),a(24),a(12)),i=(a(179),a(33)),r=a(1);function s(e){return Object(n.a)(r.lc)(e)}function o(){return function(e,t){return new Promise(function(t,a){e(Object(i.b)()),Object(l.b)("POST","",{action:"get_user_salary_info"}).then(function(a){var l;e(Object(i.a)()),"undefined"!==typeof a.data&&"undefined"!==typeof a.data.salary_details?(t(a.data),e(s(a.data))):e((l=[],Object(n.a)(r.i)(l)))},function(t){e(Object(i.a)()),e(s([]))})})}}function c(){return function(e,t){return new Promise(function(t,a){e(Object(i.b)()),Object(l.b)("POST","",{action:"get_all_users_detail"}).then(function(a){var l;e(Object(i.a)()),"undefined"!==typeof a.data&&a.data.length>0?(e((l=a.data,Object(n.a)(r.Bc)(l))),t()):(e(function(e){return Object(n.a)(r.m)(e)}([])),t())},function(a){var l;e(Object(i.a)()),t(),e((l=[],Object(n.a)(r.fb)(l)))})})}}},665:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=a(796),i=(n=l)&&n.__esModule?n:{default:n};t.default=i.default},693:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=a(803),i=(n=l)&&n.__esModule?n:{default:n};t.default=i.default},796:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(31)),l=o(a(32)),i=o(a(25)),r=o(a(0)),s=o(a(8));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t){var a=e.inset,s=e.style,o=(0,l.default)(e,["inset","style"]),c=t.muiTheme,m=c.baseTheme,u=c.prepareStyles,p={root:{margin:0,marginTop:-1,marginLeft:a?72:0,height:1,border:"none",backgroundColor:m.palette.borderColor}};return r.default.createElement("hr",(0,n.default)({},o,{style:u((0,i.default)(p.root,s))}))};c.muiName="Divider",c.propTypes={},c.defaultProps={inset:!1},c.contextTypes={muiTheme:s.default.object.isRequired},t.default=c},803:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=b(a(31)),l=b(a(32)),i=b(a(20)),r=b(a(17)),s=b(a(19)),o=b(a(21)),c=b(a(22)),m=b(a(25)),u=a(0),p=b(u),d=b(a(8)),f=b(a(35));function b(e){return e&&e.__esModule?e:{default:e}}function h(e,t){var a=e.max,n=e.min,l=e.value,i=t.muiTheme,r=i.baseTheme.palette,s=i.borderRadius,o={root:{position:"relative",height:4,display:"block",width:"100%",backgroundColor:r.primary3Color,borderRadius:s,margin:0,overflow:"hidden"},bar:{height:"100%"},barFragment1:{},barFragment2:{}};return"indeterminate"===e.mode?(o.barFragment1={position:"absolute",backgroundColor:e.color||r.primary1Color,top:0,left:0,bottom:0,transition:f.default.create("all","840ms",null,"cubic-bezier(0.650, 0.815, 0.735, 0.395)")},o.barFragment2={position:"absolute",backgroundColor:e.color||r.primary1Color,top:0,left:0,bottom:0,transition:f.default.create("all","840ms",null,"cubic-bezier(0.165, 0.840, 0.440, 1.000)")}):(o.bar.backgroundColor=e.color||r.primary1Color,o.bar.transition=f.default.create("width",".3s",null,"linear"),o.bar.width=function(e,t,a){var n=Math.min(Math.max(t,e),a),l=a-t;return Math.round((n-t)/l*1e4)/1e4*100}(l,n,a)+"%"),o}var v=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timers={},this.timers.bar1=this.barUpdate("bar1",0,this.refs.bar1,[[-35,100],[100,-90]],0),this.timers.bar2=setTimeout(function(){e.barUpdate("bar2",0,e.refs.bar2,[[-200,100],[107,-8]],0)},850)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timers.bar1),clearTimeout(this.timers.bar2)}},{key:"barUpdate",value:function(e,t,a,n,l){var i=this;if("indeterminate"===this.props.mode){l=l||420,t=t||0,t%=4;var r=this.context.muiTheme.isRtl?"left":"right",s=this.context.muiTheme.isRtl?"right":"left";0===t?(a.style[s]=n[0][0]+"%",a.style[r]=n[0][1]+"%"):1===t?a.style.transitionDuration="840ms":2===t?(a.style[s]=n[1][0]+"%",a.style[r]=n[1][1]+"%"):3===t&&(a.style.transitionDuration="0ms"),this.timers[e]=setTimeout(function(){return i.barUpdate(e,t+1,a,n)},l)}}},{key:"render",value:function(){var e=this.props,t=e.style,a=(0,l.default)(e,["style"]),i=this.context.muiTheme.prepareStyles,r=h(this.props,this.context);return p.default.createElement("div",(0,n.default)({},a,{style:i((0,m.default)(r.root,t))}),p.default.createElement("div",{style:i(r.bar)},p.default.createElement("div",{ref:"bar1",style:i(r.barFragment1)}),p.default.createElement("div",{ref:"bar2",style:i(r.barFragment2)})))}}]),t}(u.Component);v.defaultProps={mode:"indeterminate",value:0,min:0,max:100},v.contextTypes={muiTheme:d.default.object.isRequired},v.propTypes={},t.default=v},826:function(e,t,a){"use strict";a.d(t,"f",function(){return m}),a.d(t,"e",function(){return p}),a.d(t,"a",function(){return d}),a.d(t,"d",function(){return b}),a.d(t,"g",function(){return h}),a.d(t,"b",function(){return v}),a.d(t,"h",function(){return y}),a.d(t,"c",function(){return g});var n=a(10),l=a(5),i=(a(24),a(12)),r=a(1),s=a(33);a(179);function o(e){return Object(l.a)(r.Mb)(e)}function c(e){return Object(l.a)(r.y)(e)}function m(e,t){return function(a,n){return new Promise(function(n,l){a(Object(s.b)()),""==e?function(e,t){return Object(i.b)("POST","",{action:"create_template_variable",name:t.varCode,value:t.varValue,variable_type:t.varType})}(0,t).then(function(e){a(Object(s.a)()),0==e.error?(a(o(e.data)),a(p()),n(e.data)):a(c(e.error[0]))},function(e){a(Object(s.a)()),a(c("error occurs"))}):function(e,t){return Object(i.b)("POST","",{action:"update_template_variable",id:e,name:t.varCode,value:t.varValue,variable_type:t.varType})}(e,t).then(function(e){a(Object(s.a)()),0==e.error?(a(o(e.data)),a(p()),n(e.data)):a(c(e.error[0]))},function(e){a(Object(s.a)()),a(c("error occurs"))})})}}function u(e){return Object(l.a)(r.Dc)(e)}function p(){return function(e,t){return new Promise(function(t,a){e(Object(s.b)()),Object(i.b)("POST","",{action:"get_template_variable"}).then(function(a){if(e(Object(s.a)()),"undefined"!==typeof a&&a.length>0){var n=a;e(u(n)),t(n)}else e(u([]))},function(t){e(Object(s.a)()),e(u([]))})})}}function d(e){return function(t,a){return new Promise(function(a,n){t(Object(s.b)()),function(e){return Object(i.b)("POST","",{action:"delete_template_variable",id:e})}(e).then(function(e){t(Object(s.a)()),e.error,t(p()),a(e.data.message)},function(e){t(Object(s.a)()),n("error occurs!!")})})}}function f(e){return Object(l.a)(r.fc)(e)}function b(){return function(e,t){return new Promise(function(t,a){e(Object(s.b)()),Object(i.b)("POST","",{action:"get_email_template"}).then(function(a){if(e(Object(s.a)()),"undefined"!==typeof a&&a.length>0){var n=a;e(f(n)),t(n)}else e(f([]))},function(t){e(Object(s.a)()),a("error occurs!!")})})}}function h(e,t,a,l){return function(r,o){return new Promise(function(o,c){r(Object(s.b)()),n.isEmpty(e)?function(e,t,a){return Object(i.b)("POST","",{action:"create_email_template",name:e,subject:t,body:a})}(t,a,l).then(function(e){r(Object(s.a)()),r(b()),o(e.data.message)},function(e){r(Object(s.a)()),c("error occurs!!")}):function(e,t,a,n){return Object(i.b)("POST","",{action:"update_email_template",id:e,name:t,subject:a,body:n})}(e,t,a,l).then(function(e){r(Object(s.a)()),r(b()),o(e.data.message)},function(e){r(Object(s.a)()),c("error occurs!!")})})}}function v(e){return function(t,a){return new Promise(function(a,n){t(Object(s.b)()),function(e){return Object(i.b)("POST","",{action:"delete_email_template",id:e})}(e).then(function(e){t(Object(s.a)()),e.error?n(e.data.message):(t(b()),a())},function(e){t(Object(s.a)()),n("error occurs!!")})})}}function y(e){return function(t,a){return new Promise(function(a,n){t(Object(s.b)()),function(e){return Object(i.b)("POST","",{action:"send_employee_email",email:e})}(e).then(function(e){t(Object(s.a)()),e.error?n(e.data.message):(t(b()),a(e.data.message))},function(e){t(Object(s.a)()),n("error occurs!!")})})}}function g(e,t){return function(a,n){return new Promise(function(n,l){a(Object(s.b)()),function(e,t){return Object(i.b)("POST","",{action:"create_pdf",template:e,file_name:t})}(e,t).then(function(e){a(Object(s.a)()),n(e.data)},function(e){a(Object(s.a)()),l("error occurs!!")})})}}}}]);
//# sourceMappingURL=28.ed3d85ad.chunk.js.map