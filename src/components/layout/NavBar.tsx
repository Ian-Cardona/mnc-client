import { Menu } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold">MNC</div>
        <div className="hidden md:flex gap-6 text-lg text-gray-700">
          <a href="#home" className="hover:text-yellow-500">Services</a>
          <a href="#services" className="hover:text-yellow-500">About Us</a>
        </div>
      </div>
      <div>
        <button className="hidden md:block px-5 py-2 bg-yellow-300 text-white rounded-xl hover:bg-yellow-400 transition">
          Contact Us
        </button>
        <button className="md:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;