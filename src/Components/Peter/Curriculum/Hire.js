import React from 'react'
import "./Sample.css";
import { createFromIconfontCN, FileSearchOutlined } from '@ant-design/icons';
import {
  Dnav,
  IconContent,
  IconTitle,
  Iconnv



} from "./Hirestyle"
function Hire(props) {
  return (
    <div>

      <Dnav clr={props.background}>
        <Iconnv>

          < FileSearchOutlined />


        </Iconnv>

        <IconTitle>
          Hire Teachers

        </IconTitle>
        <IconContent>
          Let's help you pick from our pool of verified, highly qualified,
          ready-to-work teachers to fill that teaching role.

        </IconContent>

      </Dnav>






    </div>
  )
}

export default Hire
