import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import moment from 'moment';
import * as _ from 'lodash';
import {notify} from 'src/services/notify';
import {CONFIG} from 'src/config/index';
import Menu from 'src/components/generic/Menu';
import {isNotUserValid} from 'src/services/generic';
import Header from 'src/components/generic/Header';
import UsersList from 'src/components/generic/UsersList';
import UsersListHeader from 'src/components/generic/UsersListHeader';
import UserSalaryHistory from 'src/components/salary/manageSalary/UserSalaryHistory';
import UserHoldingHistory from 'src/components/salary/manageSalary/UserHoldingHistory';
import UserHistoryHolding from 'src/components/salary/manageSalary/UserHistoryHolding';
import FormAddHolding from 'modules/salary/components/manageSalary/FormAddHolding';
import FormAddSalary from 'modules/salary/components/manageSalary/FormAddSalary';
import AddHoldingForm from 'modules/salary/components/manageSalary/AddHoldingForm';
import AddSalaryForm from 'modules/salary/components/manageSalary/AddSalaryForm';
import * as actions from 'src/redux/actions';
import * as actions_usersList from 'src/redux/generic/actions/usersList';
import * as actions_manageSalary from 'src/redux/salary/actions/manageSalary';
import SalaryBlock from "src/components/generic/SalaryBlock";

class ManageSalary extends React.Component {
  constructor (props) {
    super(props);
    this.props.onIsAlreadyLogin();
    this.state = {
      'selected_user_name':          '',
      'selected_user_image':         '',
      'selected_user_jobtitle':      '',
      'selected_user_id':            '',
      'defaultUserDisplay':          '',
      'salary_history':              [],
      'holding_history':             [],
      'user_latest_salary_details':  {},
      'user_latest_holding_details': {},
      'user_date_of_joining':        {},
      'msg':                         '',
      'current_date':                {},
      'subList':                     []
    };

    this.onUserClick = this.onUserClick.bind(this);
    this.callAddUserSalary = this.callAddUserSalary.bind(this);
    this.callAddUserHolding = this.callAddUserHolding.bind(this);
    this.viewSalarySummary = this.viewSalarySummary.bind(this);
    this.callDeleteUserSalary = this.callDeleteUserSalary.bind(this);
  }
  componentWillMount () {
    this.props.onUsersList();
    var current_date = moment().format('YYYY-MM-DD');
  }

  componentWillReceiveProps (props) {
    let isNotValid = isNotUserValid(this.props.route.path, props.loggedUser);
    if (isNotValid.status) {
      this.props.router.push(isNotValid.redirectTo);
    }
    this.setState({subList: this.props.usersList.users});
    let s_salary_history = [];
    let s_user_latest_salary_details = {};
    let s_holding_history = [];
    let s_user_latest_holding_details = {};

    if (typeof props.manageSalary.salary_structure.salary_details !== 'undefined' && props.manageSalary.salary_structure.salary_details.length > 0) {
      s_salary_history = _.sortBy(props.manageSalary.salary_structure.salary_details, "date").reverse();
    }
    if (typeof props.manageSalary.salary_structure.holding_details !== 'undefined' && props.manageSalary.salary_structure.holding_details.length > 0) {
      s_holding_history = props.manageSalary.salary_structure.holding_details.reverse();
      s_user_latest_holding_details = s_holding_history[0];
      this.setState({});
    }
    this.setState({salary_history: s_salary_history, user_latest_salary_details: s_user_latest_salary_details, holding_history: s_holding_history, user_latest_holding_details: s_user_latest_holding_details});
  }

  componentDidUpdate () {
    if (this.state.defaultUserDisplay == '') {
      if (this.props.usersList.users.length > 0) {
        let firstUser = this.props.loggedUser.data.role == CONFIG.HR ? this.state.subList[0] : this.props.usersList.users[0];
        let selectedUser = this.props.location.query.selectedUser
        let defaultUserId = selectedUser || firstUser.user_Id;
        this.onUserClick(defaultUserId);
      }
    }
    if(this.props.manageSalary.status_message !== ''){
      notify(this.props.manageSalary.status_message);
    }
  }

  onUserClick (userid) {
    let selected_user_name = '';
    let selected_user_image = '';
    let selected_user_jobtitle = '';
    let selected_user_id = '';
    let selected_user_date_of_joining = '';

    if (this.props.usersList.users.length > 0) {
      let userDetails = _.find(this.props.usersList.users, {'user_Id': userid});
      if (typeof userDetails !== 'undefined') {
        selected_user_name = userDetails.name;
        selected_user_image = userDetails.slack_profile.image_192;
        selected_user_jobtitle = userDetails.jobtitle;
        selected_user_id = userDetails.user_Id;
        selected_user_date_of_joining = userDetails.dateofjoining;
        this.props.router.push('manage_salary?selectedUser='+userDetails.user_Id)
      }
    }
    this.setState({
      'defaultUserDisplay':            userid,
      'selected_user_name':            selected_user_name,
      'selected_user_image':           selected_user_image,
      'selected_user_jobtitle':        selected_user_jobtitle,
      'selected_user_id':              selected_user_id,
      'selected_user_date_of_joining': selected_user_date_of_joining
    });

    this.props.onUserSalaryDetails(userid).then((val) => {
      this.setState({msg: val.data.message});
    });
  }

  callAddUserSalary (new_salary_details) {
    this.props.onAddNewSalary(new_salary_details).then((data) => {}, (error) => {
      notify(error);
    });
  }

