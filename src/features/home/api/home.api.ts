import axios from 'axios';
import type { IHome } from '../types/home.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchHome = async (): Promise<IHome> => {
  const response = await axios.get<{ data: IHome }>(`${API_BASE_URL}/home`);
  return response.data.data;
};