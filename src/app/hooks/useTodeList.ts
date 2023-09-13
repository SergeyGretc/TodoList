import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../services/ServiceProvider";
import TasksService from "../services/TasksService";
import { toastNotification } from "../utils/toastNotification";
import { Positions } from "../utils/toastNotification";
interface Services {
  tasksService: TasksService;
}

const useTodoList = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setErrors] = useState("");
  const [filter, setFilter] = useState("all");
  const { tasksService } = useContext(ServiceContext) as Services;

  useEffect(() => {
    tasksService.fetchTasks().then((tasks) => setTasks(tasks));
  }, [tasksService]);

  const changeFilter = (value: string) => {
    setFilter(value);
  };
  const addTask = (title: string): Promise<void> =>
    tasksService
      .addTask(title)
      .then((tasks) => {
        setTasks(tasks);
        toastNotification("success", Positions.TOP_LEFT);
      })

      .catch((error) => setErrors(error));

  const removeTask = (id: string) : Promise<void> =>
    tasksService
      .removeTask(id)
      .then(({ tasks }) => {
        setTasks(tasks);
        toastNotification("delete", Positions.TOP_RIGHT);
      })

      .catch(({ error }) => console.log(error));

  const changeStatus = (id: string, completed: boolean) : Promise<void> =>
    tasksService
      .changeStatus(id, completed)
      .then((tasks) => setTasks(tasks))
      .catch((error) => console.log(error));

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

  return {
    filter,
    error,
    changeFilter,
    addTask,
    removeTask,
    changeStatus,

    filteredTasks,
  };
};

export default useTodoList;
