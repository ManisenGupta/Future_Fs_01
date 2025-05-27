import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Manisen Gupta - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;