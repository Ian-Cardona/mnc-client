import axios from 'axios';
import type { IFooter } from '../types/footer.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchFooter = async (): Promise<IFooter> => {
  const response = await axios.get<{ data: IFooter }>(`${API_BASE_URL}/footer`);
  return response.data.data;
}; 