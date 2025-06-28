import { useQuery } from '@tanstack/react-query';
import { fetchHome } from '../api/home.api';

export const useHome = () => {
  return useQuery({
    queryKey: ['home', 'data'],
    queryFn: fetchHome,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}; 