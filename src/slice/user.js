import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default user.reducer;
