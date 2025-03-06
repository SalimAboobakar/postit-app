import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";

const initialState = { value: UsersData };
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
