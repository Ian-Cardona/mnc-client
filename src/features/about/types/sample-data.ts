import type { IAbout } from './about.type';

// Sample data that the backend should return
export const sampleAboutData: IAbout = {
  hero: {
    title: 'About Us',
    subtitle: 'Professional bookkeeping services with over a decade of experience in financial management and accounting excellence.',
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      'The founder started her bookkeeping work in 2011 under a multinational private company. She worked in the said company for almost ten (10) years as an Accountant for a specific business unit and was later promoted to Finance Manager for two (2) years.',
      'During this time, she enhanced her knowledge and skills in financial and accounting aspects. She also took accounting courses and completed her Master\'s Degree in Business Administration.',
    ],
    highlight: {
      title: 'Established in 2019',
      description: 'With almost ten years of experience and educational attainment, she decided to establish MNC Bookkeeping Services PH in August 2019.',
      icon: 'Target',
    },
  },
  location: {
    title: 'Our Office',
    address: 'No. 56 JB Santos Street, Wawa Tangos, Navotas City, Philippines 1485',
    coordinates: {
      latitude: 14.6760,
      longitude: 120.9820,
    },
  },
  values: [
    {
      id: '1',
      title: 'Trust',
      description: 'Building strong relationships through referrals and consistent, reliable service delivery.',
      icon: 'Heart',
      order: 1,
    },
    {
      id: '2',
      title: 'Excellence',
      description: 'Upholding the highest standards in providing comprehensive accounting and consulting services.',
      icon: 'Zap',
      order: 2,
    },
    {
      id: '3',
      title: 'Protection',
      description: 'Protecting our clients\' interests through professional expertise and attention to detail.',
      icon: 'Shield',
      order: 3,
    },
    {
      id: '4',
      title: 'Flexibility',
      description: 'Applying an individualized approach to each client\'s unique business needs.',
      icon: 'Globe',
      order: 4,
    },
  ],
  approach: {
    title: 'Our Approach',
    description: 'With the technological expertise of the younger generation, combined with the knowledge of our professionally educated and experienced accountants and auditors, we have developed and improved our working methods and internal procedures.',
    members: [
      {
        id: '1',
        title: 'Experienced Team',
        description: 'Our founder brings over 10 years of experience in multinational companies, including roles as Accountant and Finance Manager.',
        icon: 'Users',
        tags: ['10+ Years', 'MBA', 'CPA'],
        order: 1,
      },
      {
        id: '2',
        title: 'Professional Services',
        description: 'Comprehensive accounting and consulting services that protect our clients\' interests and optimize their financial operations.',
        icon: 'Award',
        tags: ['Bookkeeping', 'Tax', 'Consulting'],
        order: 2,
      },
      {
        id: '3',
        title: 'Client Focus',
        description: 'We demonstrate flexibility and apply an individualized approach to each client, optimizing efficiency according to their business nature.',
        icon: 'Target',
        tags: ['Flexible', 'Tailored', 'Efficient'],
        order: 3,
      },
    ],
  },
  team: [
    {
      id: '1',
      title: 'Experienced Team',
      description: 'Our founder brings over 10 years of experience in multinational companies, including roles as Accountant and Finance Manager.',
      icon: 'Users',
      tags: ['10+ Years', 'MBA', 'CPA'],
      order: 1,
    },
    {
      id: '2',
      title: 'Professional Services',
      description: 'Comprehensive accounting and consulting services that protect our clients\' interests and optimize their financial operations.',
      icon: 'Award',
      tags: ['Bookkeeping', 'Tax', 'Consulting'],
      order: 2,
    },
    {
      id: '3',
      title: 'Client Focus',
      description: 'We demonstrate flexibility and apply an individualized approach to each client, optimizing efficiency according to their business nature.',
      icon: 'Target',
      tags: ['Flexible', 'Tailored', 'Efficient'],
      order: 3,
    },
  ],
  stats: [
    {
      id: '1',
      value: '10+',
      label: 'Years Experience',
      order: 1,
    },
    {
      id: '2',
      value: '2019',
      label: 'Company Founded',
      order: 2,
    },
    {
      id: '3',
      value: '100%',
      label: 'Referral Based',
      order: 3,
    },
    {
      id: '4',
      value: 'MBA',
      label: 'Educational Background',
      order: 4,
    },
  ],
  contact: {
    title: 'Ready to Work Together?',
    description: 'Let\'s discuss how we can help optimize your accounting, finances, and tax obligations according to the nature of your business.',
    ctaText: 'Get In Touch',
    ctaIcon: 'Mail',
  },
}; 