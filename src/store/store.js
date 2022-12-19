import { configureStore } from "@reduxjs/toolkit";
import user from "../slice/user";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: user,
  },
  middleware: [thunk],
});
