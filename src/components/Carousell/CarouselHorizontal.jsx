// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import CarouselArrow from "./CarouselArrow";
import CarouselNavigation from "./CarouselNavigation";
import CarouselViewport from "./CarouselViewport";
import { useState } from "react";

const CarouselHorizontal = ({ destinations }) => {
  
  const viewPortPagesDestinations = Array.from(
    { length: Math.ceil(destinations.length / 4) <= 3 ? Math.ceil(destinations.length / 4) : 3 },
    (_, index) => destinations.slice(index * 4, index * 4 + 4)
  );

  const [index, setIndex] = useState(0);

  const viewSlide = (index) => {
    setIndex(index);
  };

  const prevSlideClick = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? --prevIndex : viewPortPagesDestinations.length - 1
    );
    // setIndex(index > 0 ? --index : viewPortPagesDestinations.length - 1)
  };

  const nextSlideClick = () => {
    setIndex((prevIndex) =>
      prevIndex < viewPortPagesDestinations.length - 1 ? ++prevIndex : 0
    );
    // setIndex(index < viewPortPagesDestinations.length - 1 ? ++index : 0)
  };

  useEffect(() => {
    console.log("Se crea el intervalo");
    let sliderIntervalID = setInterval(() => {
      // setIndex(prevIndex => prevIndex < viewPortPagesDestinations.length - 1 ? ++prevIndex : 0)
      nextSlideClick();
    }, 4000);

    return () => {
      console.log("Se destruye el intervalo");
      clearInterval(sliderIntervalID);
    };
  }, []);

  return (
    <div className="CarouselHorizonal w-full flex justify-center ">
      <div className="flex flex-col justify-center self-center w-[90%]">
        <div className="flex justify-between">
          <CarouselArrow orientation="left-arrow" fn={prevSlideClick} />
          <CarouselViewport viewPortPagesDestinations={viewPortPagesDestinations[index]} />
          <CarouselArrow orientation="right-arrow" fn={nextSlideClick} />
        </div>
        <div className="flex justify-center mt-4">
          <CarouselNavigation
            viewPortPagesDestinations={viewPortPagesDestinations}
            index={index}
            fn={viewSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselHorizontal;
