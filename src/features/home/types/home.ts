export interface ITestimonial {
  testifier: string;
  title: string;
  message: string;
}

export interface IHome {
  id: string; 
  cta: string;
  heroTitle: string;
  heroContent: string;
  testimonials: ITestimonial[];
}