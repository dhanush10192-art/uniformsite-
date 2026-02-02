import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
