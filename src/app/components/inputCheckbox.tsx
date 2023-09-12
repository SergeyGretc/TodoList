import React from "react";
import { TaskType } from "./Todolist";
type CBprops = {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  task: TaskType;
};
const InputCheckbox: React.FC<CBprops> = ({ onChangeHandler, task }) => {
  return (
    <>
      <input
        className="form-check-input me-3 m-0 "
        id="flexCheck"
        data-taskid={task.id}
        type="checkbox"
        checked={task.completed}
        onChange={onChangeHandler}
      />
      <label className="form-check-label mwl " htmlFor="flexCheck">
        {task.title}
      </label>
    </>
  );
};

export default InputCheckbox;
