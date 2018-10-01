import React, { Component } from "react";
import Menu from "components/generic/Menu";
import Header from "components/generic/Header";
import { connect } from "react-redux";
import * as actions from "appRedux/actions";
import HealthStats from "modules/healthStats/component/HealthStats";
import HealthStatsSecretKey from "modules/healthStats/component/HealthStatsSecretKey";
import * as actionsUsersList from "appRedux/generic/actions/usersList";
import {notify} from 'src/services/notify';
import EmployeeJoiningTerminationStats from "modules/healthStats/component/EmployeeJoiningTerminationStats"


class ContainerHealthStats extends React.Component {
    componentWillMount() {
        this.props.onIsAlreadyLogin();
        this.props.healthStatsRequest();
        this.props.requestStatsHistory();
        this.props.healthStatsKeyListRequest();
    }
    componentWillReceiveProps(props) {
        let {deleteHealthData} = props;
        if (deleteHealthData.isError) {
            notify('Error !', deleteHealthData.message, 'error');
          }
        if (deleteHealthData.isSuccess) {
            notify('Success !', deleteHealthData.data.message, 'success');
          }
    }
    render() {
        return (
            <div>
                <Menu {...this.props} />
                <div id="content" className="app-content box-shadow-z0" role="main">
                    <Header
                        pageTitle={"App Health & Stats"}
                        showLoading={this.props.frontend.show_loading}
                    />
                    <div className="app-body" id="view">
                        <div className="padding">
                        <div className="row m-0">
                            <div className="col-sm-2 bg-white">
                                <HealthStats {...this.props} />
                            </div>
                            <div className="col-sm-5 secret-key-block">
                                <HealthStatsSecretKey {...this.props} />
                            </div>
                        </div>
                        <div className="row m-10">
                            <div className="col-sm-6 bg-white">
                            <h5>Recruitment Stats</h5>
                            <EmployeeJoiningTerminationStats data={this.props.statsHistory}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    frontend: state.frontend.toJS(),
    loggedUser: state.logged_user.userLogin,
    healthData: state.healthstats.healthStats.data,
    deleteHealthData: state.healthstats.deleteHealthStats,
    statsHistory: state.healthstats.statsHistory,
    healthKeyData: state.healthstats.healthStatsSecretKeyList.data,
});

const mapDispatchToProps = dispatch => ({
    onIsAlreadyLogin: () => dispatch(actions.isAlreadyLogin()),
    healthStatsRequest: () => dispatch(actions.requestHealthStats()),
    deleteHealthStats: (year) => dispatch(actions.requestDeleteHealthStats(year)),
    requestStatsHistory: () => dispatch(actions.requestStatsHistory()),
    healthStatsKeyListRequest: () => dispatch(actions.requestHealthStatsSecretKeyList()),
    healthStatsAddKeyRequest: (appname) => dispatch(actions.requestHealthStatsAddSecretKey(appname)),
    healthStatsDeleteKeyRequest: (appid) => dispatch(actions.requestHealthStatsDeleteSecretKey(appid)),
    healthStatsRegenerateKeyRequest: (appid) => dispatch(actions.requestHealthStatsRegenerateSecretKey(appid))

});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHealthStats);