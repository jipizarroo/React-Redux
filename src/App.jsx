import React from "react";
import { useSelector } from "react-redux";

import { TodoCard, TodoForm } from "./components";

import "./index.css";

function App() {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div className="MainContainer">
      <header>
        <h1 className="app-Title"> Todo-List React-Redux</h1>
      </header>
        <TodoForm />
        {todos?.map((task, key) => {
          return <TodoCard task={task} key={key} id={key} />;
        })}
    </div>
  );
}

export default App;
