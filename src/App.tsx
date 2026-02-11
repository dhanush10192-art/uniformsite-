import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import BlogDetailPage from './pages/BlogDetailPage';
import GalleryDetailPage from './pages/GalleryDetailPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Home />
            <Footer />
            <WhatsAppIcon />
          </>
        } />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<GalleryDetailPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
