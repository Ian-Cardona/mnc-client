import axios from 'axios';
import type { IGuides } from '../types/guides.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchGuides = async (): Promise<IGuides> => {
  const response = await axios.get<{ data: IGuides }>(`${API_BASE_URL}/guides`);
  return response.data.data;
};