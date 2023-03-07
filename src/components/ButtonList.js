import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "news",
];
function ButtonList() {
  return (
    <div className="flex">
      {list.map((value) => {
        return <Button name={value} />;
      })}
    </div>
  );
}

export default ButtonList;
