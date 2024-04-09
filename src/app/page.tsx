"use client";

import Image from "next/image";
import { useState } from "react";

type Todolist = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Todolist[]>([]);

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
    const isItCompleted = list.some((task) => !task.completed)
    const newList = list.map((task) => ({...task, completed: isItCompleted}))
    setList(newList);
  }

  const clearAll = () => {
    setList([]);
  }

  return (
    <main>
      <div>
        <input onChange={handleChange} type="text" value={inputValue} />
        <button onClick={handleClick}>Add</button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <p className={item.completed ? `text-violet-400` : ""}>{item.text}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => completeTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
      <button onClick={completeAll}>Complete All</button>
      <button onClick={clearAll}>Clear All</button>
    </main>
  );
}
