// import { API_BASE_URL } from './lib/env';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div style={{ flex: 1 }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
