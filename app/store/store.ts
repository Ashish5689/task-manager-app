import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';

/**
 * Configure and create the Redux store
 * Currently includes only the task slice reducer
 * More reducers can be added here as the application grows
 */
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// TypeScript helper types for type-safe usage of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 