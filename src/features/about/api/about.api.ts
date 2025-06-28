import axios from 'axios';
import type { IAbout } from '../types/about.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchAbout = async (): Promise<IAbout> => {
  const response = await axios.get<{ data: IAbout }>(`${API_BASE_URL}/about`);
  return response.data.data;
}; 