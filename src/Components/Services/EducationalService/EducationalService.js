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
          The Career Zone was established in 2001 with the aim of providing
          quality guidance to students who intend to study. Today, we are the
          leaders in educational consultancy and represent leading colleges and
          universities in India [Uttar Pradesh, Maharashtra, Bangalore, Orissa,
          Madhya Pradesh, Rajasthan, Tamil Nadu and many more] and in overseas
          also.
          <br></br>
          <br></br>
          <br></br>
          THE Career Zone has more than decades of experience in counselling
          students and has helped over 7,200+ students gain admission into
          colleges and universities in India and overseas.
        </div>
        <div className="edu__service__img">
          <img
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5c98b24f61169.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="edu__service__purpose">
        <div>
          <img
            src="https://media.licdn.com/dms/image/C4D12AQHM1k_4F0hcfQ/article-cover_image-shrink_600_2000/0/1611074854633?e=2147483647&v=beta&t=wVBjOd_rdzRKEur7EOOBNHD1Zfcs_NUq7POxCCyKWEY"
            alt=""
          />
        </div>
        <div style={{ width: "50%" }}>
          <div className="edu__service__purpose__heading">Purpose</div>
          <div style={{ margin: "1rem 0rem", textAlign: "justify" }}>
            We aim to provide the best guidance to Indian students.
            Understanding their unique goals and paths, we help identify
            suitable courses based on individual strengths and aspirations. This
            ensures both student and institution satisfaction in the long run.
          </div>
          <div style={{ fontWeight: "600" }}>
            At THE Career Zone, our purpose is to:
          </div>
          <div style={{ margin: "1rem 0rem", textAlign: "justify" }}>
            <AboutSvg />
            <span>
              Ensure that a student is making a well-informed decision by
              providing complete and accurate information about colleges and
              universities, courses of study and their study destinations.
            </span>
          </div>
          <div style={{ textAlign: "justify" }}>
            <AboutSvg />
            <span>
              {" "}
              Assist students in finding courses that are best suited to them by
              applying a holistic approach that includes the student's academic,
              work history, requirements, ambitions, circumstances and
              strengths.
            </span>
          </div>
          <div style={{ margin: "1rem 0rem", textAlign: "justify" }}>
            <AboutSvg />
            <span>
              Guide students through the admission processes for their chosen
              university.
            </span>
          </div>
        </div>
      </div>
      <div className="edu__services__work">
        <div style={{ width: "60%" }}>
          <div className="edu__service__purpose__heading">
            The Career Zone and its Area of Work
          </div>
          <div style={{ textAlign: "justify", margin: "1rem 0rem" }}>
            Currently, we have collaborated with many educational institutes,
            universities, and centres and more are in the process. We are
            fortunate that our reputation has helped us to tie-up with reputed
            educational brands and provide ground breaking results in all our
            endeavors for the upliftment of the student community. This has also
            helped us to throw light on the best university admission portals,
            top college courses in India, and best UG and PG courses in India.
          </div>
          <div style={{ textAlign: "justify" }}>
            We have an excellent team of management experts and field workers,
            who manage the entire business to the best of their abilities. The
            main boiling point of our organization is to disseminate the right
            information to the right student and guide them towards their suited
            educational institution. They have decade-long expertise in their
            field of work and subject. Hence, our educational experts are
            bringing that rich experience to the table today.
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <img src="https://miro.medium.com/v2/resize:fit:800/1*Dmc1K9bhapkbf0NXBvhZHw.png"></img>
        </div>
      </div>
    </div>
  );
};

export default EducationalService;
