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
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 mb-4 w-96 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mx-6 my-6">
          Crea tu tarea
        </h1>

        <section className="flex flex-col mx-6 ">
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
        </section>

        <button className="bg-green-600 rounded-md hover:bg-green-400 text-white sm:px-2 mx-6 my-6">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
