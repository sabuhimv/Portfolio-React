import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link 
        to={"/"}
        className="bg-dark text-light w-16 h-16 flex items-center justify-center rounded-full 
      font-bold text-2xl border border-solid border-transparent "
      >
        SM
      </Link>
    </div>
  );
};

export default Logo;
