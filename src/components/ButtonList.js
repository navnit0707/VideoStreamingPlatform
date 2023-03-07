import React from "react";
import Button from "./Button";
import { useState } from "react";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Comedy",
  "Science",
  "Math",
  "Trailer",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Comedy",
  "Science",
  "Math",
];
function ButtonList() {
  const [leftArrow, setLeftArrow] = useState(true);
  const handleArrowClick = () => {
    setLeftArrow(false);
  };
  return (
    <div className="grid grid-flow-col">
      <div className="col-flow-1">
        {leftArrow ? null : (
          <img
            className="h-7 mt-4"
            alt="scroll-right-to-left"
            src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
          />
        )}
      </div>

      <div className="col-flow-10 overflow-hidden rounded-full">
        <div className="flex  ">
          {list.map((value, index) => {
            return <Button key={index} name={value} />;
          })}
        </div>
      </div>
      <div className="col-flow-1">
        <img
          onClick={() => handleArrowClick()}
          className="h-7 mt-4"
          alt="scroll-right-to-left"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
}

export default ButtonList;
