// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import mytineraryLogo from "../../assets/logos/mytinerary-logo.svg";
import { PropTypes } from 'prop-types'
import Clock from "../Clock/Clock";

const Header = ({ navBarLinks }) => {

  const [show, setShow] = useState(true);

  return (
    <>
    <header className="header w-full bg-white bg-opacity-90 fixed top-0 left-0 h-[60px] justify-between px-[5%] align-middle shadow-lg shadow-black/30 z-[1000]">
      <div className="header w-full flex h-[60px] justify-between align-middle">
        <h1 className="hidden">MYTINERARY</h1>
        <div className="flex grow">
          <img src={mytineraryLogo} alt="MYTINERARY" />
        </div>
        <span
          className="bg-slate-600 text-white px-2 py-1 rounded-lg hover:cursor-pointer flex align-middle h-100 self-center mx-4"
          onClick={() => {
            setShow((prevState) => !prevState);
          }}
        >
          {!show ? "SHOW CLOCK" : "HIDE CLOCK"}
        </span>
        {show && <Clock />}{" "}
        {/* renderizado condicional (en este caso, con ternario simple) */}
        <NavBar section="header" navBarLinks={navBarLinks} />{" "}
        {/* De esta manera se pasa la colección de datos al componente hijo */}

      </div>
    </header>
    <div className="h-[60px]"></div>
    </>
  );
};

Header.propTypes = {
  navBarLinks: PropTypes.array
}
export default Header;
