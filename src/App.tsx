import React from 'react';
import './App.css';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeaderThree from './components/HeaderThree';
import HeaderFour from './components/HeaderFour';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { About, Services, Contact} from './components/pages';
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
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
