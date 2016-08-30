import React,{ Component } from 'react';
import { connect } from 'react-redux'
import {notify} from '../../services/index'


class UserPayslipsHistory extends React.Component {
    constructor( props ){
    	super( props )
    }
    componentDidMount(){
      
    }
	  componentWillReceiveProps( props ){
    }
    render(){
      let previousPayslipsHistoryHtml = _.map( this.props.user_payslip_history, ( d,k ) => {
        return (
          <div className="sl-item b-info"  key={k} >
            <div className="sl-content">
              <div className="sl-date text-muted">  <b>{d.month}, {d.year}</b></div>
              <div className="sl-date text-muted">  <b>{d.total_leave_taken}</b> : Total Leave Taken</div>
              <div className="sl-date text-muted">  <b>{d.leave_balance}</b> : Leave Balance</div>
              <div className="sl-date text-muted">  <b>{d.allocated_leaves} : Allocated Leaves</b></div>
              <div className="sl-date text-muted">  <b>{d.paid_leaves} : Paid Leaves</b></div>
              <div className="sl-date text-muted">  <b>{d.unpaid_leaves} : Unpaid Leaves</b></div>
              <div className="sl-date text-muted">  <b>{d.final_leave_balance} : Final Leave Balance</b></div>
              <div className="sl-date text-muted">  
                <a href={`${d.payslip_url}` } target="_BLANK">View Payslip</a>                
              </div>
            </div>
          </div>
        )
      })
  		return (
    		<div>
    			<div className="box-body">
    				<div className="streamline b-l m-l">
    					{previousPayslipsHistoryHtml}
    				</div>
    			</div>
    		</div>
    	)
    }
}

export default UserPayslipsHistory