import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../api/services.api';

export const useServices = () => {
  return useQuery({
    queryKey: ['services', 'data'],
    queryFn: fetchServices,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 5,
    retryDelay: 1000,
    refetchOnWindowFocus: true,
  });
}; 