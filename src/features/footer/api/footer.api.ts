import axios from 'axios';
import type { IFooter, IFooterFormInput } from '../types/footer.type';
import { API_BASE_URL } from '../../../lib/env';
import { validateAndSanitizeFooterForm } from '../../../utils/validation';

export const fetchFooter = async (): Promise<IFooter> => {
  const response = await axios.get<{ data: IFooter }>(`${API_BASE_URL}/footer`);
  return response.data.data;
};

export const submitContactForm = async (formData: IFooterFormInput): Promise<IFooterFormInput> => {
  const validationResult = validateAndSanitizeFooterForm(formData);
  if (!validationResult.success) {
    throw new Error(JSON.stringify(validationResult.errors));
  }
  const response = await axios.post<IFooterFormInput>(`${API_BASE_URL}/footer/email`, validationResult.data);
  return response.data;
}; 