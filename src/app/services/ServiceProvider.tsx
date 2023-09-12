import React, { createContext } from "react";
import TasksService from "./TasksService";

export const ServiceContext = createContext({});

interface ServiceProviderProps {
  children?: React.ReactElement;
}

const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
  const services = {
    tasksService: new TasksService(),
  };

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
