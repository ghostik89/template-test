import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {TodoState} from "./types/todo.types";
import {CreateTodo} from "./components/HomePage/CreateTodo";
import {ListOfTodos} from "./components/HomePage/ListOfTodos";
import {TodoInfo} from "./components/HomePage/TodoInfo";

function App() {
  const editedTodo = useSelector((state:TodoState) => state.counter)

  return (
    <div className="App">
        <div className="App__counter">Todos updated counter {editedTodo}</div>
        <CreateTodo/>
        <ListOfTodos/>
    </div>
  );
}

export default App;
