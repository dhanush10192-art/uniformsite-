import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Infrastructure from './components/Infrastructure';
import Blog from './components/Blog';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Infrastructure />
      <Blog />
      <About />
      <Pricing />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
