export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  setStatusTask: (id: string, status: boolean) => void;
  selectedTask: string;
  setEditableTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
  deleteTask: (id: string) => void;
}
