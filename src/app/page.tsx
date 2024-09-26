"use client";

import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Vision from "../components/Vision";
import Tokenomics from "../components/Tokenomics";
//import Whitepaper from "../components/Whitepaper";
import Socials from "../components/Socials";
import Buy from "../components/Buy";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <main className="main-container">
      <Header />
      <div>
        <Home />
        <Vision />
        <Tokenomics />
        {/* <Whitepaper /> */}
        <Socials />
        <Buy />
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
