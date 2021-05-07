import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Signup from "../src/Components/Signup/Signup";
import NavBar from "./Components/NavBar/index"
import SideBar from "./Components/SideBar/SideBar"
import Footer from "./Components/Footer/index"
import Curriculum from "./Components/Peter/CurriculumHolder";
import Services from "./Components/Services/Services";
import SignUp from "./Components/Signup/Signup";
import PageAdmin from "./Components/Admin/Admin";
import DashBoard from "./Components/DashBord/Dashboard"
import Getstarted from "./Components/Register/Getstarted"
import SignupAuth from "./Components/Register/SignupAuth/SignupAuth"
import Details from "./Components/Register/SignupAuth/Details"



function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <Route exact path="/dashboard" component={DashBoard} />

        <Switch>
          {/* <NavBar toggle={toggle} />
          <SideBar isOpen={isOpen} toggle={toggle} /> */}
          <Route exact path="/" component={Getstarted} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/sign" component={Signup} />
          <Route exact path="/features" component={Curriculum} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/admin" component={PageAdmin} />
          <Route exact path="/short" component={SignupAuth} />
          <Route exact path="/details" component={Details} />



        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
