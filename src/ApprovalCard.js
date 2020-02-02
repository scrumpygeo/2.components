import React from "react";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Dost thee approve, pilgrim?</div>
      <div className="extra content">
        <div ui two buttons>
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
