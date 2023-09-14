// eslint-disable-next-line no-unused-vars
import React from "react";
// import PropTypes from "prop-types";
import SignInSection from "../Sections/SignInSection/SignInSection";

const MainContainer = (/* { destinations } */) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <SignInSection />
    </div>
  );
};

/* MainContainer.propTypes = {
  destinations: PropTypes.array.isRequired,
}; */

export default MainContainer;
