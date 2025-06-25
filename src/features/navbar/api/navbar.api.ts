import axios from 'axios';
import type { INavBar } from '../types/navbar.types';
import { API_BASE_URL } from '../../../lib/env';

export const fetchNavBar = async (): Promise<INavBar> => {
  const response = await axios.get<{ data: INavBar }>(`${API_BASE_URL}/navbar`);
  return response.data.data;
}; 