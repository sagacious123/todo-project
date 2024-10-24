import { useTasks } from "context/index";
import { Task } from "context/Types";
import { FC } from "react";

interface TodoItemProps {
  task: Task;
}
export const TodoItem: FC<TodoItemProps> = ({ task }) => {

  const { setStatusTask, setEditableTask } = useTasks();

  // 3
  const checkTask = (e: { target: { checked: boolean } }) =>
    setStatusTask(task.id, e.target.checked);
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          defaultChecked={task.completed}
          onChange={checkTask}
          name=""
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={`todo-text ${task.completed ? "completed" : ""}`}
        >
          {task.text}
        </label>
      </div>
      <button
        className="secondary-btn btn-md"
        onClick={() => setEditableTask(task.id)}
      >
        Edit
      </button>
    </div>
  );
};
