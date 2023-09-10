// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import CarouselArrow from "./CarouselArrow";
import CarouselNavigation from "./CarouselNavigation";
import CarouselViewport from "./CarouselViewport";
import { PropTypes } from "prop-types";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCities,
  setTotalPages,
  showNextPageFrom,
} from "../../redux/actions/carrouselActions";

const CarouselHorizontal = ({ destinations }) => {
  const citiesPerPage = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.citiesPerPage
  );
  const cities = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.cities
  );

  const activePage = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.activePage
  );
  const totalPages = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.totalPages
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to update the Redux store when needed
    dispatch(setCities(destinations));
  }, [cities, dispatch]); // Include dispatch as a dependency

  useEffect(() => {
    // Dispatch an action to update the Redux store when needed
    dispatch(setTotalPages(Math.ceil(cities.length / citiesPerPage)));
  }, [cities, citiesPerPage, dispatch]); // Include dispatch as a dependency

  // Automatic rotation of slider
  useEffect(() => {
    console.log("Se crea el intervalo");

    let sliderIntervalID = setInterval(() => {
      showNextsetOfCities()
    }, 4000);

    return () => {
      console.log("Se destruye el intervalo");

      clearInterval(sliderIntervalID);
    };
  }, [showNextsetOfCities]);

  function showNextsetOfCities () {
    console.log(activePage, totalPages)
    dispatch(showNextPageFrom(activePage, totalPages));
  }


  /*  Usdo antes de Redux
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

  let viewPortPagesDestinations = 0;
  if (Math.ceil(destinations.length / 4) > 0) {
    viewPortPagesDestinations = Array.from(
      {
        length:
          Math.ceil(destinations.length / 4) <= 3
            ? Math.ceil(destinations.length / 4)
            : 3,
      },
      (_, index) => destinations.slice(index * 4, index * 4 + 4)
    );
  }

  useEffect(() => {
    console.log("Se crea el intervalo");
    let sliderIntervalID = setInterval(() => {
      setIndex(prevIndex => prevIndex < viewPortPagesDestinations.length - 1 ? ++prevIndex : 0)
      nextSlideClick();
    }, 4000);

    return () => {
      console.log("Se destruye el intervalo");
      clearInterval(sliderIntervalID);
    };
  }, []); 
  */

  return (
    <div className="CarouselHorizonal w-full flex justify-center ">
      <div className="flex flex-col justify-center self-center w-[90%]">
        <div className="flex justify-between">
          <CarouselArrow orientation="left-arrow" /* fn={prevSlideClick} */ />
          <CarouselViewport /* viewPortPagesDestinations={viewPortPagesDestinations[index]} */
          />
          <CarouselArrow orientation="right-arrow" /* fn={nextSlideClick} */ />
        </div>
        <div className="flex justify-center mt-4">
          <CarouselNavigation />
          {/* <CarouselNavigation
            viewPortPagesDestinations={viewPortPagesDestinations}
            index={index}
            fn={viewSlide}
          /> */}
        </div>
      </div>
    </div>
  );
};

CarouselHorizontal.propTypes = {
  destinations: PropTypes.array.isRequired,
};

export default CarouselHorizontal;
