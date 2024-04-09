import React from "react";

const Input: React.FC<{
  value: string;
  onChangeInput: (value: string) => void;
  onAddTask: () => void;
}> = ({ value, onChangeInput, onAddTask }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.target.value);
  };

  const handleClick = () => {
    onAddTask();
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};


export default Input;
