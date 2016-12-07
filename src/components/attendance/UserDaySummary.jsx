import React from 'react';
import {connect} from 'react-redux'
import * as actions_userDaySummary from '../../actions/user/userDaySummary'
import {notify} from '../../services/index'
import { CONFIG } from '../../config/index'
import LoadingIcon from '../../components/generic/LoadingIcon'

class UserDaySummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_userid: '',
      current_date: '',
      form_entry_time: '',
      form_exit_time: '',
      form_reason: '',
      formInfo: '',
      inputAccess: '',
      buttonAccess: 'show',
      year: '',
      month: ''
    }
    this.doUpdateDaySummary = this.doUpdateDaySummary.bind(this);
  }
  componentDidMount() {
    $('.timepickerInput').timepicker({'minTime': '09:00 AM', 'maxTime': '09:00 PM', 'timeFormat': 'h:i A', 'step': 5});
  }
  componentWillReceiveProps(props) {
    if (this.props.logged_user.role == CONFIG.EMPLOYEE) {
      this.setState({formInfo: 'show'})
    } else {
      this.setState({formInfo: 'hidden'})
    }
    let user_id = props.userid
    let date = props.date
    let year = props.year
    let month = props.month
    if (this.props.logged_user.role == CONFIG.EMPLOYEE && props.userDaySummary.entry_time != '' && props.userDaySummary.exit_time != '') {
      this.setState({inputAccess: "true", buttonAccess: "hidden"})
    } else {
      this.setState({inputAccess: ""})
    }
    this.setState({
      year: props.year,
      month: props.month,
      current_userid: props.userDaySummary.userid,
      current_date: props.date,
      form_entry_time: props.userDaySummary.entry_time,
      form_exit_time: props.userDaySummary.exit_time,
      form_reason: this.state.form_reason
    })

    //this.props.onUserDaySummary( user_id, date  )

  }

  doUpdateDaySummary(evt) {
    evt.preventDefault();
    if (this.props.logged_user.role != CONFIG.EMPLOYEE) {
      this.props.onUpdateDaySummary(this.state.current_userid, this.state.current_date, this.state.form_entry_time, this.state.form_exit_time, this.state.form_reason, this.state.year, this.state.month).then((data) => {}, (error) => {
        notify(error);
      })
    } else {
      this.props.onUserUpdateDaySummary(this.state.current_userid, this.state.current_date, this.state.form_entry_time, this.state.form_exit_time, this.state.form_reason, this.state.year, this.state.month).then((data) => {}, (error) => {
        notify(error);
      })
    }
    $('#modalUserDaySummary').modal('hide');
  }

  render() {
    return (
      <div>
        <div id="modalUserDaySummary" className="modal" data-backdrop="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <LoadingIcon {...this.props}/>
                <div className="row">
                  <div className="col-xs-11">
                    <h5 className="modal-title">User Day Summary - {this.props.userDaySummary.name}
                      - {this.props.date}</h5>
                  </div>
                  <div className="col-xs-1">
                    <button className="btn btn-icon white" data-dismiss="modal">
                      <i className="fa fa-remove"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-body p-lg">

                <i>*Entry / Exit time must be like - e.g 10:30 AM, 07:30 PM</i>
                <i className={this.state.formInfo}>20 min will be added/deducted from your entry/exit time as compensation in case you forgot to push in/out. If there is some other reason for your using this form contact HR</i>
                <br/>
                <br/>
                <form role="form" onSubmit={(evt) => {
                  this.doUpdateDaySummary(evt);
                }}>
                  <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Entry Time</label>
                    <div className="col-sm-9">
                      <input type="text" className="timepickerInput form-control" disabled={this.state.inputAccess} ref="entry_time" value={this.state.form_entry_time} onBlur={() => this.setState({form_entry_time: this.refs.entry_time.value})} required/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Exit Time</label>
                    <div className="col-sm-9">
                      <input type="text" className="timepickerInput form-control" ref="exit_time" disabled={this.state.inputAccess} value={this.state.form_exit_time} onBlur={() => this.setState({form_exit_time: this.refs.exit_time.value})} required/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Reason</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" ref="reason" disabled={this.state.inputAccess} value={this.state.form_reason} onChange={() => this.setState({form_reason: this.refs.reason.value})} required/>
                    </div>
                  </div>

                  <div className="form-group row m-t-md">
                    <div className="col-sm-10">
                      <div className={this.state.buttonAccess}>
                        <button id="submit" type="submit" className="md-btn md-raised m-b-sm w-xs green">Update</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDaySummary
