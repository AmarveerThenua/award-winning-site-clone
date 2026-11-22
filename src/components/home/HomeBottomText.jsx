import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-between items-center gap-3">
      <Link
        to={"/projects"}
        className=" text-[5vw] bg-transparent text-white border-3 leading-[6vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full pt-4 px-6 uppercase "
      >
        Projects
      </Link>
      <Link
        to={"/agence"}
        className=" text-[5vw] bg-transparent text-white border-3 leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full pt-4 px-6 uppercase  "
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
