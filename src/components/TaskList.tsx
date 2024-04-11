import React from "react";
import { Task } from "./Task";

type TaskListProps = {
  list: { text: string; completed: boolean }[];
  editIndex: number | null;
  updatedTask: string;
  setUpdatedTask: (value: string) => void;
  updateTask: (index: number, updatedTask: string) => void;
  deleteTask: (index: number) => void;
  completeTask: (index: number) => void;
  handleEditClick: (index: number) => void;
};

export const TaskList: React.FC<TaskListProps> = ({
  list,
  editIndex,
  updatedTask,
  setUpdatedTask,
  updateTask,
  deleteTask,
  completeTask,
  handleEditClick,
}) => (
  <ul>
    {list.map((item, index) => (
      <Task
        key={index}
        item={item}
        index={index}
        editIndex={editIndex}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
        handleEditClick={handleEditClick}
      />
    ))}
  </ul>
);