import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoListTitle from "../components/TodoListTitle";
import user from "@testing-library/user-event";
import TodoList from "../components/TodoList";
import InputCheckbox from "../components/inputCheckbox";

//Работает
// test("renders lern react link", () => {
//   render(<TodoListTitle />);
//   const input = screen.getByRole("searchbox");

//   expect(input).toContainHTML("");
//   fireEvent.input(input, {
//     target: { value: "123456" },
//   });
//   expect(screen.queryByTestId("input-text")).toContainHTML("");
// });

// работает
// test("render tasks", () => {
//   render(<TodoList />);
//   const taskss = screen.getAllByTestId("tasks-li");
//   expect(taskss.length).toBe(3);
// });

//не рабоает тест с тасками, так как их нет

// test("render tasks", () => {
//   render(<TodoList />);
//   const taskss = screen.queryAllByTestId("tasks-li");
//   expect(taskss.length).toBe(0);
// });

// const mockProfile = jest.fn().mockReturnValue(<>mock Profile</>);
// jest.mock("./TodoListTitle", () => (props) => mockProfile(props));

// test("add task", () => {
//   render(<TodoList />);

//   expect(screen.queryAllByTestId("tasks-li").length).toBe(0);

//   expect(screen.getByRole("searchbox")).toContainHTML("");
//   expect(screen.getByTestId("add-btn")).toBeInTheDocument();
//   expect(screen.getByRole("searchbox")).toBeInTheDocument();
//   userEvent.type(screen.getByRole("searchbox"), "123456g");
//   expect(screen.getByRole("searchbox")).toHaveValue("123456g");

//   //связка не работает
//   // userEvent.click(btn);
//   //   expect(screen.getByRole("searchbox")).toHaveValue("");

//   userEvent.click(screen.getByTestId("add-btn"));
//   //   expect(mockProfile).toBeInTheDocument();

//   //   expect(taskss.length).toBe(1);
// });

test("add task", async () => {
  const addTask = jest.fn();
  const setTitle = jest.fn();
  render(<TodoListTitle addTask={addTask} setTitle={setTitle} />);

  expect(screen.queryAllByTestId("tasks-li").length).toBe(0);

  expect(screen.getByRole("searchbox")).toContainHTML("");
  expect(screen.getByTestId("add-btn")).toBeInTheDocument();
  expect(screen.getByRole("searchbox")).toBeInTheDocument();
  userEvent.type(screen.getByRole("searchbox"), "123456g");
  expect(screen.getByRole("searchbox")).toHaveValue("123456g");

  //связка не работает
  // userEvent.click(btn);
  //   expect(screen.getByRole("searchbox")).toHaveValue("");

  await user.click(screen.getByTestId("add-btn"));
  expect(addTask).toHaveBeenCalledTimes(1);
  expect(setTitle).toHaveBeenCalledTimes(1);

  //   expect(mockProfile).toBeInTheDocument();

  //   expect(taskss.length).toBe(1);
});

// test("contain data", () => {
//   render(
//     <TodoList
//       tasks={[
//         { id: "25", title: "asdasdas", completed: true, createdAt: 12315 },
//       ]}
//     />
//   );
//   const taskss = screen.queryAllByTestId("tasks-li");
//   expect(taskss.length).toBe(1);
//   screen.debug();
// });
// оценить на свой чекбокс

test("input with check", async () => {
  const onChangeHandler = jest.fn();
  render(
    <InputCheckbox
      task={{ id: "25", title: "asdasdas", completed: false, createdAt: 12315 }}
      onChangeHandler={onChangeHandler}
    />
  );

  // await userEvent.click(screen.getByRole("checkbox"));
  // expect(onChangeHandler).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole("checkbox").checked).toEqual(false);
  await userEvent.click(screen.queryByRole("checkbox"));
  expect(onChangeHandler).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole("checkbox").checked).toEqual(true);
  screen.debug();
});
