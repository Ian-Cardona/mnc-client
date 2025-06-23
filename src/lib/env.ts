/// <reference types="vite/client" />

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || 'n/a';
export const NODE_ENV: string = import.meta.env.MODE || 'n/a';
export const LOG_LEVEL: string = import.meta.env.VITE_LOG_LEVEL || 'info';