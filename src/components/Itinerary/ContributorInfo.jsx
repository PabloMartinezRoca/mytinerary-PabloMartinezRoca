// eslint-disable-next-line no-unused-vars
import React from "react";

const ContributorInfo = ({ userId }) => {
  const pathToImg = "/images/users/profilePhotos/";
  const dimensions = "w-[100px] h-[100px]";
  userId = "PabloRoca.jpg";
  const userName = "Pablo Roca";

  return (
    <ul className="flex flex-col justify-center self-center gap-2 p-4">
      <li>
        <img
          className={"rounded-full gap-2 " + dimensions}
          src={pathToImg + userId}
          alt={"Contributor Photo"}
        />
      </li>
      <li className="flex justify-center self-center">{userName}</li>
    </ul>
  );
};

export default ContributorInfo;
