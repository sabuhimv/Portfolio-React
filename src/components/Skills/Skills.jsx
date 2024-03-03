import React from "react";
import Skill from "./Skill";
import front from "../../assets/images/skills/front.png";
import back from "../../assets/images/skills/back.png";

const Skills = () => {
  return (
    <div className="my-container lg:px-16">
      <div className="skills-title">
        <p className="text-dark font-bold text-3xl pb-3 lg:text-center md:text-2xl">My Expertise</p>
      </div>
      <div className="skills-body flex items-center justify-between pt-10 lg:flex-col lg:pt-5">
        <Skill image={front} title="Front-End" body={"I believe in the power of user-centric design, crafting interfaces that seamlessly blend aesthetics with intuitive navigation. Through a meticulous understanding of user behavior, I design engaging and accessible experiences that leave a lasting impression."}/>
        <Skill image={back} title="Back-End" body="At the heart of my skill set lies a deep understanding of core Java principles. From object-oriented programming to multithreading, I leverage the full power of Java to build reliable and efficient applications."/>
      </div>
    </div>
  );
};

export default Skills;
