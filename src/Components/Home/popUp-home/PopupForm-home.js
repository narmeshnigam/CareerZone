import React, { useState, useEffect } from "react";
import db from "../../../firebase"; // Assuming you have a Firebase configuration file
import "./PopupForm.css"; // Make sure to include your CSS file
import Swal from "sweetalert2";

const PopupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    enquire: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show the popup after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("popupForms").add(data); // Change 'popupForms' to your desired collection name
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your Message has been delivered.",
      });
      setData({
        name: "",
        email: "",
        phone: "",
        enquire: "",
        message: "",
      });
      setShowPopup(false); // Close the popup after successful submission
    } catch (error) {
      console.error("Error adding message: ", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error delivering your message.",
      });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={closePopup}>
              ❌
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Career Zone</p>

              <label>
                <span>Name</span>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                <span>Phone No.</span>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                <span>Enquire</span>
                <select
                  className="input"
                  name="enquire"
                  value={data.enquire}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="ENGINEERING">Engineering</option>
                  <option value="MEDICAL">Medical</option>
                  <option value="PHARMA">Pharma</option>
                  <option value="ARCHITECTURE">Architecture</option>
                  <option value="MANAGEMENT">Management</option>
                  <option value="LAW">Law</option>
                  <option value="FEEDBACK">Feedback</option>
                  <option value="COMPLAIN">Complain</option>
                  <option value="Others">Others</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea
                  className="input message-box"
                  name="message"
                  style={{ resize: "none" }}
                  value={data.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
