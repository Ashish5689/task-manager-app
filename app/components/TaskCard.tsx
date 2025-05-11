'use client'

import { Task } from '../store/features/taskSlice';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const priorityColors = {
    High: 'border-red-500 bg-gradient-to-r from-red-50 to-white dark:from-red-900/20 dark:to-gray-800',
    Medium: 'border-yellow-500 bg-gradient-to-r from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-800',
    Low: 'border-green-500 bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-800',
  };

  const priorityBadgeColors = {
    High: 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700',
    Medium: 'bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700',
    Low: 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700',
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 ${priorityColors[task.priority]} hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200 relative overflow-hidden`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{task.title}</h3>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${priorityBadgeColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {task.description || 'No description provided'}
      </p>
      
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-150 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        
        <button
          onClick={() => onDelete(task.id)}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 hover:shadow-md transition-all duration-150 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
} 