import { Mail } from 'lucide-react';
import type { IHome } from '../types/home.type';

type Props = {
  data: IHome
};

const HeroSection = ({ data }: Props) => {
  return (
    <section className="mx-10 my-12 space-y-4 lg:my-24 lg:space-y-12">
      <div className="space-y-8 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:gap-12">
        <h1 className="text-6xl lg:text-[10rem] font-dm-sans font-medium">{data.heroTitle}</h1>
        <h2 className="text-lg lg:text-3xl font-lato max-w-2xl lg:max-w-xl lg:ml-8">
          {data.heroContent}
        </h2>
      </div>
      <button
        className="px-4 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl flex items-center gap-1 md:gap-2 lg:gap-3 text-sm md:text-base lg:text-lg font-bold shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
        onClick={() => {
          const scrollToFooterForm = () => {
            const form = (window as Window & { footerEmailForm?: HTMLFormElement | null }).footerEmailForm;
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' });
              const emailInput = form.querySelector('input[type="email"]');
              if (emailInput instanceof HTMLInputElement) {
                emailInput.focus();
              }
              return true;
            }
            return false;
          };
          if (!scrollToFooterForm()) {
            let elapsed = 0;
            const interval = setInterval(() => {
              elapsed += 100;
              if (scrollToFooterForm() || elapsed >= 1000) {
                clearInterval(interval);
              }
            }, 100);
          }
        }}
      >
        <Mail size={24} />
        {data.cta}
      </button>
    </section>
  );
};

export default HeroSection;
