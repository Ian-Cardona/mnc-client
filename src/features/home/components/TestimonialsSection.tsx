import type { ITestimonial } from '../types/home.type';

type Props = {
  data: ITestimonial[];
};

const TestimonialsSection = ({ data }: Props) => {
  const testimonials = [...data, ...data];

  return (
    <section className="w-full select-none">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
      <div className="overflow-hidden w-full">
        <div
          className="flex space-x-6 pb-4 px-4"
          style={{
            width: testimonials.length * 340,
            animation: 'scroll-x 30s linear infinite',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[320px] max-w-[320px] transition-transform"
              style={{ pointerEvents: 'none' }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">{testimonial.testifier}</h3>
              <h4 className="text-md font-medium text-yellow-600 mb-2">{testimonial.title}</h4>
              <p className="text-sm text-gray-700">{testimonial.message}</p>
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
