import React from "react";

export const Heading = ({ size, text, classNames }) => {
  const sizes = ["sm", "md", "xl", "lg"];
  const fontSize = {
    sm: () => "text-[20px]",
    md: () => "text-[40px]",
    lg: () => "text-[50px]",
    xl: () => "text-[60px],",
  };
  return (
    <h4
      className={`text-stone-700 ${
        sizes.includes(size) && fontSize[size]()
      } ${classNames}`}
    >
      {text}
    </h4>
  );
};

export const Paragraph = ({ size, text, classNames }) => {
  const sizes = ["sm", "md", "xl", "lg"];
  const fontSize = {
    sm: () => "text-base",
    md: () => "text-md",
    lg: () => "text-lg",
    xl: () => "text-2xl",
  };

  return (
    <p
      className={`text-stone-600 text ${
        sizes.includes(size) && fontSize[size]()
      } ${classNames}
      `}
    >
      {text}
    </p>
  );
};
