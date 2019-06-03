(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1179:function(e,a,t){"use strict";t.r(a);var l=t(26),n=t(27),s=t(29),r=t(28),i=t(30),m=t(13),c=t(0),o=t.n(c),d=t(36),u=t(34),p=t(566),h=t(129),E=t(37),v=t(10),b=t(86),f=t.n(b),N=t(45),g=t(130),T=t.n(g),w=t(263),y=t.n(w),S=t(131),_=t.n(S),C=t(264),L=t.n(C),j=t(132),O=t.n(j),k=t(628),A=t.n(k),x=t(696),D=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).props.isAlreadyLogin(),t.state={openDialog:!1,floatingLabel:"",hint:"",teamError:"",teamName:"",dialogTitle:""},t.openCreateTeam=t.openCreateTeam.bind(Object(m.a)(Object(m.a)(t))),t.saveTeam=t.saveTeam.bind(Object(m.a)(Object(m.a)(t))),t.deleteTeam=t.deleteTeam.bind(Object(m.a)(Object(m.a)(t))),t.callSaveApi=t.callSaveApi.bind(Object(m.a)(Object(m.a)(t))),t.handleClose=t.handleClose.bind(Object(m.a)(Object(m.a)(t))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"openCreateTeam",value:function(){this.setState({dialogTitle:"Add New Team",openDialog:!0,floatingLabel:"Team Name",hint:"Enter Team Name",teamError:"",teamName:""})}},{key:"saveTeam",value:function(){var e=this.state.teamName;if(""===e)this.setState({teamError:"Required"});else{var a=this.props.teamList&&this.props.teamList.data||[];a.push(e),this.callSaveApi("save",a)}}},{key:"deleteTeam",value:function(e){var a=this.props.teamList&&this.props.teamList.data||[],t=[];v.map(a,function(a,l){a!==e&&t.push(a)}),this.callSaveApi("delete",t)}},{key:"callSaveApi",value:function(e,a){this.props.requestAddTeam(a),this.props.teamList.isSuccess&&(this.handleClose(),"save"===e?Object(N.b)("Success","Team added Successfully.","success"):"delete"===e&&Object(N.b)("Deleted","Team Deleted Successfully.","success"))}},{key:"handleClose",value:function(){this.setState({dialogTitle:"",openDialog:!1,floatingLabel:"",hint:""})}},{key:"render",value:function(){var e=this,a=[];this.props.teamList&&this.props.teamList.data&&this.props.teamList.data.length>0&&(a=this.props.teamList.data);var t=[o.a.createElement(_.a,{label:"Back",primary:!0,onClick:this.handleClose,className:"m-r"}),o.a.createElement(O.a,{label:"Submit",primary:!0,onClick:this.saveTeam})];return o.a.createElement("div",{className:"app-body",id:"view"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 pull-right"},o.a.createElement(T.a,{title:this.state.dialogTitle,actions:t,modal:!1,open:this.state.openDialog,onRequestClose:this.handleClose},o.a.createElement("div",null,o.a.createElement(y.a,{ref:"value",floatingLabelText:this.state.floatingLabel,floatingLabelFixed:!0,hintText:this.state.hint,fullWidth:!0,errorText:this.state.teamError,value:this.state.teamName,onChange:function(a){e.setState({teamName:a.target.value})}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12"},o.a.createElement("button",{className:"md-btn md-raised m-b-sm indigo",onClick:this.openCreateTeam},"Add Team")),o.a.createElement("div",{className:"table-responsive table-condensed margin-t"},o.a.createElement(f.a,{zDepth:1},o.a.createElement(x.Table,{fixedFooter:!0},o.a.createElement(x.TableHeader,{adjustForCheckbox:!1,displaySelectAll:!1},o.a.createElement(x.TableRow,null,o.a.createElement(x.TableRowColumn,{colSpan:"3"},o.a.createElement("h4",{style:R.teamView},"Team(s)"))),o.a.createElement(x.TableRow,null,o.a.createElement(x.TableRowColumn,{colSpan:1,className:"_700"},"Sr. no."),o.a.createElement(x.TableRowColumn,{className:"_700"},"Teams Name"),o.a.createElement(x.TableRowColumn,{colSpan:1,className:"_700"},"Delete"))),o.a.createElement(x.TableBody,null,v.map(a,function(a,t){return o.a.createElement(x.TableRow,{key:t,className:"t-pointer"},o.a.createElement(x.TableRowColumn,{colSpan:1},t+1),o.a.createElement(x.TableRowColumn,{className:"row-0",colSpan:1},a),o.a.createElement(x.TableRowColumn,{colSpan:1,className:"row-0"},o.a.createElement(L.a,{tooltip:"Delete Team",tooltipPosition:"top-right",iconStyle:{color:"#B71C1C"},children:o.a.createElement(A.a,{color:"#B71C1C"}),onClick:function(t){t.stopPropagation(),e.deleteTeam(a)}})))}))))))))))}}]),a}(o.a.Component),R={teamView:{float:"left",marginLeft:"-5%",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"5%",paddingRight:"3%",fontWeight:"bold"}},M=D,P=(t(179),t(71)),Y=function(e){var a=e.teamList,t=e.team,l=e.fetchUserDetails,n=a&&a.data||[],s=t&&t.data||[],r=v.map(s,function(e,a){return o.a.createElement("tr",{key:a},o.a.createElement("td",null,o.a.createElement("div",{className:"list-left"},o.a.createElement("span",{className:"w-40 avatar"},o.a.createElement("img",{src:e.slack_image})))),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.jobtitle),o.a.createElement("td",null,e.salary_detail),o.a.createElement("td",null,""!==e.holdin_amt_detail?o.a.createElement("ul",{className:"p-0"},o.a.createElement("li",null,"Holding amount : ",e.holdin_amt_detail.holding_amt),o.a.createElement("li",null,"Start date : ",e.holdin_amt_detail.holding_start_date),o.a.createElement("li",null,"End date : ",e.holdin_amt_detail.holding_end_date),o.a.createElement("li",null,"Reason : ",e.holdin_amt_detail.reason)):""),o.a.createElement("td",null,e.holding_comments),o.a.createElement("td",null,P(e.dateofjoining).format("Do MMMM YYYY")),o.a.createElement("td",null,e.no_of_days_join),o.a.createElement("td",null,e.team),o.a.createElement("td",null,P(e.start_increment_date).format("Do MMMM YYYY")))});return v.isEmpty(r)&&(r=o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"10",className:"text-center"},"No any employee in this team"))),o.a.createElement("div",null,o.a.createElement("div",{className:"row no-gutter"},o.a.createElement("div",{className:"col-md-3 p-r"},o.a.createElement("div",{className:"form-group"},o.a.createElement("h5",null,"Select Team:"),o.a.createElement("select",{className:"form-control",onChange:function(e){return function(e){var a=e.target.value;l(a)}(e)}},o.a.createElement("option",{value:""},"--Select team--"),v.map(n,function(e,a){return o.a.createElement("option",{key:a,value:e},e)}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"box-divider m-a-0"}),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-bordered table-striped"},o.a.createElement("thead",{className:"success"},o.a.createElement("tr",null,o.a.createElement("th",null,"Image"),o.a.createElement("th",null,"Employe name"),o.a.createElement("th",null,"Designation"),o.a.createElement("th",null,"Salary"),o.a.createElement("th",null,"Holding Amount Details"),o.a.createElement("th",null,"Holding Comments"),o.a.createElement("th",null,"Date of Joining"),o.a.createElement("th",null,"No of Days Since Joined"),o.a.createElement("th",null,"Team"),o.a.createElement("th",null,"Last Increment Date"))),o.a.createElement("tbody",null,r))))))))},J=t(61),H=t(4),q=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).props.isAlreadyLogin(),t.state={empList:[],all_Teams:"",active:"active",addNewTeam:"row",viewTeam:"hidden",firstArrow:"show",secondArrow:"hidden"},t.openPage=t.openPage.bind(Object(m.a)(Object(m.a)(t))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentWillMount",value:function(){this.props.requestTeamList()}},{key:"componentWillReceiveProps",value:function(e){window.scrollTo(0,0);var a=Object(E.e)(this.props.location.pathname,e.loggedUser);a.status&&this.props.history.push(a.redirectTo)}},{key:"openPage",value:function(e){"addNewTeam"===e?this.setState({addNewTeam:"row",viewTeam:"hidden",firstArrow:"show",secondArrow:"hidden"}):this.setState({addNewTeam:"hidden",viewTeam:"row",firstArrow:"hidden",secondArrow:"show"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,this.props),o.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},o.a.createElement("div",{className:"app-header white box-shadow"},o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"navbar-item pull-left h5",id:"pageTitle"},"View Team"))),o.a.createElement("div",{className:"app-body",id:"view"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(J.a,{loading:this.props.frontend.show_loading}))),o.a.createElement("div",{className:"dker p-x"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 pull-sm-6"},o.a.createElement("div",{className:"p-y-md clearfix nav-active-primary"},o.a.createElement("ul",{className:"nav nav-pills nav-sm"},o.a.createElement("li",{onClick:function(){e.openPage("addNewTeam")},className:"nav-item ".concat(this.state.active)},o.a.createElement("a",{className:"nav-link",href:"","data-toggle":"tab","data-target":"#tab_1","aria-expanded":"true"},"All Team"),o.a.createElement("div",{className:this.state.firstArrow},o.a.createElement("span",{className:"arrow bottom b-accent"}))),o.a.createElement("li",{onClick:function(){e.openPage("viewTeam")},className:"nav-item",style:{marginLeft:"20px"}},o.a.createElement("a",{className:"nav-link",href:"","data-toggle":"tab","data-target":"#tab_2","aria-expanded":"false"},"Team Details"),o.a.createElement("div",{className:this.state.secondArrow},o.a.createElement("span",{className:"arrow bottom b-accent"})))))))),o.a.createElement("div",{className:"padding"},o.a.createElement("div",{className:this.state.addNewTeam},o.a.createElement(M,this.props)),o.a.createElement("div",{className:this.state.viewTeam},o.a.createElement("div",{className:"col-xs-12 p-t p-r b-r"},o.a.createElement(Y,{teamList:this.props.teamList,team:this.props.team,fetchUserDetails:function(a){return e.props.requestGetTeam({selectedTeam:a})}})))))))}}]),a}(o.a.Component);var B=Object(d.b)(function(e){return{frontend:e.frontend.toJS(),loggedUser:e.logged_user.userLogin,usersList:e.usersList.toJS(),employee:e.empSalaryList.toJS(),teamList:e.teamList.teamList,team:e.teamList.team}},function(e){return Object(u.b)(H,e)})(q),V=Object(p.a)(B);a.default=V},628:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=r(t(0)),n=r(t(175)),s=r(t(174));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return l.default.createElement(s.default,e,l.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))};(i=(0,n.default)(i)).displayName="ActionDelete",i.muiName="SvgIcon",a.default=i}}]);
//# sourceMappingURL=54.3b5c58f4.chunk.js.map