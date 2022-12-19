import Button from "../button/Button";
import Cart from "../cart/Cart";
import useStore from "../../hooks/useStore";

const DesktopMenu = () => {
  const { user } = useStore();
  const { isAuth } = user;
  return (
    <div className="hidden lg:block">
      <div className="flex gap-10 items-center w-fit">
        <ul className="flex gap-10 text-stone-700">
          <li className="cursor-pointer">Bond Offer</li>
          <li className="cursor-pointer">{`${
            isAuth ? "Portfolio" : "DMO"
          }`}</li>
          <li className="cursor-pointer">{`${
            isAuth ? "Notification" : "Features"
          }`}</li>
        </ul>
        <div className="flex gap-5">
          <Button text={"Login"} type="secondary" rounded={true} width="w-28" />
          <Button text={"Sign Up"} type="primary" rounded={true} width="w-28" />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default DesktopMenu;
