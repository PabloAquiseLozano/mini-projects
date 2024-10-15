import React from "react";
import styled from "styled-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, taskRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Container ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <div className="taskMain">
          <p>{task.task}</p>
        </div>
      </Container>
      <Buttons>
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={() => taskRemove(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Buttons>
    </div>
  );
};

const Container = styled.div`
  color: black;
  background-color: #d4d4d4;
  margin: 0.8em;
  padding: 1.2em;
  border-radius: 20px;
  cursor: move;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5em;
  width: 20%;

  button {
    background-color: transparent;
    border: none;
    display: block;
    cursor: pointer;
  }
`;
