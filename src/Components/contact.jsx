import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
  return (
    <div className="contact-area section-ptb" id="contact">
      <div className="container">
        <SectionTitle
          title="CONTACT US"
          subTitle="Ways To Contact Me"
          desc=""
        />
      </div>
      <div className="container mt-45">
        <div className="row md-justify-content-center">
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaEnvelope />
                </i>
              </div>
              <a
                className="btn-animation"
                href="mailto:george@martincustomcoding.com"
              >
                Email
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaPhone />
                </i>
              </div>
              <a className="btn-animation" href="tel:+1-319-981-0054">
                +1 (319) 981 0054
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaGithub />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://github.com/gmartin1603"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaLinkedin />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://www.linkedin.com/in/gmar1603/"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaInstagram />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://www.instagram.com/country_coder/"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaYoutube />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://www.youtube.com/channel/UCo_vZdX1o12AznKQQbAxZcA"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
