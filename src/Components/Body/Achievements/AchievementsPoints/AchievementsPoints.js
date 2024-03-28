import React from "react";
import "./AchievementsPoints.css";

const AchievementsPoints = ({desc}) => {
  return (
    <div className="achiePoints__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-circle-filled"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
          stroke-width="0"
          fill="currentColor"
        />
      </svg>
      <div style={{color: '#107F1E', fontWeight:'500'}}>{desc}</div>
    </div>
  );
};

export default AchievementsPoints;
