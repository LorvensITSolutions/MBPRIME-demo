import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About' // New About Section
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ProjectProgress from './components/ProjectProgress'
import EnquiryPopup from './components/EnquiryPopup'
import OwnersMessage from './components/OwnersMessage'
import ThreeDLayouts from './components/ThreeDLayouts'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Immediate attempt
    scrollToElement();

    // Delayed attempt for route transitions
    const timer = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

const Home = () => (
  <>
    <Hero />
    <OwnersMessage />
    <About />
    <ThreeDLayouts />
    <Amenities />
    <Testimonials />
    <Location />
  </>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <EnquiryPopup />
      <div className="app">
        <SEO />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/progress" element={<ProjectProgress />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
