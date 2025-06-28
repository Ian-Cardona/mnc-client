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
    <div className="w-full flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className={`animate-spin rounded-full border-b-2 border-yellow-500 mx-auto mb-4 ${sizeClasses[size]}`}></div>
        <p className="text-gray-600 font-lato">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 