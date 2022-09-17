import React from "react";

import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";

import "./card.css";

function TodoCard({ task, id }) {
  
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    if(window.confirm("¿Esta seguro que desea borrar su tarea?")){
      dispatch(
        deleteTask({
          id: id
        })
      )
    }
  }
  return (
    <div className="cardContainer">
      <div className="contentContainer">
        <h4>{task?.detail?.title} </h4>
        <p>{task?.detail?.description}</p>
      </div>

      <div className="buttonContainer">
        {/* <button className="edit">Editar</button> */}
        <button className="borrar" onClick={() => handleDelete()}>Borrar</button>
      </div>
    </div>
  );
}

export default TodoCard;
