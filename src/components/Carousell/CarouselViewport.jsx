// eslint-disable-next-line no-unused-vars
import React from 'react'
import CarouselSlider from './CarouselSlider'

const CarouselViewport = ({ viewportDestinations }) => {
  
  return (
    <div className='flex w-[70%] flex-wrap justify-center'>
      {
        viewportDestinations.map((destination, indexMap) => {
          return (
            <CarouselSlider key={indexMap} destination={destination} />
          )
        })
      }
    </div>
  )
}

export default CarouselViewport