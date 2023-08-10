// eslint-disable-next-line no-unused-vars
import React from "react";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";
import CitySearchSection from "../Sections/CitySearchSection/CitySearchSection";
import WelcomeSection from "../Sections/WelcomeSection/WelcomeSection";

const MainContainer = ({ page, destinations = null }) => {
  switch (page) {
    case "index":
      return (
        <div className="mainContainer w-full flex flex-col justify-center self-center">
          <WelcomeSection />
          <CarouselSection destinations={destinations} />
        </div>
      );
      break;

    case "cities":
      return (
        <div className="mainContainer w-full flex flex-col justify-center self-center">
          <CitySearchSection />
        </div>
      );
      break;
  }
};

export default MainContainer;
