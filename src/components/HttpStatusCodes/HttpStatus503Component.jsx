// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as Anchor } from "react-router-dom";

const HttpStatus503Component = () => {
  return (
    <div className="WelcomeSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 h-[60vh] w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center relative">
          <h2 className="welcome-section text-8xl drop-shadow mb-10 text-center">
          Maintenance Check Flight
          </h2>
          <h3 className="welcome-section text-lg drop-shadow text-center">
            We apologize, but our services are experiencing some technical issues we are trying to fix as fast as we can!
          </h3>
          <Anchor to="/index" className="flex self-center justify-center">
            <button className="text-white bg-[#669966] hover:bg-[#8fbc8f] p-2 mt-20 rounded-lg">
              <span className="flex">We are wetting Aircraft back in the Air soon! check in a minute... or two.</span>
            </button>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default HttpStatus503Component;
