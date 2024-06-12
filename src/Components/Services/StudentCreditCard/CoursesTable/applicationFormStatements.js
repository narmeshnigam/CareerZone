import React, { useState } from "react";
import "./ApplicationForm.css";

function ApplicationForm() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showAadhaar, setShowAadhaar] = useState(false);

  return (
    <div className="bssc_from_ways">
      <ul>
        <li onClick={() => setShowRegistration(!showRegistration)}>
          <p style={{ fontSize: "24px", color: "#333", fontWeight: "700" }}>
            Registration ID 👈
          </p>
        </li>
        {showRegistration && (
          <p style={{ fontWeight: "500" }}>
            Visit the Official Website of MNSSBY Bihar. Click on the
            “Application Form Status” Link .<br />
            Select the “Registration ID” option Enter the following details:
            <ul>
              <li>Registration ID</li>
              <li>Date of Birth</li>
              <li>Captcha Code</li>
            </ul>
            After entering all the details, click on the submit.
            <br /> The status of the registration form will be displayed on the
            screen
            <ul>
              <li>Visit the Official Website of MNSSBY Bihar.</li>
              <li> Click on the “Application Form Status” Link</li>
              <li> Select the “Registration ID” option</li>
              <li>Enter the following details –</li>
            </ul>
          </p>
        )}
        <li onClick={() => setShowAadhaar(!showAadhaar)}>
          <p style={{ fontSize: "24px", color: "#333", fontWeight: "700" }}>
            Aadhaar Card Number 👈
          </p>
        </li>
        {showAadhaar && (
          <p style={{ fontWeight: "500" }}>
            <ul>
              <li>Visit the Official Website of MNSSBY Bihar.</li>
              <li>Click on the “Application Form Status” Link</li>
              <li>Enter “Aadhaar Card Number”</li>
              <li>Date Of Birth and Captcha code and submit.</li>
              <li> Check the details and print if required.</li>
            </ul>
          </p>
        )}
      </ul>
    </div>
  );
}

export default ApplicationForm;
