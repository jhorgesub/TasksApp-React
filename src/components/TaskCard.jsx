import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white rounded-md p-3">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-800 px-2 py-1 mt-3 rounded-md hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
