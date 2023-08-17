import swal from "sweetalert";
import { tasks as data } from "../data/Task";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext(null);

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);

  function createTask(task) {
    swal({
      title: "Good job!",
      text: "Task created!",
      icon: "success",
      button: "Close!",
    });
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your task has been deleted!", {
          icon: "success",
        });
        setTasks(tasks.filter((task) => task.id != taskId));
      } else {
        swal("Your task is safe!");
      }
    });
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
