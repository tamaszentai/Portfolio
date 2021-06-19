import React from 'react'
import { PortfolioData } from './PortfolioData'
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      {PortfolioData.map((data, index) => {
        return (
          <div className='project' key={index}>
            <h3>{data.title}</h3>
            <h5>{data.description}</h5>
            <a href={data.url} target="_blank"><img src={data.img} alt={data.alt}/></a>
            <p>{data.text}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Portfolio
