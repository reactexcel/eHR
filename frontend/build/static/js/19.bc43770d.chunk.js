(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1161:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var r,i=n(26),o=n(27),c=n(29),s=n(28),l=n(30),u=n(13),d=n(0),m=n.n(d),f=n(10),p=n(71),h=n.n(p),y=n(24),b=n(36),v=n(129),g=n(45),_=n(262),j=n(566),E=n(4),O=n(580),P=n(176),k=(n(574),n(177),n(130),n(37)),S=(n(604),n(131)),N=n.n(S),w=n(609),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleClose=function(){n.setState({open:!1})},n.handleClose=function(){n.setState({open:!1})},n.state={inventory_id:n.props.inventory_id,token:"",file_upload_action:"inventory_files",inventory_invoice:"",inventory_warranty:"",inventory_photo:"",page_url:window.location.href,document:"",file:[]},n.handleFileChange=n.handleFileChange.bind(Object(u.a)(Object(u.a)(n))),n.callUpdateDocuments=n.callUpdateDocuments.bind(Object(u.a)(Object(u.a)(n))),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:Object(k.c)()})}},{key:"handleFileChange",value:function(e){var t=this;this.setState({file:Array.from(e.target.files)});var n=this.refs.file.files[0],a=new FileReader;a.onloadend=function(){t.setState({imageUrl:a.result})},n?(a.readAsDataURL(n),this.setState({imageUrl:a.result})):this.setState({imageUrl:""})}},{key:"callUpdateDocuments",value:function(e){var t=this.refs.status.value,n=!1;""===this.state.document?(n=!0,Object(g.b)("Warning!","Please select document type.","warning")):""===t&&(n=!0,Object(g.b)("Warning!","Please select a file","warning")),n&&e.preventDefault()}},{key:"handleInlargePhoto",value:function(){this.setState({open:!0,open3:!0,open2:!1,open1:!1})}},{key:"handleInlargeInvoice",value:function(){this.setState({open:!0,open3:!1,open2:!0,open1:!1})}},{key:"handleInlargeWarranty",value:function(){this.setState({open:!0,open3:!1,open2:!1,open1:!0})}},{key:"render",value:function(){var e=this,t=f.concat(this.props.manageDevice.device,this.props.manageDevice.unapprovedList.data),n=f.filter(t,{id:this.props.inventory_id}),a=f.isEmpty(n)?null:n[0].fileInventoryPhoto,r=f.isEmpty(n)?null:n[0].fileInventoryWarranty,i=f.isEmpty(n)?null:n[0].fileInventoryInvoice,o=(m.a.createElement(N.a,{label:"Close",primary:!0,onClick:this.handleClose}),y.a.view_inventory_documents);return m.a.createElement("div",null,m.a.createElement("h2",null,"Inventory Files"),m.a.createElement("form",{action:y.a.inventory_upload_url,method:"POST",encType:"multipart/form-data"},m.a.createElement("div",{className:"form-group"},"Upload Documents",m.a.createElement("select",{className:"form-control",ref:"status",value:this.state.document,onChange:function(t){e.setState({document:t.target.value,file:[]}),e.refs.file.value=""}},m.a.createElement("option",{value:"",disabled:!0},"--Select document--"),m.a.createElement("option",{value:"inventory_photo"},"Photo"),m.a.createElement("option",{value:"inventory_warranty"},"Warranty"),m.a.createElement("option",{value:"inventory_invoice"},"Inovice"))),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"col-sm-12"},"Attachment "),m.a.createElement("input",{type:"file",className:"form-control",ref:"file",name:this.state.document,multiple:"multiple",onChange:this.handleFileChange}))),m.a.createElement("div",{className:"form-group"},a?m.a.createElement("div",null,m.a.createElement("label",{className:"col-xs-12"},"Photo "),m.a.createElement("a",{href:o+a,target:"_blank"},m.a.createElement("img",{src:o+a,className:"small"})),m.a.createElement("br",null)):null),m.a.createElement("div",{className:"form-group"},r?m.a.createElement("div",null,m.a.createElement("label",{className:"col-xs-12"},"Warranty"),m.a.createElement("a",{href:o+r,target:"_blank"},m.a.createElement("img",{src:o+r,className:"small"})),m.a.createElement("br",null)):null),m.a.createElement("div",{className:"form-group"},i?m.a.createElement("div",null,m.a.createElement("label",{className:"col-xs-12"},"Invoice "),m.a.createElement("a",{href:o+i,target:"_blank"}," ",m.a.createElement("img",{src:o+i,className:"small"})),m.a.createElement("br",null)):null),m.a.createElement("div",{className:"form-group"},this.state.file[0]?m.a.createElement("div",null,m.a.createElement("label",{className:"col-xs-12"},"Image Preview "),m.a.createElement("img",{src:this.state.imageUrl,className:"small"}),m.a.createElement("br",null)):null),m.a.createElement(w.a,{callUpdateDocuments:this.callUpdateDocuments,url:y.a.inventory_upload_url,params:this.state,file:this.state.file[0],fileName:this.state.document}))}}]),t}(m.a.Component),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={comment:"",inventory_id:"",user_id:""},n.handleAddComment=n.handleAddComment.bind(Object(u.a)(Object(u.a)(n))),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){r=this.props.match.params.id,this.props.onUsersList(),this.props.onGetDevice(r),this.props.onIsAlreadyLogin(),this.props.onFetchDevice()}},{key:"componentWillReceiveProps",value:function(e){this.setState({user_id:e.manageDevice.deviceHistory.user_Id})}},{key:"handleAddComment",value:function(e){var t=this;this.props.onAddInventoryComment(e).then(function(e){t.props.onFetchDevice(),t.props.onGetDevice(r)},function(e){Object(g.b)("Error!",e,"error")}),this.setState({comment:""})}},{key:"AssignDevice",value:function(e){var t=this;this.props.onAssignDevice(e).then(function(e){t.props.onGetDevice(r)},function(e){Object(g.b)("Error!",e,"error")})}},{key:"render",value:function(){var e=this,t=f.concat(this.props.manageDevice.device,this.props.manageDevice.unapprovedList.data),n=f.filter(t,{id:this.props.match.params.id}),r=f.isEmpty(n)?null:n[0].fileInventoryPhoto,i=[{user_Id:null,username:"Unassign Device"}].concat(a(this.props.usersList.users)),o=f.map(i,function(e,t){return m.a.createElement("option",{key:t,value:e.user_Id},e.username)}),c=f.map(this.props.manageDevice.deviceHistory.history,function(e,t){return m.a.createElement("div",{key:t,className:"streamline b-l m-l"},m.a.createElement("div",{className:"sl-item b-info"},m.a.createElement("div",{className:"sl-content"},"Inventory Assigned"===e.comment||"Inventory Removed"===e.comment?m.a.createElement("div",{className:"sl-date text-muted"},"Comment : ",e.comment," ","Inventory Assigned"===e.comment?"to":"from"," ",e.assign_unassign_user_name):m.a.createElement("div",{className:"sl-date text-muted"},"Comment : ",e.comment),m.a.createElement("div",{className:"sl-date text-muted"},"Updated on :"," ",h()(e.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a")),m.a.createElement("div",{className:"sl-date text-muted"},"By : ",e.updated_by_user))))}),s=y.a.inventory_images;return m.a.createElement("div",null,m.a.createElement(v.a,this.props),m.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},m.a.createElement(_.a,{pageTitle:"Inventory Management"}),m.a.createElement("div",{className:"app-body",id:"view"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"app-body",id:"view"},m.a.createElement("div",{className:"col-xs-12 col-sm-12"},m.a.createElement("div",{className:"col-md-6 p-r"},m.a.createElement("div",{className:"form-group",style:{marginLeft:"8%",marginTop:"4%",textAlign:"left"}},m.a.createElement("div",{className:"row"}," ",null===r?null:m.a.createElement("div",{className:" col-md-3"},m.a.createElement("div",{className:"thumbnail"},m.a.createElement("img",{src:s+r}))),m.a.createElement("br",null),m.a.createElement("div",{className:"col-md-12"},m.a.createElement("label",{style:{fontSize:15}},"Device Name:")," ",f.isEmpty(n)?null:n[0].machine_name),m.a.createElement("div",{className:"col-md-12"},m.a.createElement("label",{style:{fontSize:15}},"Serial No:")," ",f.isEmpty(n)?null:n[0].serial_number),m.a.createElement("div",{className:"col-md-12"},m.a.createElement("label",{style:{fontSize:15}},"Excellence Serial No:")," ",f.isEmpty(n)?null:n[0].bill_number),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Device Type:")," ",f.isEmpty(n)?null:n[0].machine_type),m.a.createElement("br",null),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Status:")," ",f.isEmpty(n)?null:n[0].status),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Approval Status:")," ",f.isEmpty(n)?null:"0"===n[0].approval_status?"Not Approved":"Approved"),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Date of Purchase:")," ",f.isEmpty(n)?null:n[0].date_of_purchase),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Assigned To:")," ",f.isEmpty(n)?null:n[0].name?n[0].name:"Not Assigned To Anyone"),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("label",{style:{fontSize:15}},"Price:")," ",f.isEmpty(n)?null:"\u20b9 ".concat(n[0].machine_price))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("label",{style:{fontSize:15}},"Users:"),m.a.createElement("select",{onChange:function(t){return e.setState({user_id:t.target.value,inventory_id:e.props.match.params.id})},className:"form-control",ref:"device_type",value:this.state.user_id},m.a.createElement("option",{disabled:!0},"--Select User--"),o),m.a.createElement("br",null)," ",m.a.createElement("button",{className:"btn btn-fw info responsive-p-x-sm",onClick:function(){return e.AssignDevice(e.state)}},"Assign Inventory"),m.a.createElement("div",{className:"row m-1"},m.a.createElement("div",{className:"col-sm-15 p-8 pt-8",style:{marginTop:"4%"}},m.a.createElement("label",{style:{fontSize:15}},"Comment:"),m.a.createElement("textarea",{placeholder:"Your comment",className:"form-control resize-y",onChange:function(t){return e.setState({comment:t.target.value,inventory_id:e.props.match.params.id})},value:this.state.comment}))),m.a.createElement("br",null),m.a.createElement("button",{className:"btn btn-fw info responsive-p-x-sm",onClick:function(){return e.handleAddComment(e.state)}},"Submit"),m.a.createElement("div",{className:"row m-2"},m.a.createElement("div",{className:"col-sm-15 p-8 pt-8",style:{marginTop:"4%"}}," ",c)))),m.a.createElement("div",{className:"col-md-5 p-r col-sm-offset-1",style:{marginTop:"17px"}},m.a.createElement(x,Object.assign({inventory_id:this.props.match.params.id},this.props)))))))))}}]),t}(m.a.Component);t.default=Object(j.a)(Object(b.b)(function(e){return{usersList:e.usersList.toJS(),loggedUser:e.logged_user.userLogin,manageDevice:e.manageDevice.toJS()}},function(e){return{onAddInventoryComment:function(t){return e(O.a(t))},onFetchDevice:function(){return e(O.p())},onUsersList:function(){return e(P.c())},onMyProfileDetails:function(){},onIsAlreadyLogin:function(){return e(E.isAlreadyLogin())},onGetDevice:function(){return e(O.m(r))},onAssignDevice:function(t){return e(O.e(t))}}})(D))},572:function(e,t){var n=Array.isArray;e.exports=n},573:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},574:function(e,t,n){"use strict";n.d(t,"i",function(){return d}),n.d(t,"j",function(){return f}),n.d(t,"a",function(){return h}),n.d(t,"h",function(){return b}),n.d(t,"e",function(){return v}),n.d(t,"c",function(){return g}),n.d(t,"g",function(){return E}),n.d(t,"d",function(){return O}),n.d(t,"b",function(){return k}),n.d(t,"f",function(){return N});var a=n(5),r=n(10),i=n(582),o=n.n(i),c=n(12),s=n(33),l=n(1),u=n(71);function d(e,t){return function(n,r){return new Promise(function(r,i){n(Object(s.b)()),function(e){return Object(c.b)("POST","",{action:"get_user_profile_detail_by_id",user_id:e})}(e).then(function(e){var r;n(Object(s.a)()),0==e.error?n(function(e,t){return{type:l.Ac,payload:e,username:t}}(e.data,t)):n((r=e.data.message,Object(a.a)(l.l)(r)))},function(e){var t;n(Object(s.a)()),n((t="error occurs!!!",Object(a.a)(l.eb)(t)))})})}}function m(e){return Object(a.a)(l.Z)(e)}function f(e){return function(t,n){var r="",i="",o="",f="",p="",h="",y="",b="",v="",g="",_="",j="",E="",O="",P="",k="",S=e.send_slack_msg,N=e.slack_msg,w="",x="",D="",A="";if("undefined"!==typeof e.user_id&&(r=e.user_id),"undefined"!==typeof e.name&&(i=e.name),"undefined"!==typeof e.jobtitle&&(o=e.jobtitle),"undefined"!==typeof e.team&&(f=e.team),"undefined"!==typeof e.dateofjoining&&null!=e.dateofjoining&&(p=e.dateofjoining),"undefined"!==typeof e.training_month&&null!=e.training_month&&(A=e.training_month),"undefined"!==typeof e.work_email&&(h=e.work_email),"undefined"!==typeof e.other_email&&(y=e.other_email),"undefined"!==typeof e.gender&&(b=e.gender),"undefined"!==typeof e.dob&&null!=e.dob){var U=new Date(e.dob);U&&(v=u(U).format("YYYY-MM-DD"))}return"undefined"!==typeof e.marital_status&&(g=e.marital_status),"undefined"!==typeof e.address1&&(_=e.address1),"undefined"!==typeof e.address2&&(j=e.address2),"undefined"!==typeof e.emergency_ph1&&(E=e.emergency_ph1),"undefined"!==typeof e.emergency_ph2&&(O=e.emergency_ph2),"undefined"!==typeof e.blood_group&&(P=e.blood_group),"undefined"!==typeof e.medical_condition&&(k=e.medical_condition),"undefined"!==typeof e.training_completion_date&&null!=e.training_completion_date&&(w=e.training_completion_date),"undefined"!==typeof e.termination_date&&null!=e.termination_date&&(x=e.termination_date),"undefined"!==typeof e.holding_comments&&(D=e.holding_comments),""===r.trim()?Promise.reject("User id is empty"):""===i.trim()?Promise.reject("Name is empty"):""===o.trim()?Promise.reject("Jobtitle is empty"):""===p.trim()?Promise.reject("Joining date is empty"):""===h.trim()?Promise.reject("Work email is empty"):""===y.trim()?Promise.reject("Personal email is empty"):""===b.trim()?Promise.reject("Gender is empty"):""===v.trim()?Promise.reject("Date of birth is empty"):""===g.trim()?Promise.reject("Marital status not selected"):""===_.trim()?Promise.reject("Current address is empty"):""===j.trim()?Promise.reject("Permanent address is empty"):""===E.trim()?Promise.reject("Emmergency contact 1 is empty"):""===O.trim()?Promise.reject("Emmergency contact 2 is empty"):""===P.trim()?Promise.reject("Blood group not selected"):""===k.trim()?Promise.reject("Any medical conditions is empty"):""===A.trim()?Promise.reject("Training month is Empty"):new Promise(function(e,n){t(Object(s.b)()),function(e,t,n,a,r,i,o,s,l,u,d,m,f,p,h,y,b,v,g,_,j,E){return Object(c.b)("POST","",{action:"update_user_profile_detail_by_id",user_id:e,marital_status:u,name:t,jobtitle:n,team:a,dateofjoining:r,work_email:i,other_email:o,gender:s,dob:l,permanent_address:m,current_address:d,emergency_ph1:f,emergency_ph2:p,blood_group:h,medical_condition:y,training_completion_date:b,termination_date:v,training_month:_,holding_comments:g,send_slack_msg:j,slack_msg:E})}(r,i,o,f,p,h,y,b,v,g,_,j,E,O,P,k,w,x,D,A,S,N).then(function(e){var i;t(Object(s.a)()),0==e.error?(t(d(r)),t((i=e.data.message,Object(a.a)(l.vc)(i)))):(t(m(e.data.message)),n(e.data))},function(e){t(Object(s.a)()),t(m("error occurs!!!"))})})}}function p(e){return Object(a.a)(l.p)(e)}function h(e){return function(t,n){var r="",i="",o="",u="",d="",m="",f="",h="";return"undefined"===typeof e.dateofjoining||""==e.dateofjoining?Promise.reject("Date of Joining is empty"):(r=e.dateofjoining,"undefined"===typeof e.name||""==e.name?Promise.reject("Name is empty"):(i=e.name,"undefined"===typeof e.jobtitle||""==e.jobtitle?Promise.reject("Job Title is empty"):(o=e.jobtitle,"undefined"===typeof e.gender||""==e.gender?Promise.reject("Gender is empty"):(u=e.gender,"undefined"===typeof e.dob||""==e.dob?Promise.reject("Date of birth is empty"):(d=e.dob,"undefined"===typeof e.gender||""==e.gender?Promise.reject("Gender is empty"):(u=e.gender,"undefined"===typeof e.username||""==e.username?Promise.reject("Username is empty"):(m=e.username,"undefined"===typeof e.training_month||""==e.training_month?Promise.reject("training month is empty"):(f=e.training_month,"undefined"===typeof e.workemail||""==e.workemail?Promise.reject("Work email is empty"):(h=e.workemail,new Promise(function(e,n){t(Object(s.b)()),function(e,t,n,a,r,i,o,s){return Object(c.b)("POST","",{action:"add_new_employee",dateofjoining:e,name:t,jobtitle:n,gender:a,dob:r,username:i,training_month:o,workemail:s})}(r,i,o,u,d,m,f,h).then(function(r){var i;t(Object(s.a)()),0==r.error?(t((i=r.data,Object(a.a)(l.Db)(i))),e(r.data)):(t(p(r.data.message)),n(r.data.message))},function(e){t(Object(s.a)()),t(p("error occurs!!!")),n("error occurs!!!")})}))))))))))}}function y(e){return Object(a.a)(l.bb)(e)}function b(e){return function(t,n){return new Promise(function(n,r){t(Object(s.b)()),function(e){return Object(c.b)("POST","",{action:"get_user_document_by_id",user_id:e})}(e).then(function(e){var n;t(Object(s.a)()),0==e.error?t((n=e.data,Object(a.a)(l.xc)(n))):t(y(e.data.message))},function(e){t(Object(s.a)()),t(y("error occurs!!!"))})})}}function v(e){return function(t,n){return new Promise(function(n,a){t(Object(s.b)()),function(e){return Object(c.b)("POST","",{action:"delete_user_document",id:e})}(e).then(function(e){t(Object(s.a)()),0==e.error?n(e.data.message):a(e.data.message)},function(e){t(Object(s.a)()),a("error occurs!!")})})}}function g(e,t){return function(n,a){return new Promise(function(n,a){(function(e,t){return Object(c.b)("POST","",{action:"change_employee_status",user_id:e,status:t})})(e,t).then(function(e){0===e.error?n("User disabled"):a(e.data.message)},function(e){a("error occurs!!")})})}}function _(e){return Object(a.a)(l.ec)(e)}function j(e){return Object(a.a)(l.K)(e)}o()(function(e,t,n){return Object(c.b)("POST","",{action:"get_employee_life_cycle",userid:e}).then(function(e){0==e.error?t(_(e.data)):t(j())})},1);function E(e){return function(t,n){return new Promise(function(n,a){(function(e){return Object(c.b)("POST","",{action:"get_employee_life_cycle",userid:e})})(e).then(function(e){0==e.error?(n(e.message),t(_(e.data))):(a(e.data.message),t(j(e.data.message)))},function(e){a("error occurs!!")})})}}function O(e,t){return function(n,r){return new Promise(function(r,i){(function(e,t){return Object(c.b)("POST","",{action:"update_employee_life_cycle",userid:e,stepid:t})})(e,t).then(function(e){var t;0==e.error?r(e.data.message):(i(e.data.message),n((t=e.data.message,Object(a.a)(l.J)(t))))},function(e){i("error occurs!!")})})}}function P(e){return Object(a.a)(l.r)(e)}function k(e){return function(t,n){var r="",i="",o="",u="",d="",m="",f="",p="";return"undefined"!==typeof e.user_id&&(r=e.user_id),"undefined"!==typeof e.signature&&(p=e.signature),"undefined"!==typeof e.permanent_address&&(i=e.permanent_address),"undefined"!==typeof e.emergency_ph1&&(o=e.emergency_ph1),"undefined"!==typeof e.emergency_ph2&&(u=e.emergency_ph2),"undefined"!==typeof e.blood_group&&(d=e.blood_group),"undefined"!==typeof e.medical_condition&&(m=e.medical_condition),"undefined"!==typeof e.holding_comments&&(f=e.holding_comments),""===r.trim()?Promise.reject("User id is empty"):""===p.trim()?Promise.reject("signature is empty"):""===i.trim()?Promise.reject("Permanent address is empty"):""===o.trim()?Promise.reject("Emmergency contact 1 is empty"):""===u.trim()?Promise.reject("Emmergency contact 2 is empty"):""===d.trim()?Promise.reject("Blood group not selected"):""===m.trim()?Promise.reject("Any medical conditions is empty"):new Promise(function(e,n){t(Object(s.b)()),function(e,t,n,a,r,i,o,s){return Object(c.b)("POST","",{action:"update_user_profile_detail_by_id",user_id:e,permanent_address:t,emergency_ph1:n,emergency_ph2:a,blood_group:r,medical_condition:i,holding_comments:o,signature:s})}(r,i,o,u,d,m,f,p).then(function(n){var r;t(Object(s.a)()),0==n.error?(e(n.data),t((r=n.data,Object(a.a)(l.Fb)(r)))):t(P(n.data))},function(e){t(Object(s.a)()),t(P("error occurs!!!"))})})}}function S(e){return Object(a.a)(l.Fe)(e)}function N(){return function(e,t){return new Promise(function(t,n){e(Object(s.b)()),Object(c.b)("POST","",{action:"get_enabled_users_brief_details"}).then(function(n){var i;0==n.error?(t(n.data),e(S(n.data)),n.data.length&&e(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(a,i){return new Promise(function(i,o){var l=t[n].user_Id;a(Object(s.b)()),function(e){return Object(c.b)("POST","",{action:"get_user_salary_info_by_id",user_id:e})}(l).then(function(i){if("undefined"!==typeof i.data&&"undefined"!==typeof i.data.salary_details&&i.data.salary_details.length>0){i.data;var o=r.orderBy(i.data.salary_details,["date"],["desc"]);t[n].current_salary=o[0].test&&o[0].test.total_salary,a(S(t))}a(Object(s.a)()),t.length>++n&&a(e(t,n))},function(r){a(Object(s.a)()),t.length>++n&&a(e(t,n))})})}}(n.data))):e((i=n.data,Object(a.a)(l.Qc)(i))),e(Object(s.a)())},function(t){console.log("error",t),e(Object(s.a)())})})}}},575:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.hasNextTick=t.hasSetImmediate=void 0,t.fallback=u,t.wrap=d;var r,i=n(576),o=(r=i)&&r.__esModule?r:{default:r};var c,s=t.hasSetImmediate="function"===typeof e&&e,l=t.hasNextTick="object"===typeof a&&"function"===typeof a.nextTick;function u(e){setTimeout(e,0)}function d(e){return function(t){var n=(0,o.default)(arguments,1);e(function(){t.apply(null,n)})}}c=s?e:l?a.nextTick:u,t.default=d(c)}).call(this,n(266).setImmediate,n(59))},576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t|=0;for(var n=Math.max(e.length-t,0),a=Array(n),r=0;r<n;r++)a[r]=e[t+r];return a},e.exports=t.default},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=void 0;var a,r=n(594),i=(a=r)&&a.__esModule?a:{default:a};var o="function"===typeof Symbol;function c(e){return o&&"AsyncFunction"===e[Symbol.toStringTag]}t.default=function(e){return c(e)?(0,i.default)(e):e},t.isAsync=c},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(e);return(0,a.default)(function(e,t){n(e[0],t)},t,1)};var a=i(n(586)),r=i(n(577));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},583:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var a=n(5),r=(n(24),n(12)),i=n(33),o=n(1);function c(e){return Object(a.a)(o.O)(e)}function s(){return function(e,t){return new Promise(function(t,n){e(Object(i.b)()),Object(r.b)("POST","",{action:"get_user_document"}).then(function(t){var n;e(Object(i.a)()),0===t.error?e((n=t.data,Object(a.a)(o.jc)(n))):e(c(t.data.message))},function(t){e(Object(i.a)()),e(c("error occurs!!!"))})})}}function l(e){return function(t,n){return new Promise(function(n,a){t(Object(i.b)()),function(e){return Object(r.b)("POST","",{action:"delete_user_document",id:e})}(e).then(function(e){t(Object(i.a)()),0===e.error?n(e.data.message):a(e.data.message)},function(e){t(Object(i.a)()),a("error occurs!!")})})}}},586:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var u=(0,l.default)(e),d=0,m=[],f=!1;function p(e,t,n){if(null!=n&&"function"!==typeof n)throw new Error("task callback must be a function");if(b.started=!0,(0,r.default)(e)||(e=[e]),0===e.length&&b.idle())return(0,c.default)(function(){b.drain()});for(var a=0,o=e.length;a<o;a++){var s={data:e[a],callback:n||i.default};t?b._tasks.unshift(s):b._tasks.push(s)}f||(f=!0,(0,c.default)(function(){f=!1,b.process()}))}function h(e){return function(t){d-=1;for(var n=0,r=e.length;n<r;n++){var i=e[n],o=(0,a.default)(m,i,0);0===o?m.shift():o>0&&m.splice(o,1),i.callback.apply(i,arguments),null!=t&&b.error(t,i.data)}d<=b.concurrency-b.buffer&&b.unsaturated(),b.idle()&&b.drain(),b.process()}}var y=!1,b={_tasks:new s.default,concurrency:t,payload:n,saturated:i.default,unsaturated:i.default,buffer:t/4,empty:i.default,drain:i.default,error:i.default,started:!1,paused:!1,push:function(e,t){p(e,!1,t)},kill:function(){b.drain=i.default,b._tasks.empty()},unshift:function(e,t){p(e,!0,t)},remove:function(e){b._tasks.remove(e)},process:function(){if(!y){for(y=!0;!b.paused&&d<b.concurrency&&b._tasks.length;){var e=[],t=[],n=b._tasks.length;b.payload&&(n=Math.min(n,b.payload));for(var a=0;a<n;a++){var r=b._tasks.shift();e.push(r),m.push(r),t.push(r.data)}d+=1,0===b._tasks.length&&b.empty(),d===b.concurrency&&b.saturated();var i=(0,o.default)(h(e));u(t,i)}y=!1}},length:function(){return b._tasks.length},running:function(){return d},workersList:function(){return m},idle:function(){return b._tasks.length+d===0},pause:function(){b.paused=!0},resume:function(){!1!==b.paused&&(b.paused=!1,(0,c.default)(b.process))}};return b};var a=u(n(587)),r=u(n(572)),i=u(n(591)),o=u(n(592)),c=u(n(575)),s=u(n(593)),l=u(n(577));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},587:function(e,t,n){var a=n(588),r=n(589),i=n(590);e.exports=function(e,t,n){return t===t?i(e,t,n):a(e,r,n)}},588:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,i=n+(a?1:-1);a?i--:++i<r;)if(t(e[i],i,e))return i;return-1}},589:function(e,t){e.exports=function(e){return e!==e}},590:function(e,t){e.exports=function(e,t,n){for(var a=n-1,r=e.length;++a<r;)if(e[a]===t)return a;return-1}},591:function(e,t){e.exports=function(){}},592:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}},e.exports=t.default},593:function(e,t,n){"use strict";function a(){this.head=this.tail=null,this.length=0}function r(e,t){e.length=1,e.head=e.tail=t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,a.prototype.removeLink=function(e){return e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev,e.prev=e.next=null,this.length-=1,e},a.prototype.empty=function(){for(;this.head;)this.shift();return this},a.prototype.insertAfter=function(e,t){t.prev=e,t.next=e.next,e.next?e.next.prev=t:this.tail=t,e.next=t,this.length+=1},a.prototype.insertBefore=function(e,t){t.prev=e.prev,t.next=e,e.prev?e.prev.next=t:this.head=t,e.prev=t,this.length+=1},a.prototype.unshift=function(e){this.head?this.insertBefore(this.head,e):r(this,e)},a.prototype.push=function(e){this.tail?this.insertAfter(this.tail,e):r(this,e)},a.prototype.shift=function(){return this.head&&this.removeLink(this.head)},a.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)},a.prototype.toArray=function(){for(var e=Array(this.length),t=this.head,n=0;n<this.length;n++)e[n]=t.data,t=t.next;return e},a.prototype.remove=function(e){for(var t=this.head;t;){var n=t.next;e(t)&&this.removeLink(t),t=n}return this},e.exports=t.default},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,r.default)(function(t,n){var r;try{r=e.apply(this,t)}catch(i){return n(i)}(0,a.default)(r)&&"function"===typeof r.then?r.then(function(e){c(n,null,e)},function(e){c(n,e.message?e:new Error(e))}):n(null,r)})};var a=o(n(573)),r=o(n(595)),i=o(n(575));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){try{e(t,n)}catch(a){(0,i.default)(s,a)}}function s(e){throw e}e.exports=t.default},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=(0,i.default)(arguments),n=t.pop();e.call(this,t,n)}};var a,r=n(576),i=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},604:function(e,t,n){},609:function(e,t,n){"use strict";var a=n(26),r=n(27),i=n(29),o=n(28),c=n(30),s=n(13),l=n(0),u=n.n(l),d=n(635),m=n(45),f=n(36),p=n(178),h=n(181),y=n.n(h),b=n(105),v=n.n(b),g=n(580),_=n(12),j=(n(33),n(583)),E=(n(637),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={loading:!1},e.handleSubmit=e.handleSubmit.bind(Object(s.a)(Object(s.a)(e))),e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.params,a=this.props.file,r=this.props.fileName,i=this.props.url;if(a)if(a.type.includes("image")){this.setState({loading:!0});var o=Object(p.b)(a);(new d.a).compress(a,{quality:o}).then(function(e){var a=new FormData;for(var o in n)a.append(o,n[o]);a.delete("imageUrl"),a.append(r,e,e.name),a.append("submit","Upload"),y.a.post(i,a).then(function(e){if(Object(m.b)("Success !","File uploaded successfully","success"),t.setState({loading:!1}),"Admin"===t.props.loggedUser.data.role)t.props.onFetchDevice(),t.props.onFetchUnapprovedUser(),t.props.onGetMyDocuments();else{if("HR"===t.props.loggedUser.data.role)return;t.props.onGetMyDocuments()}}).catch(function(e){413===e.request.status?(Object(m.b)("Error","File too large to upload","error"),t.setState({loading:!1})):(Object(m.b)("Error",e.request.statusText,"error"),t.setState({loading:!1}))})})}else{var c=new FormData,s=this.props.loggedUser.data.role;for(var l in n)c.append(l,n[l]);c.delete("imageUrl"),c.append(r,a),c.append("submit","Upload"),this.props.onUploadFile(c,i,s)}}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.props.loading||this.state.loading?u.a.createElement(v.a,{size:30,thickness:3,style:{marginLeft:"50%"}}):u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{type:"submit",name:"submit",value:"Upload",className:"col-xs-12 md-btn md-raised indigo",onClick:function(t){return e.props.callUpdateDocuments(t)}})))}}]),t}(l.Component));t.a=Object(f.b)(function(e){return{loading:e.uploadImage.loading,loggedUser:e.logged_user.userLogin}},function(e){return{onFetchDevice:function(){return e(g.p())},onUploadFile:function(){return e(function(e){e({type:"UPLOADING_FILE"}),Object(_.c)(t,n).then(function(t){if(e({type:"UPLOAD_FILE",payload:t}),Object(m.b)("Success !","File uploaded successfully","success"),"Admin"===a)e(g.p()),e(g.s()),e(j.b());else{if("HR"===a)return;e(j.b())}}).catch(function(t){e({type:"UPLOAD_FILE",payload:!1}),Object(m.b)("Error",t,"error")})});var t,n,a},onFetchUnapprovedUser:function(){return e(g.s())},onGetMyDocuments:function(){return e(j.b())}}})(E)}}]);
//# sourceMappingURL=19.bc43770d.chunk.js.map