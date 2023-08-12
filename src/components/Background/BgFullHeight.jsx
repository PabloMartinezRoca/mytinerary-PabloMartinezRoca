// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import './bg-full-height.css'

const BgFullHeight = ({ cityDestination, bgSectionPath = '/images/bgCities/' }) => {
  
  return (
    <div className="bg-full-height fixed z-[-1]">
      <img src={bgSectionPath + cityDestination} alt="General Background" 
      className="w-screen h-screen object-cover 
      opacity-0 animate-fade-in" />
    </div>
  );
};

export default BgFullHeight;
