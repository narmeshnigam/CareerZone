import React from "react";
import "./EducationalService.css";
import AboutSvg from "../../About/aboutSvg";

const EducationalService = () => {
  return (
    <div className="edu__ser__conatiner">
      <div className="edu__top__img"></div>
      <div className="edu__service__content">
        <div className="edu__service__des">
          <div className="edu__ser__heading" style={{ marginBottom: "1rem" }}>
            Educational Service
          </div>
          <p style={{ fontSize: "20px" }}>
            The Career Zone was established in 2001 with the aim of providing
            quality guidance to students who intend to study. Today, we are the
            leaders in educational consultancy and represent leading colleges
            and universities in India [Uttar Pradesh, Maharashtra, Bangalore,
            Orissa, Madhya Pradesh, Rajasthan, Tamil Nadu and many more] and in
            overseas also.
            <br></br>
            <br></br>
            <br></br>
            The Career Zone has more than decades of experience in counselling
            students and has helped over 7,200+ students gain admission into
            colleges and universities in India and overseas.
          </p>
        </div>
        <div className="edu__service__img">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5faaa56365c7f367dd0c51d5/1622377163392-Y9C0QBC0PRJ10570P6VY/two%2Bhs%2Bstudents.jpg?format=2500w"
            alt=""
          />
        </div>
      </div>
      <div className="edu__service__purpose">
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5faaa56365c7f367dd0c51d5/1605112895070-7H1VPBFB29YRPK77FU95/edtech-gradeschool.jpg?format=1500w"
            alt=""
          />
        </div>
        <div style={{ width: "60%", marginLeft: "-50px" }}>
          <div className="edu__service__purpose__heading">Purpose</div>
          <div style={{ margin: "1rem 0rem", textAlign: "justify" }}>
            <p style={{ fontSize: "22px" }}>
              We aim to provide the best guidance to Indian students.
              Understanding their unique goals and paths, we help identify
              suitable courses based on individual strengths and aspirations.
              This ensures both student and institution satisfaction in the long
              run.
            </p>
          </div>
          <div style={{ fontWeight: "600", fontSize: "24px" }}>
            At THE Career Zone, our purpose is to:
          </div>
          <div
            style={{
              margin: "1rem 0rem",
              textAlign: "justify",
              fontSize: "20px",
            }}
          >
            <AboutSvg />
            <span>
              Ensure that a student is making a well-informed decision by
              providing complete and accurate information about colleges and
              universities, courses of study and their study destinations.
            </span>
          </div>
          <div style={{ textAlign: "justify", fontSize: "20px" }}>
            <AboutSvg />
            <span>
              {" "}
              Assist students in finding courses that are best suited to them by
              applying a holistic approach that includes the student's academic,
              work history, requirements, ambitions, circumstances and
              strengths.
            </span>
          </div>
          <div
            style={{
              margin: "1rem 0rem",
              textAlign: "justify",
              fontSize: "20px",
            }}
          >
            <AboutSvg />
            <span>
              Guide students through the admission processes for their chosen
              university.
            </span>
          </div>
        </div>
      </div>
      <div className="edu__services__work">
        <div style={{ width: "50%" }}>
          <div className="edu__service__purpose__heading">
            The Career Zone and its <br />
            Area of Work
          </div>
          <div
            style={{
              textAlign: "justify",
              margin: "2rem 0rem",
              marginRight: "30px",
              fontSize: "20px",
            }}
          >
            Currently, we have collaborated with many educational institutes,
            universities, and centres and more are in the process. We are
            fortunate that our reputation has helped us to tie-up with reputed
            educational brands and provide ground breaking results in all our
            endeavors for the upliftment of the student community. This has also
            helped us to throw light on the best university admission portals,
            top college courses in India, and best UG and PG courses in India.
          </div>
          <div
            style={{
              textAlign: "justify",
              marginRight: "30px",
              fontSize: "20px",
            }}
          >
            We have an excellent team of management experts and field workers,
            who manage the entire business to the best of their abilities. The
            main boiling point of our organization is to disseminate the right
            information to the right student and guide them towards their suited
            educational institution. They have decade-long expertise in their
            field of work and subject. Hence, our educational experts are
            bringing that rich experience to the table today.
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5faaa56365c7f367dd0c51d5/1605114572078-91467RDBM7ZCNBA62IWM/working-team.jpg?format=1500w"
            style={{ borderRadius: "10px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default EducationalService;
