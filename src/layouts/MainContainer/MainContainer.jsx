// eslint-disable-next-line no-unused-vars
import React from 'react'
import WelcomeSection from '../Sections/WelcomeSection/WelcomeSection'
import CarouselSection from '../Sections/CarouselSection/CarouselSection'

const MainContainer = ({ destinations }) => {

  return (
    <div className='mainContainer w-full flex flex-col justify-center self-center'>
        <WelcomeSection />
        <CarouselSection destinations={destinations} />
    </div>
  )
}

export default MainContainer