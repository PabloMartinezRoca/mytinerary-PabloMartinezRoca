// eslint-disable-next-line no-unused-vars
import React from 'react'
import CarouselNavigationComponent from './CarouselNavigationComponent'

const CarouselNavigation = ({ viewPortPagesDestinations, index, fn }) => {
  
  console.log(viewPortPagesDestinations)
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

export default CarouselNavigation