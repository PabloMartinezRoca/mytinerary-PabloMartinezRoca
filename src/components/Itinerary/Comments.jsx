// eslint-disable-next-line no-unused-vars
import React from "react";

const Comments = () => {
  return (
    <div className="text-white mt-2 bg-black bg-opacity-40 min-w-[90%] rounded-3xl p-10 shadow-lg shadow-white/50">
      <div className="flex flex-col justify-center self-center">
        <h2 className="welcome-section text-4xl self-center mb-4 px-5 border-b border-[#b43abe]">
          Comments
        </h2>
        <div className="flex flex-col self-center">
          <p className="text-center text-lg leading-relaxed mt-10 font-medium tracking-widest uppercase">
            We'd love to hear
          </p>
          <p className="text-center text-lg leading-relaxed font-medium tracking-widest uppercase">
            from you!
          </p>
          <ul className="flex text-center my-5 gap-3 self-center">
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
          </ul>
          <p className="text-center">Please leave us a review</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
