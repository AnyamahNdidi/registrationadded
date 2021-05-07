import React from "react";
import "./hero.css";
import pic from "../img/1.png";
import { RotateRight } from "@material-ui/icons";
function Hero() {
  return (
    <div className="contactUs">
      <div className="contactUscontainer">
        <div className="thefirsPart">
          <div className="backGoundOpacity">
            <div className="getInTouch">
              <div className="spread" style={{ width: "50%", color: "white" }}>
                <h1>Get Instant Access to Teachers and Schools near you</h1>
                <h4>
                  Why wait 2 months+ to hire that next teacher or to get hired
                  by a school of your choice. Click on get started, and be
                  connected in 14 days!
                </h4>
                <button
                  style={{
                    height: "50px",
                    width: "150px",
                    borderRadius: "50px",
                    color: "white",
                    background: "rgb(66, 133, 244)",
                    fontWeight: "bold",
                    border: "1px solid silver",
                  }}
                >
                  GET STARTED{" "}
                </button>
              </div>
              <div
                className="hero_image"
                style={{
                  height: "100%",
                  width: "600px",
                  // backgroundColor: "white",
                }}
              >
                {/* <img src={pic} style={{ height: "100%", width: "100%" }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
