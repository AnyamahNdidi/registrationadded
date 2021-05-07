import React from "react";
import "./vi.css";
import { Button } from "antd";
import vid from "../img/4.jpg";
function Videobody() {
  return (
    <>
      <div
        className="remove"
        style={
          {
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <div className="video_im1" style={{}}>
          <div
            className="spread1"
            style={
              {
                // backgroundColor: "red",
              }
            }
          >
            <div className="bigsize" style={{}}>
              We do the hardwork for school admins.
            </div>
            <h4 className="biggie">
              By using our system, we take the hardwork off you; helping you
              find the most qualified teacher, within your location, for that
              open role.
            </h4>
            <Button
              className="buten"
              style={{
                height: "50px",
                width: "150px",
                borderRadius: "50px",
                color: "black",
                background: "white",
                fontWeight: "bold",
                border: "1px solid silver",
              }}
            >
              GET STARTED{" "}
            </Button>
          </div>
          <div className="video_im" style={{}}>
            <img
              src={vid}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Videobody;
