import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {todoSlice} from "./reducers/todo.slice";
import {selectedTodoSlice} from "./reducers/selectedTodo.slice";
import {counterSlice} from "./reducers/counterSlice.slice";

const reducer = combineReducers({
    todo: todoSlice.reducer,
    selectedTodo: selectedTodoSlice.reducer,
    counter: counterSlice.reducer
})

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
    reducer,middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store