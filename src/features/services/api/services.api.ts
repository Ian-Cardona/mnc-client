import axios from 'axios';
import { API_BASE_URL } from '../../../lib/env';
import type { IServices } from '../types/services.type';

export const fetchServices = async (): Promise<IServices> => {
  const response = await axios.get<{ data: IServices }>(`${API_BASE_URL}/services`);
  return response.data.data;
};