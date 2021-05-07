import React, { useState } from 'react'
import "./Signstyle.css";
import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, UnlockOutlined, FileImageOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom"

function SignupAuth() {

  const [toggle, setToggle] = useState(false)
  const hist = useHistory()
  const [formText, setFormText] = useState({});
  const handleForm = (e) => {
    setFormText({ ...formText, [e.target.name]: e.target.value })
  };

  const clickHer = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <div className="regNav">
        <div className="logo">
          ShortCode

      </div>
        <div className="Catnav">
          <div className="Sigupnav">

            <div style={{
              fontSize: "23px",
              fontWeight: "600w"
            }}>Register</div>

          </div>


          <br />
          <div>
            <Input
              size="large"
              placeholder="Image"
              type="file"
              prefix={<FileImageOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />
            <Input
              size="large"
              type="text"
              name="name"
              onChange={handleForm}
              placeholder="Full Name"




              prefix={<SolutionOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />
            <Input
              size="large"


              type="text"
              onChange={handleForm}
              name="contact"
              placeholder="Address"


              prefix={<ContactsOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />


            <Input
              size="large"
              placeholder="E-mail"

              prefix={<MailOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />

            <Input
              size="large"
              placeholder="Create Password"
              type="password"

              prefix={<UnlockOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />
            <Input
              size="large"
              placeholder="Phone Number"
              type="number"
              prefix={<MailOutlined />}
              style={{
                height: "40px"
              }} />

            <div style={{
              display: "flex",


            }}>
              <Button
                className="button_nav"
                onClick={() => {
                  // SignUpUser()
                  hist.push("/details")
                }}
              >
                Sign Up
            </Button>
            </div>



          </div>



        </div>
      </div>
    </div>
  )
}

export default SignupAuth
