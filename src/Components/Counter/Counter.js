import React from "react";
import "./coun.css";
import PeopleIcon from "@material-ui/icons/People";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Counter() {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "50px",
        fontFamily: "poppins",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "" }}>OUR NUMBERS</div>
      <div className="first_text" style={{}}>
        Here's a measure of the impact of the work we do
      </div>
      <div
        className="counted"
        style={{
          width: "50%",
          // backgroundColor: "black",
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "70px",
              width: "70px",
              // background: "rgba(66, 133, 244, 0.9)",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <PeopleIcon
              style={{ color: "rgba(66, 133, 244, 0.9)", fontSize: "50px" }}
            />
          </div>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>230</div>
          <div
            style={{
              margin: "5px",
              fontSize: "15px",
              color: "rgb(66, 133, 244)",
            }}
          >
            teachers
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "70px",
              width: "70px",
              // background: "rgba(66, 133, 244, 0.9)",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <AccountBalanceIcon
              style={{ color: "rgba(66, 133, 244, 0.9)", fontSize: "50px" }}
            />
          </div>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>300</div>
          <div
            style={{
              margin: "5px",
              fontSize: "15px",
              color: "rgb(66, 133, 244)",
            }}
          >
            {" "}
            Schools
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "70px",
              width: "70px",
              // background: "rgba(66, 133, 244, 0.9)",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <ChatBubbleIcon
              style={{ color: "rgba(66, 133, 244, 0.9)", fontSize: "50px" }}
            />
          </div>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>500</div>
          <div
            style={{
              margin: "5px",
              fontSize: "15px",
              color: "rgb(66, 133, 244)",
            }}
          >
            {" "}
            Requests
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "70px",
              width: "70px",
              // background: "rgba(66, 133, 244, 0.9)",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <CheckCircleOutlineIcon
              style={{ color: "rgba(66, 133, 244, 0.9)", fontSize: "50px" }}
            />
          </div>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>200</div>
          <div
            style={{
              margin: "5px",
              fontSize: "15px",
              color: "rgb(66, 133, 244)",
            }}
          >
            {" "}
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
