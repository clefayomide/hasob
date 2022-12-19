import React from "react";

export const Heading = ({ size, text, classNames }) => {
  const sizes = ["sm", "md", "xl"];
  const fontSize = {
    sm: () => "text-2xl",
    md: () => "text-3xl",
    lg: () => "text-4xl",
    xl: () => "text-5xl",
  };
  return (
    <h4
      className={`text-stone-700 ${
        sizes.includes(size) ? fontSize[size]() : classNames
      }`}
    >
      {text}
    </h4>
  );
};

export const Paragraph = ({ size, text, classNames }) => {
  const sizes = ["sm", "md", "xl"];
  const fontSize = {
    sm: () => "text-sm",
    md: () => "text-base",
    lg: () => "text-2xl",
    xl: () => "text-3xl",
  };
  return (
    <p
      className={`text-stone-600 ${
        sizes.includes(size) ? fontSize[size]() : classNames
      }`}
    >
      {text}
    </p>
  );
};
