import React from "react";
import Todolist from "./components/Todolist";
import useTodoList from "./hooks/useTodeList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    filter,
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
            filter={filter}
            error={error}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
