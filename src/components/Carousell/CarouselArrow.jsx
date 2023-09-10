// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  showNextPageFrom,
  showPrevPageFrom,
} from "../../redux/actions/carrouselActions";

const CarouselArrow = ({ orientation /* fn */ }) => {
  const activePage = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.activePage
  );
  const totalPages = useSelector(
    (store) => store.popularMytinerariesCarrouselReducers.totalPages
  );

  const dispatch = useDispatch();

  let imgInfo;

  if (orientation == "left-arrow") {
    imgInfo =
      "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z";
  } else if (orientation == "right-arrow") {
    imgInfo =
      "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z";
  }

  return (
    <div className="{orientation} flex self-center ">
      <button onClick={() =>
            dispatch(
              orientation == "left-arrow"
                ? showPrevPageFrom(activePage, totalPages)
                : showNextPageFrom(activePage, totalPages)
            )
          }
          /* onClick={fn} // método para pasar la función si no se usa Redux */ >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 {orientation } hover:cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={imgInfo} />
        </svg>
      </button>
    </div>
  );
};

CarouselArrow.propTypes = {
  orientation: PropTypes.string.isRequired,
  fn: PropTypes.func,
};

export default CarouselArrow;
