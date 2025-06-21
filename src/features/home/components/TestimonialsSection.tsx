const TestimonialsSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4 px-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[320px] transition-transform hover:scale-105">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Juan Dela Cruz</h3>
          <h4 className="text-md font-medium text-yellow-600 mb-2">Amazing Service!</h4>
          <p className="text-sm text-gray-700">
            MNC provided me with the best bookkeeping service I've ever had.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[320px] transition-transform hover:scale-105">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Maria Clara</h3>
          <h4 className="text-md font-medium text-yellow-600 mb-2">Excellent Support</h4>
          <p className="text-sm text-gray-700">
            Timely, professional, and always willing to go the extra mile.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[320px] transition-transform hover:scale-105">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Carlos Santos</h3>
          <h4 className="text-md font-medium text-yellow-600 mb-2">Reliable Partner</h4>
          <p className="text-sm text-gray-700">
            Their service helped me focus on growing my business worry-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
