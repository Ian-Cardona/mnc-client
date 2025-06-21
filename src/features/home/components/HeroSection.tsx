import { Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="mx-3 my-12 space-y-4">
      <div className="space-y-8">
        <h1 className="text-6xl font font-dm-sans font-medium">Your Numbers. Our Focus.</h1>
        <h2 className="text-lg font-lato">
          We help achieve your financial objectives through professional,
          polite, and timely bookkeeping, tax services, and financial audits.
        </h2>
      </div>
      <button className="px-6 py-3 bg-yellow-300 rounded-2xl flex items-center gap-2">
        <Mail size={20} />
        Send us a message!
      </button>
    </section>
  );
};

export default HeroSection;
