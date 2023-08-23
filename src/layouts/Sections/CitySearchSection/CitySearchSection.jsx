// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import CityCard from "../../../components/CityCard/CityCard";

const CitySearchSection = ({ cities }) => {
  const noCityFound = {
    match: false,
    city: "Lost?",
    country: "Nowhere!",
    imgPath: "./images/bgHttpStatusCodes/",
    imgUrl: "Desert-Island-Middle-Of-Nowhere-1920.webp",
  };
  // Select filter logic
  const [options, setOptions] = useState(cities);
  const [selectedOption, setSelectedOption] = useState("-1");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Input filter logic
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(cities);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter data based on input
    const filtered = cities.filter((item) =>
      item.city.trim().toLowerCase().startsWith(value.toLowerCase().trim())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="SearchSection flex w-full justify-center py-4 flex-col">
      <div className="flex justify-center self-center bg-black bg-opacity-40 w-[96vw] rounded-3xl p-4 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center">
          <h2 className="welcome-section text-5xl drop-shadow my-5 text-center">
            Search your next dream!
          </h2>
          <p className="text-white mt-5 text-center ">
            Select a city of your interest
            <select value={selectedOption} onChange={handleSelectChange}>
              <option key="-1" value="-1">
                Select a city
              </option>
              {options.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.city}
                </option>
              ))}
            </select>
          </p>
          <p className="text-white mt-5 text-center ">
            Or filter by entering the city name you are looking for
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Filter by city"
            />
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center self-center w-[96vw] p-10 mt-5 text-white bg-black bg-opacity-40  rounded-3xl shadow-lg shadow-white/50">
        {filteredData.length === 0 ? (
          <div key={-1} className="card p-2 ">
            <CityCard cityInfo={noCityFound} />
          </div>
        ) : (
          filteredData.map((cityInfo) => (
            <div key={cityInfo._id} className="card p-2 ">
              <CityCard cityInfo={cityInfo} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CitySearchSection;
