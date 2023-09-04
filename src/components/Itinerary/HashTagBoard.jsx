// eslint-disable-next-line no-unused-vars
import React from "react";

const HashTagBoard = ({ hashTagList }) => {

  hashTagList = Array.from( hashTagList,
    (hashTag, index) => {
      return (
        <li key={index}>#{hashTag}</li>
      );
    }
  );

  return (
    <div className="flex gap-3 self-center">
      <ul className="flex gap-4 text-sm">{hashTagList.map((item) => item)}</ul>
    </div>
  );
};

export default HashTagBoard;
