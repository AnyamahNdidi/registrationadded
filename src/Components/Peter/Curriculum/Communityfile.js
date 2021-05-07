import React from 'react'
import "./Comstyle.css"
import img from "../image/11.jpg"
import Cardcom from "./Cardcom"
import img2 from "../image/commun.png"
import data from "./Com.json"



function Communityfile() {
  return (
    <div className="com_nav">
      <div className="com_navd">
        <div className="com_nav1">

          {
            data.map(({ Title, CON, img }) => (
              <div className="conCon">
                <div className="icond">
                  <img src={img} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="write">
                  <h1>
                    {Title}</h1>
                  <p>{CON}</p>

                </div>
              </div>

            ))

          }



        </div>
        <div className="com_nav2">
          <div className="imgnav">


          </div>
          <div className="back">
            <img src={img} style={{ width: "100%", height: "100%" }} />


          </div>


        </div>
      </div>

    </div>
  )
}

export default Communityfile
