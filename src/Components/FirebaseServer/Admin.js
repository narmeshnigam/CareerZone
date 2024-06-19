import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

const db = getDatabase(app);
const auth = getAuth();

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/admin");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "87vh",
        background: "#fbfeff",
      }}
    >
      <div className="AdminHome__heading">
        Welcome to Admin Pannel of Career Zone!
      </div>
    </div>
  );
};

export default Admin;
