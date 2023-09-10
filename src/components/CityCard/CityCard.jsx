// eslint-disable-next-line no-unused-vars
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";

const CityCard = ({ cityInfo }) => {
  let { _id: id, city, country, imgPath, imgUrl, match = true } = cityInfo; // desestructura el objeto

  const pathToImg = imgPath || "/images/bgCities/";
  const dimensions = match ? "w-[300px] h-[170px]" : "w-[500px] h-[280px]";

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const preloadedImage = new Image();
    preloadedImage.src = pathToImg + imgUrl;

    preloadedImage.onload = () => {
      setImageLoaded(true);
      setImageSrc(preloadedImage.src);
    };
  });

  const cardStyle = {
    opacity: imageLoaded ? 1 : 0, 
    transition: "opacity 1s ease-in-out", 
    transitionDelay: "1s"
  };

  const imgStyle = {
    opacity: imageLoaded ? 1 : 0, 
    transition: "opacity 1s ease-in-out", 
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={"flex justify-center max-w-[90vw] min-h[130px] " + dimensions}
      style={cardStyle}
    >
      {imageLoaded && imageSrc && (
        <Anchor
          to={"/travelTo/" + id}
          style={{ pointerEvents: !match && "none" }}
          className="flex w-full h-full self-center justify-center flex-col"
          onClick={() => {
            return match;
          }}
        >
          <div className="w-full h-full relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center bg-black" style={imgStyle}>

            <div className="absolute top-[1em] left-0 p-1 ps-3 bg-white opacity-70 w-full h-15 text-emerald-800">
              destination :: <strong>{city}</strong>
            </div>
            <div className="absolute bottom-[1em] left-0 p-1 pe-3 bg-white opacity-70 w-full h-15 text-emerald-800 flex justify-end">
              {!match
                ? "Sorry! We couldnt find a city matching the criteria"
                : "Click to travel to " + country}
            </div>
          </div>
        </Anchor>
      )}
    </div>
  );
};

CityCard.propTypes = {
  cityInfo: PropTypes.object.isRequired,
};
export default CityCard;
