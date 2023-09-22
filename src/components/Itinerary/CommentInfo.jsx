// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from 'prop-types'

const CommentInfo = ({ commentator }) => {
  const dimensions = "w-[50px] h-[50px]";

  const photo = commentator.photo.length > 0 ? commentator.photo : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png';
  
  return (
    <ul className="flex flex-col justify-center self-center gap-2 p-4">
      <li className="flex justify-center">
        <img
          className={"rounded-full gap-2 " + dimensions}
          src={ photo }
          alt={"commentator Photo"}
        />
      </li>
      <li className="flex justify-center self-center text-center text-sm">{ commentator.name }</li>
    </ul>
  );
};

CommentInfo.propTypes = {
  commentator: PropTypes.object.isRequired
}
export default CommentInfo;
