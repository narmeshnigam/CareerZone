import { React, useEffect, useState } from "react";
import styles from "./CreateNewLead.module.css";
import { useNavigate } from "react-router-dom";
import db from "../../../firebase";
import Swal from "sweetalert2";

const CreateNewLead = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    leadNumber: "",
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
    createdDate: "",
    assignmentDate: "",
    createdBy: "",
    assignedTo: "",
    assignedBy: "",
    remarks: "",
  });

  const [assignedToOptions, setAssignedToOptions] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await db.collection("users").get();
        const users = usersSnapshot.docs.map((doc) => ({
          value: doc.data().name,
          label: doc.data().name,
        }));

        setAssignedToOptions(users);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/dashboard");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = [
      "name",
      "email",
      "mobileNumber",
      "state",
      "city",
      "pin",
      "locality",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `Please fill in the ${field} field.`,
          showConfirmButton: true,
          timer: 5000,
        });
        return;
      }
    }

    const currentDate = new Date().toLocaleDateString();
    const currentUser = "narmesh";
    const leadNumber = await generateLeadNumber();

    const leadData = {
      ...formData,
      leadNumber: leadNumber,
      createdDate: currentDate,
      createdBy: currentUser,
      assignmentDate: currentDate,
      assignedBy: currentUser,
    };

  
    db.collection("leads")
      .add(leadData)
      .then(() => {
        console.log("Lead added successfully!");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "New lead has been created.",
          showConfirmButton: true,
          timer: 5000,
        });
      })
      .catch((error) => {
        console.error("Error adding lead: ", error);
      });

    setFormData({
      name: "",
      email: "",
      leadNumber: "",
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
      createdDate: "",
      assignmentDate: "",
      createdBy: "",
      assignedTo: "",
      assignedBy: "",
      remarks: "",
    });
  };

  const generateLeadNumber = async () => {
    const leadsSnapshot = await db
      .collection("leads")
      .orderBy("leadNumber", "desc")
      .limit(1)
      .get();
    if (leadsSnapshot.empty) {
      return "000001";
    } else {
      const highestLeadNumber = leadsSnapshot.docs[0].data().leadNumber;
      const nextLeadNumber = (parseInt(highestLeadNumber, 10) + 1)
        .toString()
        .padStart(6, "0");
      return nextLeadNumber;
    }
  };

  return (
    <div className={styles.lead_page_container}>
      <div className={styles.lead_page_heading}>
        <div className={styles.lead_pagehome_ic}>
          <div onClick={goToHomePage} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="56"
              fill="currentColor"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
          </div>
        </div>
        <div className={styles.lead_pagehomeheading_}>Create New Lead</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input__container}>
          <div className={styles.address__info}>Personal Information:</div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="alternateMobile"
              name="alternateMobile"
              placeholder="Alternate Mobile Number"
              value={formData.alternateMobile}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
        </div>
        <div className={styles.input__container}>
          <div className={styles.address__info}>Address Information:</div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="locality"
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="pin"
              name="pin"
              placeholder="Pin"
              value={formData.pin}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
        </div>
        <div className={styles.input__container}>
          <div className={styles.address__info}>Additional Information:</div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="college"
              name="college"
              placeholder="College Choice"
              value={formData.college}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="courseInterest"
              name="courseInterest"
              placeholder="Course Interest"
              value={formData.courseInterest}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="bscc"
              name="bscc"
              placeholder="BSCC"
              value={formData.bscc}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="relation"
              name="relation"
              placeholder="Relation To Candidate"
              value={formData.relation}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="source"
              name="source"
              placeholder="Source"
              value={formData.source}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="remarks"
              name="remarks"
              placeholder="Remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <select
              id="assignedTo"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleInputChange}
              className={styles.input__field}
            >
              <option value="">Assigned To</option>
              {assignedToOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewLead;
