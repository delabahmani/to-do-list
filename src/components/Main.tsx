import { TaskList } from "./TaskList";

type MainProps = {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  list: { text: string; completed: boolean }[];
  editIndex: number | null;
  updatedTask: string;
  setUpdatedTask: (value: string) => void;
  updateTask: (index: number, updatedTask: string) => void;
  deleteTask: (index: number) => void;
  completeTask: (index: number) => void;
  handleEditClick: (index: number) => void;
  completeAll: () => void;
  clearAll: () => void;
};

export const Main: React.FC<MainProps> = ({
  inputValue,
  handleChange,
  handleClick,
  list,
  editIndex,
  updatedTask,
  setUpdatedTask,
  updateTask,
  deleteTask,
  completeTask,
  handleEditClick,
  completeAll,
  clearAll,
}) => (
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

    <TaskList
      list={list}
      editIndex={editIndex}
      updatedTask={updatedTask}
      setUpdatedTask={setUpdatedTask}
      updateTask={updateTask}
      deleteTask={deleteTask}
      completeTask={completeTask}
      handleEditClick={handleEditClick}
    />

    <button onClick={completeAll} className="btn btn-primary">
      Complete All
    </button>
    <button onClick={clearAll} className="btn btn-primary">
      Clear All
    </button>
  </main>
);
