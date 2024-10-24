import { TodoForm } from "./TodoForm";

export const EditTaskComponent = () => {
  return (
    <div className="edit-task-component">
      <div className="edit-task-header">
        <div className="edit-task-header-container">
          <h1 className="edit-task-header-title">Edit Task</h1>
        </div>
      </div>
      <TodoForm />
    </div>
  );
};
