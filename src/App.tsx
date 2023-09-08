import React from "react";
import Todolist from "./Todolost";
import useData from "./useData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    tasks,
    filter,
    error,
    addTask,
    changeFilter,
    removeTask,
    changeStatus,
    showToastMessage,
  } = useData();

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((el) => el.completed !== true);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((el) => el.completed === true);
  }
  if (filter === "all") {
    filteredTasks = tasks;
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
            showToastMessage={showToastMessage}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
