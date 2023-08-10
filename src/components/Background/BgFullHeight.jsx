// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const BgFullHeight = ({ cityDestination }) => {
  
  const path = '/images/bgCities/'

  return (
    <div className="fixed z-[-1]">
      <img src={path + cityDestination} alt="General Background" className="w-screen h-screen object-cover" />
    </div>
  );
};

export default BgFullHeight;
