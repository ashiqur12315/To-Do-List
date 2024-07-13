import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice"

// Create and configure Redux Store with todo Reducer
export const store = configureStore({
    reducer: {
        todoR : todoReducer,
    }
});

// Exporting types for the Redux store dispatch and state.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;