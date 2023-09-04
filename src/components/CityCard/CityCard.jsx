// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as Anchor } from "react-router-dom";

const CityCard = ({ cityInfo }) => {
  let { _id: id, city, country, imgPath, imgUrl, match = true } = cityInfo; // desestructura el objeto
  const pathToImg = imgPath || "/images/bgCities/";
  const dimensions = match ? "w-[300px] h-[170px]" : "w-[500px] h-[280px]";

  
  return (
    <div
      className={"flex justify-center max-w-[90vw] min-h[130px] " + dimensions}
    >
      <Anchor
        to={"/travelTo/" + id}
        style={{ pointerEvents: !match && "none" }}
        className="flex self-center justify-center flex-col" onClick={() => { return match }}
      >
        <div className="relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center">
          <img
            className={"rounded-2xl "}
            src={pathToImg + imgUrl}
            alt={city + ", " + country}
          />

          <div className="absolute top-[1em] left-0 p-1 ps-3 bg-white opacity-70 w-full h-15 text-emerald-800">
            destination :: <strong>{city}</strong>
          </div>
          <div className="absolute bottom-[1em] left-0 p-1 pe-3 bg-white opacity-70 w-full h-15 text-emerald-800 flex justify-end">
            { !match ? "Sorry! We couldnt find a city matching the criteria" : "Click to travel to " + country }
          </div>
        </div>
      </Anchor>
    </div>
  );
};

export default CityCard;
