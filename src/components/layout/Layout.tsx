import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import LoadingSpinner from '../LoadingSpinner';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const Layout = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet key={location.pathname} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 