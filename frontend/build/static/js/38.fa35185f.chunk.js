(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1189:function(e,t,a){"use strict";a.r(t);var n=a(26),m=a(27),r=a(29),l=a(28),c=a(30),s=a(13),o=a(0),i=a.n(o),d=a(36),u=a(34),y=a(566),p=a(129),h=a(37),E=a(262),f=(a(45),a(41)),v=a.n(f),N=a(24),_=(a(736),a(737),a(71)),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={current_userid:"",current_date:"",form_entry_time:"",form_exit_time:"",form_reason:"",formInfo:"",inputAccess:"",buttonAccess:"show",year:"",month:"",message:""},a.updateDaySummary=a.updateDaySummary.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){v()(".timepickerInput").timepicker({minTime:"09:00 AM",maxTime:"09:00 PM",timeFormat:"h:i A",step:5})}},{key:"componentWillReceiveProps",value:function(e){this.props.loggedUser.data.role===N.a.EMPLOYEE?this.setState({formInfo:"show"}):this.setState({formInfo:"hidden"});e.userid,e.date,e.year,e.month;this.props.loggedUser.data.role===N.a.EMPLOYEE&&""!==e.userDaySummary.userid&&""!==e.empDaySummary.exit_time?this.setState({inputAccess:"",buttonAccess:""}):this.setState({inputAccess:""}),this.setState({year:e.year,month:e.month,current_userid:e.userDaySummary.userid,form_entry_time:e.userDaySummary.entry_time,form_exit_time:e.userDaySummary.exit_time,current_date:_(e.date).format("MM-DD-YYYY")})}},{key:"updateDaySummary",value:function(e){e.preventDefault();var t=this.state,a=t.current_userid,n=t.current_date,m=t.form_entry_time,r=t.form_exit_time,l=t.form_reason,c=t.year,s=t.month;this.props.requestUpdateEmpDaySummary({userid:a,date:n,entryTime:m,exitTime:r,reason:l,year:c,month:s}),v()("#modalUserDaySummary").modal("hide")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{id:"modalUserDaySummary",className:"modal","data-backdrop":"true"},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-11"},i.a.createElement("h5",{className:"modal-title"},this.props.userDaySummary.name," ","Your Day Summary of "," ","- ",this.props.date)),i.a.createElement("div",{className:"col-xs-1"},i.a.createElement("button",{className:"btn btn-icon white","data-dismiss":"modal"},i.a.createElement("i",{className:"fa fa-remove"}))))),i.a.createElement("div",{className:"modal-body p-lg"},i.a.createElement("i",null,"*Entry / Exit time must be like - e.g 10:30 AM, 07:30 PM"),i.a.createElement("br",null),i.a.createElement("i",null,"*Your Entry / Exit time, will be sent to the Admin for approval"),i.a.createElement("i",{className:this.state.formInfo},"20 min will be added/deducted from your entry/exit time as compensation in case you forgot to push in/out. If there is some other reason for your using this form contact HR"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{role:"form",type:"form",name:"empForm",onSubmit:function(t){e.updateDaySummary(t)}},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label"},"Entry Time"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement("input",{type:"text",name:"entry_time",className:"timepickerInput form-control",disabled:this.state.inputAccess,ref:"entry_time",value:this.state.form_entry_time,onBlur:function(){return e.setState({form_entry_time:e.refs.entry_time.value})},required:!0}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label"},"Exit Time"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement("input",{type:"text",name:"exit_time",className:"timepickerInput form-control",ref:"exit_time",disabled:this.state.inputAccess,value:this.state.form_exit_time,onBlur:function(){return e.setState({form_exit_time:e.refs.exit_time.value})},required:!0}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label"},"Reason"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement("input",{type:"text",name:"reason",className:"form-control",ref:"reason",disabled:this.state.inputAccess,value:this.state.form_reason,onChange:function(){return e.setState({form_reason:e.refs.reason.value})},required:!0}))),i.a.createElement("div",{className:"form-group row m-t-md"},i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("div",{className:this.state.buttonAccess},i.a.createElement("button",{id:"submit",type:"submit",name:"emButton",className:"md-btn md-raised m-b-sm w-xs blue"},"Update"))))))))))}}]),t}(i.a.Component),g=a(827),x=a(4),k=a(969),w=a.n(k),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).props.isAlreadyLogin(),a.state={defaultUserDisplay:"",daysummary_userid:"",daysummary_date:"",year:"",month:""},a.onUserClick=a.onUserClick.bind(Object(s.a)(Object(s.a)(a))),a.onShowDaySummary=a.onShowDaySummary.bind(Object(s.a)(Object(s.a)(a))),a.monthToggle=a.monthToggle.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.isAlreadyLogin();var e=this.props.loggedUser.data.id;this.setState({defaultUserDisplay:e});var t=new Date,a=t.getFullYear(),n=t.getMonth()+1;this.setState({year:a,month:n}),this.props.requestUserAttendance({userid:e,year:a,month:n})}},{key:"componentWillReceiveProps",value:function(e){var t=e.loggedUser.data.id,a=Object(h.e)(this.props.location.pathname,e.loggedUser);a.status&&this.props.history.push(a.redirectTo),t&&!w()(e,this.props)&&this.props.requestUserAttendance({userid:t,year:this.state.year,month:this.state.month})}},{key:"onShowDaySummary",value:function(e,t){this.setState({daysummary_userid:e,daysummary_date:t}),this.props.requestUserDaySummary({userid:e,date:t})}},{key:"onUserClick",value:function(e){this.setState({defaultUserDisplay:e}),this.props.requestUserAttendance({userid:e,year:this.state.year,month:this.state.month})}},{key:"monthToggle",value:function(e,t,a){this.setState({year:t,month:a}),this.props.requestUserAttendance({userid:e,year:t,month:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.a,this.props),i.a.createElement(b,Object.assign({userid:this.state.daysummary_userid,date:this.state.daysummary_date,year:this.state.year,month:this.state.month},this.props)),i.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},i.a.createElement(E.a,{pageTitle:"My Attendance",showLoading:this.props.frontend.show_loading}),i.a.createElement("div",{className:"app-body",id:"view"},i.a.createElement("div",{className:"padding"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-1"}),i.a.createElement("div",{className:"col-md-10"},i.a.createElement(g.a,{monthlyAttendance:this.props.monthlyAttendance,monthToggle:this.monthToggle,onShowDaySummary:this.onShowDaySummary})))))))}}]),t}(i.a.Component);S.styles={height100per:{minHeight:"150px"}};t.default=Object(y.a)(Object(d.b)(function(e){return{frontend:e.frontend.toJS(),userDaySummary:e.userDaySummary.toJS(),empDaySummary:e.empDaySummary,loggedUser:e.logged_user.userLogin,monthlyAttendance:e.monthlyAttendance.toJS()}},function(e){return Object(u.b)(x,e)})(S))},672:function(e,t,a){"use strict";var n=a(0),m=a.n(n),r=a(10),l=a(41),c=a.n(l),s=function(e){var t=e.block,a=e.classname,n=e.dataToDisplay,r=e.time,l=e.title,c=e.officeTime,s="";return"type1"===t?s=m.a.createElement("span",null,m.a.createElement("span",{className:"fc-time"},r),m.a.createElement("span",{className:"fc-title"},l,c?m.a.createElement("i",{className:"officetime"},"- ".concat(c," hrs")):"")):"type2"===t&&(s=n),m.a.createElement("div",{className:a},m.a.createElement("div",{className:"fc-content"},s))},o={timeInputBox:{width:"40px"}},i=function(e){var t=e.dayData,a=(e.classname,e.forEmployeeHours),n=(e.day,e.userid),r=e.showDaySummary,l=e.onWorkingHoursChange;c()(document).ready(function(){c()("input.timepicker").timepicker({minTime:"5:00",maxTime:"12:00",timeFormat:"h:i",step:10})});var i=t,d=i.office_working_hours,u="",y="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable ",p="",h=i.date,E="dark-white",f=i.total_time+" - Total Work Time";return"-"===i.extra_time_status?p="red":"+"===i.extra_time_status&&(p="green"),1===i.admin_alert&&(h+=" * ",E="indigo",f=i.admin_alert_message),a||"WORKING_DAY"!==i.day_type?a||"NON_WORKING_DAY"!==i.day_type?a||"FUTURE_WORKING_DAY"!==i.day_type?a||"LEAVE_DAY"!==i.day_type?a||"HALF_DAY"!==i.day_type?a&&"WORKING_DAY"===i.day_type?u=m.a.createElement("div",{"data-toggle":"modal"},m.a.createElement(s,{classname:y+"dark-white",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day,officeTime:i.office_working_hours}),m.a.createElement(s,{classname:y+"dark-white",block:"type1",time:m.a.createElement("h6",null,"Hours : ",d),title:""}),m.a.createElement("div",{className:"fc-day-grid-event fc-h-event fc-event fc-start fc-end dark-white fc-draggable"},m.a.createElement("div",{className:"fc-content"},m.a.createElement("span",{className:"fc-title"},"Change to \xa0:\xa0"),m.a.createElement("span",{className:"fc-time"},m.a.createElement("input",{type:"text",className:"timepicker",style:o.timeInputBox,onBlur:function(e){return l(t.full_date,e.target.value)}}))))):a&&"NON_WORKING_DAY"===i.day_type&&(u=m.a.createElement("div",null,m.a.createElement(s,{classname:y+"yellow",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day}),m.a.createElement(s,{classname:y+"yellow",block:"type1",time:"Non Working day"}),m.a.createElement(s,{classname:y+"yellow",block:"type1",time:i.day_text,title:""}),m.a.createElement("div",{className:"fc-day-grid-event fc-h-event fc-event fc-start fc-end dark-white fc-draggable"},m.a.createElement("div",{className:"fc-content"},m.a.createElement("span",{className:"fc-title"},"Change to \xa0:\xa0"),m.a.createElement("span",{className:"fc-time"},m.a.createElement("input",{type:"text",className:"timepicker",style:o.timeInputBox,onBlur:function(e){return l(t.full_date,e.target.value)}})))))):u=m.a.createElement("div",null,m.a.createElement(s,{classname:y+"red-100",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day,officeTime:i.office_working_hours}),m.a.createElement(s,{classname:y+"red-100",block:"type1",time:"Half day",title:""}),m.a.createElement(s,{classname:y+"red-100",block:"type1",time:i.day_text,title:""})):u=m.a.createElement("div",null,m.a.createElement(s,{classname:y+"red",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day,officeTime:i.office_working_hours}),m.a.createElement(s,{classname:y+"red",block:"type1",time:"On Leave",title:""}),m.a.createElement(s,{classname:y+"red",block:"type1",time:i.day_text,title:""})):u=m.a.createElement("div",null,m.a.createElement(s,{classname:y+"dark-white",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day,officeTime:i.office_working_hours}),m.a.createElement(s,{classname:y+"dark-white",block:"type1",time:"",title:""}),m.a.createElement(s,{classname:y+"dark-white",block:"type1",dataToDi:!0,splay:i.day_text}),m.a.createElement(s,{classname:y+"dark-white center",block:"type2",dataToDisplay:f})):u=m.a.createElement("div",null,m.a.createElement(s,{classname:y+"yellow",block:"type1",time:m.a.createElement("h5",null,i.date),title:i.day}),m.a.createElement(s,{classname:y+"yellow",block:"type1",time:"Non Working day"}),m.a.createElement(s,{classname:y+"yellow",block:"type1",time:i.day_text})):u=m.a.createElement("div",{"data-toggle":"modal","data-target":"#modalUserDaySummary",onClick:function(){return r(n,t.full_date)}},m.a.createElement(s,{classname:y+E,block:"type1",time:m.a.createElement("h5",null,h),title:i.day,officeTime:i.office_working_hours}),m.a.createElement(s,{classname:y+"dark-white",block:"type1",time:i.in_time+" - "+i.out_time,title:""}),m.a.createElement(s,{classname:y+"dark-white center",block:"type2",dataToDisplay:f}),m.a.createElement(s,{classname:y+p,block:"type1",time:i.extra_time,title:""})),m.a.createElement("div",null,u)},d=function(e){var t=e.userId,a=e.dayData,n=e.onShowDaySummary,r=e.onWorkingHoursChange,l=function(){var e=c()("#calendar").width(),t=parseInt(e/100);if(t<7&&e%100>0){var a=parseInt(e/t);c()("#calendar .calendar-day").css({width:a+"px"})}else t>=7&&c()("#calendar .calendar-day").css({width:e/7+"px"})};c()(document).ready(function(){c()(window).on("resize",function(){l()}),l()});var s="";return s=t?m.a.createElement(i,{forEmployeeHours:!1,dayData:a,showDaySummary:n,userid:t}):m.a.createElement(i,{forEmployeeHours:!0,dayData:a,onWorkingHoursChange:r}),m.a.createElement("div",{id:"calendarDay",className:"calendar-day"},m.a.createElement("div",{className:"fc-event-container",id:"".concat(a.full_date)},s))};t.a=function(e){var t=e.userId,a=e.month,n=e.onShowDaySummary,l=e.onWorkingHoursChange,c=r.map(a,function(e,a){return m.a.createElement(d,{key:a,userId:t,dayData:e,onShowDaySummary:n,onWorkingHoursChange:l})});return m.a.createElement("div",{id:"calendar"},c)}},827:function(e,t,a){"use strict";var n=a(0),m=a.n(n),r=a(10),l=a.n(r),c=function(e){var t=e.monthlyAttendance;return m.a.createElement("div",{className:"user-detail"},m.a.createElement("div",{className:"col-xs-12 col-sm-4 userName"},m.a.createElement("div",{className:"box p-a"},m.a.createElement("div",{className:"pull-left m-r"},m.a.createElement("span",{className:"w-40 avatar"},m.a.createElement("img",{src:t.userProfileImage}))),m.a.createElement("div",{className:"clear"},m.a.createElement("h4",{className:"m-a-0 text-lg"},t.userName,m.a.createElement("span",{className:"text-sm"}," ")),m.a.createElement("small",{className:"text-muted"},t.userjobtitle),m.a.createElement("br",null),m.a.createElement("br",null)))))},s=a(672),o=function(e){var t=e.monthlyAttendance;return m.a.createElement("div",{className:"day"},m.a.createElement("div",{className:"box-header col-sm-2 col-xs-12"},m.a.createElement("h3",null,"Day Reference"),m.a.createElement("small",null)),m.a.createElement("div",{className:"box-body"},m.a.createElement("div",{className:"row no-gutter m-b text-xs l-h-1x"},m.a.createElement("div",{className:"col-xs-12 col-sm-2 day-color-referance"},m.a.createElement("div",{className:"p-a white"},m.a.createElement("h4",null,t.monthSummary.WORKING_DAY),m.a.createElement("div",{className:"h-3x text-u-c _600 text-sm"},"Working Day"))),m.a.createElement("div",{className:"col-xs-12 col-sm-2 day-color-referance"},m.a.createElement("div",{className:"p-a yellow"},m.a.createElement("h4",null,t.monthSummary.NON_WORKING_DAY),m.a.createElement("div",{className:"h-3x text-u-c _600 text-sm"}," Non Working Day"))),m.a.createElement("div",{className:"col-xs-12 col-sm-2 day-color-referance"},m.a.createElement("div",{className:"p-a red"},m.a.createElement("h4",null,t.monthSummary.LEAVE_DAY),m.a.createElement("div",{className:"h-3x text-u-c _600 text-sm"},"Leave Day"))),m.a.createElement("div",{className:"col-xs-12 col-sm-2 day-color-referance"},m.a.createElement("div",{className:"p-a red-100"},m.a.createElement("h4",null,t.monthSummary.HALF_DAY),m.a.createElement("div",{className:"h-3x text-u-c _600 text-sm"},"Half Day"))),m.a.createElement("div",{className:"col-xs-12 col-sm-2 day-color-referance"},m.a.createElement("div",{className:"p-a indigo"},m.a.createElement("h4",null,"*"),m.a.createElement("div",{className:"h-3x text-u-c _600 text-sm"},"Admin Alert"))))))},i=function(e){var t=e.monthlyAttendance;return m.a.createElement("div",{className:"row "},m.a.createElement("div",{className:"col-xs-12 col-sm-3 time-summary"},m.a.createElement("div",{className:"box p-a month-summary"},m.a.createElement("div",{className:"pull-left m-r"}),m.a.createElement("div",{className:"clear total"},m.a.createElement("h4",{className:"m-a-0 text-lg _300"},t.monthSummary.actual_working_hours,m.a.createElement("span",{className:"text-sm"}," ")),m.a.createElement("small",{className:"text-muted"}," Total Working Hours")))),m.a.createElement("div",{className:"col-xs-12 col-sm-3 time-summary"},m.a.createElement("div",{className:"box p-a month-summary"},m.a.createElement("div",{className:"pull-left m-r"}),m.a.createElement("div",{className:"clear complete"},m.a.createElement("h4",{className:"m-a-0 text-lg _300"},t.monthSummary.completed_working_hours," ",m.a.createElement("span",{className:"text-sm"})),m.a.createElement("small",{className:"text-muted"},"Completed")))),m.a.createElement("div",{className:"col-xs-12 col-sm-3 time-summary"},m.a.createElement("div",{className:"box p-a month-summary"},m.a.createElement("div",{className:"pull-left m-r"}),m.a.createElement("div",{className:"clear pending"},m.a.createElement("h4",{className:"m-a-0 text-lg _300"},t.monthSummary.pending_working_hours,m.a.createElement("span",{className:"text-sm"})),m.a.createElement("small",{className:"text-muted"},"Pending")))))},d=function(e){var t=e.monthlyAttendance.compensationSummary,a=t.compensation_break_up?t.compensation_break_up.length:0,n=[],r=[];return l.a.map(t.compensation_break_up,function(e,t){a/2>t?n.push(m.a.createElement("small",{key:t,className:"text-muted"},e.text)):r.push(m.a.createElement("small",{key:t,className:"text-muted"},e.text))}),m.a.createElement("div",{className:"box"},m.a.createElement("div",{className:"box-header"},m.a.createElement("h3",null,"Time to be compensate: ",t.time_to_be_compensate),m.a.createElement("small",null)),m.a.createElement("div",{className:"box-body"},m.a.createElement("div",{className:"row no-gutter m-b text-xs l-h-1x compensation-data"},m.a.createElement("div",{className:"col-xs-6"},n),m.a.createElement("div",{className:"col-xs-6"},r))))},u=function(e){var t=e.monthlyAttendance;return m.a.createElement("div",null,m.a.createElement(i,{monthlyAttendance:t}),t.compensationSummary&&t.compensationSummary.seconds_to_be_compensate>0?m.a.createElement(d,{monthlyAttendance:t}):"",m.a.createElement(o,{monthlyAttendance:t}))};t.a=function(e){var t=e.monthlyAttendance,a=e.monthToggle,n=e.onShowDaySummary,r=function(e){"previous"===e?a(t.userid,t.previousMonth.year,t.previousMonth.month):"next"===e&&a(t.userid,t.nextMonth.year,t.nextMonth.month)};return m.a.createElement("div",{id:"content",className:"app-content box-shadow-z0",role:"main"},m.a.createElement("div",{className:"app-body",id:"view"},m.a.createElement("div",null,m.a.createElement("div",{className:"fullcalendar fc fc-ltr fc-unthemed"},m.a.createElement("div",{className:"fc-toolbar"},m.a.createElement("div",{className:"fc-left"},m.a.createElement("button",{type:"button",className:"fc-prev-button fc-button fc-state-default fc-corner-left fc-corner-right",onClick:function(){return r("previous")}},m.a.createElement("span",{className:"fc-icon fc-icon-left-single-arrow"}))),m.a.createElement("div",{className:"fc-right"},m.a.createElement("button",{type:"button",className:"fc-next-button fc-button fc-state-default fc-corner-left fc-corner-right",onClick:function(){return r("next")}},m.a.createElement("span",{className:"fc-icon fc-icon-right-single-arrow"}))),m.a.createElement("div",{className:"fc-center"},m.a.createElement("h2",null,t.monthName,t.year)),m.a.createElement("div",{className:"fc-clear"})),m.a.createElement("br",null),m.a.createElement(c,{monthlyAttendance:t}),m.a.createElement(u,{monthlyAttendance:t}),m.a.createElement("div",{className:"fc-view-container"},m.a.createElement("div",{className:"fc-view fc-month-view fc-basic-view"},m.a.createElement("div",{className:"fc-body"},m.a.createElement("div",{className:"fc-widget-content"},m.a.createElement("div",{className:"fc-day-grid-container"},m.a.createElement("div",{className:"fc-day-grid"},m.a.createElement(s.a,{userId:t.userid,month:t.attendance,onShowDaySummary:n})))))))))))}}}]);
//# sourceMappingURL=38.fa35185f.chunk.js.map