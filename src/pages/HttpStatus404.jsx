// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'
import HttpStatus404Component from "../components/HttpStatusCodes/HttpStatus404Component";
import BgFullHeight from "../components/Background/BgFullHeight";

const HttpStatus404 = ({ bgSectionPath, bgSection }) => {
  return (
    <div className="mainContainer w-full flex flex-col justify-center self-center">
      <BgFullHeight bgSectionPath={bgSectionPath} cityDestination={bgSection} />
      <HttpStatus404Component />
    </div>
  );
};

HttpStatus404.propTypes = {
  bgSectionPath: PropTypes.string, 
  bgSection: PropTypes.string
}

export default HttpStatus404;