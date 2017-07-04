import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import _ from 'lodash';
import Menu from 'components/generic/Menu';
import {isNotUserValid} from 'src/services/generic';
import Header from 'components/generic/Header';
import UsersList from 'components/generic/UsersList';
import DisabledUserDetails from 'components/manageUser/DisabledUserDetails';
import UserPayslipsHistory from 'components/salary/managePayslips/UserPayslipsHistory';
import UpdateEmployeeDocument from 'modules/manageUsers/components/UpdateEmployeeDocument';
import * as actionsLogin from 'appRedux/auth/actions/index';
import * as actionsDisabledEmployee from 'src/actions/user/usersList';
import * as actionsManageUsers from 'appRedux/manageUsers/actions/manageUsers';
import * as actionsManagePayslips from 'appRedux/salary/actions/managePayslips';

const styles = {content: {'paddingTop': '50px'}};

class PageDisabledEmployes extends React.Component {
  constructor (props) {
    super(props);
    this.props.onIsAlreadyLogin();
    this.state = {
      disabled_users:           [],
      'defaultUserDisplay':     '',
      'selected_user_name':     '',
      'f_char':                 '',
      'selected_user_jobtitle': '',
      'selected_user_id':       '',
      'userDetails':            '',
      key:                      0,
      user_documents:           {},
      user_payslip_history:     []
    };
    this.onUserClick = this.onUserClick.bind(this);
    this.changeEmployeeStatus = this.changeEmployeeStatus.bind(this);
  }
  componentWillMount () {
    window.scrollTo(0, 0);
    this.props.onFetchDisabledEmployee();
  }
  componentWillReceiveProps (props) {
    window.scrollTo(0, 0);
    let isNotValid = isNotUserValid(this.props.route.path, props.logged_user);
    if (isNotValid.status) {
      this.props.router.push(isNotValid.redirectTo);
    }
    this.setState({
      user_payslip_history: props.managePayslips.user_payslip_history,
      user_documents:       props.manageUsers.user_documents
    });
  }
  componentDidUpdate () {
    if (this.state.defaultUserDisplay === '') {
      if (this.props.usersList.disabled_users.length > 0) {
        let userList = this.props.usersList.disabled_users;
        let firstUser = userList[this.state.key];
        if (firstUser === undefined) {
          firstUser = userList[0];
        }
        this.onUserClick(firstUser);
      }
    }
  }
  onUserClick (firstUser) {
    window.scrollTo(0, 0);
    this.setState({
      'defaultUserDisplay':     firstUser.user_Id,
      'selected_user_name':     firstUser.name,
      'f_char':                 firstUser.name.charAt(0),
      'selected_user_jobtitle': firstUser.jobtitle,
      'selected_user_id':       firstUser.user_Id,
      'userDetails':            firstUser
    });
    this.props.onGetUserDocument(firstUser.user_Id);
    this.props.onUserManagePayslipsData(firstUser.user_Id);
  }
  changeEmployeeStatus (userid, status) {
    this.props.onChangeEmployeeStatus(userid, status).then(() => {
      this.props.onFetchDisabledEmployee();
      if (this.props.usersList.disabled_users.length > 0) {
        let userList = this.props.usersList.disabled_users;
        let firstUser = userList[0];
        this.onUserClick(firstUser);
      }
    });
  }
  render () {
    let disabledUsers = _.orderBy(this.props.usersList.disabled_users, 'user_Id', 'asc');
    let userDetails = '';
    if (!_.isEmpty(this.state.userDetails)) {
      userDetails = <DisabledUserDetails userDetails={this.state.userDetails} changeEmployeeStatus={this.changeEmployeeStatus} />;
    }
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'Disabled Employees'} showLoading={this.props.frontend.show_loading} />
          <div className="app-body" id="view">
            <div style={styles.content} className="padding">
              <div className="row">
                <div className="col-md-3">
                  <UsersList disabledUser users={disabledUsers} selectedUserId={this.state.selected_user_id} onUserClick={this.onUserClick} />
                </div>
                <div className="col-md-9">
                  <div className="box">
                    <div className="box-body">{userDetails}</div>
                  </div>
                  <div className="box">
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-center"><u>Previous Payslips</u></h6>
                          <hr />
                          <UserPayslipsHistory user_payslip_history={this.state.user_payslip_history} />
                        </div>
                        <div className="col-md-6">
                          <UpdateEmployeeDocument
                            disabled user_documents={this.state.user_documents}
                            user_id={this.state.selected_user_id}
                            onUpdatedocuments={this.props.onUpdatedocuments}
                            {...this.props} />
                        </div>
                      </div>
                    </div>
                  </div>
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
    frontend:       state.frontend.toJS(),
    logged_user:    state.logged_user.toJS(),
    usersList:      state.usersList.toJS(),
    managePayslips: state.managePayslips.toJS(),
    manageUsers:    state.manageUsers.toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin:         () => { return dispatch(actionsLogin.isAlreadyLogin()); },
    onFetchDisabledEmployee:  () => { return dispatch(actionsDisabledEmployee.getDisabledUsersList()); },
    onChangeEmployeeStatus:   (userid, status) => { return dispatch(actionsManageUsers.changeEmployeeStatus(userid, status)); },
    onDeleteDocument:         (docId) => { return dispatch(actionsManageUsers.deleteDocument(docId)); },
    onGetUserDocument:        (userid) => { return dispatch(actionsManageUsers.getUserDocument(userid)); },
    onUserManagePayslipsData: (userid) => { return dispatch(actionsManagePayslips.get_user_manage_payslips_data(userid)); }
  };
};

const VisiblePageDisabledEmployes = connect(mapStateToProps, mapDispatchToProps)(PageDisabledEmployes);

const RouterVisiblePageDisabledEmployes = withRouter(VisiblePageDisabledEmployes);

export default RouterVisiblePageDisabledEmployes;
