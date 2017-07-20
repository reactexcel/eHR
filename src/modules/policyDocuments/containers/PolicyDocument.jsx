import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Menu from 'components/generic/Menu';
import {isNotUserValid} from 'src/services/generic';
import Header from 'components/generic/Header';
import DocumentsList from 'modules/policyDocuments/components/DocumentsList';
import * as actions from 'appRedux/actions';
import * as actions_policy from 'appRedux/policyDocuments/actions/index';

class PolicyDocumentContainer extends React.Component {
  constructor (props) {
    super(props);
    this.props.onIsAlreadyLogin();
    this.state = {
      docs: []
    };
  }
  componentWillMount () {
    this.props.onFetchUserPolicyDocument();
  }
  componentWillReceiveProps (props) {
    let isNotValid = isNotUserValid(this.props.route.path, props.loggedUser);
    if (isNotValid.status && isNotValid.redirectTo !== '/policy_documents') {
      this.props.router.push(isNotValid.redirectTo);
    }
    this.setState({
      docs: props.policy_documents.policyDocuments
    });
  }
  render () {
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'Policy Documents'} showLoading={this.props.frontend.show_loading} />
          <DocumentsList policyDocuments={this.state.docs} onUpdateReadStatus={this.props.onUpdateReadStatus} />
        </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    frontend:         state.frontend.toJS(),
    loggedUser:       state.logged_user.userLogin,
    policy_documents: state.policyDocuments.toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions.isAlreadyLogin());
    },
    onFetchUserPolicyDocument: () => {
      return dispatch(actions.requestfetchUserPolicyDocument());
    },
    onUpdateReadStatus: (updateDoc) => {
      return dispatch(actions.requestUpdateReadStatus(updateDoc));
    }
  };
};

const VisiblePolicyDocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PolicyDocumentContainer);

const RouterVisiblePolicyDocumentContainer = withRouter(VisiblePolicyDocumentContainer);

export default RouterVisiblePolicyDocumentContainer;
