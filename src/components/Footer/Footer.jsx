// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../NavBar/NavBar'

const Footer = ({ navBarLinks }) => {
  return (
    <footer className='footer w-full bg-black bg-opacity-70 flex h-[6vh] p-4 justify-between align-middle '>
      <span className='text-white font-display max-w-sm leading-tight'>&copy; {new Date().getFullYear()} Pablo Mart&iacute;nez Roca</span>
      <NavBar section='footer' navBarLinks={navBarLinks} />
    </footer>
  )
}

export default Footer