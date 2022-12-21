import Button from "../button/Button";
import Cart from "../cart/Cart";
import useStore from "../../hooks/useStore";
import { Link, useLocation } from "react-router-dom";

const DesktopMenu = () => {
  const { user } = useStore();
  const { isAuth } = user;
  const location = useLocation();
  return (
    <div className="hidden lg:block">
      <div className="flex gap-10 items-center w-fit">
        <ul className="flex gap-10 text-[#8A8584] font-normal">
          <Link to={"/bond-offer"}>
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
          <li className="cursor-pointer">{`${
            isAuth ? "Portfolio" : "DMO"
          }`}</li>
          <li className="cursor-pointer">{`${
            isAuth ? "Notification" : "Features"
          }`}</li>
        </ul>
        {!isAuth ? (
          <div className="flex gap-5">
            <Link to="/login">
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

            <Link to="/sign-up">
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
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        )}
        <Cart />
      </div>
    </div>
  );
};

export default DesktopMenu;
