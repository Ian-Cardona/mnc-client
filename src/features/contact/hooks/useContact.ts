import { useQuery } from '@tanstack/react-query';
import { fetchContact } from '../api/contact.api';

export const useContact = () => {
  return useQuery({
    queryKey: ['contact', 'data'],
    queryFn: fetchContact,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 5,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}; 