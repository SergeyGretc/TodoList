import React, { useCallback, useState } from "react";
import { Button, Input } from "../../components";

type TDLprops = {
  addTask: (title: string) => Promise<void>;
};

const TodoListTitle: React.FC<TDLprops> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleChange = (value: string) => {
    setTitle(value);
  };

  const handleSubmit = useCallback(
    () => addTask(title).then(() => setTitle("")),
    [addTask, title]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!title) return;

      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit, title]
  );

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
          <Input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="form-control me-2"
          />
          <Button
            className={"btn mw-200 btn-" + buttonClass()}
            onClick={handleSubmit}
          >
            Создать
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoListTitle;
