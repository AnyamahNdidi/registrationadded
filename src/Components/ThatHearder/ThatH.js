import { Button } from "antd";
import React from "react";
import SignUp from "../Signup/Signup";
import "./Thatstyle.css";

const ThatH = () => {
  return (
    <div className="giddy">
      <div className="bg__lay">
        <section>
          <h2>Get Instant Access to Teachers and Schools near you</h2>
          <p  >Why wait 2 months+ to hire that next teacher or to get hired by a school of your choice. and be connected in 14 days!</p>
          <SignUp />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 280"
            className="wave"
          >
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,181.3C672,192,768,224,864,208C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
      </div>
    </div>
  );
};

export default ThatH;
