import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import swal from "sweetalert";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-focus h-full">
      <NavBar title="Desarrollo Movil" />
      <div className="container p-10 mx-auto my-auto ">
        <TaskForm />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
