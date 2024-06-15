import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../../firebase"; // Adjust the path as needed
import { collection, query, where, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./UserLogin.css";

const UserLoginPage = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleLogin = async (email, password) => {
    try {
      const q = query(
        collection(db, "users"),
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userName = userDoc.data().name; // Extract the 'name' field from the user document

        Swal.fire({
          icon: "success",
          title: `Welcome, ${userName}!`,
          text: "Redirecting to Dashboard",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Invalid email or password",
          text: "Please check your credentials and try again.",
        });
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      MySwal.fire({
        icon: "error",
        title: "Failed to log in",
        text: "Please try again later.",
      });
    }
  };

  const showLoginForm = () => {
    MySwal.fire({
      title: "Login",
      html: `<input type="email" id="swal-input1" class="swal2-input" placeholder="Email">
             <input type="password" id="swal-input2" class="swal2-input" placeholder="Password">`,
      focusConfirm: false,
      preConfirm: () => {
        const email = Swal.getPopup().querySelector("#swal-input1").value;
        const password = Swal.getPopup().querySelector("#swal-input2").value;
        if (!email || !password) {
          Swal.showValidationMessage(`Please enter both email and password`);
        }
        return { email: email, password: password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogin(result.value.email, result.value.password);
      }
    });
  };

  useEffect(() => {
    showLoginForm();
  }, []);

  return (
    <div className={styles.userLoginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>Login</div>
        <button onClick={showLoginForm} className={styles.loginButton}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLoginPage;
