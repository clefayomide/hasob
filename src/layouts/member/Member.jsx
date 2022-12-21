import React from "react";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";

const Member = ({ children }) => {
  const location = useLocation();
  const scrollable_routes = ["/sign-up", "/bond-offer"];
  return (
    <div
      className={`pr-5 pl-5 pb-5 pt-3 relative font-Roboto ${
        scrollable_routes.includes(location.pathname)
          ? "overflow-auto"
          : "overflow-hidden"
      } w-full bg-very_light_green h-screen`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Member;
