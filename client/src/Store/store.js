import { configureStore } from "@reduxjs/toolkit";
import usersReduce from "../Features/UserSlice";
export const store = configureStore({
  reducer: {
    users: usersReduce,
  },
});
