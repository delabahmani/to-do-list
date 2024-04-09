import React, { useState } from "react";
import Task from "./Task";

type Todolist = {
  text: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Todolist[];
  onUpdateTask: (index: number, newText: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [updatedTask, setUpdatedTask] = useState("");

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setUpdatedTask(tasks[index].text);
  };

  const updateTask = (index: number, newText: string) => {
    onUpdateTask(index, newText);
    setEditIndex(null);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          completed={task.completed}
          onDeleteTask={() => console.log("Delete task")}
          onCompleteTask={() => console.log("Complete task")}
          onEditTask={() => handleEditClick(index)}
          onUpdateTask={(newText) => updateTask(index, newText)}
          editMode={editIndex === index}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
