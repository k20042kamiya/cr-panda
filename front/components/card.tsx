import type { NextPage } from "next";
import React, { useState } from "react";

const style = {
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  boxShadow: "0px 8px 32px 0 rgba(31, 38, 135, 0.5)",
  backdropFilter: "blur(5.5px)",
  boder: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const Card = () => {
  const [color, setColor] = useState("none");

  const changeColor = () => {
    console.log("click");
    if (color === "none") {
      setColor("yellow");
    } else {
      setColor("none");
    }
  };

  return (
    <>
      <div className="m-10 w-96 h-48 rounded-lg " style={style}>
        <div className="relative text-black bg-gray-300 rounded-t-lg">
          <button className="block ml-2 text-2xl hover:underline">
            朝ごはん何食べた？
          </button>
          <div className="absolute top-0 right-1 mt-1">
            <button onClick={changeColor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={color}
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-2 ml-2 text-left text-original-dayTime">
          2021/11/09(火) 13:05:22.77
        </div>
        <div className=" ml-2 text-left text-black">朝ごはん何食べた?</div>
        <div className="mt-20">
          <div className="ml-2">レス数 :10 勢い :10</div>
        </div>
      </div>
    </>
  );
};

export default Card;
