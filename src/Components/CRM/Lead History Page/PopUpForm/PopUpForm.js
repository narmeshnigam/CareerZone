import React, { useState } from "react";
import db from "../../../../firebase";
import styles from "./PopUpForm.module.css";

const PopUpForm = ({
  onback = () => {},
  id,
  leadNumber,
  createdDate,
  createdBy,
  assignmentDate,
  assignedBy,
}) => {
  console.log(leadNumber);
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
        console.log("Lead updated successfully!");
        clearForm();
      })
      .catch((error) => {
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
        <path d="M9 8l6 8" />
        <path d="M15 8l-6 8" />
      </svg>
      <div className={styles.innerForm}>
        <div className={styles.heading}>Update #lead</div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="*Full Name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder="*Email"
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
              placeholder="*Mobile Number"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.alternateMobile}
              type="number"
              name="alternateMobile"
              placeholder="Alternate Mobile Number"
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
              placeholder="*Locality"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.state}
              type="text"
              name="state"
              placeholder="*State"
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
              placeholder="*City"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.pin}
              type="number"
              name="pin"
              placeholder="*Pin"
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
              placeholder="*College Name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.courseInterest}
              type="text"
              name="courseInterest"
              placeholder="*Course Interest"
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
              placeholder="*BSCC"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.relation}
              type="text"
              name="relation"
              placeholder="*Relation to Candidate"
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
              placeholder="*Budget"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.source}
              type="text"
              name="source"
              placeholder="*Source"
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
              placeholder="*Remark"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleInputChange}
              value={formData.assignedTo}
              type="text"
              name="assignedTo"
              placeholder="*Assigned To"
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
