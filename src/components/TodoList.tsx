import { TodoItem } from "./TodoItem";
import { useTasks } from "context/index";

export const TodoList = () => {
  const { tasks } = useTasks();
  return (
    <div className="todo-list">
      {tasks.length ? (
        tasks.map((task, index) => <TodoItem task={task} key={index} />)
      ) : (
        <h4>No Tasks</h4>
      )}
    </div>
  );
};
