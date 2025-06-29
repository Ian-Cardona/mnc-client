import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  showIcon?: boolean;
}

const ErrorState = ({ 
  message = 'Something went wrong', 
  onRetry, 
  retryText = 'Try Again',
  showIcon = true,
}: ErrorStateProps) => {
  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md mx-auto px-6">
        {showIcon && (
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        )}
        <h3 className="text-xl font-dm-sans font-medium text-gray-900 mb-3">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 font-lato mb-6 leading-relaxed">{message}</p>
        {onRetry && (
          <button 
            onClick={onRetry} 
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 font-dm-sans font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            {retryText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState; 