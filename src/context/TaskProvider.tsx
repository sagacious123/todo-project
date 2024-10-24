import { createContext, useState, useContext, FC, ReactNode } from "react";
import { v4 } from "uuid";
import { Task, TaskContextType } from "./Types";

// 2
const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  setStatusTask: () => {},
  selectedTask: "",
  setEditableTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks")!) || []
  );

  const [selectedTask, setSelectedTask] = useState("null");

  const addTask = (text: string) => {
    let t = [
      ...tasks,
      {
        id: v4(),
        text,
        completed: false,
      },
    ];
    setTasks(t);
    localStorage.setItem("tasks", JSON.stringify(t));
  };

  const setStatusTask = (id: string, status: boolean) => {
    let t = tasks.map((t) => (t.id === id ? { ...t, completed: status } : t));
    setTasks(t);
    localStorage.setItem("tasks", JSON.stringify(t));
  };

  const updateTask = (id: string, text: string) => {
    let t = tasks.map((t) => (t.id === id ? { ...t, text } : t));
    setTasks(t);
    localStorage.setItem("tasks", JSON.stringify(t));
  };

  const deleteTask = (id: string) => {
    let t = tasks.filter((t) => t.id !== id);
    setTasks(t);
    localStorage.setItem("tasks", JSON.stringify(t));
  };

  const setEditableTask = (id: string) => {
    setSelectedTask(id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        setStatusTask,
        selectedTask,
        setEditableTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
