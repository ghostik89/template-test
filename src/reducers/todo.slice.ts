import {TodoState, ToDoType} from "../types/todo.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const todoInitState: TodoState = {
    todo: [],
    requestStatus: {
        status: "idle",
        error: null
    }
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState: todoInitState,
    reducers:{
        create:{
            reducer: (state, {payload}: PayloadAction<ToDoType>) => {
                state.todo.push(payload)
            },
            prepare: ({ desc, userId }: { desc: string, userId:number }) => ({
                payload: {
                    userId,
                    id: Date.now().valueOf(),
                    title: desc,
                    completed: false
                }
            })
        },
        edit:(state, {payload}:PayloadAction<{id:number; title:string}>) => {
            const index = state.todo.findIndex(todo => todo.id === payload.id)
            if(index !== -1)
                state.todo[index].title = payload.title
        },
        remove:(state, {payload}:PayloadAction<{id:number}>) => {
            const index = state.todo.findIndex(todo => todo.id === payload.id)
            if(index !== -1)
                state.todo.slice(index, 1)
        }
    }
})

export const {
    create: createTodoActionCreator,
    edit: editTodoActionCreator,
    remove: deleteTodoActionCreator
} = todoSlice.actions;