// eslint-disable-next-line no-unused-vars
import React from 'react'
import CarouselSlider from './CarouselSlider'

const CarouselViewport = ({ viewPortPagesDestinations }) => {
  
  return (
    <div className='flex w-[70%] flex-wrap justify-center'>
      {
        viewPortPagesDestinations.map((destination, indexMap) => {
          return (
            <CarouselSlider key={indexMap} destination={destination} />
          )
        })
      }
    </div>
  )
}

export default CarouselViewport