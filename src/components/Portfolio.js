import React from "react";
import { PortfolioData } from "./PortfolioData";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h1>PORTFOLIO</h1>
      <div className="project-wrapper">
        {PortfolioData.map((data, index) => {
          return (
            <div className="project" key={index}>
              <h3>{data.title}</h3>
              <a href={data.url} target="_blank">
                <img src={data.img} alt={data.alt} />
              </a>
              <p>{data.description}</p>
              <div className="technology-stack">
                <h5>Technologies:</h5>
                {data.technologies.map((tech, index) => {
                  return (
                    <img src={tech} key={index} alt="logo of technology"/>
                  )
                })}
              </div>
              <a href={data.url} target="_blank">
                {data.url}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
