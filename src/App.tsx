import React, { useEffect, useState } from "react";
import Todolist from "./Todolost";
import { v1 } from "uuid";
function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setErrors] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const items = localStorage.getItem("tasks");
    if (items) {
      setTasks(JSON.parse(items) as any[]);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
  }, [tasks]);
  const changeFilter = (value: string) => {
    setFilter(value);
  };
  const addTask = (title: string) => {
    const newTask = { id: v1(), title: title, complited: false };
    if (newTask.title === "") {
      setErrors(true);
    } else {
      const newTasks = [newTask, ...tasks];
      setErrors(false);
      setTasks(newTasks);
    }
  };
  const removeTask = (id: string): Promise<void> => {
    const newTasks = tasks.filter((el) => el.id !== id);
    setTasks(newTasks);
    return Promise.resolve();
  };

  const changeStatus = (id: string, complited: boolean) => {
    const task = tasks.find((el) => el.id === id);
    task.complited = complited;
    const changedTasks = [...tasks];
    setTasks(changedTasks);
  };
  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((el) => el.complited !== true);
  }
  if (filter === "complited") {
    filteredTasks = tasks.filter((el) => el.complited === true);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4 mx-auto d-flex justify-content-center">
          <Todolist
            tasks={filteredTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            filter={filter}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
