import Pokemon from "../assets/pokemon.png";
import GleArt from "../assets/gleart.png";
import SpaceX from "../assets/spacex.png";
import BrainTeaser from "../assets/brainteaser.png";

export const PortfolioData = [
  {
    title: "Pokemon Memory Game",
    img: Pokemon,
    url: "https://memorygame-89.web.app/",
    alt: "Pokemon Memory Game Preview",
    description: "Fully responsive browser-based memory game with choosable difficulty, user-friendly UI, sounds, timer, round counter. In this project, I tried to mimic a mobile app in the browser using React. Working on this project helped solidify my understanding of React hooks and gain experience writing complex algorithms. The project is hosted on Google Firebase using Firebase CLI."
  },
  {
    title: "GleART",
    img: GleArt,
    url: "https://gleart.com",
    alt: "GleArt preview",
    description: 'Portfolio app that allows the owner to upload their work (arts) to show off.  The project uses Nuxt.js for Search Engine Optimization, Strapi headless CMS for managing content, various CSS frameworks with custom CSS, EmailJS for sending messages. The client-side hosted on Google Firebase using Firebase CLI, Strapi CMS is hosted on Google Cloud Platform. Working on this project helped solidify my understanding of Vue.js used by Nuxt and gain experience working with CMS and cloud technologies.'
  },
  {
    title: "SpaceX Launches Tracker",
    img: SpaceX,
    url: "https://spacex-6867e.firebaseapp.com/",
    alt: "SpaceX preview",
    description: "A single-page application where the user can check every SpaceX rocket launch in detail can sort the launches in ascending / descending order and filter the data by year. Pagination and modal view are also included. The data provided by a public API. Working on this project helped to solidify my understanding of Component-based approach) and gain experience working with REST APIs."
  },
  {
    title: "BrainTeaser",
    img: BrainTeaser,
    url: "https://brainteaser2.web.app/",
    alt: "BrainTeaser preview",
    description: "Successfully developed an educational full-stack game, with the capabilities to track correct answers to questions via a counter, plays 2 different sounds depending on user input, as well as the utilisation of a scoreboard to track/save the best results."
  },
  
];
