import React, { useState } from "react";

import Button from "./Button";
import "../../custom.css";
import InputCheckbox from "./inputCheckbox";
import RemoveButton from "./RemoveButton";

import TodoListTitle from "./TodoListTitle";
import { buttonTypes } from "../utils/buttonTypes";
export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

type TDprops = {
  tasks: TaskType[];
  removeTask: Function;
  changeFilter: Function;
  addTask: Function;
  changeStatus: Function;
  filter: string;
  error: string;
};

const Todolist: React.FC<TDprops> = ({
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeStatus,
  filter,
}) => {
  const [title, setTitle] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleKeyChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(title);
      setTitle("");
    }
  };

  // const buttonClass = () => {
  //   if (!title) {
  //     return "secondary disabled ";
  //   }
  //   return "success";
  // };

  return (
    <div className="align-items-center mh-700" style={{ minHeight: "700px" }}>
      <TodoListTitle
        title={title}
        handleChange={handleChange}
        handleKeyChange={handleKeyChange}
        setTitle={setTitle}
        // buttonClass={buttonClass}
        addTask={addTask}
      />

      <div>
        <ul className="list-group">
          {tasks.map((el) => {
            const onChangeHandler = () => {
              changeStatus(el.id, el.completed);
            };
            // e: React.ChangeEvent<HTMLInputElement>
            // {
            //   changeStatus(el.id, el.completed);
            // };
            return (
              <li
                data-testid="tasks-li"
                key={el.id}
                className="list-group-item list-group-item-action d-flex mb-2 align-items-center mw"
              >
                <InputCheckbox task={el} onChangeHandler={onChangeHandler} />
                <RemoveButton task={el} removeTask={removeTask} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-between">
        {buttonTypes.map((keyWord, i) => {
          return (
            <div key={i}>
              <Button
                filter={filter}
                changeFilter={changeFilter}
                keyType={keyWord}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
