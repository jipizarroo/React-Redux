import React from 'react'
import { useSelector } from "react-redux";

import { TodoCard, TodoForm } from "./components";

import "./index.css";

function App() {

  const todos = useSelector((state) => {
    console.log(state)
    return state.tasks;
  });



  return (
    <div className="MainContainer">
      <h1 className="app-Title"> Todo-List React-Redux</h1>
      <TodoForm />
      {todos?.map((task, key) => {
        return <TodoCard task={task} key={key} id={key} />;
      })}
    </div>
  );
}

export default App;
