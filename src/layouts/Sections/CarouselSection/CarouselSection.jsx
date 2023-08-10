// eslint-disable-next-line no-unused-vars
import React from 'react'
import CarouselHorizontal from '../../../components/Carousell/CarouselHorizontal'

const CarouselSection = ({ destinations }) => {
  return (
    <div className='CarouselSection w-full py-8 bg-gray-50'>
        <h2 className='carousel-section text-5xl text-center pb-10'>Popular Mytineraries</h2>
        <CarouselHorizontal destinations={destinations} />
    </div>
  )
}

export default CarouselSection