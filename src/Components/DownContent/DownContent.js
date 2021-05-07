import React from "react";

function DownContent() {
  return (
    <div
      style={{
        marginTop: "30px",
        backgroundColor: "#F3F5FB",
        width: "100%",
        height: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            margin: "10px",
            color: "rgb(66, 133, 244)",
          }}
        >
          WHAT ARE YOU WAITING FOR?
        </div>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "10px",
          }}
        >
          Let's help you match with that school, teacher, or training
          consultant.
        </div>
        <button
          style={{
            height: "50px",
            width: "200px",
            borderRadius: "50px",
            color: "white",
            background: "rgb(66, 133, 244)",
            fontWeight: "bold",
            border: "1px solid silver",
            margin: "10px",
          }}
        >
          GET STARTED NOW{" "}
        </button>
      </div>
    </div>
  );
}

export default DownContent;
