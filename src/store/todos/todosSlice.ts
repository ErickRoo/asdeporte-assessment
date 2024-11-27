import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SimpleTodo {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface TodosList {
  todos: SimpleTodo[];
}

const initialState: TodosList = {
  todos: [],
};

const todosSlices = createSlice({
  name: "todosList",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<SimpleTodo>) {
      state.todos.push(action.payload);
    },
    updateTodo(
      state,
      action: PayloadAction<{ id: string; updates: Partial<SimpleTodo> }>,
    ) {
      const { id, updates } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updates }; // Actualiza el objeto
      }
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlices.actions;

export default todosSlices.reducer;
