

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TodayFollowUp.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import db from "../../../../../firebase";

const TodayFollowUp = () => {
  const [followUp, setFollowUp] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowUp = async () => {
      db.collection("followUp").onSnapshot((snapshot) => {
        const followUpData = snapshot.docs.map((doc) => ({
          id: doc.id,
          followUpNo: doc.data().followUpNo,
          leadNo: doc.data().leadNo,
          followUpBy: doc.data().followUpBy,
          createdDate: doc.data().createdDate,
          nextdate: doc.data().nextdate,
          remarks: doc.data().remarks,
          statement: doc.data().statement,
          status: doc.data().status,
          summary: doc.data().summary,
          transferto: doc.data().transferto,
        }));
        setFollowUp(followUpData);
      });
    };

    fetchFollowUp();
  }, []);

  const today = new Date().toISOString().slice(0, 10); // Today's date in "YYYY-MM-DD" format

  const followUpWithTodayDate = followUp.filter(
    (follow) => follow.nextdate === today
  );

  // Sort follow-ups by leadNo and followUpNo in ascending order
  const sortedFollowUpWithTodayDate = followUpWithTodayDate.sort(
    (a, b) => a.leadNo - b.leadNo || a.followUpNo - b.followUpNo
  );

  const followUpWithTodayDateWithSerialNo = sortedFollowUpWithTodayDate.map(
    (followUp, index) => ({
      ...followUp,
      serialNumber: index + 1, // Serial number starting from 1
    })
  );

  const columns = [
    { field: "serialNumber", headerName: "S.no", sortable: false, flex: 0.5 },
    {
      field: "followUpNo",
      headerName: "Follow-Up Number",
      type: "number",
      flex: 1,
    },
    { field: "leadNo", headerName: "Lead Number", type: "number", flex: 1 },
    { field: "followUpBy", headerName: "Follow-Up By", flex: 1 },
    { field: "createdDate", headerName: "Created Date", flex: 1 },
    { field: "nextdate", headerName: "Follow-Up Date", flex: 1 },
    { field: "statement", headerName: "Statement", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "summary", headerName: "Summary", flex: 1 },
    { field: "transferto", headerName: "Transfer To", flex: 1 },
    { field: "remarks", headerName: "Remark", flex: 1 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["heading-with-homebtn"]}>
        <div className={styles.heading}>Follow-Ups for Today</div>
      </div>
      <DataGrid
        rows={followUpWithTodayDateWithSerialNo}
        columns={columns}
        pageSize={10}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        onRowClick={(row) => navigate(``)}
        sx={{
          backgroundColor: "#fbfeff",
        }}
      />
    </div>
  );
};

export default TodayFollowUp;

