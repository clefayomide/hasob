import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default MobileMenu;
