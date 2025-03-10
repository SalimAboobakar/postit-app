import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";

const initialState = { value: UsersData };
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload); //add the payload to the state
    },
    deleteUser: (state, action) => {},
    updateUser: (state, action) => {},
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
