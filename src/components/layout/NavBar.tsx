import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavBar } from '../../features/navbar/hooks/useNavBar';
import ErrorState from '../ErrorState';
import mncLogo from '../../assets/mnc-logo.png';

const NavBar = () => {
  const { data, isLoading, isError } = useNavBar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  if (isLoading) {
    return (
      <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm font-dm-sans sticky top-0 z-30 min-h-[72px]">
        <div className="flex items-center gap-8 w-full animate-pulse">
          <div className="flex items-center gap-2">
            <span className="block w-1.5 h-8 bg-yellow-300/60 rounded-full mr-2"></span>
            <div className="h-8 w-20 bg-gray-200 rounded-full" />
          </div>
          <div className="hidden md:flex gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex h-10 w-32 bg-emerald-200 rounded-xl" />
          <div className="md:hidden h-10 w-10 bg-gray-200 rounded-lg" />
        </div>
      </nav>
    );
  }
  
  if (isError) {
    return (
      <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm font-dm-sans sticky top-0 z-30 min-h-[72px]">
        <ErrorState 
          message="Failed to load navigation" 
          onRetry={() => window.location.reload()}
          retryText="Retry"
        />
      </nav>
    );
  }

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm font-dm-sans sticky top-0 z-30">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-3xl font-extrabold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={mncLogo} alt="MNC Logo" className="h-8 w-auto" />
          <div className="hidden lg:flex items-center gap-2 transition-all duration-300 ease-in-out">
            <span>MNC</span>
            <div className="flex flex-col text-sm leading-tight transition-all duration-300 ease-in-out">
              <span>Bookkeeping</span>
              <span>Services</span>
            </div>
          </div>
          <span className="lg:hidden transition-all duration-300 ease-in-out">MNCBS</span>
        </Link>
        <div className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
          {data?.links.map((link) => {
            // Check if it's an internal route or external link
            const isInternalRoute = link.path.startsWith('/') && !link.path.startsWith('http');
            
            if (isInternalRoute) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-yellow-500 transition-colors duration-150 ${
                    isActiveLink(link.path) ? 'text-yellow-500 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors duration-150"
                >
                  {link.label}
                </a>
              );
            }
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={data?.cta?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-nowrap items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-xl font-bold shadow hover:from-emerald-500 hover:to-emerald-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
        >
          {data?.cta?.label}
        </a>
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-yellow-100 transition"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg md:hidden z-40">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-3">
              {data?.links.map((link) => {
                const isInternalRoute = link.path.startsWith('/') && !link.path.startsWith('http');
                
                if (isInternalRoute) {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`block text-lg font-medium transition-colors duration-150 py-2 border-b border-gray-100 last:border-b-0 ${
                        isActiveLink(link.path) ? 'text-yellow-500 font-semibold' : 'text-gray-700 hover:text-yellow-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-700 font-medium hover:text-yellow-500 transition-colors duration-150 py-2 border-b border-gray-100 last:border-b-0"
                    >
                      {link.label}
                    </a>
                  );
                }
              })}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <a
                href={data?.cta?.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-xl font-bold shadow hover:from-emerald-500 hover:to-emerald-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
              >
                {data?.cta?.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;