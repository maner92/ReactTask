import { tasks as data } from "../data/Task";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
