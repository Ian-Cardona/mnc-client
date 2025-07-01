import { useQuery } from '@tanstack/react-query';
import { fetchGuides } from '../api/guides.api';

export const useGuides = () => {
  return useQuery({
    queryKey: ['guides', 'data'],
    queryFn: fetchGuides,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 5,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}; 