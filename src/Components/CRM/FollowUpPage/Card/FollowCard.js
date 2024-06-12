import React from "react";
import styles from "./FollowCard.module.css";

const FollowCard = ({
  currDate,
  createdBy,
  summary,
  statement,
  status,
  transferto,
  nextdate,
  followUpStatus,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <div>
          <strong>On Date:</strong> &nbsp;{currDate}
        </div>
        <div>
          <strong>@{createdBy}</strong>
        </div>
      </div>
      <div>
        <strong>Summary: </strong>
        &nbsp;{summary} <button className={styles.readmore}>Read more</button>
      </div>
      <div>
        <strong>Statement: </strong>&nbsp;{statement}...
      </div>
      <div>
        <strong>Transfer To: </strong>&nbsp;{transferto}
      </div>
      <div>
        <strong>Next Follow-Up Date: </strong>&nbsp;{nextdate}
      </div>
      <div>
        <strong>Follow-Up Status: </strong>&nbsp;{followUpStatus}
      </div>
    </div>
  );
};

export default FollowCard;
