import React from "react";

const Checkbox = ({ value, onValuechange }) => {
  return (
    <div className="flex gap-5 items-center w-fit m-auto mt-5">
      <div className="relative">
        <input
          type={"checkbox"}
          value={value}
          className="w-6 h-6 border-2 z-20 relative opacity-0 cursor-pointer"
          onChange={() => onValuechange(!value)}
        />
        <div
          className={`flex justify-center items-center cursor-pointer w-6 h-6 absolute ${
            value
              ? "bg-green-500 border-none"
              : "bg-white border border-stone-500"
          } top-0 z-10`}
        >
          {value && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-check text-white"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Checkbox;
