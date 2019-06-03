(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1173:function(e,a,t){"use strict";t.r(a);var l=t(26),s=t(27),r=t(29),n=t(28),c=t(30),i=t(13),o=t(0),d=t.n(o),m=t(36),u=t(566),p=t(71),y=t.n(p),_=t(10),f=t.n(_),h=t(720),v=t.n(h),g=t(45),E=t(24),b=t(129),N=t(37),w=t(262),j=t(133),S=t(269),x=function(e){var a=e.data,t=d.a.createElement("tr",null,d.a.createElement("td",{colSpan:5},d.a.createElement("div",{className:"text-center"},"No holding data available")));return a.length&&(t=f.a.map(a,function(e,a){return d.a.createElement("tr",{key:a},d.a.createElement("td",null,"Rs.",e.holding_amt),d.a.createElement("td",null,y()(e.holding_start_date).format("DD-MMMM-YYYY")),d.a.createElement("td",null,y()(e.holding_end_date).format("DD-MMMM-YYYY")," (",e.holding_month," ",e.holding_month<2?"month":"months",")"),d.a.createElement("td",null,e.reason),d.a.createElement("td",null,y()(e.last_updated_on).format("DD-MMMM-YYYY")))})),d.a.createElement("div",null,d.a.createElement("table",{className:"table table-striped"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("td",null,"Holding Amount"),d.a.createElement("td",null,"Start"),d.a.createElement("td",null,"End"),d.a.createElement("td",null,"Reason"),d.a.createElement("td",null,"Updated on"))),d.a.createElement("tbody",null,t)))},A=t(596),O=t.n(A),C=(t(107),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).addHolding=function(){var e=_.cloneDeep(t.state);e.holding_from=y()(e.holding_from).format("YYYY-MM-DD"),t.props.callAddUserHolding(e)},t.state={user_id:"",holding_from:"",holding_till:"",holding_amount:"",reason:""},t.handleHoldingFrom=t.handleHoldingFrom.bind(Object(i.a)(Object(i.a)(t))),t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"handleHoldingFrom",value:function(e){this.setState({holding_from:e})}},{key:"componentWillReceiveProps",value:function(e){this.setState({user_id:e.userid,holding_from:"",holding_till:"",holding_amount:"",reason:""})}},{key:"render",value:function(){for(var e=this,a=(_.cloneDeep(this.constructor.styles),this.state.applicable_from,[]),t=1;t<=24;t++)a.push(d.a.createElement("option",{key:t,value:t},t," months"));return d.a.createElement("div",{className:"row salary-blocks-margin salary-row-bg"},d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("div",{className:"salary-title"},"Holding From : "),d.a.createElement(O.a,{dateFormat:"YYYY-MM-DD",onChange:this.handleHoldingFrom,className:"form-control date-field date-holding-field",value:this.state.holding_from})),d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("span",{className:"salary-title"},"Applicable Months : "),d.a.createElement("select",{className:"form-control",value:this.state.holding_till,onChange:function(a){return e.setState({holding_till:a.target.value})}},d.a.createElement("option",{value:""},"Select Month"),a)),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement("div",{className:"salary-title"},"Holding Amount : "),d.a.createElement("span",null,d.a.createElement("input",{type:"text",className:"form-control",ref:"holding_amount",onChange:function(){return e.setState({holding_amount:e.refs.holding_amount.value})},value:this.state.holding_amount}))),d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("div",{className:"salary-title"},"Reason : "),d.a.createElement("span",null,d.a.createElement("input",{type:"text",className:"form-control",ref:"reason",onChange:function(){return e.setState({reason:e.refs.reason.value})},value:this.state.reason}))),d.a.createElement("div",{className:"col-sm-1 text-center"},d.a.createElement("i",{className:"material-icons add-icon",onClick:function(){return e.addHolding()}},"add_circle_outline")))}}]),a}(d.a.Component));C.styles={leaveDiv:{marginBottom:"10px"}};var D=C,U=t(732),M=t(4),k=t(176),Y=t(733),P=t(734),H=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).props.onIsAlreadyLogin(),t.state={selected_user_name:"",selected_user_image:"",selected_user_jobtitle:"",selected_user_id:"",defaultUserDisplay:"",salary_history:[],holding_history:[],user_latest_salary_details:{},user_latest_holding_details:{},user_date_of_joining:{},msg:"",current_date:{},subList:[]},t.onUserClick=t.onUserClick.bind(Object(i.a)(Object(i.a)(t))),t.callAddUserSalary=t.callAddUserSalary.bind(Object(i.a)(Object(i.a)(t))),t.callAddUserHolding=t.callAddUserHolding.bind(Object(i.a)(Object(i.a)(t))),t.viewSalarySummary=t.viewSalarySummary.bind(Object(i.a)(Object(i.a)(t))),t.callDeleteUserSalary=t.callDeleteUserSalary.bind(Object(i.a)(Object(i.a)(t))),t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.props.onUsersList({sort_by:"salary"});y()().format("YYYY-MM-DD")}},{key:"componentWillReceiveProps",value:function(e){var a=Object(N.e)(this.props.location.pathname,e.loggedUser);a.status&&this.props.history.push(a.redirectTo),this.setState({subList:this.props.usersList.users});var t=[],l=[],s={};"undefined"!==typeof e.manageSalary.salary_structure.salary_details&&e.manageSalary.salary_structure.salary_details.length>0&&(t=_.sortBy(e.manageSalary.salary_structure.salary_details,"date").reverse()),"undefined"!==typeof e.manageSalary.salary_structure.holding_details&&e.manageSalary.salary_structure.holding_details.length>0&&(s=(l=e.manageSalary.salary_structure.holding_details.reverse())[0],this.setState({})),this.setState({salary_history:t,user_latest_salary_details:{},holding_history:l,user_latest_holding_details:s})}},{key:"componentDidUpdate",value:function(){if(""==this.state.defaultUserDisplay&&this.props.usersList.users.length>0){var e=this.props.loggedUser.data.role==E.a.HR?this.state.subList[0]:this.props.usersList.users[0],a=v.a.parse(this.props.location.search).selectedUser||e.user_Id;this.onUserClick(a)}""!==this.props.manageSalary.status_message&&Object(g.b)(this.props.manageSalary.status_message)}},{key:"onUserClick",value:function(e){var a=this,t="",l="",s="",r="",n="";if(this.props.usersList.users.length>0){var c=_.find(this.props.usersList.users,{user_Id:e});"undefined"!==typeof c&&(t=c.name,l=c.slack_profile.image_192,s=c.jobtitle,r=c.user_Id,n=c.dateofjoining,this.props.history.push("manage_salary?selectedUser="+c.user_Id))}this.setState({defaultUserDisplay:e,selected_user_name:t,selected_user_image:l,selected_user_jobtitle:s,selected_user_id:r,selected_user_date_of_joining:n}),this.props.onUserSalaryDetails(e).then(function(e){a.setState({msg:e.data.message})})}},{key:"callAddUserSalary",value:function(e){this.props.onAddNewSalary(e).then(function(e){},function(e){Object(g.b)(e)})}},{key:"callAddUserHolding",value:function(e){this.props.onAddNewHolding(e).then(function(e){},function(e){Object(g.b)(e)})}},{key:"viewSalarySummary",value:function(e,a){e.stopPropagation();var t=this.state.salary_details;_.forEach(this.state.salary_history,function(e,l){e.test.id==a&&(t=e)}),this.setState({user_latest_salary_details:t})}},{key:"callDeleteUserSalary",value:function(e,a,t){var l=this;e.stopPropagation(),this.props.onDeleteUserSalary(a,t).then(function(e){l.onUserClick(a)},function(e){Object(g.b)(e)})}},{key:"render",value:function(){var e,a=this,t=this.state.msg;return e=t?d.a.createElement("div",{className:"well well-lg",style:{color:"red"}},d.a.createElement("i",{className:"fa fa-exclamation-triangle fa-3x","aria-hidden":"true"}),t," "):this.state.salary_history.map(function(e,t){return d.a.createElement(P.a,{key:t,userid:a.state.selected_user_id,callAddUserHolding:a.callAddUserHolding,salaryStructure:a.props.manageSalary.salary_structure,item:e,displayPage:"manage",viewSalarySummary:a.viewSalarySummary,callDeleteUserSalary:a.callDeleteUserSalary})}),d.a.createElement("div",null,d.a.createElement(b.a,this.props),d.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},d.a.createElement(w.a,{pageTitle:"Manage Salaries",showLoading:this.props.frontend.show_loading,userListHeader:!0}),d.a.createElement(S.a,{users:this.props.usersList.users,selectedUserId:this.state.selected_user_id,onUserClick:this.onUserClick}),d.a.createElement("div",{className:"app-body",id:"view"},d.a.createElement("div",{className:"padding"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 hidden-xs",id:"fixedScroll"},d.a.createElement(j.a,Object.assign({users:this.props.loggedUser.data.role==E.a.HR?this.state.subList:this.props.usersList.users,notSorted:!0,selectedUserId:this.state.selected_user_id,onUserClick:this.onUserClick},this.props))),d.a.createElement("div",{className:"col-md-10 col-sm-12 col-xs-12"},d.a.createElement("div",{className:"box m-t-xs"},d.a.createElement("div",{className:"p-a text-center"},d.a.createElement("div",{className:"text-md m-t block"},this.state.selected_user_name),d.a.createElement("p",null,d.a.createElement("small",null,this.state.selected_user_jobtitle)))),d.a.createElement("div",{className:"box m-t-xs"},d.a.createElement("div",{className:"p-a block "},d.a.createElement("h6",{className:"text-center"},"Salary Revision"),d.a.createElement("hr",null),d.a.createElement("div",{className:"content-salary"},e,d.a.createElement(U.a,Object.assign({},this.props,{userid:this.state.selected_user_id,callAddUserSalary:this.callAddUserSalary,user_latest_salary_details:this.state.user_latest_salary_details,latest_salary_literally:this.state.salary_history[0]}))))),d.a.createElement("div",{className:"box m-t-xs"},d.a.createElement("div",{className:"p-a block "},d.a.createElement("h6",{className:"text-center"},"Holding Revision"),d.a.createElement("hr",null),d.a.createElement("div",{className:"content-salary"},d.a.createElement(x,{data:this.state.holding_history}),d.a.createElement(D,Object.assign({},this.props,{userid:this.state.selected_user_id,callAddUserHolding:this.callAddUserHolding,user_latest_salary_details:this.state.user_latest_salary_details})))))))))))}}]),a}(d.a.Component);var F=Object(m.b)(function(e){return{frontend:e.frontend.toJS(),loggedUser:e.logged_user.userLogin,usersList:e.usersList.toJS(),manageSalary:e.manageSalary.toJS()}},function(e){return{onIsAlreadyLogin:function(){return e(M.isAlreadyLogin())},onUsersList:function(a){return e(k.c(a))},onUserSalaryDetails:function(a){return e(Y.d(a))},onAddNewSalary:function(a){return e(Y.b(a))},onAddNewHolding:function(a){return e(Y.a(a))},onDeleteUserSalary:function(a,t){return e(Y.c(a,t))}}})(H),L=Object(u.a)(F);a.default=L},720:function(e,a,t){"use strict";var l=t(721),s=t(725),r=t(729),n=t(730),c=t(731);function i(e,a){return a.encode?a.strict?r(e):encodeURIComponent(e):e}function o(e,a){return a.decode?n(e):e}function d(e){var a=e.indexOf("#");return-1!==a&&(e=e.slice(0,a)),e}function m(e){var a=(e=d(e)).indexOf("?");return-1===a?"":e.slice(a+1)}function u(e,a){var t=function(e){var a;switch(e.arrayFormat){case"index":return function(e,t,l){a=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),a?(void 0===l[e]&&(l[e]={}),l[e][a[1]]=t):l[e]=t};case"bracket":return function(e,t,l){a=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),a?void 0!==l[e]?l[e]=[].concat(l[e],t):l[e]=[t]:l[e]=t};case"comma":return function(e,a,t){var l="string"===typeof a&&a.split("").indexOf(",")>-1?a.split(","):a;t[e]=l};default:return function(e,a,t){void 0!==t[e]?t[e]=[].concat(t[e],a):t[e]=a}}}(a=Object.assign({decode:!0,arrayFormat:"none"},a)),s=Object.create(null);if("string"!==typeof e)return s;if(!(e=e.trim().replace(/^[?#&]/,"")))return s;var r=!0,n=!1,i=void 0;try{for(var d,m=e.split("&")[Symbol.iterator]();!(r=(d=m.next()).done);r=!0){var u=d.value,p=c(u.replace(/\+/g," "),"="),y=l(p,2),_=y[0],f=y[1];f=void 0===f?null:o(f,a),t(o(_,a),f,s)}}catch(h){n=!0,i=h}finally{try{r||null==m.return||m.return()}finally{if(n)throw i}}return Object.keys(s).sort().reduce(function(e,a){var t=s[a];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[a]=function e(a){return Array.isArray(a)?a.sort():"object"===typeof a?e(Object.keys(a)).sort(function(e,a){return Number(e)-Number(a)}).map(function(e){return a[e]}):a}(t):e[a]=t,e},Object.create(null))}a.extract=m,a.parse=u,a.stringify=function(e,a){if(!e)return"";var t=function(e){switch(e.arrayFormat){case"index":return function(a){return function(t,l){var r=t.length;return void 0===l?t:[].concat(s(t),null===l?[[i(a,e),"[",r,"]"].join("")]:[[i(a,e),"[",i(r,e),"]=",i(l,e)].join("")])}};case"bracket":return function(a){return function(t,l){return void 0===l?t:[].concat(s(t),null===l?[[i(a,e),"[]"].join("")]:[[i(a,e),"[]=",i(l,e)].join("")])}};case"comma":return function(a){return function(t,l,s){return null===l||void 0===l||0===l.length?t:0===s?[[i(a,e),"=",i(l,e)].join("")]:[[t,i(l,e)].join(",")]}};default:return function(a){return function(t,l){return void 0===l?t:[].concat(s(t),null===l?[i(a,e)]:[[i(a,e),"=",i(l,e)].join("")])}}}}(a=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},a)),l=Object.keys(e);return!1!==a.sort&&l.sort(a.sort),l.map(function(l){var s=e[l];return void 0===s?"":null===s?i(l,a):Array.isArray(s)?s.reduce(t(l),[]).join("&"):i(l,a)+"="+i(s,a)}).filter(function(e){return e.length>0}).join("&")},a.parseUrl=function(e,a){return{url:d(e).split("?")[0]||"",query:u(m(e),a)}}},721:function(e,a,t){var l=t(722),s=t(723),r=t(724);e.exports=function(e,a){return l(e)||s(e,a)||r()}},722:function(e,a){e.exports=function(e){if(Array.isArray(e))return e}},723:function(e,a){e.exports=function(e,a){var t=[],l=!0,s=!1,r=void 0;try{for(var n,c=e[Symbol.iterator]();!(l=(n=c.next()).done)&&(t.push(n.value),!a||t.length!==a);l=!0);}catch(i){s=!0,r=i}finally{try{l||null==c.return||c.return()}finally{if(s)throw r}}return t}},724:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},725:function(e,a,t){var l=t(726),s=t(727),r=t(728);e.exports=function(e){return l(e)||s(e)||r()}},726:function(e,a){e.exports=function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}},727:function(e,a){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},728:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},729:function(e,a,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())})}},730:function(e,a,t){"use strict";var l=new RegExp("%[a-f0-9]{2}","gi"),s=new RegExp("(%[a-f0-9]{2})+","gi");function r(e,a){try{return decodeURIComponent(e.join(""))}catch(s){}if(1===e.length)return e;a=a||1;var t=e.slice(0,a),l=e.slice(a);return Array.prototype.concat.call([],r(t),r(l))}function n(e){try{return decodeURIComponent(e)}catch(s){for(var a=e.match(l),t=1;t<a.length;t++)a=(e=r(a,t).join("")).match(l);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(a){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},l=s.exec(e);l;){try{t[l[0]]=decodeURIComponent(l[0])}catch(a){var r=n(l[0]);r!==l[0]&&(t[l[0]]=r)}l=s.exec(e)}t["%C2"]="\ufffd";for(var c=Object.keys(t),i=0;i<c.length;i++){var o=c[i];e=e.replace(new RegExp(o,"g"),t[o])}return e}(e)}}},731:function(e,a,t){"use strict";e.exports=function(e,a){if("string"!==typeof e||"string"!==typeof a)throw new TypeError("Expected the arguments to be of type `string`");if(""===a)return[e];var t=e.indexOf(a);return-1===t?[e]:[e.slice(0,t),e.slice(t+a.length)]}},732:function(e,a,t){"use strict";var l=t(7),s=t(26),r=t(27),n=t(29),c=t(28),i=t(30),o=t(0),d=t.n(o),m=t(10),u=t(71),p=t.n(u),y=t(596),_=t.n(y),f=(t(107),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).handleApplicableFrom=function(e){t.setState({applicable_from:e})},t.addSalary=function(){var e=m.cloneDeep(t.state);e.applicable_from=p()(e.applicable_from).format("YYYY-MM-DD"),t.props.callAddUserSalary(e)},t.onValueChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.state={user_id:t.props.userid||"",applicable_from:null,applicable_till:null,applicable_month:"",total_salary:"0",total_earning:"0",total_deduction:"0",leave:"0",increment_amount:"0",basic:"0",hra:"0",conveyance:"0",medical_allowance:"0",special_allowance:"0",arrear:"",epf:"0",loan:"0",advance:"0",misc_deduction:"0",tds:"0"},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(){var e=+this.state.basic+ +this.state.hra+ +this.state.conveyance+ +this.state.medical_allowance+ +this.state.special_allowance+ +this.state.arrear,a=+this.state.epf+ +this.state.loan+ +this.state.advance+ +this.state.misc_deduction+ +this.state.tds,t=(e-a).toFixed(2);t==this.state.total_salary&&e==this.state.total_earning&&a==this.state.total_deduction||this.setState({total_earning:e,total_salary:t,total_deduction:a,increment_amount:this.props.latest_salary_literally&&this.props.latest_salary_literally.test&&this.props.latest_salary_literally.test.total_salary?t-this.props.latest_salary_literally.test.total_salary:0})}},{key:"componentWillReceiveProps",value:function(e){var a="0",t="0",l="0",s="0",r="0",n="0",c="0",i="0",o="0",d="0",m="0",u="0",p="0",y="0";e.user_latest_salary_details&&("undefined"!=typeof e.user_latest_salary_details.test&&("undefined"!=typeof e.user_latest_salary_details.test.applicable_from&&(console.log("props.user_latest_salary_details.test.applicable_from",e.user_latest_salary_details.test.applicable_from),new Date(e.user_latest_salary_details.test.applicable_from)),e.user_latest_salary_details.test.applicable_till,"undefined"!=typeof e.user_latest_salary_details.test.total_salary&&(a=e.user_latest_salary_details.test.total_salary),"undefined"!=typeof e.user_latest_salary_details.test.leaves_allocated&&(t=e.user_latest_salary_details.test.leaves_allocated),"undefined"!=typeof e.user_latest_salary_details.test.increment_amount&&(l=e.user_latest_salary_details.test.increment_amount)),"undefined"!=typeof e.user_latest_salary_details.Basic&&(s=e.user_latest_salary_details.Basic),"undefined"!=typeof e.user_latest_salary_details.HRA&&(r=e.user_latest_salary_details.HRA),"undefined"!=typeof e.user_latest_salary_details.Conveyance&&(n=e.user_latest_salary_details.Conveyance),"undefined"!=typeof e.user_latest_salary_details.Medical_Allowance&&(c=e.user_latest_salary_details.Medical_Allowance),"undefined"!=typeof e.user_latest_salary_details.Medical_Allowance&&(i=e.user_latest_salary_details.Special_Allowance),"undefined"!=typeof e.user_latest_salary_details.Arrears&&(o=e.user_latest_salary_details.Arrears),"undefined"!=typeof e.user_latest_salary_details.EPF&&(d=e.user_latest_salary_details.EPF),"undefined"!=typeof e.user_latest_salary_details.Loan&&(m=e.user_latest_salary_details.Loan),"undefined"!=typeof e.user_latest_salary_details.Advance&&(u=e.user_latest_salary_details.Advance),"undefined"!=typeof e.user_latest_salary_details.Misc_Deductions&&(p=e.user_latest_salary_details.Misc_Deductions),"undefined"!=typeof e.user_latest_salary_details.TDS&&(y=e.user_latest_salary_details.TDS),this.setState({user_id:e.userid,total_salary:a,leave:t,increment_amount:l,basic:s,hra:r,conveyance:n,medical_allowance:c,special_allowance:i,arrear:o,epf:d,loan:m,advance:u,misc_deduction:p,tds:y}))}},{key:"render",value:function(){for(var e=this,a=(m.cloneDeep(this.constructor.styles),this.state.applicable_from,[]),t=1;t<=24;t++)a.push(d.a.createElement("option",{key:t,value:t},t," months"));return d.a.createElement("div",{className:"row salary-blocks-margin salary-row-bg"},d.a.createElement("div",{className:"col-md-12 col-sm-12 salary-range-wrapper"},d.a.createElement("div",{className:"applicable-from"},d.a.createElement("span",{className:"salary-title"},"Applicable From : "),d.a.createElement(_.a,{dateFormat:"YYYY-MM-DD",onChange:this.handleApplicableFrom,className:"form-control date-field",value:this.state.applicable_from})),d.a.createElement("div",{className:"applicable-till"},d.a.createElement("span",{className:"salary-title"},"Applicable Months : "),d.a.createElement("select",{className:"form-control",value:this.state.applicable_month,onChange:function(a){return e.setState({applicable_month:a.target.value})}},d.a.createElement("option",{value:""},"Select"),a)),d.a.createElement("div",{className:"leaves"},d.a.createElement("span",{className:"salary-title"},"Leaves : "),d.a.createElement("input",{type:"text",className:"form-control leave-field",ref:"leave",onChange:function(){return e.setState({leave:e.refs.leave.value})},value:this.state.leave})),d.a.createElement("div",{className:"incremented-value"},d.a.createElement("span",{className:"salary-title"},"Incremented Amount : "),d.a.createElement("input",{type:"text",className:"form-control",onChange:function(a){return e.setState({increment_amount:a.target.value})},value:this.state.increment_amount,readOnly:!0}))),d.a.createElement("div",{className:"col-md-12 salary-col-padding salary-add-details"},d.a.createElement("div",{className:"col-md-1 col-sm-2 col-xs-12 salary-total-width"},d.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total"),d.a.createElement("div",{className:"col-sm-12 salary-total-value"},"\u20b9 ",parseInt(this.state.total_salary).toFixed(2))),d.a.createElement("div",{className:"col-md-5 col-sm-10 col-xs-12 bg-success salary-add-block salary-addition-width"},d.a.createElement("div",{className:"col-sm-12"},d.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total Earnings"),d.a.createElement("div",{className:"col-sm-12 salary-total-value"},"\u20b9 ",parseInt(this.state.total_earning).toFixed(2))),d.a.createElement("div",{className:"col-sm-2 cell salary-basic-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Basic"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"basic",type:"text",className:"form-control input-sm",ref:"basic",onChange:this.onValueChange,value:this.state.basic}))),d.a.createElement("div",{className:"col-sm-2 cell salary-hra-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"HRA"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"hra",type:"text",className:"form-control input-sm",ref:"hra",onChange:this.onValueChange,value:this.state.hra}))),d.a.createElement("div",{className:"col-sm-2 cell salary-conveyance-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Conveyance"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"conveyance",type:"text",className:"form-control input-sm",ref:"conveyance",onChange:this.onValueChange,value:this.state.conveyance}))),d.a.createElement("div",{className:"col-sm-2 cell salary-medical-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Medical Allowance"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"medical_allowance",type:"text",className:"form-control input-sm",ref:"medical_allowance",onChange:this.onValueChange,value:this.state.medical_allowance}))),d.a.createElement("div",{className:"col-sm-2 cell salary-special-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Special Allowance"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"special_allowance",type:"text",className:"form-control input-sm",ref:"special_allowance",onChange:this.onValueChange,value:this.state.special_allowance}))),d.a.createElement("div",{className:"col-sm-2 cell salary-arrears-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Arrears"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"arrear",type:"text",className:"form-control input-sm",ref:"arrear",onChange:this.onValueChange,value:this.state.arrear})))),d.a.createElement("div",{className:"col-md-6 col-sm-12 col-xs-12 bg-danger salary-add-block salary-deduction-width"},d.a.createElement("div",{className:"col-sm-12"},d.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total Deductions"),d.a.createElement("div",{className:"col-sm-12 salary-total-value"},"\u20b9 ",parseInt(this.state.total_deduction).toFixed(2))),d.a.createElement("div",{className:"col-sm-2 cell salary-epf-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"EPF"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"epf",type:"text",className:"form-control input-sm",ref:"epf",onChange:this.onValueChange,value:this.state.epf}))),d.a.createElement("div",{className:"col-sm-2 cell salary-loan-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Loan"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"loan",type:"text",className:"form-control input-sm",ref:"loan",onChange:this.onValueChange,value:this.state.loan}))),d.a.createElement("div",{className:"col-sm-2 cell salary-advance-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Advance"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"advance",type:"text",className:"form-control input-sm",ref:"advance",onChange:this.onValueChange,value:this.state.advance}))),d.a.createElement("div",{className:"col-sm-2 cell salary-miscdeductions-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"Misc Deductions"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"misc_deduction",type:"text",className:"form-control input-sm",ref:"misc_deduction",onChange:this.onValueChange,value:this.state.misc_deduction}))),d.a.createElement("div",{className:"col-sm-1 cell salary-tds-width"},d.a.createElement("div",{className:"col-sm-12 salary-title"},"TDS"),d.a.createElement("div",{className:"col-sm-12 salary-input-wrapper"},d.a.createElement("input",{name:"tds",type:"text",className:"form-control input-sm",ref:"tds",onChange:this.onValueChange,value:this.state.tds}))),d.a.createElement("div",{className:"col-sm-3 cell center salary-options-width"},d.a.createElement("i",{className:"material-icons add-icon",onClick:function(){return e.addSalary()}},"add_circle_outline")))))}}]),a}(d.a.Component));f.styles={leaveDiv:{marginBottom:"10px"}},a.a=f},733:function(e,a,t){"use strict";t.d(a,"d",function(){return i}),t.d(a,"b",function(){return d}),t.d(a,"a",function(){return u}),t.d(a,"c",function(){return y});var l=t(5),s=(t(10),t(12)),r=t(33),n=t(1);function c(e){return Object(l.a)(n.Bc)(e)}function i(e){return function(a,t){return new Promise(function(t,l){a(Object(r.b)()),function(e){return Object(s.b)("POST","",{action:"get_user_salary_info_by_id",user_id:e})}(e).then(function(e){if(t(e),a(Object(r.a)()),"undefined"!==typeof e.data&&"undefined"!==typeof e.data.salary_details&&e.data.salary_details.length>0){var l=e.data;a(c(l))}else a(c([]))},function(e){a(Object(r.a)()),a(c([]))})})}}function o(e){return Object(l.a)(n.w)(e)}function d(e){return function(a,t){var c="",d="",m="",u="",p="",y="",_="",f="",h="",v="",g="",E="",b="",N="",w="",j="",S="",x="";return"undefined"!==typeof e.user_id&&(c=e.user_id),"undefined"!==typeof e.applicable_from&&(d=e.applicable_from),"undefined"!==typeof e.applicable_till&&(m=e.applicable_till),"undefined"!==typeof e.applicable_month&&(u=e.applicable_month),"undefined"!==typeof e.total_salary&&(p=e.total_salary),"undefined"!==typeof e.leave&&(y=e.leave),"undefined"!==typeof e.increment_amount&&(_=e.increment_amount),"undefined"!==typeof e.basic&&(f=e.basic),"undefined"!==typeof e.hra&&(h=e.hra),"undefined"!==typeof e.conveyance&&(v=e.conveyance),"undefined"!==typeof e.medical_allowance&&(g=e.medical_allowance),"undefined"!==typeof e.special_allowance&&(E=e.special_allowance),"undefined"!==typeof e.arrear&&(b=e.arrear),"undefined"!==typeof e.epf&&(N=e.epf),"undefined"!==typeof e.loan&&(w=e.loan),"undefined"!==typeof e.advance&&(j=e.advance),"undefined"!==typeof e.misc_deduction&&(S=e.misc_deduction),"undefined"!==typeof e.tds&&(x=e.tds),""===c?Promise.reject("User Id is empty"):""===d?Promise.reject("Applicable from date is empty"):""===m?Promise.reject("Applicable till date is empty"):""===u?Promise.reject("Applicable month empty"):""===p?Promise.reject("Total Salary is empty"):""===y?Promise.reject("Leave is empty"):""===_?Promise.reject("Incremented amount empty"):""===f?Promise.reject("Basic is empty"):""===h?Promise.reject("HRA date is empty"):""===v?Promise.reject("Conveyance is empty"):""===g?Promise.reject("Medical_allowance is empty"):""===E?Promise.reject("Special Allowance is empty"):""===b?Promise.reject("Arrear is empty"):""===N?Promise.reject("EPF is empty"):""===w?Promise.reject("Loan is empty"):""===j?Promise.reject("Advance is empty"):""===S?Promise.reject("Misc Deduction is empty"):""===x?Promise.reject("TDS is empty"):new Promise(function(t,A){a(Object(r.b)()),function(e,a,t,l,r,n,c,i,o,d,m,u,p,y,_,f,h,v,g){var E={action:"add_user_salary",user_id:e,applicable_from:a,applicable_till:t,applicable_month:l,total_salary:r,leave:n,increment_amount:c,basic:i,hra:o,conveyance:d,medical_allowance:m,special_allowance:u,arrear:p,epf:y,loan:_,advance:f,misc_deduction:h,tds:v};return g&&(E.first_update=g),Object(s.b)("POST","",E)}(c,d,m,u,p,y,_,f,h,v,g,E,b,N,w,j,S,x,e.first_update).then(function(e){var s;a(Object(r.a)()),0==e.error.length?(a((s=e.data,Object(l.a)(n.Kb)(s))),a(i(c)),t()):(a(o(e.error[0])),A(e.error[0]))},function(e){a(Object(r.a)()),a(o("error occurs"))})})}}function m(e){return Object(l.a)(n.u)(e)}function u(e){return function(a,t){var c="",o="",d="",u="",p="";return"undefined"!==typeof e.user_id&&(c=e.user_id),"undefined"!==typeof e.holding_from&&(o=e.holding_from),"undefined"!==typeof e.holding_till&&(d=e.holding_till),"undefined"!==typeof e.holding_amount&&(u=e.holding_amount),"undefined"!==typeof e.reason&&(p=e.reason),""===c?Promise.reject("User Id is empty"):""===o?Promise.reject("Holding from date is empty"):""===d?Promise.reject("Holding till date is empty"):""===u?Promise.reject("Holding amount is empty"):""===p?Promise.reject("Reason is empty"):new Promise(function(e,t){a(Object(r.b)()),function(e,a,t,l,r){return Object(s.b)("POST","",{action:"add_user_holding",user_id:e,holding_start_date:a,holding_end_date:"",holding_month:t,holding_amt:l,reason:r})}(c,o,d,u,p).then(function(e){var t;a(Object(r.a)()),0==e.error.length?(a((t=e.data,Object(l.a)(n.Ib)(t))),a(i(c))):a(m(e.error[0]))},function(e){a(Object(r.a)()),a(m("error occurs"))})})}}function p(e){return Object(l.a)(n.C)(e)}function y(e,a){return function(t,c){return new Promise(function(c,i){t(Object(r.b)()),function(e,a){return Object(s.b)("POST","",{action:"delete_salary",user_id:e,salary_id:a})}(e,a).then(function(e){if(t(Object(r.a)()),"undefined"!==typeof e.error&&0==e.error){var a=e.data.message;t((s=a,Object(l.a)(n.Sb)(s))),c(a)}else t(p("error")),i("error occurs");var s},function(e){t(Object(r.a)()),t(p("error")),i("error occurs")})})}}},734:function(e,a,t){"use strict";var l=t(0),s=t.n(l),r=t(10),n=t(71),c=t.n(n);a.a=function(e){var a=e.item,t=e.userid,l=e.displayPage,n=e.viewSalarySummary,i=e.callDeleteUserSalary,o=e.salaryStructure,d=e.callAddUserHolding,m=(1*a.Basic+1*a.HRA+1*a.Conveyance+1*a.Medical_Allowance+1*a.Special_Allowance+1*a.Arrears).toFixed(2),u=(1*a.EPF+1*a.Loan+1*a.Advance+1*a.Misc_Deductions+1*a.TDS).toFixed(2),p=function(e){var a=Number(e);return Math.round(a)===a?a:a.toFixed(2)},y=!1;if(o){var _=Object(r.orderBy)(o.salary_details,["date"],["desc"]),f=Object(r.orderBy)(o.holding_details,["last_updated_on"],["desc"]);_.length>0&&f.length>0&&(y=_[0].date===a.date&&f[0].holding_amt>0)}return s.a.createElement("div",{className:"row salary-blocks-margin salary-row-bg",onClick:function(e){return"manage"===l&&n(e,a.test.id)}},s.a.createElement("div",{className:"col-md-12 col-sm-12 salary-col-title-padding"},s.a.createElement("div",null,s.a.createElement("span",{className:"salary-title"},"Applicable From: ")," ",c()(a.test.applicable_from).format("DD-MMMM-YYYY")||"--"," ",s.a.createElement("span",{className:"divider"},"|"),s.a.createElement("span",{className:"salary-title"}," Applicable Till: ")," ","".concat(a.test.applicable_month?a.test.applicable_month+" months":"--"," (").concat(c()(a.test.applicable_till).format("DD-MMMM-YYYY")||"--",")")," ",s.a.createElement("span",{className:"divider"},"|"),s.a.createElement("span",{className:"salary-title"}," Increment Amount: ")," ",a.Increment_Amount||"--"," ",s.a.createElement("span",{className:"divider"},"|"),s.a.createElement("span",{className:"salary-title"}," Leaves Allocated: ")," ",a.test.leaves_allocated||"--"," ",s.a.createElement("span",{className:"divider"},"|"),s.a.createElement("span",{className:"salary-title"}," Updated On: ")," ",c()(a.test.last_updated_on).format("DD-MMMM-YYYY")||"--")),s.a.createElement("div",{className:"col-md-12 salary-col-padding salary-details"},s.a.createElement("div",{className:"col-md-1 col-sm-2 col-xs-12 salary-total-width"},s.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total"),s.a.createElement("div",{className:"col-sm-12 salary-total-value"},a.test.total_salary)),s.a.createElement("div",{className:"col-md-5 col-sm-10 col-xs-12 bg-success salary-block salary-addition-width"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total Earnings"),s.a.createElement("div",{className:"col-sm-12 salary-total-value"},m)),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-basic-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Basic"),s.a.createElement("div",{className:"col-sm-12"},p(a.Basic))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-hra-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"HRA"),s.a.createElement("div",{className:"col-sm-12"},p(a.HRA))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-conveyance-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Conveyance"),s.a.createElement("div",{className:"col-sm-12"},p(a.Conveyance))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-medical-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Medical Allowance"),s.a.createElement("div",{className:"col-sm-12"},p(a.Medical_Allowance))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-special-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Special Allowance"),s.a.createElement("div",{className:"col-sm-12"},p(a.Special_Allowance))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-arrears-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Arrears"),s.a.createElement("div",{className:"col-sm-12"},p(a.Arrears)))),s.a.createElement("div",{className:"col-md-6 col-sm-12 col-xs-12 bg-danger salary-block salary-deduction-width"},s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("div",{className:"col-sm-12 salary-total-title"},"Total Deductions"),s.a.createElement("div",{className:"col-sm-12 salary-total-value"},u)),s.a.createElement("div",{className:"col-sm-4 col-xs-12 cell remove-holding-btn-wrapper"},y&&s.a.createElement("span",{className:"remove-holding-btn",onClick:function(){return function(){var e={user_id:t,holding_from:c()().format("YYYY-MM-DD"),holding_till:12,holding_amount:"0",reason:"Holding removed using button click"};d(e)}()}},"Remove Holding")),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-epf-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"EPF"),s.a.createElement("div",{className:"col-sm-12"},p(a.EPF))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-loan-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Loan"),s.a.createElement("div",{className:"col-sm-12"},p(a.Loan))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-advance-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Advance"),s.a.createElement("div",{className:"col-sm-12"},p(a.Advance))),s.a.createElement("div",{className:"col-sm-2 col-xs-12 cell salary-miscdeductions-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"Misc Deductions"),s.a.createElement("div",{className:"col-sm-12"},p(a.Misc_Deductions))),s.a.createElement("div",{className:"col-sm-1 col-xs-12 cell salary-tds-width"},s.a.createElement("div",{className:"col-sm-12 salary-title"},"TDS"),s.a.createElement("div",{className:"col-sm-12"},p(a.TDS))),"manage"===l?s.a.createElement("div",{className:"col-sm-3 col-xs-12 cell center salary-options-width"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"material-icons delete-icon",onClick:function(e){return i(e,a.test.user_Id,a.test.id)}},"delete_forever"))):"")))}}}]);
//# sourceMappingURL=25.99cdc48f.chunk.js.map