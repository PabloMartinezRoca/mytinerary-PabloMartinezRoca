// eslint-disable-next-line no-unused-vars
import React from "react";
import CarouselHorizontal from "../../../components/Carousell/CarouselHorizontal";
import { useSelector } from "react-redux";

const CarouselSection = (/* { destinations } */) => {

  const { cities } = useSelector((store) => store.citiesReducers);
  // Esta sentencia la ejecuta Redux:
  const popularCities = cities.filter((cityInfo) => cityInfo.popular === true);

  return (
    <div className="CarouselSection w-full py-8 bg-gray-50">
      <h2 className="carousel-section text-5xl text-center pb-10">
        Popular Mytineraries
      </h2>
      <CarouselHorizontal destinations={popularCities} />
    </div>
  );
};

export default CarouselSection;
