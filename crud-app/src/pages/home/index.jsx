import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const inputRef = useRef();
  const [taskList, setTaskList] = useState([]);

  const LOCAL_KEY_DATA = "tasksData";

  const setDataLocalStorage = (data = []) =>
    localStorage.setItem(LOCAL_KEY_DATA, JSON.stringify(data));

  const oldTasks = JSON.parse(localStorage.getItem(LOCAL_KEY_DATA));

  useEffect(() => {
    if (oldTasks) {
      setTaskList(oldTasks);
    }
  }, []);

  const addData = () => {
    const inputValue = inputRef?.current?.value || "";

    const newData = [
      ...(oldTasks || []),
      {
        id: new Date(),
        task: inputValue,
      },
    ];

    setDataLocalStorage(newData);
    setTaskList(newData);
  };

  const deleteTasks = () => {
    localStorage.clear();
    setTaskList([]);
  };

  const taskRemove = (taskId) => {
    const newData = taskList.filter((task) => task.id !== taskId);

    setDataLocalStorage(newData);
    setTaskList(newData);
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
            placeholder="Ingrese su tarea aquí"
            ref={inputRef}
          />
          <button onClick={addData}>
            <FontAwesomeIcon icon={faPlus} /> Añadir Tarea
          </button>
        </div>
        <div className="task-delete">
          <button onClick={deleteTasks}>Limpiar las tareas</button>
        </div>
      </div>
      <div className="task-lists">
        <span>
          <h3>LISTA DE TAREAS A DESARROLLAR</h3>
        </span>
        <ul>
          {taskList.map((task, index) => {
            return (
              <li>
                {`${index + 1}. ${task.task}`}
                <div className="options">
                  <button>Editar</button>
                  <button onClick={() => taskRemove(task.id)}>Eliminar</button>
                </div>
              </li>
            );
          })}
        </ul>
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
    display: flex;
    justify-content: center;
    gap: 2em;
  }
  .task-lists {
    line-height: 3em;
    margin: auto;
    width: 60%;
    text-align: left;

    ul {
      list-style-type: none;

      li {
        padding: 0.5em;
        display: flex;
        justify-content: space-between;
        .options {
          display: flex;
          gap: 0.5em;
          button {
            padding: 0.5em;
          }
        }
      }
    }
  }
`;
