'use client'

import { useState, useEffect } from 'react';
import { Task } from '../store/features/taskSlice';

/**
 * Props for the EditTaskModal component
 * @property task - The task being edited, null when not editing
 * @property isOpen - Whether the modal is visible
 * @property onClose - Function to call when closing the modal
 * @property onSave - Function to call when saving edits
 */
interface EditTaskModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

/**
 * EditTaskModal Component
 * 
 * Provides a modal interface for editing existing tasks
 * Manages its own state for the edited task data
 * Includes form validation and loading states
 */
export default function EditTaskModal({ task, isOpen, onClose, onSave }: EditTaskModalProps) {
  // Local state for the task being edited
  const [editedTask, setEditedTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    priority: 'Medium',
  });
  // Track saving state for UI feedback
  const [isSaving, setIsSaving] = useState(false);

  // Update local state when a new task is selected for editing
  useEffect(() => {
    if (task) {
      setEditedTask(task);
    }
  }, [task]);

  /**
   * Updates the edited task state when form inputs change
   * @param e - Change event from form inputs
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission and triggers the save callback
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Small delay for better UX
    setTimeout(() => {
      onSave(editedTask);
      setIsSaving(false);
    }, 300);
  };

  // Color mapping for different priority levels
  const priorityColors = {
    High: 'text-red-600 dark:text-red-400 border-red-300 dark:border-red-700',
    Medium: 'text-yellow-600 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700',
    Low: 'text-green-600 dark:text-green-400 border-green-300 dark:border-green-700',
  };

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm">
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden transform transition-all duration-300 ease-in-out animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Task
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Edit form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Title field */}
          <div className="mb-4">
            <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              id="edit-title"
              name="title"
              type="text"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
              required
            />
          </div>
          
          {/* Description field */}
          <div className="mb-4">
            <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              id="edit-description"
              name="description"
              rows={3}
              value={editedTask.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
            />
          </div>
          
          {/* Priority selection */}
          <div className="mb-6">
            <label htmlFor="edit-priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <div className="relative">
              <select
                id="edit-priority"
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 appearance-none pr-10 ${priorityColors[editedTask.priority]} transition-all duration-200`}
              >
                <option value="High" className="text-red-600 dark:text-red-400">High</option>
                <option value="Medium" className="text-yellow-600 dark:text-yellow-400">Medium</option>
                <option value="Low" className="text-green-600 dark:text-green-400">Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'}`}
            >
              {isSaving ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 