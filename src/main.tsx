
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Get Clerk publishable key from environment
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we have a valid Clerk key (not the placeholder and not undefined)
const hasValidClerkKey = PUBLISHABLE_KEY && 
                        PUBLISHABLE_KEY !== "pk_test_your_key_here" && 
                        PUBLISHABLE_KEY.startsWith('pk_');

// Render the app with or without Clerk based on key availability
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);

if (hasValidClerkKey) {
  // Render with Clerk authentication when a valid key is present
  root.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  );
} else {
  // Render without Clerk when no valid key is available
  console.warn("No valid Clerk publishable key found. Authentication is disabled.");
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
