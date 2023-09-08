import { Task } from "./TasksService";

export const getDataFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) || '[]');

export const getSortedTasks = (tasks: Task[]) => {
  return tasks.sort((a, b) => b.createdAt - a.createdAt)
}