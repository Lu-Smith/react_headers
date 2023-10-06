import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
//components
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeaderThree from './components/HeaderThree';
import HeaderFour from './components/HeaderFour';
import Footer from './components/Footer';
//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
//theme
import { createContext } from 'react';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<null | ThemeProps>(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <HeaderOne />
        <HeaderTwo toggleTheme={toggleTheme} theme={theme} />
        <HeaderThree toggleTheme={toggleTheme} theme={theme}  />
        <HeaderFour />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
