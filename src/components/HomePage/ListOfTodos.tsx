import {useDispatch, useSelector} from "react-redux";
import {TodoState} from "../../types/todo.types";
import {selectTodoActionCreator} from "../../reducers/selectedTodo.slice";


export const ListOfTodos = () => {
    // @ts-ignore
    const todos = useSelector((state:TodoState) => state.todo.todo)
    const selectedTodoId = useSelector((state:TodoState) => state.selectedTodo)
    const dispatch = useDispatch()

    const handleSelectTodo = (todoId:number) => ():void => {
        dispatch(selectTodoActionCreator({id:todoId}))
    }

    return(
        <div className="App__body">
            <ul className="App__list">
                <h2>My Todos:</h2>
                {todos.map((todo:any,i:number) => (
                    <li
                        className={`${todo.completed ? "done" : ""} ${
                            todo.id.toString() === selectedTodoId ? "active" : ""
                        }`}
                        key={todo.id}
                        onClick={handleSelectTodo(todo.id)}
                    >
                        <span className="list-number">{i+1}. </span> {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}