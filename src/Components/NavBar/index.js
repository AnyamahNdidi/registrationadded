import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
// import RegModal from "../Regpages/RegModal"
// import { AppContext } from "../GlobalAuth/GlobalAuth"
// import { app } from "../Peter/firebase"
import { Button } from "antd"
import { useHistory } from "react-router-dom"
import { CaretDownOutlined } from '@ant-design/icons';
import "./Allstyle.css"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import SignDisplay from "./SignDisplay";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  // const [show, setShow] = useState(false);
  // const [cssChange, setcssChange] = useState(true)

  // const { current } = React.useContext(AppContext)
  // const { datause } = React.useContext(AppContext)
  const hist = useHistory()


  // const changeCss = () => {
  //   setcssChange(!cssChange)
  // }

  // const diSignOut = () => {
  //   setShow((prev) => !prev)
  // };
  // const signOutUser = () => {
  //   app.auth().signOut();
  //   hist.push("/")
  // }

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>

            SHORTKODE
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>

            <div className="dropdown">
              <NavLinks to="/prospect">
                Register <CaretDownOutlined style={{ marginTop: "5px" }} />
              </NavLinks>
              <div className="dropdown_content">

                <a href="/Elementry" to="/Elementry">
                  As A School
                </a>
                <a href="/Elementry" to="/Elementry">
                  As A Teacher
                </a>
              </div>
            </div>





          </NavMenu>

          <NavBtn>
            {/* 
            {
              current ?
                <div className={cssChange ? "first1" : "second1"}>
                  <div style={{ display: "flex", justifyContent: "center" }}
                    onClick={() => {
                      changeCss()
                      diSignOut()
                    }}
                  >
                    <img
                      src={datause && datause.avatar}
                      alt="Avatar"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        objectFit: "cover",
                      }}
                    />
                    <CaretDownOutlined />

                  </div>
                  <SignDisplay show={show} setShow={setShow} />
                </div> : <RegModal />
            } */}

          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
