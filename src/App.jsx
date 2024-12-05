import React from 'react'
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Header from './sections/Header.jsx';
import Faq from './sections/Faq.jsx';

const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Faq />
    </div>
  )
}

export default App

