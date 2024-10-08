import React, { useEffect, useRef } from "react";
import about from "../assets/images/about.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div className="my-container flex flex-col lg:px-16 lg:pt-4 sm:px-9">
      <p className="text-dark font-bold text-5xl pb-4 lg:text-center">
        Passion Fuels Purpose!
      </p>

      <div className="about-body flex items-center justify-between flex-wrap pt-8">
        <div className="about-left w-1/3 pr-12 lg:w-1/2 md:w-full md:pb-5 md:pr-0">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
            Biography
          </h2>

          <p className="my-4 font-medium">
            Hi, I'm <b>Sabuhi Mammadov</b>, a web developer with a passion for
            creating beautiful, functional, and user-centered digital
            experiences. I am always looking for new and innovative ways to
            bring my clients' visions to life.
          </p>

          <p className="my-4 font-medium">
            I am a skilled Front-End Developer with extensive experience in
            creating dynamic and responsive web applications. With a solid
            foundation in front-end technologies, I have had the privilege of
            working with prominent organizations in Azerbaijan, including Buta
            Group Azerbaijan and PASHA Bank OJSC.
          </p>

          <p className="my-4 font-medium">
            My career is marked by a commitment to excellence and a passion for
            continuous learning. My ability to adapt to new challenges and
            technologies has made me a valuable asset to every team I have been
            a part of. In addition to my technical skills, I have also served as
            a mentor, guiding and supporting new developers in their
            professional growth.
          </p>
        </div>

        <div className="w-1/3 relative h-max rounded-2xl border-2 border-solid  border-dark bg-light p-8 lg:w-1/2 md:w-[90%] md:text-center md:mb-5">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
          <img src={about} alt="" className="w-full h-auto rounded-2xl" />
        </div>

        <div className="flex flex-col items-end justify-between lg:w-full lg:items-center lg:flex-row lg:pt-8">
          <div className="flex flex-col items-end justify-center md:items-start">
            <span className="inline-block text-7xl font-bold md:text-4xl">
              <AnimatedNumbers value={6} /> +
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 md:text-base">
              Projects
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center md:items-start">
            <span className="inline-block text-7xl font-bold md:text-4xl">
              <AnimatedNumbers value={1} /> year
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 md:text-base">
              Experience
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
