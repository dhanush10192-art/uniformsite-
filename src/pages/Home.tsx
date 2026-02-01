import Hero from '../components/Hero';
import DesignIn3D from '../components/DesignIn3D';
import WhatWeDo from '../components/WhatWeDo';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Infrastructure from '../components/Infrastructure';
import Blog from '../components/Blog';
import About from '../components/About';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />

      {/* 3D Designer Section added as requested */}
      <DesignIn3D />

      {/* What We Do section */}
      <WhatWeDo />

      <Services />
      <Gallery />
      <Infrastructure />
      <Blog />
      <About />
      <Pricing />
    </main>
  );
};

export default Home;
