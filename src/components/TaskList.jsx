import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <div className="text-white bg-blue-950 p-4 rounded-md">
        <h1 className="text-white text-4xl font-bold text-center">
          No hay tareas aún
        </h1>
      </div>
    );
  }
  return (
    <div className="flex w-full justify-center flex-wrap">
      {tasks.map((task) => (
        <div key={task.id} className="mx-6 my-6">
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
