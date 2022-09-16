import "./index.css";
import { TodoCard, TodoForm } from "./components";

function App() {
  return (
    <div className="MainContainer">
      <h1 className="app-Title"> Todo-List React-Redux</h1>
      <TodoForm />
      <TodoCard />
    </div>
  );
}

export default App;
