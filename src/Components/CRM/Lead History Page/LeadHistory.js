import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LeadHistory.module.css";
import db from "../../../firebase";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import PopUpForm from "./PopUpForm/PopUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const LeadHistory = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [notChange, setNotChange] = useState({
    id: "",
    leadNumber: "",
    createdDate: "",
    createdBy: "",
    assignmentDate: "",
    assignedBy: "",
  });

  const columns = [
    { field: "serialNumber", headerName: "S.no", sortable: false },
    { field: "leadNumber", headerName: "Number" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email ID" },
    { field: "courseInterest", headerName: "Course" },
    { field: "college", headerName: "College" },
    { field: "mobileNumber", headerName: "Mobile Number", type: "number" },
    {
      field: "alternateMobile",
      headerName: "Alternate Mobile",
      type: "number",
    },
    { field: "city", headerName: "City" },
    { field: "locality", headerName: "Locality" },
    { field: "pin", headerName: "Pin Code", type: "number" },
    { field: "budget", headerName: "Budget", type: "number" },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => handleView(params.row.id)}
          sx={{
            backgroundColor: "#03C03C", // Set your desired background color
            color: "#FFFFFF", // Set your desired text color
            paddingTop: "10px", // Add padding on top
            paddingBottom: "10px", // Add padding on bottom
            "&:hover": { backgroundColor: "green" },
          }}
        >
          <FontAwesomeIcon icon={faEye} style={{ fontSize: "18px" }} />
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => handleDelete(params.row.id)}
          sx={{
            backgroundColor: "#FF0800", // Set your desired background color
            color: "#FFFFFF", // Set your desired text color
            paddingTop: "10px", // Add padding on top
            paddingBottom: "10px", // Add padding on bottom
            "&:hover": { backgroundColor: "red" },
          }}
        >
          <FontAwesomeIcon icon={faTrash} style={{ fontSize: "18px" }} />
        </Button>
      ),
    },
    {
      field: "update",
      headerName: "Update",
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => handleUpdate(params.row.id)}
          sx={{
            backgroundColor: "dodgerblue", // Set your desired background color
            color: "#FFFFFF", // Set your desired text color
            paddingTop: "10px", // Add padding on top
            paddingBottom: "10px", // Add padding on bottom
            "&:hover": { backgroundColor: "dodgerblue" },
          }}
        >
          <FontAwesomeIcon icon={faPenSquare} style={{ fontSize: "18px" }} />
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchLeads = async () => {
      db.collection("leads").onSnapshot((snapshot) => {
        setLeads(
          snapshot.docs.map((doc, index) => ({
            id: doc.id,
            serialNumber: index + 1,
            leadNumber: doc.data().leadNumber,
            createdDate: doc.data().createdDate,
            createdBy: doc.data().createdBy,
            assignedBy: doc.data().assignedBy,
            assignedTo: doc.data().assignedTo,
            assignmentDate: doc.data().assignmentDate,
            bscc: doc.data().bscc,
            name: doc.data().name,
            email: doc.data().email,
            courseInterest: doc.data().courseInterest,
            college: doc.data().college,
            mobileNumber: doc.data().mobileNumber,
            alternateMobile: doc.data().alternateMobile,
            city: doc.data().city,
            district: doc.data().district,
            locality: doc.data().locality,
            pin: doc.data().pin,
            budget: doc.data().budget,
            source: doc.data().source,
            remarks: doc.data().remarks,
            relation: doc.data().relation,
          }))
        );
      });
    };

    fetchLeads();
  }, []);

  const handleback = () => {
    setUpdate(false);
  };

  const handleView = (id) => {
    navigate(`/followUp/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You are about to delete this lead.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      // Perform lead deletion logic here
      await db.collection("leads").doc(id).delete();
      Swal.fire("Deleted!", "", "success");
    } else {
      // Display a message indicating cancellation
      Swal.fire("Cancelled", "", "info");
    }
  };
  const handleUpdate = (id) => {
    setUpdate(true);
    leads.forEach((data) => {
      if (data.id === id) {
        setNotChange({
          id: id,
          leadNumber: data.leadNumber,
          createdDate: data.createdDate,
          createdBy: data.createdBy,
          assignmentDate: data.assignmentDate,
          assignedBy: data.assignedBy,
        });
      }
    });
  };

  return (
    <div className={styles.container}>
      <div style={{ display: update === true ? "block" : "none" }}>
        <PopUpForm
          value={update}
          onback={() => handleback()}
          id={notChange.id}
          leadNumber={notChange.leadNumber}
          createdDate={notChange.createdDate}
          createdBy={notChange.createdBy}
          assignmentDate={notChange.assignmentDate}
          assignedBy={notChange.assignedBy}
        />
      </div>
      <div style={{ position: "relative" }}>
        <div className={styles["heading-with-homebtn"]}>
          <div>
            <a href="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="60"
                fill="black"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </a>
          </div>
          <div className={styles.heading}>Lead History</div>
        </div>
      </div>
      <DataGrid
        rows={leads}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          backgroundColor: "#fbfeff",
          width: "98%",
          marginLeft: "1%",
        }}
      />
    </div>
  );
};

export default LeadHistory;
