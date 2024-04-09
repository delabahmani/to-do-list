"use client";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

type Todolist = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Todolist[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [updatedTask, setUpdatedTask] = useState("");

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
      // [...list, { completed: i === taskIndex && !item.completed }]
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

  const toggleTask = (taskIndex: number) => {
    const newList = list.map((item, index) =>
      index === taskIndex ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
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

  return (
    <main>
      <div>
        <input
          onChange={handleChange}
          type="text"
          value={inputValue}
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handleClick}>Add</button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                onBlur={() => updateTask(index, updatedTask)}
              />
            ) : (
              <p className={item.completed ? `text-violet-400` : ""}>
                {item.text}
              </p>
            )}
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              onClick={() => completeTask(index)}
              className="btn btn-circle"
            >
              <IoMdCheckmark size={24} />
            </button>
            <button
              onClick={() => handleEditClick(index)}
              className="btn btn-circle"
            >
              <MdOutlineEdit size={24} />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={completeAll} className="btn btn-primary">
        Complete All
      </button>
      <button onClick={clearAll} className="btn btn-primary">
        Clear All
      </button>
    </main>
  );
}
