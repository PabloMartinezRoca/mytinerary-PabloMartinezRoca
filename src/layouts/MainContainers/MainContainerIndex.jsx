// eslint-disable-next-line no-unused-vars
import React from "react";
// import PropTypes from "prop-types";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";
import WelcomeSection from "../Sections/WelcomeSection/WelcomeSection";

const MainContainer = (/* { destinations } */) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <WelcomeSection />
      <CarouselSection /* destinations={destinations} */ />
    </div>
  );
};

/* MainContainer.propTypes = {
  destinations: PropTypes.array.isRequired,
}; */

export default MainContainer;
