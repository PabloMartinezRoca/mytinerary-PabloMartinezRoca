// eslint-disable-next-line no-unused-vars
import React from 'react'

const CarouselSlider = ({ destination }) => {

  const pathToImg = './images/bgCities/'

  return (
    <div className='flex w-[50%] justify-center'>
      <div className='relative rounded-2xl m-2 shadow-sm shadow-slate-900'>
        <img className='rounded-2xl w-[300px] h-[200px]' src={pathToImg + destination.imgUrl} alt={destination.city + ", " + destination.country} />
        
        <div className='absolute top-[1em] left-0 p-1 ps-3 bg-white opacity-70 w-full h-15 text-emerald-800'>destination :: <strong>{destination.city}</strong></div>  
        <div className='absolute bottom-[1em] left-0 p-1 pe-3 bg-white opacity-70 w-full h-15 text-emerald-800 flex justify-end'>Travel to {destination.country}</div>
      </div>
    </div>
  )
}

export default CarouselSlider