import React from "react";
import Nextlevel from "./Nextlevel";
import StreetStuff from "./StreetStuff";
import ForHer from "./ForHer";
import SubtleFunctional from "./SubtleFunctional";
import Show from "./Show";
import FreshVibes from "./FreshVibes";
import Footer from "./Footer";
import Header from "./Header";

const Whole = () => {
  return (
    // <div className={` ${isDrawerOpen ? 'blur-md' : ''}`}>
    <div>
        <Header/>
      <Nextlevel />
      <StreetStuff />
      <ForHer />
      <SubtleFunctional />
      <Show />
      <FreshVibes />
      <Footer />
    </div>
  );
};

export default Whole;
