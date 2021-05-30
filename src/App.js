import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import './App.css'

// import Toolbar from './components/Toolbar/Toolbar'
// import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const backdropClickhandler = () => {
    setSideDrawerOpen(false)
  }

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickhandler} />
  }

  return (
    <Router>
    <div style={{ height: '100%' }}>
      {backdrop}
      <SideNav click={drawerToggleClickHandler} clicked={sideDrawerOpen} close={backdropClickhandler}/>
      <Header />
      <Portfolio />
      <About />
      <Contact />

      {/* <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <main style={{ marginTop: '64px' }}>
        <p>Site content bullshit</p> */}
      {/* </main> */}
    </div>
    </Router>
  )
}

export default App
