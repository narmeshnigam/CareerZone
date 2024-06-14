import React, { useState } from "react";
import "./AddNewUser.css";
import Swal from "sweetalert2";

const AddNewUser = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      phone,
      role,
      approvalStatus,
    };
    console.log("New User:", newUser);

    // SweetAlert2 success message
    Swal.fire({
      title: "User Created",
      text: "The new user has been successfully created.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddNewUser;
