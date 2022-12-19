import Guest from "../layouts/guest/Guest";
import Member from "../layouts/member/Member";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

export const routes = [
  {
    title: "Home",
    path: "/",
    layout: Member,
    component: Home,
    protected: false,
  },

  {
    title: "Sign Up",
    path: "/sign-up",
    layout: Member,
    component: SignUp,
    protected: false,
  },

  {
    title: "Login",
    path: "/login",
    layout: Member,
    component: Login,
    protected: false,
  },

  {
    title: "Cart",
    path: "/cart",
    layout: Member,
    component: Cart,
    protected: true,
  },
];
