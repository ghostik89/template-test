import { createSlice } from "@reduxjs/toolkit";
import { todoSlice } from "./todo.slice";


export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers:{},
    extraReducers:{
        [todoSlice.actions.create.type]: state => state + 1,
        [todoSlice.actions.edit.type]: state => state + 1,
        [todoSlice.actions.remove.type]: state => state + 1
    }
})