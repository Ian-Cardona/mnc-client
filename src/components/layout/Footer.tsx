const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Control your finances now</h2>
          <p className="mb-4 text-sm text-gray-300">We'd love to hear from you.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black"
              required
            />
            <input
              type="tel"
              placeholder="Your contact number"
              className="px-4 py-2 rounded-md text-black"
              required
            />
            <textarea
              placeholder="Your message"
              className="px-4 py-2 rounded-md text-black resize-none"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-xl font-semibold mb-2">Company</h2>
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} MNC Bookkeeping Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
