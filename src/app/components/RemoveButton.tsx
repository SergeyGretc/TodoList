import React from "react";
import icon from "../assets/trash.svg";
import { TaskType } from "./Todolist";
type RBprops = {
  removeTask: Function;
  task: TaskType;
};
const RemoveButton: React.FC<RBprops> = ({ removeTask, task }) => {
  return (
    <button
      className="btn btn-danger ms-auto"
      onClick={() => {
        removeTask(task.id);
      }}
    >
      <img src={icon} alt="Картинка" />
    </button>
  );
};

export default RemoveButton;
