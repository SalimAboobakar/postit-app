import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { UsersData } from "../Exampledata";
import axios from "axios";
const initialState = {
  user: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (usersData) => {
    try {
      const response = await axios.post("http://localhost:3001/registerUser", {
        name: usersData.name,
        email: usersData.email,
        password: usersData.password,
      });
      console.log(response);
      const user = response.data.user; //retrieve the response from the server
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload); //add the payload to the state
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.email === action.payload.email) {
          user.name = action.payload.name;
          user.password = action.payload.password;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
