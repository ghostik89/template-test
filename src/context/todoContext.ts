import {createContext, useContext} from "react";
import TodoMob from "../store/TodoMob";

export const TodoContext = createContext<TodoMob>({} as TodoMob)
export const TodoProvider = TodoContext.Provider
export const useUser = (): TodoMob => useContext(TodoContext)