  callAddUserHolding (new_holding_details) {
    this.props.onAddNewHolding(new_holding_details).then((data) => {}, (error) => {
      notify(error);
    });
  }
  viewSalarySummary (e, id) {
    e.stopPropagation();
    let new_details = this.state.salary_details;
    _.forEach(this.state.salary_history, (d, k) => {
      if (d.test.id == id) {
        new_details = d;
      }
    });
    this.setState({'user_latest_salary_details': new_details});
  }
  callDeleteUserSalary (e, user_id, salary_id) {
    e.stopPropagation();
    this.props.onDeleteUserSalary(user_id, salary_id).then((data) => {
      this.onUserClick(user_id);
    }, (error) => {
      notify(error);
    });
  }

  render () {
    let data;
    const message = this.state.msg;
    if (message) {
      data = (<div className="well well-lg" style={{'color':"red"}} >
        <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
        {message} </div>)
    }else {
      data = this.state.salary_history.map((item, index) => {
        return (
          <SalaryBlock key={index} item={item} displayPage="manage" viewSalarySummary={this.viewSalarySummary} callDeleteUserSalary={this.callDeleteUserSalary} />
        )
      });
    }
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'Manage Salaries'} showLoading={this.props.frontend.show_loading} userListHeader />
          <UsersListHeader users={this.props.usersList.users} selectedUserId={this.state.selected_user_id} onUserClick={this.onUserClick} />
          <div className="app-body" id="view">
            <div className="padding">
              <div className="row">
                <div className="col-md-2 col-sm-12 col-xs-12 hidden-xs" id="fixedScroll">
                  <UsersList users={this.props.loggedUser.data.role == CONFIG.HR ? this.state.subList : this.props.usersList.users} selectedUserId={this.state.selected_user_id} onUserClick={this.onUserClick} {...this.props} />
                </div>
                <div className="col-md-10 col-sm-12 col-xs-12">
                  <div className="box m-t-xs">
                    <div className="p-a text-center">
                      <div className="text-md m-t block">{this.state.selected_user_name}</div>
                      <p>
                        <small>{this.state.selected_user_jobtitle}</small>
                      </p>
                    </div>
                  </div>
                  <div className="box m-t-xs">
                    {/* <div className="p-a block ">
                      <h6 className="text-center">Add New</h6>
                      <hr />
                      <AddSalaryForm {...this.props} userid={this.state.selected_user_id} callAddUserSalary={this.callAddUserSalary} user_latest_salary_details={this.state.user_latest_salary_details}/>
                    </div> */}
                    <div className="p-a block ">
                      <h6 className="text-center">Salary Revision</h6>
                      <hr />
                      <div className="content-salary">
                        {data}
                        <AddSalaryForm {...this.props} userid={this.state.selected_user_id} callAddUserSalary={this.callAddUserSalary} user_latest_salary_details={this.state.user_latest_salary_details}/>
                      </div>
                    </div>
                  </div>
                  <div className="box m-t-xs">
                    <div className="p-a block ">
                      <h6 className="text-center">Holding Revision</h6>
                      <hr />
                      <div className="content-salary">
                        <UserHistoryHolding data={this.state.holding_history} />
                        <AddHoldingForm {...this.props} userid={this.state.selected_user_id} callAddUserHolding={this.callAddUserHolding} user_latest_salary_details={this.state.user_latest_salary_details}/>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row no-gutter b-t box">
                    <div className="col-md-3 col-sm-4 col-xs-12 b-r box">
                      <div className="p-a block ">
                        <h6 className="text-center">Salary Revision</h6>
                        <hr />
                        <UserSalaryHistory data={this.state.salary_history} message={this.state.msg} viewSalarySummary={this.viewSalarySummary} callDeleteUserSalary={this.callDeleteUserSalary} />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8 col-xs-12 b-r box">
                      <div className="p-a block">
                        <h6 className="text-center">Add New</h6>
                        <hr />
                        <FormAddSalary {...this.props} userid={this.state.selected_user_id} callAddUserSalary={this.callAddUserSalary} user_latest_salary_details={this.state.user_latest_salary_details} />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-8 col-xs-12 b-r box">
                      <div className="p-a block ">
                        <h6 className="text-center">Holding Revision</h6>
                        <hr />
                        <UserHoldingHistory data={this.state.holding_history} />
                        <h6 className="text-center">Add Holding</h6>
                        <hr />
                        <FormAddHolding {...this.props} userid={this.state.selected_user_id} callAddUserHolding={this.callAddUserHolding} user_latest_salary_details={this.state.user_latest_salary_details} />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    frontend:     state.frontend.toJS(),
    loggedUser:   state.logged_user.userLogin,
    usersList:    state.usersList.toJS(),
    manageSalary: state.manageSalary.toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions.isAlreadyLogin());
    },
    onUsersList: () => {
      return dispatch(actions_usersList.get_users_list());
    },
    onUserSalaryDetails: (userid) => {
      return dispatch(actions_manageSalary.get_user_salary_details(userid));
    },
    onAddNewSalary: (new_salary_data) => {
      return dispatch(actions_manageSalary.add_user_new_salary(new_salary_data));
    },
    onAddNewHolding: (new_holding_data) => {
      return dispatch(actions_manageSalary.add_user_new_holding(new_holding_data));
    },
    onDeleteUserSalary: (user_id, salary_id) => {
      return dispatch(actions_manageSalary.delete_user_salary(user_id, salary_id));
    }
  };
};

const VisibleManageSalary = connect(mapStateToProps, mapDispatchToProps)(ManageSalary);

const RouterVisibleManageSalary = withRouter(VisibleManageSalary);

export default RouterVisibleManageSalary;
