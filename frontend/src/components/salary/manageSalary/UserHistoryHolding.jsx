import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';

const UserHistoryHolding = ({ data }) => {
    let holdingHistory = (<tr>
        <td colSpan={5}><div className="text-center">No holding data available</div></td>
    </tr>)
    if (data.length) {
        holdingHistory = _.map(data, (item, key) => {
            return (
                <tr key={key}>
                    <td>Rs.{item.holding_amt}</td>
                    <td>{moment(item.holding_start_date).format("DD-MMMM-YYYY")}</td>
                    <td>{moment(item.holding_end_date).format("DD-MMMM-YYYY")} ({item.holding_month} {item.holding_month < 2 ? 'month' : 'months'})</td>
                    <td>{item.reason}</td>
                    <td>{moment(item.last_updated_on).format("DD-MMMM-YYYY")}</td>
                </tr>
            )
        });
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Holding Amount</td>
                        <td>Start</td>
                        <td>End</td>
                        <td>Reason</td>
                        <td>Updated on</td>
                    </tr>
                </thead>
                <tbody>
                    {holdingHistory}
                </tbody>
            </table>
        </div>
    )
}

UserHistoryHolding.propTypes = {
    data: PropTypes.array.isRequired
}

export default UserHistoryHolding;
