import { Menu } from 'lucide-react';
import { useNavBar } from '../../features/navbar/hooks/useNavBar';

const NavBar = () => {
  const { data, isLoading, isError } = useNavBar();

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
        <div className="flex items-center gap-4 w-full justify-between">
          <div className="text-red-500 text-lg font-semibold">Failed to load navigation</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-semibold transition-colors shadow-md"
          >
            Retry
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm font-dm-sans sticky top-0 z-30">
      <div className="flex items-center gap-8">
        <div className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="block w-1.5 h-8 bg-yellow-400 rounded-full mr-2"></span>
          MNC
        </div>
        <div className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
          {data?.links.map((link) => (
            <a href={link.path} className="hover:text-yellow-500 transition-colors duration-150">{link.label}</a>
          ))}
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
        <button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-yellow-100 transition">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;