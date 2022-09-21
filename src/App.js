import "./App.css";
import "./index.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="bg-zinc-800 h-full">
      <div className="container mx-auto p-10 h-screen">
        <TaskForm />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
