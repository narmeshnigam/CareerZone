import React, { useState, useEffect } from "react";
import db from "../../../firebase";
import "./AdminFollowUpInfo.css";

const AdminFollowUpInfo = () => {
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    const fetchFollowUps = async () => {
      try {
        const snapshot = await db.collection("followUp").get();
        const followUpData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFollowUps(followUpData);
      } catch (error) {
        console.error("Error fetching follow-ups: ", error);
      }
    };

    fetchFollowUps();
  }, []);

  return (
    <div className="admin-follow-up-info">
      <h1>Follow Up Information</h1>
      <div className="follow-up-cards">
        {followUps.length > 0 ? (
          followUps.map((followUp) => (
            <div className="card" key={followUp.id}>
              <div className="card-body">
                <p>
                  <strong>Created Date:</strong> {followUp.createdDate}
                </p>
                <p>
                  <strong>Follow Up By:</strong> {followUp.followUpBy}
                </p>
                <p>
                  <strong>Follow Up No:</strong> {followUp.followUpNo}
                </p>
                <p>
                  <strong>Lead No:</strong> {followUp.leadNo}
                </p>
                <p>
                  <strong>Next Date:</strong> {followUp.nextdate}
                </p>
                <p>
                  <strong>Remarks:</strong> {followUp.remarks}
                </p>
                <p>
                  <strong>Statement:</strong> {followUp.statement}
                </p>
                <p>
                  <strong>Status:</strong> {followUp.status}
                </p>
                <p>
                  <strong>Summary:</strong> {followUp.summary}
                </p>
                <p>
                  <strong>Transfer To:</strong> {followUp.transferto}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No follow-up information available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminFollowUpInfo;
