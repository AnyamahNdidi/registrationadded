import { Carousel } from "antd";
import React from "react";
import Caousel from "./Caouselstyle";
import "antd/dist/antd.css";
import pic1 from "../img/1.png";
// import pic2 from "../img/2.png";

function Carouselbody() {
  const contentStyle = {
    // height: "500px",
    // color: "#fff",
    // lineHeight: "10px",
    // textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic1}
              direction="center"
              BG="#E5D304"
              title="Get Instant Access to Teachers and Schools near you"
              desc="“Why wait 2 months+ to hire that next teacher or to get hired by a school of your choice. Click on get started, and be connected in 14 days!”"
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic1}
              direction="center"
              BG=""
              title="Get Instant Access to Teachers and Schools near you"
              desc="“Why wait 2 months+ to hire that next teacher or to get hired by a school of your choice. Click on get started, and be connected in 14 days!”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic1}
              direction="center"
              BG="#EF0303"
              title="Get Instant Access to Teachers and Schools near you"
              desc="“Why wait 2 months+ to hire that next teacher or to get hired by a school of your choice. Click on get started, and be connected in 14 days!”"
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        {/* <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic3}
              direction="center"
              BG="#478E02"
              title="UTAC is a non-profit organization"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div> */}
      </Carousel>
    </div>
  );
}

export default Carouselbody;
