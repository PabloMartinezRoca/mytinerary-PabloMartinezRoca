// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import mytineraryLogo from "../../assets/logos/mytinerary-logo.svg";
import Clock from "../Clock/Clock";
  
const Header = ({ navBarLinks }) => {
  
  const [show, setShow] = useState(true)

  return (
    <header className="header w-full bg-white bg-opacity-90 flex h-[10vh] justify-between px-[5%] align-middle shadow-lg shadow-black/30">
      <h1 className="hidden">MYTINERARY</h1>
      <div className="flex grow"><img src={mytineraryLogo} alt="MYTINERARY" /></div>
      
      <span className="bg-slate-600 text-white px-2 py-1 rounded-lg hover:cursor-pointer flex align-middle h-100 self-center mx-4" onClick={() => {setShow((prevState) => !prevState)}}>{ !show ? 'SHOW CLOCK' : 'HIDE CLOCK' }</span> 

      { show && <Clock /> } {/* renderizado condicional (en este caso, con ternario simple) */}
      
      <NavBar section='header' navBarLinks={navBarLinks} /> {/* De esta manera se pasa la colección de datos al componente hijo */}
    </header>
  );
};

export default Header;
