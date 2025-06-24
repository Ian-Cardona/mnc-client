import axios from 'axios';
import type { IFooter } from '../types/footer.type';
import { API_BASE_URL } from '../../../lib/env';

// Fallback data for development
const fallbackFooterData: IFooter = {
  copyright: `© ${new Date().getFullYear()} MNC Bookkeeping Services. All rights reserved.`,
  address: '123 Main St, City, Country\nEmail: info@mnc.com\nPhone: (123) 456-7890',
  socials: [
    { platform: 'facebook', url: 'https://facebook.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
  ],
  links: [
    { label: 'About Us', path: '#about' },
    { label: 'Services', path: '#services' },
    { label: 'Contact', path: '#contact' },
    { label: 'External Link', path: 'https://example.com', external: true },
  ],
};

export const fetchFooter = async (): Promise<IFooter> => {
  try {
    const response = await axios.get<{ data: IFooter }>(`${API_BASE_URL}/footer`);
    return response.data.data;
  } catch {
    // Return fallback data if API is not available (development)
    console.warn('Footer API not available, using fallback data');
    return fallbackFooterData;
  }
}; 