import { Mail } from 'lucide-react';
import type { IServicesCTA } from '../types/services.type';

interface CTASectionProps {
  cta: IServicesCTA;
}

const CTASection = ({ cta }: CTASectionProps) => {
  return (
    <section className="mx-10 my-16 lg:my-24">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium mb-6">{cta.title}</h3>
        <p className="text-lg lg:text-xl font-lato text-gray-700 mb-8">
          {cta.description}
        </p>
        <button
          className="px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl flex items-center gap-3 text-lg font-bold shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 mx-auto"
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
                if (scrollToFooterForm() || elapsed > 2000) {
                  clearInterval(interval);
                }
              }, 100);
            }
          }}
        >
          {cta.buttonText}
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTASection; 