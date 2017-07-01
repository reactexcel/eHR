import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Menu from 'components/generic/Menu';
import {isNotUserValid} from 'src/services/generic';
import Header from 'components/generic/Header';
import Template from '../components/Template';
import * as actions_login from 'appRedux/auth/actions/index';
import * as actions_policy from 'appRedux/policyDocuments/actions/index';
import * as actions_salary from 'appRedux/salary/actions/viewSalary';
import * as actions_templates from 'appRedux/templates/actions/templates';

class TemplateContainer extends React.Component {
  constructor (props) {
    super(props);
    this.props.onIsAlreadyLogin();
  }
  componentWillMount () {
    this.props.onFetchUserPolicyDocument();
    this.props.onFetchUserSalaryDetails().then(() => {
      this.props.onFetchTemplate();
      this.props.onFetchVariables();
    });
  }
  componentWillReceiveProps (props) {
    let isNotValid = isNotUserValid(this.props.route.path, props.logged_user.logged_in, props.policy_documents.policyDocuments);
    if (isNotValid.status) {
      this.props.router.push(isNotValid.redirectTo);
    }
  }

  render () {
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'Email Template'} {...this.props} />
          <Template {...this.props} />
        </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    frontend:         state.frontend.toJS(),
    logged_user:      state.logged_user.toJS(),
    templates:        state.template.toJS(),
    employee:         state.empSalaryList.toJS(),
    policy_documents: state.policyDocuments.toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions_login.isAlreadyLogin());
    },
    onFetchUserPolicyDocument: () => {
      return dispatch(actions_policy.fetchUserPolicyDocument());
    },
    onFetchTemplate: () => {
      return dispatch(actions_templates.get_templates());
    },
    onFetchVariables: () => {
      return dispatch(actions_templates.get_variable());
    },
    onSaveTemplate: (t_id, t_name, t_subject, t_body) => {
      return dispatch(actions_templates.save_templates(t_id, t_name, t_subject, t_body));
    },
    onDeleteTemplate: (t_id) => {
      return dispatch(actions_templates.delete_template(t_id));
    },
    onSendMail: (email) => {
      return dispatch(actions_templates.send_mail(email));
    },
    onDownloadPdf: (template, fileName) => {
      return dispatch(actions_templates.download_pdf(template, fileName));
    },
    onFetchUserSalaryDetails: () => {
      return dispatch(actions_salary.fetchUserSalaryDetails());
    }
  };
};

const VisibleTemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateContainer);

const RouterVisibleTemplateContainer = withRouter(VisibleTemplateContainer);

export default RouterVisibleTemplateContainer;
