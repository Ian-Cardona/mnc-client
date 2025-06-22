import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ReactQueryProvider from './providers/ReactQueryProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>,
);