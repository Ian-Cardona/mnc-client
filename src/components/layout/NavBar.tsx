import { Menu, Facebook } from 'lucide-react';

// Interfaces for dynamic NavBar data
export interface INavLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface INavBar {
  logoText?: string;
  logoUrl?: string; // e.g. webp or other image
  links: INavLink[];
  cta?: {
    label: string;
    url: string;
    external?: boolean;
  };
}

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm font-dm-sans sticky top-0 z-30">
      <div className="flex items-center gap-8">
        <div className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="block w-1.5 h-8 bg-yellow-400 rounded-full mr-2"></span>
          MNC
        </div>
        <div className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
          <a href="#home" className="hover:text-yellow-500 transition-colors duration-150">Services</a>
          <a href="#services" className="hover:text-yellow-500 transition-colors duration-150">About Us</a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-nowrap items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-xl font-bold shadow hover:from-emerald-500 hover:to-emerald-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
        >
          Contact Us
          <Facebook size={20} />
          <span className="sr-only">Contact Us on Facebook</span>
        </a>
        <button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-yellow-100 transition">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;