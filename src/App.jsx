import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";
import { tasks as data } from "./Task";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: 4,
      description: "Tarea 4"
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
