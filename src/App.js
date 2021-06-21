import React, { useState } from 'react'

import './App.css'
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [isNav, isSetNav] = useState(true);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const navToggleHandler = () => {
    isSetNav(!isNav);
  }

  return (
    <div>
      <div className="wrapper">
      <Nav isNav={isNav} navToggleHandler={navToggleHandler}/>
      <SideNav click={drawerToggleClickHandler} clicked={sideDrawerOpen}/>
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
