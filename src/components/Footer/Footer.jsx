// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "../NavBar/NavBar";

const Footer = ({ navBarLinks }) => {
  return (
    <>
      <div className="footer w-full flex h-[50px]"></div>
      <footer className="footer w-full bg-black bg-opacity-70 fixed left-0 bottom-0 h-[50px] z-[999]">
        <div className="footer w-full flex p-4 justify-between align-middle ">
          <span className="text-white font-display max-w-sm leading-tight">
            &copy; {new Date().getFullYear()} Pablo Mart&iacute;nez Roca
          </span>
          <NavBar section="footer" navBarLinks={navBarLinks} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
