import React from "react";
import "./About.css";
import AboutSvg from "./aboutSvg";
import CountAni from "./CountAni/CountAni";

const About = () => {
  return (
    <div style={{ fontFamily: "Poppins", paddingTop: "80px" }}>
      <div className="about__top__img">
        <div>About Us</div>
      </div>

      <div className="about">
        <div className="image">
          <img
            src="https://i.pinimg.com/originals/2f/0a/f1/2f0af1c5bcc25af712cfc1c74df20293.jpg"
            alt="About Us"
          />
        </div>
        <div
          className="content"
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* <div className="content__heading">ABOUT US</div>*/}
          <div className="content__subheading">OUR ACHIEVEMENTS </div>
          <p style={{ textAlign: "justify" }}>
            Since our humble beginning in 2001,The Career Zone, one of India’s
            largest Career Counselling Consultants, is here to mentor the
            students towards their educational goals and drive them to create a
            better world. Not always can a perfect college or stream be the best
            for every student. Only counselling can reveal the right one suited
            for an aspirant. We understand that every student has a unique
            requirement that is exclusively monitored and catered to by our
            team. Our dedicated team of experts is focused on the value of
            education and the effort that a student puts in to shine in life,
            and therefore, we strive to give the best and impartial advice so
            that each student can move ahead to reach the goal.
          </p>

          <div className="awards">
            <div>
              <h2>No. of Students</h2>
              <div style={{ display: "flex" }}>
                <CountAni targetValue={800} />
                <span
                  className="content__subheading"
                  style={{ textAlign: "center" }}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <h2>No. of Colleges</h2>
              <div style={{ display: "flex" }}>
                <CountAni targetValue={1200} />
                <span
                  className="content__subheading"
                  style={{ textAlign: "center" }}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <h2>No. of Universities</h2>
              <div style={{ display: "flex" }}>
                <CountAni targetValue={12} />
                <span
                  className="content__subheading"
                  style={{ textAlign: "center" }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        lassName="about"
        style={{
          padding: "0rem 6rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="content__subheading" style={{}}>
          Our Speciality in the Career Counselling world
        </div>
        <p style={{ textAlign: "justify" }}>
          Being in the educational field, we realized the importance of
          potential students and their dream education that can carve the niche
          of society. Hence, free career counselling is the specialty of our
          organization. The Career Zone provides the most impartial and free
          career-related advice to the students but in the most appropriate way.
          With a wide range of universities, institutes, and educational centres
          in India, The Career Zone filters, curates, and, most importantly,
          plans for an individual requirement. Admission time is the most
          crucial period for both the aspirant and parents, who become bananas
          to get the best of the educational system.
        </p>
      </div>
      <div className="sec2">
        <div
          className="content"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="content__subheading">Our Vision</div>
          <p style={{ textAlign: "justify" }}>
            <AboutSvg />
            With a committed and competent team, our vision is to be recognized
            as a world-class career counselling & study abroad firm. We are
            working towards creating an ecosystem where students can receive the
            best psychometric tests along with in-depth career-related
            information and also a complete understanding of working towards
            their profile building.
          </p>
          <p style={{ textAlign: "justify" }}>
            <AboutSvg />
            Not only the students, but we also view ourselves as a preferred
            place to associate with, other individuals who are influencing the
            career selection of students such as other counsellors, colleges,
            universities, teachers, government officials, etc.
          </p>
        </div>
        <div className="vision__img">
          <img
            src="https://mcgovern.mit.edu/wp-content/uploads/2022/08/dreams_900x600.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="sec2" style={{ display: "flex", alignItems: "center" }}>
        <div className="vision__img">
          <img
            src="https://www.brandhonchos.co.in/images/mission-1.jpg"
            alt=""
          />
        </div>
        <div
          className="content"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="content__subheading">Our Mission</div>
          <div>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div style={{ paddingLeft: "7px" }}>
                Commitment to grow our business with emphasis on Excellence,
                Honesty, Integrity & Updated knowledge.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div>
                To build strong and credible relationships with partner
                Institutions.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div>
                To provide customized solutions to students aspiring to study.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div>
                We always keeping in mind the best interest of our stakeholders,
                partners and clients.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div style={{ paddingLeft: "10px" }}>
                Backed by our expert team of professional consultants, we hope
                to offer students an opportunity to identify the right
                universities thereby facilitating lifelong learning.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div style={{ paddingLeft: "7px" }}>
                We ensure that each of our students goes through a hassle-free
                admission process to the college and university of their choice.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div style={{ paddingLeft: "7px" }}>
                {" "}
                We aim at informing students and organisations about the best
                educational institutions thus improving the level of learning.
              </div>
            </p>
            <p style={{ textAlign: "justify", display: "flex", gap: "5px" }}>
              <AboutSvg />
              <div style={{ paddingLeft: "7px" }}>
                Quality education promotes competency of employees and also
                results in overall growth and advancement of the society.
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="ourteam">Our Team</div>
        <div className="cards">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="card__image"
            />
            <div className="card__details">
              <div className="card__name">Nishu Kumari</div>
              <div className="card__role">Developer</div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="card__image"
            />
            <div className="card__details">
              <div className="card__name">John Doe</div>
              <div className="card__role">Designer</div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="card__image"
            />
            <div className="card__details">
              <div className="card__name">Alice Smith</div>
              <div className="card__role">Engineer</div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="card__image"
            />
            <div className="card__details">
              <div className="card__name">Bob Johnson</div>
              <div className="card__role">Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
