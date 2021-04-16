import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const selectedTodoSlice = createSlice({
    name: "selectedTodo",
    initialState: null as number| null,
    reducers: {
        select: (state, { payload }: PayloadAction<{ id: number }>) => payload.id
    }
})

export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;