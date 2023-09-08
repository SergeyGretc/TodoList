import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "./ServiceProvider";
import TasksService from "./TasksService";
import { toast } from "react-toastify";
interface Services {
  TASKS_SERVICE: TasksService;
}

const useData = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setErrors] = useState("");
  const [filter, setFilter] = useState("all");
  const { TASKS_SERVICE: tasksService } = useContext(
    ServiceContext
  ) as Services;

  useEffect(() => {
    tasksService.fetchTasks().then((tasks) => setTasks(tasks));
  }, [tasksService]);

  const showToastMessage = (value: string) => {
    if (value === "success") {
      toast.success("Задача успешно создана", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (value === "delete") {
      toast.success("Задача успешно удалена", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const changeFilter = (value: string) => {
    setFilter(value);
  };
  const addTask = (title: string) => {
    tasksService
      .addTask(title)
      .then((tasks) => setTasks(tasks))
      .catch((error) => setErrors(error));
    console.log(error);
  };

  const removeTask = (id: string) => {
    tasksService
      .removeTask(id)
      .then(({ tasks }) => setTasks(tasks))
      .catch(({ error }) => console.log(error));
  };

  const changeStatus = (id: string, completed: boolean) => {
    tasksService
      .changeStatus(id, completed)
      ?.then((tasks) => setTasks(tasks))
      .catch(({ error }) => console.log(error));
  };
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
    showToastMessage,
    filteredTasks,
  };
};

export default useData;
