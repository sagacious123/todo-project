import { useEffect, useState } from "react";
import { useTasks } from "../context";
import toast, { Toaster } from "react-hot-toast";

export const TodoForm = () => {
  const [task, setTask] = useState("");
  const {
    addTask,
    selectedTask,
    tasks,
    setEditableTask,
    updateTask,
    deleteTask,
  } = useTasks();

  useEffect(() => {
    if (selectedTask) {
      setTask(tasks.filter((task) => task.id === selectedTask)[0]?.text);
    }
  }, [selectedTask, tasks]);

  const handleSubmitTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (task) {
      if (selectedTask) {
        updateTask(selectedTask, task);
        toast.success("Task updated!");
        setTask("");
        setEditableTask("");
        return;
      }
      addTask(task);
      toast.success("Task added!");
      setTask("");
      setEditableTask("");
      return;
    }

    toast.error("Please enter a valid input");
  };

  const handleDeleteTask = () => {
    deleteTask(selectedTask);
    toast.success("Task deleted!");
    setTask("");
    setEditableTask("");
  };

  return (
    <form onSubmit={handleSubmitTask} className="edit-task-form">
      <Toaster />
      <div className="task-input-group">
        <label htmlFor="task-name">Task Name</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="task-name"
          placeholder="Add a task"
        />
      </div>
      <div className="edit-task-btns">
        <button
          type="button"
          onClick={handleDeleteTask}
          className="primary-danger-btn btn-lg"
        >
          Delete
        </button>
        <button type="submit" className="primary-btn btn-lg">
          Save
        </button>
      </div>
    </form>
  );
};
