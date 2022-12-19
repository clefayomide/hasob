import React from "react";
import Header from "../../components/header/Header";

const Member = ({ children }) => {
  return (
    <div className="pr-5 pl-5 pb-5 pt-3 font-Robotooverflow-scroll overflow-hidden h-screen w-full bg-very_light_green">
      <Header />
      {children}
    </div>
  );
};

export default Member;
