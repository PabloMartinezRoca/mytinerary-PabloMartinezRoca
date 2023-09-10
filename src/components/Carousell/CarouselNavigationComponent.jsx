// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { showPage } from "../../redux/actions/carrouselActions";

const CarouselNavigationComponent = ({ page, activePage /*, fn, index */ }) => {
  
  const dispatch = useDispatch()
  
  if ( activePage ) {
    return (
      <div onClick={ () => dispatch(showPage(page)) }> {/* fn(index) */} 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#b43abe"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div onClick={ () => dispatch(showPage(page)) }> {/* fn(index) */} 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#3c88ae"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </div>
    );
  }
};

CarouselNavigationComponent.propTypes = {
  page: PropTypes.number,
  activePage: PropTypes.bool
}

export default CarouselNavigationComponent;
