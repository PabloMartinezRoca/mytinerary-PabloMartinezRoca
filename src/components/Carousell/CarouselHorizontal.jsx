// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import CarouselArrow from "./CarouselArrow";
import CarouselNavigation from "./CarouselNavigation";
import CarouselViewport from "./CarouselViewport";
import { useState } from "react"

const CarouselHorizontal = ({ destinations }) => {
  
  let [index, setIndex] = useState(0);

  const nextSlideClick = () => {
    setIndex(index < destinations.length - 1 ? index + 1 : 0)
  }

  const prevSlideClick = () => {
    setIndex(index > 0 ? index - 1 : destinations.length - 1)
  }

  const viewSlide = (index) => {
    setIndex(index)
  }

  useEffect(() => {
    let sliderIntervalID = setInterval(() => {
      nextSlideClick()
    }, 4000)

    return () => {
      clearInterval(sliderIntervalID)
    }
    
  }, [index])

  return (
    <div className="CarouselHorizonal w-full flex justify-center ">
      <div className="flex flex-col justify-center self-center w-[90%]">
        <div className="flex justify-between">
          <CarouselArrow orientation="left-arrow" fn={prevSlideClick} />
          <CarouselViewport viewportDestinations={destinations[index]} />
          <CarouselArrow orientation="right-arrow" fn={nextSlideClick} />
        </div >  
        <div className="flex justify-center mt-4" >
          <CarouselNavigation destinations={destinations} index={index} fn={viewSlide} />
        </div>
      </div>
    </div>
  );
};

export default CarouselHorizontal;