import { Task } from '../types';

const API_URL = "https://todo-backend-bmx9.onrender.com/tasks";

const taskService = {
  fetchTasks: async (): Promise<Task[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return res.json();
  },

  createTask: async (text: string): Promise<Task> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) throw new Error("Failed to create task");
    return res.json();
  },

  updateTask: async (_id: string, updates: Partial<Pick<Task, "text" | "completed">>): Promise<Task> => {
    const res = await fetch(`${API_URL}/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return res.json();
  },

  deleteTask: async (_id: string): Promise<{ success: boolean }> => {
    const res = await fetch(`${API_URL}/${_id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete task");
    return res.json();
  }
};

export default taskService;