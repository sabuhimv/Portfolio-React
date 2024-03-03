import React from "react";
import hero from "../assets/images/hero.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import myCv from "../assets/SabuhiMammadovCV.pdf";

const Intro = () => {
  return (
    <div className="my-container flex items-center justify-between lg:flex-col lg:px-16 lg:pt-4">
      <div className="hero-left w-1/2 flex flex-col pr-7 lg:w-full pl-[50px] lg:text-center lg:px-0">
        <p className="text-dark font-bold text-xl pb-3 md:text-lg sm:pb-0 xs:text-sm ">👋 Hey, I'm Sabuhi Mv</p>
        <h2 className="text-dark font-bold capitalize text-4xl pb-3 md:text-3xl  sm:pb-1">
        Turning Vision Into Reality With Code.
        </h2>
        <span className="text-darkblue text-base font-medium sm:text-sm">
          As a front-end enthusiast, I've had the pleasure of working on diverse
          projects that demand creativity and precision. My React proficiency
          has allowed me to craft seamless user interfaces and delightful user
          experiences. Now, I'm expanding my horizons by diving into Java, where
          I aim to deepen my understanding of back-end development and broaden
          my skill set.
        </span>

        <div className="flex items-center self-start mt-6 lg:self-center md:mt-4">
          <a
            href={myCv}
            target="_blank"
            download={true}
            className="flex items-center mr-5 bg-dark text-light p-2.5 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark border border-solid border-transparent 
              hover:border-dark md:text-base">
            Resume <FaArrowUpRightFromSquare className={"text-xs ml-3"} />
          </a>
          <a
            href="mailto:sabuhimv@icloud.com"
            className="text-lg font-medium capitalize text-dark underline md:text-base"  
          >
            Contact
          </a>
        </div>
      </div>

      <div className="hero-right w-[600px] lg:inline-block lg:w-[400px] order-first md:w-[300px]	pb-8">
        <img src={hero} className="w-full" alt="Sabuhi Mammadov" />
      </div>
    </div>
  );
};

export default Intro;
