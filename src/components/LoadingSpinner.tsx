interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner = ({ message = 'Loading...', size = 'md' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md mx-auto px-6">
        <div className={`animate-spin rounded-full border-b-2 border-yellow-500 mx-auto mb-6 ${sizeClasses[size]}`}></div>
        <h3 className="text-xl font-dm-sans font-medium text-gray-900 mb-3">
          Loading...
        </h3>
        <p className="text-gray-600 font-lato leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 