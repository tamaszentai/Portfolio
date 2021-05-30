import React from 'react'
import './Header.css'
import HeroImg from '../assets/Tamas.jpg'

const Header = () => {
  return (
    <section id='home'>
      <div className='header'>
        <h1>Tamas Zentai</h1>
        <h4>Web Developer</h4>
        <img src={HeroImg} alt='Tamas Zentai' />
      </div>
    </section>
  )
}

export default Header
