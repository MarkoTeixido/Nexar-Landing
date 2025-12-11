import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="bg-gradient-noise" />
      <div className="bg-noise" />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;
