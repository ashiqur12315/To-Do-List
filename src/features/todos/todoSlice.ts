import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Structure of a Task/Todo item.
interface Todo {
    id: number;
    task: string;
    isCompleted: boolean;
};

// Initial Todo state structure for todo slice.
interface TodoState {
    todo: Todo[];
};

// Initial state for todo Slice.
const initialState: TodoState = {
    todo: [],
};

// Creating todo slice using createSlice from Redux Toolkit.
const todoSlice = createSlice({
    name: "todo", // Slice name
    initialState, // Initial slice state
    reducers: {
        // addTask : Adds a new todo task to the sate
        // state   : Current state
        // action  : action payload contains the new todo/task text
        addTask: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                task: action.payload,
                isCompleted: false,
            };
            state.todo.push(newTodo);
        },

        // toggleTask : Toggles the completed todo/task status in the state
        // action     : action payload Contains the ID of the todo/task to toggle
        toggleTask: (state, action: PayloadAction<number>) => {
            const todo = state.todo.find(t => t.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },

        // deleteTask : Deletes the task/todo from the state
        // action     : action payload Contains the ID of the todo/task to delete
        deleteTask: (state, action: PayloadAction<Number>) => {
            state.todo = state.todo.filter(t => t.id !== action.payload)
        },

        // updateTask : Updates the existing task/todo from the state
        // action     : action payload Contains the ID of the todo/task to update
        updateTask: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const todo = state.todo.find(t => t.id === action.payload.id);
            if (todo) {
                todo.task = action.payload.text;
            }
        },
    }

});

// Exporting the actions from createSlice
export const { addTask, toggleTask, deleteTask, updateTask } = todoSlice.actions;

// Exporting the Reducer to be used in redux store
export default todoSlice.reducer;