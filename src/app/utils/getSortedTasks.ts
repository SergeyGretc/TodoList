import { Task } from "../services/TasksService";

export const getSortedTasks = (tasks: Task[]) => {
  return tasks.sort((a, b) => b.createdAt - a.createdAt);
};
