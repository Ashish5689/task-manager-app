'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task, deleteTask, editTask } from './store/features/taskSlice';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';

/**
 * Home page component
 * Serves as the main container for the task management application
 * Handles task editing, deletion, and manages the edit modal state
 */
export default function Home() {
  const dispatch = useDispatch();
  // State for managing the edit modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for tracking the currently selected task for editing
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  /**
   * Opens the edit modal with the selected task
   * @param task - The task to be edited
   */
  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  /**
   * Dispatches the delete action for the specified task
   * @param id - The ID of the task to delete
   */
  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  /**
   * Saves the edited task and closes the modal
   * @param task - The updated task data
   */
  const handleSaveEdit = (task: Task) => {
    dispatch(editTask(task));
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  /**
   * Closes the edit modal without saving changes
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Application header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Task Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Organize your tasks efficiently and stay productive</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task form section - stays sticky on larger screens */}
          <div className="lg:sticky lg:top-8 h-fit">
            <TaskForm />
          </div>
          
          {/* Task list section */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Your Tasks
              </h2>
              <TaskList onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
            </div>
          </div>
        </div>

        {/* Edit task modal - rendered conditionally based on isModalOpen state */}
        <EditTaskModal 
          task={currentTask}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveEdit}
        />
      </div>
    </div>
  );
}
