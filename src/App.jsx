import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-700 h-screen">
      <div className="container p-10 mx-auto my-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
