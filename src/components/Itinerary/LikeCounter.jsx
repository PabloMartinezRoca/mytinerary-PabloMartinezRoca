// eslint-disable-next-line no-unused-vars
import React from "react";

const LikeCounter = ({ likes = 0 }) => {
  const pathToImg = "/images/icons/like-asc-icon.svg";
  const dimensions = "w-[40px] h-[40px]";

  likes = likes / 1000000 > 1 ? (likes / 1000000).toFixed(2) + " M" : likes / 1000 > 1 ? (likes / 1000).toFixed(2) + " K" : likes
  return (
    <ul className="flex justify-center self-center gap-2 p-4">
      <li>
        <img
          className={"gap-4 " + dimensions}
          src={pathToImg}
          alt={"Likes"}
        />
      </li>
      <li className="flex justify-center self-center">{likes}</li>
    </ul>
  );
};

export default LikeCounter;
