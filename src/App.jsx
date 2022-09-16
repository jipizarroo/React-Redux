import { useSelector } from "react-redux";

import "./index.css";
import { TodoCard, TodoForm } from "./components";

function App() {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div className="MainContainer">
      <h1 className="app-Title"> Todo-List React-Redux</h1>
      <TodoForm />
      {todos.map((task, key) => {
        return <TodoCard task={task} key={key} id={key} />;
      })}
    </div>
  );
}

export default App;
