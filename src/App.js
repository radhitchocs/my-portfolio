import React, { useEffect } from 'react';
import './App.css'; // atau impor CSS yang diperlukan
import './output.css'; // atau impor CSS yang diperlukan
import './input.css'; // atau impor CSS yang diperlukan
import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortofolioSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      {/* Komponen lain akan ditempatkan di sini */}
    </div>
  );
}

export default App;
