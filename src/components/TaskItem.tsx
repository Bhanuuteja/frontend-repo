import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (_id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onEdit, onDelete }) => (
  <li className="flex items-center bg-slate-700 rounded-lg px-4 py-3 shadow">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggleComplete(task._id)}
      className="mr-4 accent-sky-400"
    />
    <span className={`flex-1 ${task.completed ? 'line-through text-slate-400' : ''}`}>
      {task.text}
    </span>
    <button
      className="ml-2 px-2 py-1 text-xs bg-sky-500 hover:bg-sky-600 text-white rounded"
      onClick={() => onEdit(task)}
    >
      Edit
    </button>
    <button
      className="ml-2 px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
      onClick={() => onDelete(task)}
    >
      Delete
    </button>
  </li>
);

export default TaskItem;