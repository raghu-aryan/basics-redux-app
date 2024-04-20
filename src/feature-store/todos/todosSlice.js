import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    todoAdded: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload
      })
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload
      )
    }
  }
})

export const { todoAdded, todoDeleted } = todosSlice.actions;
export default todosSlice.reducer;