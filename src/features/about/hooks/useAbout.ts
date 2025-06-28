import { useQuery } from '@tanstack/react-query';
import { fetchAbout } from '../api/about.api';

export const useAbout = () => {
  return useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout,
  });
}; 