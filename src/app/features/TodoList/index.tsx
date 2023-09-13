import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import { Button, Checkbox } from "../../components";

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

type TDprops = {
  tasks: TaskType[];
  removeTask: (id: string) => Promise<void>;
  changeFilter: (filter: string) => void;
  addTask: (title: string) => Promise<void>;
  changeStatus: (id: string, completed: boolean) => Promise<void>;
  error: string;
};

const Todolist: React.FC<TDprops> = ({
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeStatus,
}) => {
  const handleChangeStatus = (id: string, completed: boolean) => {
    changeStatus(id, completed);
  };

  return (
    <div className="align-items-center mh-700" style={{ minHeight: "700px" }}>
      <Header addTask={addTask} />

      <div>
        <ul className="list-group">
          {tasks.map((task, index) => {
            return (
              <li
                key={task.id}
                data-testid={`task-item-${index}`}
                className="list-group-item list-group-item-action d-flex mb-2 align-items-center mw"
              >
                <Checkbox
                  active={task.completed}
                  onChange={(completed: boolean) => {
                    handleChangeStatus(task.id, completed);
                  }}
                >
                  {task.title}
                </Checkbox>
                <Button
                  onClick={() => removeTask(task.id)}
                  iconName="trash"
                  className="btn-danger text-white d-flex align-items-center"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Filters onChange={changeFilter} />
    </div>
  );
};

export default Todolist;
