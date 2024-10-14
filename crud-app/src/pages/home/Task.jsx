import React from "react";
import styled from "styled-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Container ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div className="taskMain">
        <p>{task.task}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  color: black;
  background-color: #d4d4d4;
  margin: 0.8em;
  padding: 1.2em;
  border-radius: 20px;
  cursor: move;
`;
