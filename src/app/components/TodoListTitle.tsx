import React from "react";

type TDLprops = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleKeyChange: React.KeyboardEventHandler<HTMLInputElement>;
  title: string;
  //   buttonClass: Function;
  setTitle: Function;
  addTask: Function;
};
const TodoListTitle: React.FC<TDLprops> = ({
  handleChange,
  handleKeyChange,
  title,
  //   buttonClass,
  setTitle,
  addTask,
}) => {
  const buttonClass = () => {
    if (!title) {
      return "secondary disabled ";
    }
    return "success";
  };

  return (
    <>
      <h1 className="d-flex align-items-center justify-content-center">
        Todos
      </h1>
      <div className="mb-4">
        <div
          className="d-flex justify-content-between "
          id="validationServer03"
        >
          <input
            data-testid="input-text"
            role="searchbox"
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
            data-testid="add-btn"
            className={"btn btn-" + buttonClass()}
            onClick={() => {
              addTask(title);
              setTitle("");
            }}
          >
            Создать
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoListTitle;
