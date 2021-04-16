import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {createTodoActionCreator} from "../../reducers/todo.slice";

export const CreateTodo = () => {
    const dispatch = useDispatch()
    const [newTodoInput, setNewTodoInput] = useState<string>("")

    const handleCreateNewTodo = (event:FormEvent<HTMLFormElement>):void =>{
        event.preventDefault()

        if(!newTodoInput.length) return;

        dispatch(createTodoActionCreator({desc: newTodoInput, userId: -1}))
        setNewTodoInput('')
    }

    const handleNewInputChange = (event: ChangeEvent<HTMLInputElement>): void => { setNewTodoInput(event.target.value)}

    return(
        <div className="App__header">
            <h1>My redux todo</h1>
            <form onSubmit={handleCreateNewTodo}>
                <label htmlFor="new-todo">Add new:</label>
                <input
                    onChange={handleNewInputChange}
                    id="new-todo"
                    value={newTodoInput}
                />
            </form>
        </div>
    )
}