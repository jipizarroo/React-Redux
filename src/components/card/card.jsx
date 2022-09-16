import React from "react";
import "./card.css";

const testData = {
  title: "Tarea 1",
  description:
    "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
};

function TodoCard({ data = testData }) {
  return (
    <div className="cardContainer">
      <div className="contentContainer">
        <h4>{data.title} </h4>
        <p>{data.description}</p>
      </div>

      <div className="buttonContainer">
        <button className="edit">Editar</button>
        <button className="borrar">Borrar</button>
      </div>
    </div>
  );
}

export default TodoCard;
