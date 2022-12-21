import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  required,
  value,
  onValuechange,
}) => {
  return (
    <React.Fragment>
      <label className="w-full mt-5 mb-2 md:w-[450px] m-auto">
        {label}
        {required && (
          <FontAwesomeIcon
            icon={faAsterisk}
            className="text-red-500 text-xs mb-1"
          />
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onValuechange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full md:w-[450px] placeholder:text-gray-400 pl-3 bg-very_light_green ease-out focus:border-light_green m-auto h-12 rounded outline-none border border-gray-400"
      />
    </React.Fragment>
  );
};

export default Input;
