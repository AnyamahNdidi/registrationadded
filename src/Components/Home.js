import React from "react";
import MainCard from "./CardProps/MainCard";

import Counter from "./Counter/Counter";
import DownContent from "./DownContent/DownContent";
import Carouselbody from "./Hero/Carouselbody";
import Hero from "./Hero/Hero";
import Videobody from "./Videodiv/Videobody";
import { motion } from "framer-motion";
import ThatH from "../Components/ThatHearder/ThatH";
// import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <ThatH />
      <Counter />
      <MainCard />
      <Videobody />
      <DownContent />
    </div>
  );
}

export default Home;
