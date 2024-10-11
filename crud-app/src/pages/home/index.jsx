import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";

export const Home = () => {
  const updatedTaskRef = useRef(null);
  const inputRef = useRef(null);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCancel = () => {
    setIsOpenModal(false);
  };

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

    if (!inputValue) return;

    const newData = [
      ...(oldTasks || []),
      {
        id: (oldTasks || []).length + 1,
        task: inputValue,
        createAt: new Date(),
      },
    ];

    setDataLocalStorage(newData);
    setTaskList(newData);
  };

  const editTask = (taskId) => {
    setIsOpenModal(true);
    const task = taskList.find((task) => task.id === taskId);
    setTask(task);
  };

  const updateTask = () => {
    setIsOpenModal(false);
    const inputValue = updatedTaskRef?.current?.value;

    if (!inputValue) return alert("No hay nada q actualizar!");

    const otherTasks = taskList.filter((_task) => _task.id !== task.id);

    const taskUpdated = {
      ...task,
      task: inputValue,
    };

    const newData = [...otherTasks, taskUpdated].sort((a, b) => a.id - b.id);

    setTaskList(newData);
    setDataLocalStorage(newData);
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
      <div className="controls">
        <div className="task-section">
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
          <button onClick={deleteTasks}>Limpiar tareas</button>
        </div>
      </div>
      <div className="task-lists">
        <span>
          <h3>LISTA DE TAREAS A DESARROLLAR</h3>
        </span>
        <ul>
          {taskList.map((task, index) => {
            return (
              <li key={index}>
                {`${index + 1}. ${task.task}`}
                <div className="options">
                  <button className="edit" onClick={() => editTask(task.id)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="delete"
                    onClick={() => taskRemove(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        closable
        okText={"Guardar"}
        open={isOpenModal}
        onOk={() => updateTask()}
        onCancel={() => {
          setTask(null);
          handleCancel();
        }}
      >
        <input
          type="text"
          ref={updatedTaskRef}
          key={task?.id.toString()}
          defaultValue={task?.task}
          style={{ height: "30px", width: "300px" }}
        />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    width: 100%;
    padding: 4em;
    background: linear-gradient(to left, #43c6ac, #f8ffae);
  }

  .controls {
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    align-items: center;
    width: 100%;

    .task-section {
      display: flex;
      width: 100%;
      max-width: 20em;
      border-radius: 5px;
      border: 2px solid black;
      overflow: hidden;
    }
    .task-delete {
      border: 2px solid black;
      overflow: hidden;
    }

    input {
      padding: 0.2em;
      width: 40em;
      height: 3em;
    }
    button {
      width: 15em;
      height: 3em;
    }
  }

  .task-lists {
    line-height: 3em;
    width: 60%;
    text-align: left;

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1.5em;

      li {
        font-size: 1em;
        font-weight: 700;
        border-radius: 20px;
        border: 3px solid black;

        padding: 0.8em;
        display: flex;
        justify-content: space-between;
        .options {
          display: flex;
          gap: 0.5em;

          .delete {
            background-color: red;
          }

          .edit {
            background-color: cornflowerblue;
          }

          .edit,
          .delete {
            cursor: pointer;
          }

          button {
            border-radius: 20px;
            border: none;
            padding: 0.5em;
          }
        }
      }
    }
  }

  @media (max-width: 654px) {
    .controls {
      flex-direction: column;
    }

    .task-lists {
      h3 {
        font-size: 1em;
      }
    }
  }
`;
