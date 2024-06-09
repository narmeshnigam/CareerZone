import React, { useState, useEffect } from "react";
import db from "../../../../firebase";
import "./Notification.css";

const NotificationPage = () => {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("notification").onSnapshot((snapshot) => {
        let arr = snapshot.docs.map((doc) => ({
          id: doc.id,
          date: doc.data().curdate,
          notification: doc.data().notification,
        }));
        function compare(a, b) {
          if (a.date > b.date) {
            return -1;
          }
          if (a.date < b.date) {
            return 1;
          }
          return 0;
        }

        arr.sort(compare);
        setNoti([...arr]);
      });
    };

    fetchImages();
  }, []);

  return (
    <>
      {/* <div><iframe src="https://blog123lk75340.blogspot.com/2024/05/fsdfsadfsf.html" width="100%" height="400px" frameborder="0"></iframe></div> */}
      <div className="noti__container">
        <div className="noti__left__container">
          <div className="noti__heading">
            YOU WILL GET ADMISSION IN{" "}
            <span style={{ color: "#4587EF" }}>TOP COLLEGES.</span>
          </div>
          <div className="noti__about">About us</div>
          <div className="noti__subheading">
            About The Career Zone is a Leading Education consulatncy that can
            provide Top Course in India / Abraod Colleges for your career path.
          </div>
          <div>
            The Career Zone, one of India’s largest Career Counselling
            Consultants, is here to mentor the students towards their
            educational goals and drive them to create a better world. Not
            always can a perfect college or stream be the best for every
            student.
          </div>
          <div className="noti__options">
            <div className="noti__options__left">
              <div
                style={{ backgroundColor: "#9aa0a722", borderRadius: "0.7rem" }}
              >
                - MBBS
              </div>
              <div>- BMAS</div>
              <div
                style={{ backgroundColor: "#9aa0a722", borderRadius: "0.7rem" }}
              >
                - ENGINEERING
              </div>
              <div>- BUSINESS MANAGEMENT & COMMERCE</div>
            </div>
            <div className="noti__options__left">
              <div
                style={{ backgroundColor: "#9aa0a722", borderRadius: "0.7rem" }}
              >
                - LAW
              </div>
              <div>- EDUCATION & TEACHING</div>
              <div
                style={{ backgroundColor: "#9aa0a722", borderRadius: "0.7rem" }}
              >
                - HOSPITALITY & TOURISM
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="noti__right__container">
          <div className="noti__right__heading">LATEST NOTIFICATION</div>
          <div className="noti__right__noti__container">
            <ul className="noti__right__ul__container">
              {noti.map((data, i) => (
                <li key={i}>
                  <svg
                    className="svgIcon"
                    width="10px"
                    height="10px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg>
                  <div>{data.notification}</div>
                  <svg
                    className="newsvgicon"
                    width="40px"
                    height="40px"
                    viewBox="0 0 48.00 48.00"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#4587EF"
                    stroke="#4587EF"
                    stroke-width="0.00048000000000000007"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>new-rectangle</title>{" "}
                      <g id="Layer_2" data-name="Layer 2">
                        {" "}
                        <g id="invisible_box" data-name="invisible box">
                          {" "}
                          <rect width="48" height="48" fill="none"></rect>{" "}
                        </g>{" "}
                        <g id="icons_Q2" data-name="icons Q2">
                          {" "}
                          <path d="M44,14H4a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V16A2,2,0,0,0,44,14ZM17.3,29H14.8l-3-5-.7-1.3h0V29H8.7V19h2.5l3,5,.6,1.3h.1s-.1-1.2-.1-1.6V19h2.5Zm9.1,0H18.7V19h7.6v2H21.2v1.8h4.4v2H21.2v2.1h5.2Zm10.9,0H34.8l-1-4.8c-.2-.8-.4-1.9-.4-1.9h0s-.2,1.1-.3,1.9L32,29H29.6L26.8,19h2.5l1,4.2a20.1,20.1,0,0,1,.5,2.5h0l.5-2.4,1-4.3h2.3l.9,4.3.5,2.4h0l.5-2.5,1-4.2H40Z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
