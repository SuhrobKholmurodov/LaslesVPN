import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#113419] flex-col h-[100vh] flex items-center justify-center">
      <p className="text-[white] text-[50px] mb-[20px] tracking-[10px]">
        You went wrong
      </p>
      <img
        width={"500px"}
        height={"500px"}
        className="rounded-[10px]"
        src="https://th.bing.com/th/id/R.50eb4dd852a5af17ad07cd75aed36cec?rik=sUfHKLQuWwrjyg&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
  );
};

export default NotFound;
