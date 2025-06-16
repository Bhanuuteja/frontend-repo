import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
  isLoading: boolean;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-3 py-2 border rounded-l focus:outline-none text-black"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 disabled:bg-blue-300"
        disabled={isLoading}
      >
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;