// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as Anchor } from "react-router-dom";

const HttpStatus404Component = () => {
  return (
    <div className="WelcomeSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 h-[60vh] w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center relative">
          <h2 className="welcome-section text-8xl drop-shadow mb-10 text-center">
            Lost ?
          </h2>
          <h3 className="welcome-section text-lg drop-shadow text-center">
            We apologize, but an error appears to have landed you on a desert
            page.
          </h3>
          <Anchor to="/index" className="flex self-center justify-center">
            <button className="text-white bg-[#669966] hover:bg-[#8fbc8f] p-2 mt-20 rounded-lg">
              <span className="flex">Return to the homepage</span>
            </button>
          </Anchor>
          <p className="flex text-white mt-5 justify-start absolute bottom-1">
            Thanks to&nbsp;
            <b>
              <a
                href="https://www.vecteezy.com/free-photos"
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="underline"
              >
                {" "}
                Free Stock photos by Vecteezy
              </a>
            </b>
            &nbsp;for this great photo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HttpStatus404Component;
