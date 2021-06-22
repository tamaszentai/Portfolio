import MemoryGame from "../assets/memorygame.png";
import GleArt from "../assets/gleart.png";
import SpaceX from "../assets/spacex.png";
import BrainTeaser from "../assets/brainteaser.png";
import Portfolio from "../assets/portfolio.png";
import EHR from "../assets/ehr.png";


export const PortfolioData = [
  {
    title: "Pokemon Memory Game",
    img: MemoryGame,
    url: "https://memorygame-89.web.app/",
    alt: "Pokemon Memory Game Preview",
    description:
      "Fully responsive browser-based memory game with choosable difficulty, user-friendly UI, sounds, timer, round counter. In this project, I tried to mimic a mobile app in the browser using React. Working on this project helped solidify my understanding of React hooks and gain experience writing complex algorithms. The project is hosted on Google Firebase using Firebase CLI.",
  },
  {
    title: "GleART",
    img: GleArt,
    url: "https://gleart.com",
    alt: "GleArt preview",
    description:
      "Portfolio app that allows the owner to upload their work (arts) to show off. The project uses Nuxt.js for Search Engine Optimization, Strapi headless CMS for managing content, various CSS frameworks with custom CSS, EmailJS for sending messages. The client-side hosted on Google Firebase using Firebase CLI, Strapi CMS is hosted on Google Cloud Platform. Working on this project helped solidify my understanding of Vue.js used by Nuxt and gain experience working with CMS and cloud technologies.",
  },
  {
    title: "SpaceX Launches Tracker",
    img: SpaceX,
    url: "https://spacex-6867e.firebaseapp.com/",
    alt: "SpaceX preview",
    description:
      "A single-page application where the user can check every SpaceX rocket launch in detail can sort the launches in ascending / descending order and filter the data by year. Pagination and modal view are also included. The data provided by a public API. Working on this project helped to solidify my understanding of Component-based approach) and gain experience working with REST APIs.",
  },
  {
    title: "Electronic Health Records",
    img: EHR,
    url: "https://github.com/tamaszentai/EHR",
    alt: "EHR preview",
    description: "This was a given coding challenge from a company to make a REST API only but I felt this is a good project so I developed a simple React based front-end to it. For this project I used Node.js, Express.js, PostgreSQL and React."
  },
  {
    title: "BrainTeaser",
    img: BrainTeaser,
    url: "https://brainteaser2.web.app/",
    alt: "BrainTeaser preview",
    description:
      "Successfully developed an educational full-stack game, with the capabilities to track correct answers to questions via a counter, plays 2 different sounds depending on user input, as well as the utilisation of a scoreboard to track/save the best results.",
  },
  {
    title: "Portfolio Website",
    img: Portfolio,
    url: "https://tamaszentai.dev",
    alt: "Portfolio preview",
    description:
      "This! website. Fully responsive website to showcase my other projects. Made with React and a lot of custom CSS.",
  },
];
