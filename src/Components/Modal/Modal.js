import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false); // State to track submission status

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true); // Set submission status to true
    toggleModal();
  };

  return (
    <>
      <div className={`modal ${modal ? "active" : ""}`}>
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h1>Enquiry Form</h1>
          {submitted ? ( // Display success message if submitted is true
            <p>Form submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Select Course:</label>
                <select
                  id="course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">-- Select --</option>
                  <option value="Medical">Medical</option>
                  <option value="Management">Management</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Write your message here:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="button2" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          )}
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
