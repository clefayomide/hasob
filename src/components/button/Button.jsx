import React from "react";

const Button = ({ type, text, rounded, classNames, icon, width }) => {
  const btnTypes = ["primary", "secondary"];
  const style = {
    primary: () => "bg-black border-none text-white",

    secondary: () =>
      "bg-very_light_green border-2 border-[#9AF493] text-[#9AF493]",
  };
  return (
    <button
      className={`flex gap-2 justify-center items-center ${width} h-12 ${
        btnTypes.includes(type) ? style[type]() : classNames
      } ${rounded ? "rounded-sm" : ""}`}
    >
      <div>{text}</div>
      {icon && icon}
    </button>
  );
};

export default Button;
