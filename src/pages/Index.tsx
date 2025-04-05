
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements that might be in view on page load
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <NavBar />
      
      <main>
        <Hero />
        
        <section id="about" className="scroll-reveal">
          <About />
        </section>
        
        <section id="services" className="scroll-reveal">
          <Services />
        </section>
        
        <section id="testimonials" className="scroll-reveal">
          <Testimonials />
        </section>
        
        <section id="philosophy" className="scroll-reveal">
          <Philosophy />
        </section>
        
        <section className="scroll-reveal">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
