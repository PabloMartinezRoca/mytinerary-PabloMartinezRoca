// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "../NavBar/NavBar";
import mytineraryLogo from "../../assets/logos/mytinerary-logo.svg";
  
const Header = ({ navBarLinks }) => {
  return (
    <header className="header w-full bg-white bg-opacity-90 flex h-[10vh] justify-between px-[5%] align-middle shadow-lg shadow-black/30">
      <h1 className="hidden">MYTINERARY</h1>
      <div className="flex grow"><img src={mytineraryLogo} alt="MYTINERARY" /></div>
      
      <NavBar section='header' navBarLinks={navBarLinks} /> {/* De esta manera se pasa la colección de datos al componente hijo */}
    </header>
  );
};

export default Header;
