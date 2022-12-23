import React from "react";
import { Paragraph } from "../typography/Typography";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Paragraph text={"Value"} />
      <div className="w-full lg:w-[97px] xl:w-[180px] h-fit p-3 lg:p-1 items-center border border-light_green flex flex-wrap justify-between">
        <p className="text-base lg:text-xs">300,000,000</p>
        <div className="flex flex-wrap gap-3 lg:gap-3 items-center lg:mt-2 xl:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
          <div>{count}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Counter;
