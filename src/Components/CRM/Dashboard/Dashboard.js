import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import Linechart from "./Chart/LineChart/Linechart";
import Barchart from "./Chart/BarChart//Barchart";
import NoFollowUpRecords from "./Tables/NoFollowUpRecords/NoFollowUpRecords";
import TodayFollowUp from "./Tables/TodayFollowUp/TodayFollowUp";
import db from "../../../firebase";

const Dashboard = () => {
  const [leads, setLeads] = useState({
    todayLeads: "",
    thisMonthLeads: "",
  });
  const [followUp, setFollowUp] = useState({
    todayFollowUp: "",
    thisMonthFollowUp: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodaysLeads = async () => {
      const today = new Date();
      const priorDateNew = today.toLocaleDateString();

      try {
        const snapshot = await db
          .collection("leads")
          .where("createdDate", "==", priorDateNew)
          .get();
        const count = snapshot.docs.length;
        setLeads((prevState) => ({ ...prevState, todayLeads: count }));
      } catch (error) {
        console.error("Error fetching leads: ", error);
      }

      try {
        const snapshot = await db
          .collection("followUp")
          .where("createdDate", "==", priorDateNew)
          .get();
        const count = snapshot.docs.length;
        setFollowUp((prevState) => ({ ...prevState, todayFollowUp: count }));
      } catch (error) {
        console.error("Error fetching leads: ", error);
      }
    };

    const fetchLeads = async () => {
      const today = new Date();
      const monthstartdate =
        today.getMonth() + 1 + "/01/" + today.getFullYear();

      try {
        const snapshot = await db
          .collection("leads")
          .where("createdDate", ">=", monthstartdate)
          .get();

        const count = snapshot.docs.length;
        setLeads((prevState) => ({ ...prevState, thisMonthLeads: count }));
      } catch (error) {
        console.error("Error fetching leads for the month: ", error);
      }
      try {
        const snapshot = await db
          .collection("followUp")
          .where("createdDate", ">=", monthstartdate)
          .get();

        const count = snapshot.docs.length;
        setFollowUp((prevState) => ({
          ...prevState,
          thisMonthFollowUp: count,
        }));
      } catch (error) {
        console.error("Error fetching leads for the month: ", error);
      }
    };

    fetchTodaysLeads();
    fetchLeads();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Dashboard</div>
      <div className={styles.upperContainer}>
        <div className={styles.lineChart}>
          <Linechart />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainerUpper}>
            <div className={styles.leadStatsContainer}>
              <div className={styles.leadStats}>
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "500",
                    textAlign: "justify",
                  }}
                >
                  Today Leads: {leads.todayLeads} <br /> This Month:{" "}
                  {leads.thisMonthLeads}
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div
                onClick={() => navigate("/createLead")}
                className={styles.leadButtons}
              >
                Create New Lead
              </div>
              <div
                onClick={() => navigate("/leadHistory")}
                className={styles.leadButtons}
              >
                Lead History
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.upperContainer}>
        <div className={`${styles.rightContainerUpper} ${styles.barcahrtLeft}`}>
          <div className={styles["rightContainerUpper"]}>
            <div className={styles.leadStats}>
              <div
                style={{
                  fontSize: "1.4rem",
                  textAlign: "justify",
                  fontWeight: "500",
                }}
              >
                Today FollowUp : {followUp.todayFollowUp}
                <br />
                This Month : {followUp.thisMonthFollowUp}
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#fff" }} className={styles.lineChart}>
          <Barchart />
        </div>
      </div>
      <div>
        <NoFollowUpRecords />
      </div>
      <div>
        <TodayFollowUp />
      </div>
    </div>
  );
};

export default Dashboard;
