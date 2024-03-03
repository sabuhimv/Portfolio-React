import React from "react";
import { CircularText } from "./Icons";
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div
      className="fixed right-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-[21px] md:bottom-auto md:absolute z-20"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow"}
        />
        <Link 
          to={"mailto:sebuhimv@gmail.com"}
          className="flex items-center justify-center
            absolute bg-dark text-light shadow-md hover:border-2 hover:border-dark
            w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-transparent md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hire;
