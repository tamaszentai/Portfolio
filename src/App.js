import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import './App.css'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  return (
    <Router>
    <div style={{ height: '100%' }}>
      <SideNav click={drawerToggleClickHandler} clicked={sideDrawerOpen}/>
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
    </Router>
  )
}

export default App
