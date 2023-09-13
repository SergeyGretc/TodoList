import { getDataFromLocalStorage, getSortedTasks } from "../utils";
import { v4 } from "uuid";
import delay from "../utils/delay";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

class TasksService {
  private dataKey: string = "tasks";
  private tasks: Task[] = getDataFromLocalStorage(this.dataKey);

  addTask = async (title: string) => {
    if (!title) {
      return Promise.reject("Cannot add an empty item");
    }
    const task: Task = {
      id: v4(),
      title,
      completed: false,
      createdAt: Date.now(),
    };

    const currentTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    localStorage.setItem(this.dataKey, JSON.stringify([task, ...currentTasks]));
    const newCurrentTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    await delay(Math.random() * 2000);
    return Promise.resolve(getSortedTasks(newCurrentTasks));
  };

  removeTask = async (
    id: string
  ): Promise<{ tasks: Task[]; error?: string }> => {
    const currentTasks: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    if (!currentTasks.some((t) => t.id === id)) {
      return Promise.reject({ error: `Task with id = ${id} not found` });
    }

    const newTasks = currentTasks.filter((t) => t.id !== id);

    localStorage.setItem(this.dataKey, JSON.stringify(newTasks));

    await delay(Math.random() * 2000);

    return Promise.resolve({ tasks: newTasks });
  };

  changeStatus = (id: string, completed: boolean) => {
    const currentTasks: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    const oldTasks = currentTasks.filter((t) => t.id !== id);
    const taskToChange = currentTasks.find((t) => t.id === id);
    if (!taskToChange) {
      return Promise.reject({ error: `Task with id = ${id} not found` });
    }

    const newTask: Task = { ...taskToChange, completed };

    const newTasks = [...oldTasks, newTask];
    const sortedTasks = getSortedTasks(newTasks);
    localStorage.setItem(this.dataKey, JSON.stringify([...sortedTasks]));

    return Promise.resolve(getSortedTasks(newTasks));
  };

  fetchTasks = () => {
    return Promise.resolve(this.tasks);
  };
}

export default TasksService;
