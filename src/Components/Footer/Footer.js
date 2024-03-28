import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="contact__container">
        <div className="iframe__map">
          <span>
            <iframe
              id="map-canvas"
              className="map_part"
              width="400"
              height="250"
              frameborder="0"
              marginheight="0"
              marginwidth="10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7734382561493!2d85.14099962485102!3d25.612443714757557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5859130f97d5%3A0x1f6f070f24fca97!2sAshiana%20tower!5e0!3m2!1sen!2sin!4v1710765667837!5m2!1sen!2sin"
            >
              Powered by{" "}
              <a href="https://www.googlemapsgenerator.com">
                embed google maps html
              </a>{" "}
              and <a href="cancelgamstop.com/"></a>
            </iframe>
          </span>
          <div className="contact__details">
            <div className="contact__details__links">
              <div className="contact__details__heading">QUICK LINKS</div>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Our Services
              </a>
              <a
                href="/admission"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Services
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Student Credit Crad
              </a>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Quick Support
              </a>
              <a
                href="#courses"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Loan
              </a>
              <a
                href="#courses"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                <span>Admission Advice</span>
              </a>
            </div>
            <div className="contact__details__address">
              <div className="contact__details__heading">IMPORTANT LINKS</div>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Medical Courses
              </a>
              <a
                href="/admission"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Services
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Student Credit Crad
              </a>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Quick Support
              </a>
              <a
                href="#courses"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Loan
              </a>
            </div>
            <div className="contact__details__links">
              <div className="contact__details__heading">QUICK LINKS</div>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Our Services
              </a>
              <a
                href="/admission"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Services
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Student Credit Crad
              </a>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Quick Support
              </a>
              <a
                href="#courses"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                Education Loan
              </a>
              <a
                href="#courses"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                <span>Admission Advice</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__div">
        Copyrights © 2024 &copy; All Rights Reserved by The Career Zone.
      </div>
    </>
  );
};

export default Footer;
