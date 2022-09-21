import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold mb-3">Create your task</h1>
        <input
          className="mb-3 w-full p-2 bg-slate-200 rounded-md"
          type="text"
          value={title}
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          className="mb-3 w-full p-2 bg-slate-200 rounded-md"
          cols="30"
          rows="10"
          value={description}
          placeholder="Enter your description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-700 text-white px-2 py-1 rounded-md ">
          Save
        </button>
      </form>
    </div>
  );
}
