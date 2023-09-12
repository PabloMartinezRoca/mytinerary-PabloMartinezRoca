// eslint-disable-next-line no-unused-vars
import React from "react";
// import PropTypes from "prop-types";
import SignUpSection from "../Sections/SignUpSection/SignUpSection";

const MainContainer = (/* { destinations } */) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <SignUpSection />
    </div>
  );
};

/* MainContainer.propTypes = {
  destinations: PropTypes.array.isRequired,
}; */

export default MainContainer;
