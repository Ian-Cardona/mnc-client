import type { UseQueryResult } from '@tanstack/react-query';

/**
 * Standard error handling pattern for React Query hooks
 * Returns a standardized error state object
 */
export const useErrorHandling = <TData, TError>(
  query: UseQueryResult<TData, TError>,
) => {
  const { data, isLoading, isError, error, refetch } = query;

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    hasError: isError || !data,
  };
};

/**
 * Standard error messages for different page types
 */
export const ERROR_MESSAGES = {
  home: 'Failed to load homepage data. Please try again later.',
  about: 'Failed to load about information. Please try again later.',
  services: 'Failed to load services data. Please try again later.',
  contact: 'Failed to load contact information. Please try again later.',
  generic: 'Something went wrong. Please try again later.',
} as const;

/**
 * Standard loading messages for different page types
 */
export const LOADING_MESSAGES = {
  home: 'Loading homepage...',
  about: 'Loading about information...',
  services: 'Loading services...',
  contact: 'Loading contact information...',
  generic: 'Loading...',
} as const;

/**
 * Get appropriate error message for a page
 */
export const getErrorMessage = (page: keyof typeof ERROR_MESSAGES) => {
  return ERROR_MESSAGES[page] || ERROR_MESSAGES.generic;
};

/**
 * Get appropriate loading message for a page
 */
export const getLoadingMessage = (page: keyof typeof LOADING_MESSAGES) => {
  return LOADING_MESSAGES[page] || LOADING_MESSAGES.generic;
}; 