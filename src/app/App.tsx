import Todolist from "./features/TodoList";
import useTodoList from "./hooks/useTodeList";
import React from "react";
import "./styles/index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    error,
    addTask,
    changeFilter,
    removeTask,
    changeStatus,

    filteredTasks,
  } = useTodoList();

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
            error={error}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
