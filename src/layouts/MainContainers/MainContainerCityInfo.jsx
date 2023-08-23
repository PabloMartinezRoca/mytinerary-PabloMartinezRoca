// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import CityInfoSection from "../Sections/CityInfoSection/CityInfoSection";

const MainContainer = ({ cityInfo }) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <CityInfoSection cityInfo={cityInfo} />
    </div>
  );
};

MainContainer.propTypes = {
  cityInfo: PropTypes.object.isRequired,
};

export default MainContainer;
