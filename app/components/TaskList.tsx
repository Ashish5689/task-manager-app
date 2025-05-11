'use client'

import { useSelector } from 'react-redux';
import { Task } from '../store/features/taskSlice';
import { RootState } from '../store/store';
import TaskCard from './TaskCard';

/**
 * Props for the TaskList component
 */
interface TaskListProps {
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

/**
 * TaskList Component
 * 
 * Displays a list of tasks or a placeholder message if no tasks exist
 * Each task is rendered as a TaskCard component with edit/delete capabilities
 * The list includes staggered animation for a more polished user experience
 */
export default function TaskList({ onEditTask, onDeleteTask }: TaskListProps) {
  // Get tasks from Redux store
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  // Display empty state if no tasks exist
  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-lg shadow animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-gray-500 dark:text-gray-400 mb-2">No tasks yet</p>
        <p className="text-sm text-gray-400 dark:text-gray-500">Add one to get started!</p>
      </div>
    );
  }

  // Render list of task cards with staggered animation
  return (
    <div className="space-y-4 overflow-hidden">
      {tasks.map((task, index) => (
        <div 
          key={task.id} 
          className="animate-slide-in" 
          style={{ 
            animationDelay: `${index * 0.05}s`, // Staggered animation delay
          }}
        >
          <TaskCard
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        </div>
      ))}
    </div>
  );
} 