import { useState } from "react";

 export type EditTaskModalProps = {
  onSave: (text: string) => void;
  onCancel: () => void;
};

const EditTaskModal: React.FC<EditTaskModalProps> = ({ onSave, onCancel }) => {
  const [text, setText] = useState("");

  const handleSave = () => {
    onSave(text);
    setText("");
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById("my_modal_1");
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Edit Task
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Task</h3>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={text}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleSave}>
              Save
            </button>
            <button className="btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditTaskModal;
