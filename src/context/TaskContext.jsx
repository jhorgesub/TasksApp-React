import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
