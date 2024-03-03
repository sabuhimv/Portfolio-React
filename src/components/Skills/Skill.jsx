import React from "react";

const Skill = ({image,title, body}) => {
  return (
    <div className="bg-[#f5fcff] p-8 drop-shadow ease-in flex flex-col mx-3 lg:mb-7 lg:mx-0">
      <div className="skill-img w-10">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="skill-body">
        <h3 className="text-2xl text-dark font-bold py-3 md:text-xl">{title}</h3>
        <p className="text-lg text-dark font-normal md:text-sm">{body}</p>
      </div>
    </div>
  );
};

export default Skill;
