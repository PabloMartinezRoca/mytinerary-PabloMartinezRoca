// eslint-disable-next-line no-unused-vars
import React from "react";
import CitySearchSection from "../Sections/CitySearchSection/CitySearchSection";

const MainContainer = (/* { cities } */) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <CitySearchSection /* cities={ cities } */ />
    </div>
  );
};

export default MainContainer;
