'use client'

import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

/**
 * Props for the Provider component
 */
interface ProviderProps {
  children: ReactNode;
}

/**
 * Redux Provider Component
 * 
 * Wraps the application with Redux context
 * Makes the Redux store available to all child components
 * Required for 'use client' components to access Redux state
 */
export default function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
} 