import React, { useState, useEffect } from "react";
import db from "../../../../firebase";
import styles from "./PopUpForm.module.css";
import Swal from "sweetalert2";

const PopUpForm = ({
  onback = () => {},
  id,
  leadNumber,
  createdDate,
  createdBy,
  assignmentDate,
  assignedBy,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    leadNumber: leadNumber,
    mobileNumber: "",
    alternateMobile: "",
    state: "",
    city: "",
    pin: "",
    locality: "",
    college: "",
    courseInterest: "",
    bscc: "",
    relation: "",
    source: "",
    budget: "",
    createdDate: createdDate,
    assignmentDate: assignmentDate,
    createdBy: createdBy,
    assignedTo: "",
    assignedBy: assignedBy,
    remarks: "",
  });

  useEffect(() => {
    const fetchLeadData = async () => {
      try {
        const leadDoc = await db.collection("leads").doc(id).get();
        if (leadDoc.exists) {
          setFormData((prevData) => ({
            ...prevData,
            ...leadDoc.data(),
          }));
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching lead data: ", error);
      }
    };

    fetchLeadData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const {
      leadNumber,
      createdDate,
      createdBy,
      assignmentDate,
      ...updatedData
    } = formData;

    db.collection("leads")
      .doc(id)
      .update(updatedData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Lead updated successfully!",
        });
        clearForm();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error updating lead: ${error.message}`,
        });
        console.error("Error updating lead: ", error);
      });
    onback();
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      alternateMobile: "",
      state: "",
      city: "",
      pin: "",
      locality: "",
      college: "",
      courseInterest: "",
      bscc: "",
      relation: "",
      source: "",
      budget: "",
      assignedTo: "",
      remarks: "",
    });
  };

  return (
    <div className={styles.container}>
      <svg
        onClick={() => onback()}
        style={{
          transform: "translate(75.8rem, 4rem)",
          margin: "0",
          padding: "0",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
      <div className={styles.innerForm}>
        <div className={styles.heading}>Update Lead</div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder={formData.name || "*Full Name"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder={formData.email || "*Email"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.mobileNumber}
              type="number"
              name="mobileNumber"
              placeholder={formData.mobileNumber || "*Mobile Number"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.alternateMobile}
              type="number"
              name="alternateMobile"
              placeholder={
                formData.alternateMobile || "Alternate Mobile Number"
              }
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.locality}
              type="text"
              name="locality"
              placeholder={formData.locality || "*Locality"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.state}
              type="text"
              name="state"
              placeholder={formData.state || "*State"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.city}
              type="text"
              name="city"
              placeholder={formData.city || "*City"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.pin}
              type="number"
              name="pin"
              placeholder={formData.pin || "*Pin"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.college}
              type="text"
              name="college"
              placeholder={formData.college || "*College Name"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.courseInterest}
              type="text"
              name="courseInterest"
              placeholder={formData.courseInterest || "*Course Interest"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.bscc}
              type="text"
              name="bscc"
              placeholder={formData.bscc || "*BSCC"}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.relation}
              type="text"
              name="relation"
              placeholder={formData.relation || "*Relation to Candidate"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.budget}
              type="number"
              name="budget"
              placeholder={formData.budget || "*Budget"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.source}
              type="text"
              name="source"
              placeholder={formData.source || "*Source"}
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.remarks}
              type="text"
              name="remarks"
              placeholder={formData.remarks || "*Remark"}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.assignedTo}
              type="text"
              name="assignedTo"
              placeholder={formData.assignedTo || "*Assigned To"}
            />
          </div>
        </div>
        <button onClick={() => handleSubmit()} className={styles.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PopUpForm;
