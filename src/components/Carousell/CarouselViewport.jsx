// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { PropTypes } from 'prop-types'
import CarouselSlider from './CarouselSlider'
import { useSelector } from 'react-redux';

const CarouselViewport = (/* { viewPortPagesDestinations } */) => {

  const cities = useSelector(store => store.popularMytinerariesCarrouselReducers.cities); 
  const activePage = useSelector(store => store.popularMytinerariesCarrouselReducers.activePage);   
  const citiesPerPage = useSelector(store => store.popularMytinerariesCarrouselReducers.citiesPerPage);    
  const totalPages = useSelector(store => store.popularMytinerariesCarrouselReducers.totalPages);    

  const activeCities = cities.slice( (activePage -1) * citiesPerPage, (activePage*citiesPerPage) );

  if (totalPages > 0) {
    return (
      <div className='flex w-[70%] flex-wrap justify-center'>
        {
          activeCities.map((cityInfo, indexMap) => {
            return (
              <CarouselSlider key={indexMap} cityInfo={cityInfo} />
              /* <CarouselSlider key={indexMap} cityInfo={cityInfo} /> */
            )
          })
        }
      </div>
    )
  } 

  /* Antes de Redux:
  if (viewPortPagesDestinations.length > 0) {
    return (
      <div className='flex w-[70%] flex-wrap justify-center'>
        {
          viewPortPagesDestinations.map((cityInfo, indexMap) => {
            return (
              <CarouselSlider key={indexMap} cityInfo={cityInfo} />
            )
          })
        }
      </div>
    )
  } 
  */
}

/* CarouselViewport.propTypes = {
  viewPortPagesDestinations: PropTypes.array.isRequired
} */

export default CarouselViewport