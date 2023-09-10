// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { PropTypes } from 'prop-types'
import CarouselNavigationComponent from './CarouselNavigationComponent'
import { useSelector } from 'react-redux';

const CarouselNavigation = (/* { viewPortPagesDestinations, index , fn } */) => {

  let page
  const activePage = useSelector(store => store.popularMytinerariesCarrouselReducers.activePage);    
  const totalPages = useSelector(store => store.popularMytinerariesCarrouselReducers.totalPages);    

  if (totalPages > 0) {
    return (
      <div className='flex'>
        {(() => {
          const elements = []
          for (page = 1; page <= totalPages; page++) {
            let isActivePage = page === activePage ? true : false
            
            // console.log(page)
            
            elements.push(<CarouselNavigationComponent key={page} activePage={isActivePage} page={page} />)
          }
          return elements;
        })()}
      </div>
    )
  }
  
  /* Antes de Redux:
  if (viewPortPagesDestinations.length > 0) {
    return (
      <div className='flex'>
        {
          viewPortPagesDestinations.map((destination, indexMap) => {
            let activo = indexMap === index ? true : false

            return (
              <CarouselNavigationComponent key={indexMap} activo={activo} index={indexMap} fn={fn} />
            )
          })
        }
      </div>
    )
  } 
  */
}

/* CarouselNavigation.propTypes = {
  viewPortPagesDestinations: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  fn: PropTypes.func.isRequired
} */
  
export default CarouselNavigation