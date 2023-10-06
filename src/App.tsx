import React from 'react';
import './App.css';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeaderThree from './components/HeaderThree';
import HeaderFour from './components/HeaderFour';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
     <HeaderOne />
     <HeaderTwo />
     <HeaderThree />
     <HeaderFour />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about' element={<Services />} />
      <Route path='/about' element={<Contact />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
