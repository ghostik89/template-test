import {useDispatch, useSelector} from "react-redux";
import {TodoState} from "../../types/todo.types";
import React, {useState} from "react";
import {deleteTodoActionCreator} from "../../reducers/todo.slice";


export const TodoInfo = () => {
    const selectedTodoId = useSelector((state:TodoState) => state.selectedTodo)
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [editTodoInput, setEditTodoInput] = useState<string>("");
    // @ts-ignore
    const todos = useSelector((state:TodoState) => state.todo.todo)
    const selectedTodo =
        (selectedTodoId && todos.find((todo: { id: string; }) => todo.id == selectedTodoId)) || null;
    const dispatch = useDispatch()


    const handleEdit = (): void => {
        if (!selectedTodo) return;

        setEditTodoInput(selectedTodo.desc);
        setIsEditMode(true);
    };

    const handleDelete = (): void => {
        if (!selectedTodoId) return;

        dispatch(deleteTodoActionCreator({ id: +selectedTodoId }));
    };

    return(
        <div className="App_todo-info">
            <h2>Selected todo:</h2>
            {selectedTodo? (<span className="empty-state">No Todo Selected</span>):
            isEditMode?(<>
                <span
                    className={`todo-desc ${selectedTodo?.isComplete ? "done" : ""}`}
                >
                    {selectedTodo.title}
                </span>
                <div className="todo-actions">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </>):(<></>)}
        </div>
    )
}