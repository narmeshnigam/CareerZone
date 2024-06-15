import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div class="container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
