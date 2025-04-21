import { configureStore } from "@reduxjs/toolkit";
import usersReduce from "../Features/UserSlice";
import postReducer from "../Features/PostSlice";
export const store = configureStore({
  reducer: {
    users: usersReduce,
    posts: postReducer,
  },
});
