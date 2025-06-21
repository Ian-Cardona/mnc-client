const ServicesSection = () => {
  return (
    <section className="w-full pt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-0">
        <div className="flex-1 bg-yellow-100 p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Processing</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside text-left">
            <li>Process optimization</li>
            <li>Compliance management</li>
            <li>Workflow automation</li>
          </ul>
        </div>
        <div className="flex-1 bg-blue-100 p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Registration</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside text-left">
            <li>Document preparation</li>
            <li>Fast-track registration</li>
            <li>Government coordination</li>
          </ul>
        </div>
        <div className="flex-1 bg-green-100 p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">HR &amp; Accounting Services</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside text-left">
            <li>Payroll processing</li>
            <li>Tax filing</li>
            <li>Employee onboarding</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;