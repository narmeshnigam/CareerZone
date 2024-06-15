import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import Swal from "sweetalert2"; // Import SweetAlert2

const UserLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Call SweetAlert when component mounts
    handleLogin();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleLogin = async () => {
    const { value: formValues } = await Swal.fire({
      title: "UserLogin",
      html: `<div style="width: 450px;">
          <label for="swal-input1">Email:</label>
          <input id="swal-input1" class="swal2-input" placeholder="Enter your email" type="email"><br/>
          <label for="swal-input2">Pass:</label>
          <input id="swal-input2" class="swal2-input" placeholder="Enter your password" type="password">
        </div>`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          username: document.getElementById("swal-input1").value,
          password: document.getElementById("swal-input2").value,
        };
      },
      customClass: {
        container: "swal2-overflow",
      },
    });

    if (
      formValues &&
      formValues.username === "demo" &&
      formValues.password === "password"
    ) {
      navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      }).then(() => {
        // If login fails, call handleLogin again for retry
        handleLogin();
      });
    }
  };

  return null; // Render nothing directly in the component
};

export default UserLoginPage;
