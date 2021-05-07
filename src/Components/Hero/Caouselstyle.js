import React from "react";
import "./carostyle.css";
import { Button } from "antd";

function Caousel({ pic, direction, title, desc, BG, btn, MT }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "600px",
          // backgroundImage: `url(${pic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(66, 133, 244, 0.5)",
        }}
      >
        <img
          src={pic}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            backgroundColor: "rgba(66, 133, 244, 0.5)",
          }}
        />
        <div
          className="main_body"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "600px",

            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: direction,
            padding: "0 50px",
          }}
        >
          <div
            className="profit_name"
            style={{
              fontSize: "40px",
              fontFamily: "poppins",
              margin: "0px",
              // lineHeight: "1.8",
              color: "white",
            }}
          >
            {title}
          </div>

          <div
            className="profit_desc"
            style={{
              width: "500px",
              color: "white",
              textAlign: "center",
            }}
          >
            {desc}
          </div>
          <Button
            style={{
              width: "150px",
              height: "40px",
              textTransform: "uppercase",
              background: "rgb(66, 133, 244)",
              fontWeight: "bold",
              fontFamily: "poppins",
              color: "black",
              marginTop: MT,
            }}
          >
            {btn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Caousel;
