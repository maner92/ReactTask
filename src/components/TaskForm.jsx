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
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 mb-4 p-10 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-400 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
