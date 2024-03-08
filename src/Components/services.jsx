import React, { useState } from "react";
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.png";
import servicIcon_04 from "../assets/images/icons/marketing.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";
export default function Services() {
  const career_length = new Date().getFullYear() - 2020;
  const [satisfied_clients, setSatisfiedClients] = useState(4);
  const [design_items, setDesignItems] = useState(450);
  const [clients_served, setClientsServed] = useState(10);
  return (
    <div className="services-area section-ptb bgs" id="services">
      <div className="container">
        <SectionTitle
          title="SERVICES"
          subTitle="What I Am Great At"
          desc="Programming individual with hands-on experience in front and back-end coding. Capable of adding new features, fixing bugs, and revamping an existing website. Ability to collaborate & exceed business expectations focusing on creating outstanding value and satisfactory client experience."
        />
      </div>
      <div className="container">
        <div className="row service-row mt-45">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_01} alt="design" />
                <img className="d-none" src={servicIcon_02} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">UI/UX Design</h4>
                <p>10+ projects</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_05} alt="design" />
                <img className="d-none" src={servicIcon_02} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Web Development</h4>
                <p>10+ projects</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_03} alt="design" />
                <img className="d-none" src={servicIcon_03} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Back End</h4>
                <p>8+ projects</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_06} alt="design" />
                <img className="d-none" src={servicIcon_04} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Automation</h4>
                <p>3+ projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-area mt-45">
        <div className="container">
          <div className="row justify-content-around">
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Years of Experience"
              start={0}
              end={career_length}
              duration={4}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Clients Served"
              start={0}
              end={satisfied_clients}
              duration={7}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Design Items"
              start={0}
              end={design_items}
              duration={Math.floor(design_items / 30)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
