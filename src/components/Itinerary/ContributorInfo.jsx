// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from 'prop-types'

const ContributorInfo = ({ contributor }) => {
  const dimensions = "w-[100px] h-[100px]";

  const photo = contributor.photo.length > 0 ? contributor.photo : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png';
  
  return (
    <ul className="flex flex-col justify-center self-center gap-2 p-4">
      <li className="flex justify-center">
        <img
          className={"rounded-full gap-2 " + dimensions}
          src={ photo }
          alt={"Contributor Photo"}
        />
      </li>
      <li className="flex justify-center self-center">{ contributor.name }</li>
    </ul>
  );
};

ContributorInfo.propTypes = {
  contributor: PropTypes.object.isRequired
}
export default ContributorInfo;
