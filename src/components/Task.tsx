import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

type TaskProps = {
  text: string;
  completed: boolean;
  onDeleteTask: () => void;
  onCompleteTask: () => void;
  onEditTask: () => void;
  onUpdateTask: (newText: string) => void;
  editMode: boolean;
  updatedTask: string;
  setUpdatedTask: React.Dispatch<React.SetStateAction<string>>;
};

const Task: React.FC<TaskProps> = ({
  text,
  completed,
  onDeleteTask,
  onCompleteTask,
  onEditTask,
  onUpdateTask,
  editMode,
  updatedTask,
  setUpdatedTask,
}) => {
  return (
    <li>
      {editMode ? (
        <div>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            onBlur={() => onUpdateTask(updatedTask)}
          />
          <button onClick={onEditTask}>
            <MdOutlineEdit size={24} />
          </button>
        </div>
      ) : (
        <div>
          <p className={completed ? "text-violet-400" : ""}>{text}</p>
          <button onClick={onDeleteTask}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={onCompleteTask}>
            <IoMdCheckmark size={24} />
          </button>
          <button onClick={onEditTask}>
            <MdOutlineEdit size={24} />
          </button>
        </div>
      )}
    </li>
  );
};

export default Task;