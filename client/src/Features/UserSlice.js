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
export const login = createAsyncThunk("users/login", async (userData) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: userData.email,

      password: userData.password,
    });

    const user = response.data.user;

    console.log(response);

    return user;
  } catch (error) {
    //handle the error

    const errorMessage = "Invalid credentials";

    alert(errorMessage);

    throw new Error(errorMessage);
  }
});

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
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload; //assign the payload which is the user object return from the server after authentication

        state.isLoading = false;

        state.isSuccess = true;
      })

      .addCase(login.rejected, (state) => {
        state.isLoading = false;

        state.isError = true;
      });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
