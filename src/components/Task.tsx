import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import EditTaskModal from "./EditTaskModal";
import { EditTaskModalProps } from "./EditTaskModal";

type TaskProps = {
  item: { text: string; completed: boolean };
  index: number;
  editIndex: number | null;
  updatedTask: string;
  setUpdatedTask: (value: string) => void;
  updateTask: (index: number, updatedTask: string) => void;
  deleteTask: (index: number) => void;
  completeTask: (index: number) => void;
  handleEditClick: (index: number) => void;
};


export const Task: React.FC<TaskProps> = ({
  item,
  index,
  deleteTask,
  editIndex,
  completeTask,
  handleEditClick,
  updateTask,
}) => {
  const [text, setText] = useState(item.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    updateTask(index, text);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li key={index}>
      <p className={item.completed ? `text-violet-400` : ""}>{item.text}</p>
      <button onClick={() => deleteTask(index)} className="btn btn-circle">
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
      <button onClick={() => completeTask(index)} className="btn btn-circle">
        <IoMdCheckmark size={24} />
      </button>
      <button
        onClick={() => {
          setIsEditing(true);
          handleEditClick(index);
        }}
        className="btn btn-circle"
      >
        <MdOutlineEdit size={24} />
      </button>
      {isEditing && (
        <EditTaskModal 
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </li>
  );
};
