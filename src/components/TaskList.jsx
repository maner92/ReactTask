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
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
