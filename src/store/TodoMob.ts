import {action, observable} from "mobx";
import {TodoItemType} from "../types/TodoItemType";

class TodoMob {
    @observable.shallow todoList = [] as TodoItemType[]

    constructor(todo:TodoItemType[]) {
        this.todoList = todo
    }

    @action
    addTodo = (todo: TodoItemType) => {
        this.todoList.push(todo)
    }

    @action
    removeTodo = (index:number) => {
        this.todoList.splice(index, 1)
    }

    @action
    setTodo = (todos: TodoItemType[]) => {
        this.todoList = todos
    }

    @action
    updateTodo = (index:number, todo:TodoItemType) => {
        this.todoList[index] = todo
    }
}
export default TodoMob