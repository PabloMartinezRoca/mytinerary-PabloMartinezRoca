// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link as Anchor } from 'react-router-dom'

const CarouselSlider = ({ cityInfo }) => {

  const { _id: id, city, country, imgUrl } = cityInfo // desestructura el objeto
  const pathToImg = './images/bgCities/'

  return (
    <div className='flex w-[50%] justify-center'>
      <Anchor
        to={"/travelTo/" + id}
        className="flex self-center justify-center flex-col"
      >
      <div className='relative rounded-2xl m-2 shadow-sm shadow-slate-900'>
        <img className='rounded-2xl w-[300px] h-[170px]' src={pathToImg + imgUrl} alt={ city + ", " + country } />
        
        <div className='absolute top-[1em] left-0 p-1 ps-3 bg-white opacity-70 w-full h-15 text-emerald-800'>destination :: <strong>{ city }</strong></div>  
        <div className='absolute bottom-[1em] left-0 p-1 pe-3 bg-white opacity-70 w-full h-15 text-emerald-800 flex justify-end'>Click travel to { country }</div>
      </div>
      </Anchor>
    </div>
  )
}

export default CarouselSlider