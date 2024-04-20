import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature-store/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});