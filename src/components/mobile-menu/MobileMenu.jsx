import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import useStore from "../../hooks/useStore";
import { useLocation, Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Hand from "../hand/Hand";
import Button from "../button/Button";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useStore();
  const { isAuth } = user;
  const location = useLocation();

  return (
    <nav className="block lg:hidden w-full">
      <div className="relative w-full">
        <div className="flex items-center justify-between">
          <div className="relative z-30">
            <Logo />
          </div>
          <div
            className="relative z-30 cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {openMenu && (
          <div className="w-full h-screen fixed z-20 bg-green-50 top-0 left-0">
            <div className="flex gap-10 flex-col flex-wrap justify-center w-full mt-20 p-5">
              <ul className="flex gap-10 justify-center text-[#8A8584] font-normal">
                <Link
                  to={"/bond-offer"}
                  onClick={() => setOpenMenu((prev) => !prev)}
                >
                  <li
                    className={`cursor-pointer ${
                      location.pathname === "/bond-offer"
                        ? "font-bold text-black"
                        : ""
                    }`}
                  >
                    Bond Offer
                  </li>
                </Link>
                <Link onClick={() => setOpenMenu((prev) => !prev)}>
                  <li className="cursor-pointer">{`${
                    isAuth ? "Portfolio" : "DMO"
                  }`}</li>
                </Link>
                <Link onClick={() => setOpenMenu((prev) => !prev)}>
                  <li className="cursor-pointer">{`${
                    isAuth ? "Notification" : "Features"
                  }`}</li>
                </Link>
              </ul>
              <div className="flex justify-center items-center gap-5">
                {!isAuth ? (
                  <div className="flex gap-5">
                    <Link
                      to="/login"
                      onClick={() => setOpenMenu((prev) => !prev)}
                    >
                      <div
                        className={`${
                          location.pathname === "/login" ? "hidden" : "block"
                        }`}
                      >
                        <Button
                          text={"Login"}
                          type="secondary"
                          rounded={true}
                          width="w-28"
                        />
                      </div>
                    </Link>

                    <Link
                      to="/sign-up"
                      onClick={() => setOpenMenu((prev) => !prev)}
                    >
                      <div
                        className={`${
                          location.pathname === "/sign-up" ? "hidden" : "block"
                        }`}
                      >
                        <Button
                          text={"Sign Up"}
                          type="primary"
                          rounded={true}
                          width="w-28"
                        />
                      </div>
                    </Link>
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                )}
                <Link to={"/cart"} onClick={() => setOpenMenu((prev) => !prev)}>
                  <Cart />
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0">
              <Hand />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileMenu;
