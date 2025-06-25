import type { IHome } from '../types/home.type';

type Props = {
  data: IHome;
};

const TestimonialsSection = ({ data }: Props) => {
  const testimonials = [...data.testimonials, ...data.testimonials];

  return (
    <section className="w-full select-none py-16">
      <h2 className="text-3xl lg:text-5xl font-dm-sans font-bold text-center mb-10 text-gray-800">
        {data.testimonialsHeader}
      </h2>
      <div className="overflow-hidden w-full">
        <div
          className="flex space-x-6 lg:space-x-12 pb-4 px-4 lg:px-12"
          style={{
            width: testimonials.length * 340,
            animation: 'scroll-x 240s linear infinite',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-neutral-50 p-4 lg:p-6 rounded-xl shadow border-l-4 border-yellow-300 min-w-[260px] max-w-[260px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[360px] lg:max-w-[360px] flex flex-col"
              style={{ pointerEvents: 'none' }}
            >
              <span className="absolute top-3 left-3 text-yellow-300 text-xl select-none">“</span>
              <h3 className="font-dm-sans text-base md:text-lg font-bold text-gray-900 mb-0.5 mt-6">
                {testimonial.testifier}
              </h3>
              <h4 className="font-dm-sans text-xs md:text-sm font-medium text-yellow-600 mb-1">{testimonial.company}</h4>
              <p className="font-lato text-xs md:text-sm text-gray-700 mb-1">{testimonial.message}</p>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;
