import React from "react";
import { EditTaskComponent, Sidebar } from "../components";

export const TodoPage = () => {
  return (
    <div className="todo-page">
      <div className="todo-page-container">
        <Sidebar />
        <EditTaskComponent />
      </div>
    </div>
  );
};
