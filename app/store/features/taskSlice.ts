import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Defines the structure of a Task in the application
 * @property id - Unique identifier for the task
 * @property title - The title/name of the task
 * @property description - Additional details about the task
 * @property priority - Task importance level: High, Medium, or Low
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
}

/**
 * Defines the state structure for the tasks feature
 * @property tasks - Array of Task objects
 */
interface TasksState {
  tasks: Task[];
}

/**
 * Initial state for the tasks slice
 * Starts with an empty array of tasks
 */
const initialState: TasksState = {
  tasks: [],
};

/**
 * Redux slice for task management functionality
 * Handles adding, editing, and deleting tasks
 */
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    /**
     * Adds a new task to the state
     * Automatically generates an ID and sorts tasks by priority
     */
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask = {
        id: Date.now().toString(), // Generate unique ID based on timestamp
        ...action.payload,
      };
      state.tasks.push(newTask);
      
      // Sort tasks by priority (High -> Medium -> Low)
      state.tasks.sort((a, b) => {
        const priorityOrder = { High: 0, Medium: 1, Low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    },
    
    /**
     * Updates an existing task with new values
     * Re-sorts the tasks array after updating
     */
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        
        // Re-sort tasks after editing
        state.tasks.sort((a, b) => {
          const priorityOrder = { High: 0, Medium: 1, Low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
      }
    },
    
    /**
     * Removes a task from the state by its ID
     */
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

// Export action creators for use in components
export const { addTask, editTask, deleteTask } = taskSlice.actions;
// Export reducer for store configuration
export default taskSlice.reducer; 