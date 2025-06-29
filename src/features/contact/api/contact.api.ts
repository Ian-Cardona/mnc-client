import axios from 'axios';
import type { IContact } from '../types/contact.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchContact = async (): Promise<IContact> => {
  const response = await axios.get<{ data: IContact }>(`${API_BASE_URL}/contact`);
  return response.data.data;
}; 