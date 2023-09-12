// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'
import HttpStatus503Component from "../components/HttpStatusCodes/HttpStatus503Component";
import BgFullHeight from "../components/Background/BgFullHeight";

const HttpStatus503 = ({ bgSectionPath, bgSection }) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <BgFullHeight bgSectionPath={bgSectionPath} cityDestination={bgSection} />
      <HttpStatus503Component />
    </div>
  );
};

HttpStatus503.propTypes = {
  bgSectionPath: PropTypes.string, 
  bgSection: PropTypes.string
}

export default HttpStatus503