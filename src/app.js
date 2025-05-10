import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MidSection />
      <Footer />
    </div>
  );
}

export default App;
