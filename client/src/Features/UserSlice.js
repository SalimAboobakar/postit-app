import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
