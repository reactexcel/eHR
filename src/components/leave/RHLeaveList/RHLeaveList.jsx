import React from "react";
import PropTypes from "prop-types";
import { ButtonInfo, Button } from "components/generic/buttons";

const RHLeavesList = ({ leave, handleApplyClick }) => {
  let s = "Pending";
  let f_char = s.charAt(0);
  let leaveStatusColor = "";
  leaveStatusColor = "green-A200";
  return (
    <div className={`list-item b-l b-l-2x b-${leaveStatusColor}`}>
      <div className="list-left">
        <span className={`w-40 avatar ${leaveStatusColor}`}>{f_char}</span>
      </div>
      <div className="list-body">
        <div className="col-xs-8">
          <div>
            <span className="_500">Holiday : {leave.name}</span>
          </div>
          <div>
            <span className="_500">Date : {leave.date}</span>
          </div>

          <div className="text-ellipsis text-muted text-sm">
            Month : {leave.month}
          </div>
          <div className="text-ellipsis text-muted text-sm">
            Day : {leave.day}
          </div>

          {leave.leave_type !== "" ? (
            <div className="text-ellipsis text-muted text-sm">
              Leave Type : {leave.type_text}
            </div>
          ) : null}
        </div>
        <div className="save-btn">
          <button
            type="button"
            className={`btn btn-primary`}
            onClick={() => {
              handleApplyClick(leave);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default RHLeavesList;
