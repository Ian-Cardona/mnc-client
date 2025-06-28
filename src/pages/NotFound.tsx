import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="w-full" style={{ flex: 1 }}>
        <section className="mx-10 my-12 space-y-4 lg:my-24 lg:space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-[8rem] font-dm-sans font-medium text-gray-800">404</h1>
              <h2 className="text-2xl lg:text-4xl font-dm-sans font-medium text-gray-700">Page Not Found</h2>
              <p className="text-lg lg:text-xl font-lato text-gray-600 max-w-2xl mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl flex items-center gap-3 text-lg font-bold shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
              >
                <Home size={24} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 lg:px-12 lg:py-5 bg-gray-100 text-gray-700 rounded-2xl flex items-center gap-3 text-lg font-bold shadow-lg hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              >
                <ArrowLeft size={24} />
                Go Back
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound; 