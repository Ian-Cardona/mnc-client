/// <reference types="vite/client" />

// API Configuration
export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Environment
export const NODE_ENV: string = import.meta.env.MODE || 'development';

// Logging
export const LOG_LEVEL: string = import.meta.env.VITE_LOG_LEVEL || 'info';

// Validation
if (!import.meta.env.VITE_API_BASE_URL && import.meta.env.DEV) {
  console.warn('VITE_API_BASE_URL not set, using fallback URL for development');
}