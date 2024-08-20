import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";

const NotFound = () => {
  return (
    <div className="bg-[#113419] h-[100vh] flex flex-col items-center justify-center text-center">
      <p className="text-[white] text-[80px] mb-[20px] font-bold tracking-[10px]">
        404
      </p>
      <p className="text-[white] text-[30px] mb-[40px]">
        Oops! Page not found.
      </p>
      <Link
        className="flex items-center gap-[10px] bg-[#1f5c2e] text-white py-[10px] px-[20px] rounded-[10px] hover:bg-[#3d7b46] transition-all duration-300 ease-in-out"
        to="/"
      >
        <img height={"25px"} width={"25px"} src={mainLogo} alt="mainLogo" />
        <p className="font-[700]">Go Back to LaslesVPN</p>
      </Link>
    </div>
  );
};

export default NotFound;
