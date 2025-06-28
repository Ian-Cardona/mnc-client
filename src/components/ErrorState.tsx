interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  retryText?: string;
}

const ErrorState = ({ 
  message = 'Something went wrong', 
  onRetry, 
  retryText = 'Try Again',
}: ErrorStateProps) => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 font-lato mb-4">{message}</p>
        {onRetry && (
          <button 
            onClick={onRetry} 
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors"
          >
            {retryText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState; 