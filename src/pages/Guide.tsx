import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import { useGuides } from '../features/guides/hook/useGuides';
import { getErrorMessage, getLoadingMessage } from '../utils/errorHandling';

const Guides = () => {
  const { data, isLoading, isError, refetch } = useGuides();

  if (isLoading) return <LoadingSpinner message={getLoadingMessage('guides')} />;

  if (isError || !data) return (
    <ErrorState 
      message={getErrorMessage('guides')} 
      onRetry={() => { void refetch(); }}
      retryText="Retry"
    />
  );

  return (
    <div className="w-full">
      <section className="px-10 py-12 space-y-4 lg:py-24 lg:space-y-12">
        <div className="space-y-8 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:gap-12">
          <h1 className="text-6xl lg:text-[7rem] font-dm-sans font-medium">{data.hero.title}</h1>
          <h2 className="text-lg lg:text-3xl font-lato max-w-2xl lg:max-w-xl lg:ml-8">
            {data.hero.subtitle}
          </h2>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Guides & Forms</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.forms.map((form) => (
            <a
              key={form.url}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-emerald-700">{form.name}</h3>
              <p className="text-gray-600 mb-2">{form.description}</p>
              <span className="text-emerald-600 font-medium">Open Form &rarr;</span>
            </a>
          ))}
        </div>
      </section>
      <section className="w-full flex justify-center py-12">
        <a
          href="#contact"
          className="px-8 py-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl font-bold text-lg shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
        >
          {data.cta}
        </a>
      </section>
    </div>
  );
};

export default Guides;
