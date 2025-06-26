import axios from 'axios';
import type { IFooter } from '../types/footer.type';
import { API_BASE_URL } from '../../../lib/env';

export const fetchFooter = async (): Promise<IFooter> => {
  const response = await axios.get<{ data: IFooter }>(`${API_BASE_URL}/footer`);
  return response.data.data;
};

// Contact form submission
export interface ContactFormData {
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<ContactFormResponse> => {
  const response = await axios.post<ContactFormResponse>(`${API_BASE_URL}/contact`, formData);
  return response.data;
}; 