import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Plans from './pages/Plans/Plans';
import Trainers from './pages/Trainers/Trainers';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </BrowserRouter>
  )
}

export default App
