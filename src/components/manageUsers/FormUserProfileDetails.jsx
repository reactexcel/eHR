import React from 'react'
import * as _ from 'lodash'
import {CONFIG} from '../../config/index'

import { DateField } from 'react-date-picker'
import 'react-date-picker/index.css'

var moment = require('moment')
var dateFormat = require('dateformat')
import ToggleButton from 'react-toggle-button'

class FormUserProfileDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      user_id: '',
      name: '',
      jobtitle: '',
      dateofjoining: '',
      dob: '',
      gender: '',
      training_month: '',
      marital_status: '',
      team: '',
      address1: '',
      address2: '',
      emergency_ph1: '',
      emergency_ph2: '',
      blood_group: '',
      medical_condition: '',
      work_email: '',
      training_completion_date: '',
      termination_date: '',
      holding_comments: '',
      send_slack_msg: '',
      slack_msg: ''
    }
    this.handleTest = this.handleTest.bind(this)
  }
  componentWillReceiveProps (props) {
    let username : ""
    let user_id = ''
    let name = ''
    let jobtitle = ''
    let team = ''
    let dateofjoining = ''
    let dob = ''
    let gender = ' '
    let training_month = ''
    let marital_status = ' '
    let address1 = ' '
    let address2 = ' '
    let emergency_ph1 = ' '
    let emergency_ph2 = ' '
    let blood_group = ' '
    let medical_condition = ' '
    let work_email = ' '
    let training_completion_date: ""
    let termination_date: ""
    let holding_comments: ""
    let slack_msg: ""

    if (typeof props.username !== 'undefined' && props.username != null) {
      username = props.username
    }
    if (typeof props.user_profile_detail.user_Id !== 'undefined' && props.user_profile_detail.user_Id != null) {
      user_id = props.user_profile_detail.user_Id
    }
    if (typeof props.user_profile_detail.name !== 'undefined' && props.user_profile_detail.name != null) {
      name = props.user_profile_detail.name
    }
    if (typeof props.user_profile_detail.jobtitle !== 'undefined' && props.user_profile_detail.jobtitle != null) {
      jobtitle = props.user_profile_detail.jobtitle
    }

    if (typeof props.user_profile_detail.training_month !== 'undefined' && props.user_profile_detail.training_month != null) {
      training_month = props.user_profile_detail.training_month
    }

    if (typeof props.user_profile_detail.dateofjoining !== 'undefined' && props.user_profile_detail.dateofjoining != null) {
      var mydate = new Date(props.user_profile_detail.dateofjoining)
      if (mydate != 'Invalid Date') {
        dateofjoining = props.user_profile_detail.dateofjoining
      }
    }

    if (typeof props.user_profile_detail.dob !== 'undefined' && props.user_profile_detail.dob != null) {
      var mydate = new Date(props.user_profile_detail.dob)
      if (mydate != 'Invalid Date') {
        dob = moment(mydate)
      }
    }

    if (typeof props.user_profile_detail.training_month !== 'undefined' && props.user_profile_detail.training_month != null) {
      training_month = props.user_profile_detail.training_month
    }

    if (typeof props.user_profile_detail.gender !== 'undefined' && props.user_profile_detail.gender != null) {
      gender = props.user_profile_detail.gender
    }
    if (typeof props.user_profile_detail.marital_status !== 'undefined' && props.user_profile_detail.marital_status != null) {
      marital_status = props.user_profile_detail.marital_status
    }
    if (typeof props.user_profile_detail.team !== 'undefined' && props.user_profile_detail.team != null) {
      team = props.user_profile_detail.team
    }
    if (typeof props.user_profile_detail.current_address !== 'undefined' && props.user_profile_detail.current_address != null) {
      address1 = props.user_profile_detail.current_address
    }
    if (typeof props.user_profile_detail.permanent_address !== 'undefined' && props.user_profile_detail.permanent_address != null) {
      address2 = props.user_profile_detail.permanent_address
    }
    if (typeof props.user_profile_detail.emergency_ph1 !== 'undefined' && props.user_profile_detail.emergency_ph1 != null) {
      emergency_ph1 = props.user_profile_detail.emergency_ph1
    }
    if (typeof props.user_profile_detail.emergency_ph2 !== 'undefined' && props.user_profile_detail.emergency_ph2 != null) {
      emergency_ph2 = props.user_profile_detail.emergency_ph2
    }
    if (typeof props.user_profile_detail.blood_group !== 'undefined' && props.user_profile_detail.blood_group != null) {
      blood_group = props.user_profile_detail.blood_group
    }
    if (typeof props.user_profile_detail.medical_condition !== 'undefined' && props.user_profile_detail.medical_condition != null) {
      medical_condition = props.user_profile_detail.medical_condition
    }
    if (typeof props.user_profile_detail.work_email !== 'undefined' && props.user_profile_detail.work_email != null) {
      work_email = props.user_profile_detail.work_email
    }
    if (typeof props.user_profile_detail.training_completion_date !== 'undefined' && props.user_profile_detail.training_completion_date != null) {
      var mydate = new Date(props.user_profile_detail.training_completion_date)
      if (mydate != 'Invalid Date') {
        training_completion_date = props.user_profile_detail.training_completion_date
      }
    }

    if (typeof props.user_profile_detail.termination_date !== 'undefined' && props.user_profile_detail.termination_date != null) {
      var mydate = new Date(props.user_profile_detail.termination_date)
      if (mydate != 'Invalid Date') {
        termination_date = props.user_profile_detail.termination_date
      }
    }

    if (typeof props.user_profile_detail.holding_comments !== 'undefined' && props.user_profile_detail.holding_comments != null) {
      holding_comments = props.user_profile_detail.holding_comments
    }

    if (typeof props.user_profile_detail.slack_msg !== 'undefined' && props.user_profile_detail.slack_msg != null) {
      slack_msg = props.user_profile_detail.slack_msg
    }

    this.setState({
      username: username,
      user_id: user_id,
      name: name,
      jobtitle: jobtitle,
      team: team,
      dateofjoining: dateofjoining,
      dob: dob,
      gender: gender,
      training_month: training_month,
      marital_status: marital_status,
      address1: address1,
      address2: address2,
      emergency_ph1: emergency_ph1,
      emergency_ph2: emergency_ph2,
      blood_group: blood_group,
      medical_condition: medical_condition,
      work_email: work_email,
      training_completion_date: training_completion_date,
      termination_date: termination_date,
      holding_comments: holding_comments,
      slack_msg: slack_msg
    })
  }
  handleTest () {
    if (this.props.user_profile_detail.slack_msg === '1') {
      this.setState({slack_msg: '0'})
    } else {
      this.setState({slack_msg: '1'})
    }
    console.log(this.state)
    this.props.callUpdateUserProfileDetails(this.state)
  }
  render () {
    let teams = this.props.teamList.teams.length > 0 ? this.props.teamList.teams : []
    let userLevel = this.props.logged_user.role == CONFIG.ADMIN
    return (
      <div>

        <h6 className="text-center">Personal Details</h6>

        <br />
        <div className="row no-gutter">
          <div className="col-md-6">
            Employee Id :
            <b>{this.state.user_id}</b><br />
            Username :
            <b>{this.state.username}</b>
          </div>
        </div>
        <hr />

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" ref="name" onChange={() => this.setState({name: this.refs.name.value})} value={this.state.name} />
            </div>
          </div>
          <div className="col-md-6">

            <div className="form-group">
              <label>Job Title</label>
              <input type="text" className="form-control" ref="jobtitle" onChange={() => this.setState({jobtitle: this.refs.jobtitle.value})} value={this.state.jobtitle} />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Team</label>
          <select className="form-control" ref="team" onChange={() => this.setState({team: this.refs.team.value})} value={this.state.team}>
            <option value="">--Select team--</option>
            {_.map(teams, (tm, i) => (<option key={i} value={tm}>{tm}</option>))}
          </select>
        </div>

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Date Of Birth ( eg. 27/1/1988 )</label>
                <DateField
                  dateFormat="YYYY-MM-DD"
                  onChange={(date, { dateMoment, timestamp }) => { this.setState({dob: dateMoment}) }} value={this.state.dob} className="form-control" />
              </div>
            </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Date Of Joining ( eg. 2016-12-30 )</label>
                <DateField
                  dateFormat="YYYY-MM-DD"
                  onChange={(date) => this.setState({dateofjoining: date})}
                  value={this.state.dateofjoining}
                  className="form-control" />
              </div>
            </div>
          </div>

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Training Completion Date </label>
                <DateField
                  dateFormat="YYYY-MM-DD"
                  onChange={(date) => this.setState({training_completion_date: date})} value={this.state.training_completion_date}
                  className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Date Of Termination  ( eg. 2016-12-30 )</label>
                <DateField
                  dateFormat="YYYY-MM-DD"
                  onChange={(date) => this.setState({termination_date: date})} value={this.state.termination_date}
                  className="form-control" />
            </div>
          </div>

            <div className="col-md-6 p-r">
              <div className="form-group">
              <label>Training Month ( eg. 0-4 month ) </label>
              <select className="form-control" ref="training_month" onChange={() => this.setState({training_month: this.refs.training_month.value})} value={this.state.training_month}>

                    <option disabled>--select month--</option>
                    <option value="0">0 month </option>
                    <option value="1">1 month</option>
                    <option value="2">2 month</option>
                    <option value="3">3 month</option>
                    <option value="4">4 month</option>
                  </select>
                </div>
              </div>
            </div>

        <div className="row no-gutter">
          <div className={userLevel ? 'col-md-6 p-r' : 'col-md-12 p-r'}>
            <div className="form-group">
              <label>Work Email</label>
              <input type="text" className="form-control" ref="work_email" onChange={() => this.setState({work_email: this.refs.work_email.value})} value={this.state.work_email} />
            </div>
          </div>
          <div className={userLevel ? 'col-md-6' : 'hide'}>
            <div className="form-group">
              <label>Employee Holding Comment</label>
              <textarea placeholder="enter employee holding comment..." className="form-control" ref="holdingcomments" onChange={() => this.setState({holding_comments: this.refs.holdingcomments.value})} value={this.state.holding_comments}></textarea>
            </div>
          </div>
        </div>

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control" ref="gender" onChange={() => this.setState({gender: this.refs.gender.value})} value={this.state.gender}>
                <option value="">--Select gender--</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Marital Status</label>
              <select className="form-control" ref="marital_status" onChange={() => this.setState({marital_status: this.refs.marital_status.value})} value={this.state.marital_status}>
                <option value="">--Select marital status--</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Current Address</label>
              <textarea placeholder="your current address..." className="form-control" ref="address1" onChange={() => this.setState({address1: this.refs.address1.value})} value={this.state.address1}></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Permanent Address</label>
              <textarea placeholder="your permanent address..." className="form-control" ref="address2" onChange={() => this.setState({address2: this.refs.address2.value})} value={this.state.address2}></textarea>
            </div>
          </div>
        </div>

        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Emergency Contact Information 1</label>
              <input type="text" className="form-control" ref="emergency_ph1" onChange={() => this.setState({emergency_ph1: this.refs.emergency_ph1.value})} value={this.state.emergency_ph1} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Emergency Contact Information 2</label>
              <input type="text" className="form-control" ref="emergency_ph2" onChange={() => this.setState({emergency_ph2: this.refs.emergency_ph2.value})} value={this.state.emergency_ph2} />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Blood Group</label>

          <select className="form-control" ref="blood_group" onChange={() => this.setState({blood_group: this.refs.blood_group.value})} value={this.state.blood_group}>
            <option value="">--select your blood group--</option>
            <option value="O-">O-</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

        </div>

        <div className="form-group">
          <label>Any Medical Conditions</label>
          <textarea placeholder="your medical conditions..." className="form-control" ref="medical_condition" onChange={() => this.setState({medical_condition: this.refs.medical_condition.value})} value={this.state.medical_condition}></textarea>
        </div>

        <div className="form-group">
        <label><i className="fa fa-slack" aria-hidden="true"></i> Don’t post on Slack</label>
        <input value type="checkbox" id="1" name="loyalty_Bonus" style={{'verticalAlign': 'middle', 'marginLeft': '20px'}}
          onChange={(e) => {
            if (e.target.checked) {
              this.setState({
                send_slack_msg: '1'
              })
            } else {
              this.setState({
                send_slack_msg: ''
              })
            }
          }} />
      </div>

  <button className="col-xs-12 md-btn md-raised indigo" onClick={() => this.props.callUpdateUserProfileDetails(this.state)}>Update Profile Details</button>
  </div>
    )
  }
}

export default FormUserProfileDetails
