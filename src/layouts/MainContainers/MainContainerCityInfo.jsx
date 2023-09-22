// eslint-disable-next-line no-unused-vars
import React from "react";
import CityInfoSection from "../Sections/CityInfoSection/CityInfoSection";
import { useSelector } from "react-redux";

const MainContainer = () => {

  const cityInfo = useSelector((store) => store.citiesReducers.cityInfo);

  return  cityInfo && (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <CityInfoSection cityInfo={cityInfo} />
    </div>
  );
};

export default MainContainer;
