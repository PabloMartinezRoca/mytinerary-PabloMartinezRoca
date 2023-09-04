// eslint-disable-next-line no-unused-vars
import React from "react";


const Activities = () => {
  return (
    <div className="text-white mt-2 bg-black bg-opacity-40 min-w-[90%] rounded-3xl p-10 shadow-lg shadow-white/50">
      <div className="flex flex-col justify-center self-center ">
        <h2 className="welcome-section text-4xl self-center mb-4 px-5 border-b border-[#b43abe]">
          Activities
        </h2>


        <div className="relative rounded-2xl m-2 shadow-sm shadow-slate-900 justify-center self-center">
          <img
            className={"rounded-2xl "}
            src={"/images/bgActivities/bgActivitiesByDefault.webp"}
            alt={"Activities Plan"}
          />
        </div>


      </div>
    </div>
  );
};

export default Activities;
