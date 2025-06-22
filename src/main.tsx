import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ReactQueryProvider from './app/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>,
);