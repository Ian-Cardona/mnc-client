import { useQuery } from '@tanstack/react-query';
import { fetchFooter } from '../api/footer.api';

export const useFooter = () => {
  return useQuery({
    queryKey: ['footer'],
    queryFn: fetchFooter,
  });
}; 