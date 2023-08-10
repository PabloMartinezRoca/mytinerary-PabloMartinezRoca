// eslint-disable-next-line no-unused-vars
import React from "react";

const CarouselArrow = ({ orientation, fn }) => {
  
  let imgInfo

  if (orientation == "left-arrow") {
    imgInfo = "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
  } else if (orientation == "right-arrow") {
    imgInfo = "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
  }

  return (
    <div className='{orientation} flex self-center '>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 {orientation } hover:cursor-pointer"
        onClick={fn}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={imgInfo}
        />
      </svg>
    </div>
  );
  
};

export default CarouselArrow;
