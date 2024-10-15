import React from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./Task.jsx";

export const TaskListSection = ({
  taskList,
  index,
  setTaskList,
  setDataLocalStorage,
  taskRemove,
}) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = taskList.findIndex((task) => task.id === active?.id);
    const newIndex = taskList.findIndex((task) => task.id === over?.id);

    const newOrder = arrayMove(taskList, oldIndex, newIndex);
    setTaskList(newOrder);
    setDataLocalStorage(newOrder);
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="tasks-list">
        <h1>TAREAS A DESARROLLAR</h1>

        <SortableContext
          key={index}
          items={taskList}
          strategy={verticalListSortingStrategy}
        >
          {taskList.map((task) => (
            <Task
              task={task}
              key={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
              setDataLocalStorage={setDataLocalStorage}
              taskRemove={taskRemove}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
