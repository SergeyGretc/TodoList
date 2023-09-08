import React, { useState } from "react";
import icon from "./assets/trash.svg";

type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

type TDprops = {
  tasks: TaskType[];
  removeTask: Function;
  changeFilter: Function;
  addTask: Function;
  changeStatus: Function;
  filter: string;
  error: string;
  showToastMessage: Function;
};

const Todolist: React.FC<TDprops> = ({
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeStatus,
  filter,
  error,
  showToastMessage,
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
  return (
    <div className="align-items-center mh-700" style={{ minHeight: "700px" }}>
      <h1 className="d-flex align-items-center justify-content-center">
        Todos
      </h1>
      <div className="mb-4">
        <div
          className="d-flex justify-content-between "
          id="validationServer03"
        >
          <input
            className="form-control me-2"
            id="validationServer03"
            aria-label="Sizing example input"
            aria-describedby="validationServer03Feedback"
            required
            onChange={handleChange}
            onKeyDown={handleKeyChange}
            value={title}
            placeholder="Введите текст"
          />
          <button
            className="btn btn-success "
            onClick={() => {
              addTask(title);
              console.log(error);
              showToastMessage();
              setTitle("");
            }}
          >
            Создать
          </button>
        </div>

        {/* {error && !title && (
          <span className="text-danger ">Поле ввода не должно быть пустым</span>
        )} */}
      </div>
      <div>
        <ul className="list-group">
          {tasks.map((el) => {
            const onChangeHandler = (
              e: React.ChangeEvent<HTMLInputElement>
            ) => {
              changeStatus(el.id, e.target.checked);
            };
            return (
              <li
                key={el.id}
                className="list-group-item list-group-item-action d-flex mb-2 align-items-center"
              >
                <input
                  className="form-check-input me-3 m-0 "
                  id="flexCheckDefault"
                  type="checkbox"
                  checked={el.completed}
                  onChange={onChangeHandler}
                />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  {el.title}
                </label>

                <button
                  className="btn btn-danger ms-auto"
                  onClick={() => {
                    removeTask(el.id);
                  }}
                >
                  {" "}
                  <img src={icon} alt="Картинка" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className={filter === "all" ? "btn btn-primary" : "btn btn-light"}
          onClick={() => {
            changeFilter("all");
          }}
        >
          All
        </button>
        <button
          className={filter === "active" ? "btn btn-primary" : "btn btn-light"}
          onClick={() => {
            changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          className={
            filter === "completed" ? "btn btn-primary" : "btn btn-light"
          }
          onClick={() => {
            changeFilter("completed");
          }}
        >
          Complited
        </button>
      </div>
    </div>
  );
};

export default Todolist;
