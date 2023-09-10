// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import CityCard from "../../../components/CityCard/CityCard";
import { getAllCities } from "../../../services/citiesQueries";
import { getCitiesByCityName } from "../../../services/citiesQueries";
import { useSelector } from "react-redux";

const CitySearchSection = (/* { cities } */) => {
  
  console.log("Starting City Search Section")

  const noCityFound = {
    match: false,
    city: "Lost?",
    imgPath: "/images/bgHttpStatusCodes/",
    imgUrl: "Desert-Island-Middle-Of-Nowhere-1920.webp",
  };

  const cities = useSelector( store => store.citiesReducers.cities )
  
  // Select filter logic
  const [selectedOption, setSelectedOption] = useState("-1");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Input filter logic
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(cities);

  // Vinculación de useRef, con un valor inicial, que guardará la referencia a un dato.
  // El acceso a la referencia es mediante la propiedad current
  // Además, no provoca un re render
  const inputSearch = useRef(null);

  const handleClickFilter = () => { // era handleClickFilter = (e)
    /*
    // este código es si se vincula un eventListener al input: onInput={handleInputChange}
    const value = e.target.value;
    setInputValue(value);
    */
    setInputValue(inputSearch.current.value)

    /* Esto filtra utilizando los datos pasados a través de cities
    // Filter data based on input
    const filtered = cities.filter((item) =>
      item.city.trim().toLowerCase().startsWith(inputSearch.current.value.toString().toLowerCase().trim())
    );
    setFilteredData(filtered);
    */
  }

  // TO CHECKOUT AND PREVENT 2 COMPONENT RENDERS
   useEffect(() => {
    if(inputValue) {
      let queryParams = "?city=" + inputValue
      getCitiesByCityName(queryParams).then(setFilteredData)

      // en una línea
      // getCitiesByName(`?city=${inputValue}`).then(setFilteredData)

    } else {
      getAllCities().then(setFilteredData)
    }
  }, [inputValue])
 
  return (
    <div className="SearchSection flex w-full justify-center py-4 flex-col">
      <div className="flex justify-center self-center bg-black bg-opacity-40 w-[96vw] rounded-3xl p-4 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center">
          <h2 className="city-search-section text-5xl drop-shadow my-5 text-center">
            Search your next dream!
          </h2>
          <p className="text-white mt-5 text-center ">
            Select a city of your interest
            <select value={selectedOption} onChange={handleSelectChange}>
              <option key="-1" value="-1">
                Select a city
              </option>
              { cities.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.city}
                </option>
              )) }
            </select>
          </p>
          <p className="text-white mt-5 text-center grid grid-cols-10 gap-2">
            <span>&nbsp;</span>
            <span className="col-span-4 text-center self-center">
              Or filter by entering the start of the city name you are looking for
            </span>
            <input
              className="col-span-2 rounded"
              ref={inputSearch}
              type="text"
              defaultValue={inputValue}
              placeholder="Type the city name"
            />
            <button
              onClick={handleClickFilter}
              className="bg-slate-300 hover:bg-slate-200 font-bold py-2 px-4 rounded"
            >
              🔍
            </button>
            <span>&nbsp;</span>
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
