import { useQuery } from '@tanstack/react-query';
import { fetchNavBar } from '../api/navbar.api';

export const useNavBar = () => {
  return useQuery({
    queryKey: ['navbar', 'data'],
    queryFn: fetchNavBar,
    staleTime: 1 * 60 * 1000,
    retry: 5,
    retryDelay: 1000,
    refetchOnWindowFocus: true,
  });
}; 