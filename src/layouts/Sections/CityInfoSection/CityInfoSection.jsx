// eslint-disable-next-line no-unused-vars
import React from "react";
import Itinerary from "../../../components/Itinerary/Itinerary";
import { Link as Anchor } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

const CityInfoSection = ({ cityInfo }) => {
  // console.log(cityInfo)

  const itineraries = useSelector((store) => store.citiesReducers.itineraries);

  return (
    <div className="CityInfoSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center">
          <h2 className="city-info-section text-7xl drop-shadow mb-4 text-center">
            {cityInfo.city}
          </h2>
          <h3 className="city-info-section text-lg drop-shadow text-center">
            designed by insiders
            <span className="line-break">who know and love their cities!</span>
          </h3>
          <p className="text-white mt-1 flex justify-center self-center flex-col">
            <span className="text-center pb-1 text-2xl">
              Travel to {cityInfo.country}!
            </span>
          </p>

          {itineraries.length > 0 ?
            itineraries.map((itinerary) => (
              <Itinerary key={itinerary._id} itinerary={itinerary} />
            )) : (
              <div
              key={1}
              className="relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center"
            >
              <img
                className={"rounded"}
                src={"/images/bgItineraries/bgItinerariesByDefault.webp"}
                alt={"No itineraries yet!"}
              />
            </div>
            )}

          <Anchor
            to="/cities"
            className="flex self-center justify-center flex-col"
          >
            <button className="text-white bg-[#669966] hover:bg-[#8fbc8f] p-2 mt-8 rounded-lg flex self-center justify-center flex-col">
              <span>Go and unveil another fascinating city!</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 flex self-center mt-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

CityInfoSection.propTypes = {
  cityInfo: PropTypes.object.isRequired,
};

export default CityInfoSection;
