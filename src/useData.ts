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

  const showToastMessage = () => {
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
    setErrors("");
  };
  const changeFilter = (value: string) => {
    setFilter(value);
  };
  const addTask = (title: string) => {
    tasksService
      .addTask(title)
      .then((tasks) => setTasks(tasks))
      .catch((error) => setErrors(error));
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

  return {
    tasks,
    filter,
    error,
    changeFilter,
    addTask,
    removeTask,
    changeStatus,
    showToastMessage,
  };
};

export default useData;
