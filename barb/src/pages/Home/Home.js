import React from "react";
import "../../components/assets/css/Home.css";
import Header from "../../components/assets/js/Header/HeaderLogoOff.js";
import CarrouselHome from "../../components/assets/js/Carrosel/CarrouselHome.js";

const Home = () => {
  return (

      <div className="containerHome">
      <Header />
      <div className="section1Home">

        <CarrouselHome className/>
      </div>
      </div>
    
  );
};

export default Home;