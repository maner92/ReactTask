import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{task.title}</h2>
        <p>{task.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-accent" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
