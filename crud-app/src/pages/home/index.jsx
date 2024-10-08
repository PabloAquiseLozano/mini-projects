import React, { useState } from "react";
import styled from "styled-components";
import { TaskTable } from "./TaskTable.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const [task, setTask] = useState("");
  const taskList = [];
  const addTask = () => {
    setTask(document.querySelector("#task-value").value);

    const data = [
      {
        task: task,
      },
    ];

    taskList.concat(data);
    console.log(taskList);
  };

  return (
    <Container>
      <div className="title">
        <h1>TO DO LIST</h1>
      </div>
      <div className="task-section">
        <div className="task-input">
          <input
            type="text"
            id="task-value"
            placeholder="Ingrese su tarea aquí"
          />
          <button onClick={addTask}>
            <FontAwesomeIcon icon={faPlus} /> Añadir Tarea
          </button>
        </div>
        <div className="table">
          <TaskTable task={task} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .title {
    padding: 4em;
    background: aquamarine;
  }

  .task-section {
    padding: 4em;
    display: grid;
    gap: 2em;
  }
`;
