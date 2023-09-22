// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import PriceMeter from "./PriceMeter";
import ContributorInfo from "./ContributorInfo";
import HashTagBoard from "./HashTagBoard";
import LikeCounter from "./LikeCounter";
import Activities from "./Activities";
import Comments from "./Comments";

const Itinerary = ({ itinerary }) => {
  
  // console.log(itinerary);

  const arrowDown =
    "M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z";
  const arrowUp =
    "M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z";

  const itineraryImgPath = '/itineraries/traveller/' + itinerary._id + '/'

  let [activitiesAndCommentsText, setActivitiesAndCommentsText] = useState(
    "Go and unveil our activities and comments!"
  );
  let [activitiesAndCommentsArrow, setActivitiesAndCommentsArrow] =
    useState(arrowDown);
  const [showActivitiesAndComments, setShowActivitiesAndComments] =
    useState(false);

  // Show and hide Activities and Comments
  const toggleActivitiesAndComments = () => {
    setShowActivitiesAndComments(!showActivitiesAndComments);
    setActivitiesAndCommentsText(
      showActivitiesAndComments
        ? "Go and unveil our activities and comments!"
        : "Hide the activities and comments"
    );
    setActivitiesAndCommentsArrow(
      showActivitiesAndComments ? arrowDown : arrowUp
    );
  };

  return (
    <div className="text-white mt-2 bg-black bg-opacity-40 min-w-[90%] rounded-3xl p-10 shadow-lg shadow-white/50">
      <div className="flex flex-col justify-center self-center ">
        <img
          className={"rounded"}
          src={itineraryImgPath + itinerary.photo}
          alt={itinerary.title}
        />
        <h2 className="itinerary-section text-4xl self-center my-4 px-10 border-b-2 border-[#3c88ae] text-center">
          {itinerary.title}
        </h2>
        <HashTagBoard hashTagList={itinerary.hashtags} />
        <LikeCounter likes={itinerary.likes.length} />
        <span className="flex flex-row justify-between ">
          <span className="self-center">
            <ContributorInfo contributor={itinerary.contributor} />
          </span>
          <span className="flex gap-2">
            <img
              className={"gap-2 w-[50px] h-[50px] self-center"}
              src="/images/icons/price-and-duration-icon.svg"
              alt="Price and duration"
            />
            <span className="self-center">{itinerary.duration} hours</span>
            <PriceMeter price={itinerary.price} />
          </span>
        </span>

        {/* Activities Component */}
        {showActivitiesAndComments && (
          <Activities itinerary={itinerary._id} activities={itinerary.activities} />
        )}

        {/* Comments Component */}
        {showActivitiesAndComments && <Comments itinerary={itinerary._id} commentsList={itinerary.comments}/>}

        <button
          onClick={() => toggleActivitiesAndComments()}
          className="flex self-center justify-center flex-col text-white bg-[#669966] hover:bg-[#8fbc8f] mt-8 p-2 rounded-lg"
        >
          <span className="text-xs">{activitiesAndCommentsText}</span>
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
              d={activitiesAndCommentsArrow}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Itinerary.propTypes = {
  itinerary: PropTypes.object,
};

export default Itinerary;
