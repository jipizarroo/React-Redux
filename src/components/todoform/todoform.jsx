import React from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

import "./todoform.css";

function TodoForm() {
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoDetail = {
      title: "",
      description: "",
    };
    if (e.target.todoTitle.value) {
      todoDetail.title = e.target.todoTitle.value;
      if (e.target.todoDescription.value) {
        todoDetail.description = e.target.todoDescription.value;
      }
    }
    dispatch(
      addTask({
        task: todoDetail,
      })
    );
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className="formContainer">
      <form action="todo-list" onSubmit={(e) => handleSubmit(e)}>
        <div className="inputContainer">
          <label htmlFor="todo-Task">Titulo tarea.</label>
          <textarea
            ref={titleRef}
            required
            type="text"
            id="todoTitle"
            name="todoTitle"
            placeholder="Titulo de la tarea."
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="todo-descrption">Descripción de la tarea.</label>
          <textarea
            ref={descriptionRef}
            type="text"
            id="todoDescription"
            name="todoDescription"
            placeholder="Escriba una descripción de la tarea si lo desea."
          />
        </div>
        <input className="submit" type="submit" value="Agregar Tarea" />
      </form>
    </div>
  );
}

export default TodoForm;
