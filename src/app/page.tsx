"use client";
import React, { useState } from "react";
import { Main } from "@/components/Main";

const Page: React.FC = () => {
  // Define state and event handlers here as needed
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<{ text: string; completed: boolean }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setList([...list, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTask = (taskIndex: number) => {
    const newList = list.filter((item, index) => index !== taskIndex);
    setList(newList);
  };

  const completeTask = (taskIndex: number) => {
    const newList = list.map((item, i) =>
      i === taskIndex ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
  };

  const completeAll = () => {
    const isItCompleted = list.some((task) => !task.completed);
    const newList = list.map((task) => ({ ...task, completed: isItCompleted }));
    setList(newList);
  };

  const clearAll = () => {
    setList([]);
  };

  const updateTask = (taskIndex: number, newText: string) => {
    const newList = list.map((item, index) =>
      index === taskIndex ? { ...item, text: newText } : item
    );
    setList(newList);
    setEditIndex(null);
  };

  const handleEditClick = (taskIndex: number) => {
    setEditIndex(taskIndex);
    setUpdatedTask(list[taskIndex].text);
  };

  // Render your main component and pass necessary props
  return (
    <Main
      inputValue={inputValue}
      handleChange={handleChange}
      handleClick={handleClick}
      list={list}
      editIndex={editIndex}
      updatedTask={updatedTask}
      setUpdatedTask={setUpdatedTask}
      updateTask={updateTask}
      deleteTask={deleteTask}
      completeTask={completeTask}
      handleEditClick={handleEditClick}
      completeAll={completeAll}
      clearAll={clearAll}
    />
  );
};

export default Page;
