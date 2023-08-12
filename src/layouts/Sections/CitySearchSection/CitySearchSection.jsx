// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as Anchor } from "react-router-dom";

const CitySearchSection = () => {
  return (
    <div className="WelcomeSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 h-[60vh] w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center">
          <h2 className="welcome-section text-5xl drop-shadow mb-4 text-center">
            Find your perfect trip
          </h2>
          <h3 className="welcome-section text-lg drop-shadow text-center">
            designed by insiders
            <span className="line-break">who know and love their cities!</span>
          </h3>
          <h2 className="welcome-section text-5xl drop-shadow mt-20 text-center">
            Search your next dream!
          </h2>
          <p className="text-white mt-5">
            Soon you will find here a great tool to help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <Anchor to="/index" className="flex self-center justify-center flex-col">
          <button className="text-white bg-[#669966] hover:bg-[#8fbc8f] p-2 mt-20 rounded-lg flex self-center justify-center flex-col">
            <span className="flex">Stay tuned!</span>
          </button>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default CitySearchSection;
