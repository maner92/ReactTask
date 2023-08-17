import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Crea tu tarea</h2>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            />
            <textarea
              class="textarea textarea-bordered"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
