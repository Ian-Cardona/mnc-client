import { useQuery } from '@tanstack/react-query';
import { fetchAbout } from '../api/about.api';

export const useAbout = () => {
  return useQuery({
    queryKey: ['about', 'data'],
    queryFn: fetchAbout,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}; 