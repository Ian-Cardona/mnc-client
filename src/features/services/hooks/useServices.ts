import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../api/services.api';

export const useServices = () => {
  return useQuery({
    queryKey: ['services', 'data'],
    queryFn: fetchServices,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}; 