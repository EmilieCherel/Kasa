import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import HousingSheet from './pages/housingSheet'
import About from './pages/about'

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement" element={<HousingSheet />} />
        <Route path="/a-Propos" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
