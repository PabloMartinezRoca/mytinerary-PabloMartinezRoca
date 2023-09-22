// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";

const Activities = ({ activities = [] }) => {
  const imgPath = "/itineraries/traveller/itinerary1/activities/";

  const sortedActivities =
    activities.length > 0
      ? activities.slice().sort((a, b) => a.order - b.order)
      : {};

  return (
    <div className="flex flex-col justify-center self-center text-white mt-2 bg-black bg-opacity-40 min-w-[90%] rounded-2xl p-10 shadow-lg shadow-white/50">
      <h2 className="city-info-activities-section text-4xl self-center mb-4 px-5 border-b border-[#b43abe]">
        Activities
      </h2>
      {sortedActivities.length > 0 ? (
        sortedActivities.map((activity) => (
          <div
            key={activity.order}
            className="flex flex-col relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center"
          >
            <img
              className={"rounded"}
              src={imgPath + activity.img}
              alt={activity.title}
            />
            <h3 className="flex self-center text-center pb-1 text-xl border-t border-[#b43abe] px-2 my-4">
              {activity.title}
            </h3>
          </div>
        ))
      ) : (
        <div
          className="relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center"
        >
          <img
            className={"rounded"}
            src={"/images/bgActivities/bgActivitiesByDefault.webp"}
            alt={"No Activities Plan yet!"}
          />
        </div>
      )}
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
};
export default Activities;
