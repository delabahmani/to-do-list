import React from "react";

const Toolbar: React.FC<{ onCompleteAllTasks: () => void; onClearAllTasks: () => void }> = ({ onCompleteAllTasks, onClearAllTasks }) => {
  return (
    <div>
      <button onClick={onCompleteAllTasks} className="btn btn-primary" >Complete All</button>
      <button onClick={onClearAllTasks} className="btn btn-primary">Clear All</button>
    </div>
  )
}

export default Toolbar;