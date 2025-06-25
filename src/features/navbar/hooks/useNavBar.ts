import { useQuery } from '@tanstack/react-query';
import { fetchNavBar } from '../api/navbar.api';

export const useNavBar = () => {
  return useQuery({
    queryKey: ['navbar'],
    queryFn: fetchNavBar,
  });
}; 