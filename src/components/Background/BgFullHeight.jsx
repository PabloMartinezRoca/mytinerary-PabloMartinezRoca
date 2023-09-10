// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {PropTypes } from 'prop-types'
import './bg-full-height.css'

const BgFullHeight = ({ cityDestination = null, bgSectionPath = '/images/bgCities/' }) => {
  
  const cities = useSelector( (store) => store.citiesReducers.cities )
  
  // console.log("Antes de iniciaizar aleatoriamente:", cityDestination)
  cityDestination = cityDestination || (cities ? cities[Math.floor(Math.random() * cities.length)].imgUrl : '') 
  // console.log("Después de iniciaizar aleatoriamente:", cityDestination)

  return (
    <div className="bg-full-height fixed z-[-1]">
      <img src={bgSectionPath + cityDestination} alt="General Background" 
      className="w-screen h-screen object-cover 
      opacity-0 animate-fade-in" />
    </div>
  );
};

BgFullHeight.propTypes = {
  cityDestination: PropTypes.string,
  bgSectionPath: PropTypes.string
}

export default BgFullHeight;
