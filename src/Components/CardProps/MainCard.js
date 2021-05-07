import React from "react";
import CardProps from "./CardProps";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import pic1 from "../img/j1.png";
import pic2 from "../img/j2.png";
import pic3 from "../img/j3.png";

const MainCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F3F5FB",
        marginTop: "30px",
      }}
    >
      <CardProps
        header="Hire Teachers"
        detail="Let's help you pick from our pool of verified, highly qualified, ready-to-work teachers to fill that teaching role."
        img={pic1}
        bg="rgba(66, 133, 244, 0.2)"
      />

      <CardProps
        header="Get Hired"
        detail="Are you a qualified teacher, passionate about imparting knowledge? Schools within our network want to hire you."
        img={pic2}
        bg="rgba(66, 133, 244, 0.2)"
      />

      <CardProps
        header="Train-the-Trainer"
        detail="Are you a school administrator? Teachers in your school should upskill periodically. Our training consultants are here to help."
        img={pic3}
        bg="rgba(66, 133, 244, 0.2)"
      />
    </div>
  );
};

export default MainCard;
