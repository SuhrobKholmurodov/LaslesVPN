import React from "react";

const Card = ({ photo, name, username, starPhoto, description }) => {
  return (
    <div className="border-[2px] mb-[40px] h-[200px] md:w-[99%] md:h-[230px] w-[400px] p-[25px] rounded-md">
      <div className="flex justify-between">
        <div className="flex items-center gap-[10px]">
          <img
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
            src={photo}
            alt=""
          />
          <div className="flex items-start flex-col">
            <p>{name}</p>
            <p>{username}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>4.5</p>
          <img
            style={{ width: "25px", height: "25px", objectFit: "cover" }}
            src={starPhoto}
            alt=""
          />
        </div>
      </div>
      <div className="text-start pt-[10px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
