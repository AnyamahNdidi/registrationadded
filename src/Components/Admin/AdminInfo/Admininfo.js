import React, { useState } from 'react'

import "./AdminStyle.css"
import { Button, Modal } from "antd";
import Teacherinfo from "../TableInfo/TeacherTable"
import Studentinfo from "../TableInfo/StudentTable"

function Admininfo() {
  const [teacher, setTeacher] = useState(true)
  const [school, setSchool] = useState(false)
  return (
    <div>
      <div className="allInfo">
        <div className="functionCon">
          

          <Button
            onClick={
              () => {
                setTeacher(true)
                setSchool(false)
                console.log("you just click the teacher")
              }
            }


          >
            Teachers
            </Button>
          <Button
            onClick={
              () => {
                setTeacher(false)
                setSchool(true)
                console.log("you just click the student")
              }}
          >
            Schools
            </Button>
        </div>
        {
          teacher ?
            (
              <div>
                <Teacherinfo />
              </div>
            ) : school ?
              (
                <div>
                  <Studentinfo />

                </div>
              ) : null


        }

      </div>
    </div>
  )
}

export default Admininfo
