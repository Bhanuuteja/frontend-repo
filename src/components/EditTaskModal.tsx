import React, { useState } from 'react';
import { Task } from '../types';

interface EditTaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedText: string) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, isOpen, onClose, onSave }) => {
  const [text, setText] = useState(task.text);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4 text-sky-400">Edit Task</h3>
        <input
          className="w-full p-2 rounded border mb-4 text-black"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            onClick={() => onSave(text)}
            disabled={!text.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;