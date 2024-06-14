import React, { useState } from "react";
import "./AddNewUser.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import db from "../../../firebase"; // Assuming you have configured Firebase
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");
  const [name, setName] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isEmailUnique, setIsEmailUnique] = useState(true);
  const navigate = useNavigate(); // Use navigate hook for navigation

  const generatePassword = (name) => {
    const firstName = name.trim().split(" ")[0]; // First word from name
    const randomNumber = Math.floor(Math.random() * 1000); // Random number up to 999
    return `${firstName}-${randomNumber}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is unique
    const isUnique = await checkEmailUnique(email);
    if (!isUnique) {
      Swal.fire({
        title: "Email already in use",
        text: "Please enter a different email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const password = generatePassword(name);
    setGeneratedPassword(password);

    try {
      const newUserRef = await db.collection("users").add({
        email,
        phone,
        role,
        approvalStatus,
        name,
        password,
      });

      Swal.fire({
        title: "User Created",
        text: "The new user has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      });

      console.log("New user added with ID: ", newUserRef.id);

      // Reset form fields after successful submission
      setEmail("");
      setPhone("");
      setRole("");
      setApprovalStatus("");
      setName("");
      setGeneratedPassword("");
      setIsEmailUnique(true);

      // Navigate to User List after successful submission
      navigate("/admin/userlist");
    } catch (error) {
      console.error("Error adding user: ", error);
      Swal.fire({
        title: "Error",
        text: "Failed to create user. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      const password = generatePassword(e.target.value);
      setGeneratedPassword(password);
    } else {
      setGeneratedPassword("");
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    Swal.fire({
      title: "Password Copied",
      text: "The generated password has been copied to your clipboard.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const checkEmailUnique = async (email) => {
    try {
      const snapshot = await db
        .collection("users")
        .where("email", "==", email)
        .get();
      return snapshot.empty; // true if email is unique, false if already exists
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false;
    }
  };

  return (
    <>
      <div className="add-new-user">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Approval Status:</label>
            <select
              value={approvalStatus}
              onChange={(e) => setApprovalStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {generatedPassword && (
            <div className="form-group password-container">
              <label>Generated Password:</label>
              <div className="password-input">
                <input type="text" value={generatedPassword} readOnly />
                <button
                  type="button"
                  className="copybtn"
                  onClick={copyPassword}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          )}
          <button className="submit" type="submit">
            Create
          </button>
        </form>

        {/* Button to navigate to User List */}
      </div>
      <div className="navigate-btn" onClick={() => navigate("/admin/userlist")}>
        Go to User List
      </div>
    </>
  );
};

export default AddNewUser;
