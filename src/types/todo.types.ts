import {RequestStatusType} from "./requestStatus.types";


export type ToDoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type TodoState = {
    todo: ToDoType[],
    selectedTodo: string | null,
    counter: number,
    requestStatus: RequestStatusType
}