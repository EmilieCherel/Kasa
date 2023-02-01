import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import HousingSheet from './pages/housingSheet';
import About from './pages/about';
import NotFound from './pages/notFound';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div {
      font-family: 'Montserrat', sans serif;
    }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement" element={<HousingSheet />} />
        <Route path="/a-Propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
