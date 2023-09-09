import acdrinks from "../images/acdrinks.png";
import calculator from "../images/calculator.png";
import crypto from "../images/crypto.png";
import food from "../images/food.png";
import form from "../images/form.png";
import login from "../images/login.png";
import pokedex from "../images/pokedex.png";
import portafolio from "../images/portfolio.png";
import restserver from "../images/restserver.png";
import shopping from "../images/shopping.png";
import tesla from "../images/tesla.png";
import weatherapp from "../images/weatherapp.png";
import webserver from "../images/webserver.png";
import photos from "../images/photos.png";
import recipes from "../images/recipes.png";
import tech from "../images/tech.png";
import encuesta from "../images/encuesta.png";
import shekinah from "../images/shekinah.png";
import vape from "../images/vape.png";
import cars from "../images/cars.png";
import janam from "../images/janam.png";
import cv from "../images/cv-astro.png";

const portfolio = [
  {
    id: "15",
    imgUrl: janam,
    category: "Backend",
    title: "Janam Ecommerce",
    description:
      "A Fullstack Ecommerce built with React and Nest JS and that i give remote maintenance.",
    technologies: ["React", "Nest JS", "Docker", "Azure", "Postgres"],
    siteUrl: "https://www.janammuebles.com/",
  },
  {
    id: "22",
    imgUrl: cv,
    category: "Frontend",
    title: "CV App",
    description:
      "This is my online CV, built using the innovative Astro framework. Designed for fast loading and compatibility across all devices, this resume offers an exceptional user experience, allowing recruiters easy access to my professional background, skills, and portfolio.",
    technologies: ["Astro", "CSS", "Javascript"],
    siteUrl: "https://acdevcv.netlify.app/",
  },
  {
    id: "19",
    imgUrl: cars,
    category: "Frontend",
    title: "Cars Rental",
    description: "A Cars Rental App",
    technologies: ["React", "Next JS", "Tailwind"],
    siteUrl: "https://ac-cars-store.vercel.app/",
  },
  {
    id: "18",
    imgUrl: shekinah,
    category: "Frontend",
    title: "Church Web",
    description:
      "Web application of a church, where you can make donations, watch live sermon, etc.",
    technologies: ["React", "CSS", "Axios", "Vite"],
    siteUrl: "https://shekinahtc.netlify.app/",
  },
  {
    id: "14",
    imgUrl: encuesta,
    category: "Backend",
    title: "Internal SUrvey App",
    description:
      "Fullstack survey in which a score is sent according to a parameter to a database made with sql server.",
    technologies: ["NextJS", "SurveyJS", "CSS Module"],
    siteUrl:
      "https://encuesta-final.vercel.app/orden/encuesta3/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbWV0cm8iOiIyMDU4NDkiLCJpYXQiOjE2ODU5OTY4OTl9.Iu2zlv3b5paCDitRNQen7P2KFf5kCPZBEv6v0yZL6Zg",
  },
  {
    id: "02",
    imgUrl: tesla,
    category: "Frontend",
    title: "Tesla UI Clone",
    description: "A Clone of the Tesla UI Design",
    technologies: ["React", "Styled Components", "Vite"],
    siteUrl: "https://acteslaclone.netlify.app/",
  },
  {
    id: "21",
    imgUrl: vape,
    category: "Frontend",
    title: "Vape Shop",
    description:
      "E-commerce made with React and Node(Express) for the sale of vapes(currently working)",
    technologies: ["React", "CSS", "Vite", "Slick-carousel", "Express", "Node"],
    siteUrl: "https://acportfolio2023.netlify.app/",
  },
  {
    id: "01",
    imgUrl: food,
    category: "Frontend",
    title: "Food Recipes App",
    description: "App to search for food recipes",
    technologies: ["React", "Sass", "Axios", "Vite"],
    siteUrl: "https://acfood.netlify.app/",
  },
  {
    id: "17",
    imgUrl: tech,
    category: "Backend",
    title: "Fullstack Ecommerce",
    description: "Fullstack Ecommerce made with React and Strapi.",
    technologies: ["React", "Tailwind", "Axios", "Vite", "Strapi"],
    siteUrl: "https://github.com/acarrascocesa/techstore",
  },
  {
    id: "0",
    imgUrl: photos,
    category: "Frontend",
    title: "Photography Portfolio",
    description: "A resposive Photoggraphy Portfolio",
    technologies: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://randysphotos.netlify.app/",
  },
  {
    id: "03",
    imgUrl: crypto,
    category: "Frontend",
    title: "Crypto Trade",
    description:
      "App to convert cryptocurrencies to different currencies such as US, DOP, etc.",
    technologies: ["React", "Styled Components", "Axios", "Vite"],
    siteUrl: "https://accryptos.netlify.app/",
  },
  {
    id: "04",
    imgUrl: pokedex,
    category: "Frontend",
    title: "Pokedex APP",
    description:
      "Application to search for pokemon by name or type that shows you their properties, abilities, attacks, etc.",
    technologies: ["React", "CSS", "Axios", "Vite"],
    siteUrl: "https://acpokedex.netlify.app/",
  },
  {
    id: "16",
    imgUrl: recipes,
    category: "Frotend",
    title: "AA Recipes App",
    description: "App to search for food recipes",
    technologies: ["React", "Sass", "Axios", "Vite"],
    siteUrl: "https://aarecipes.netlify.app/",
  },
  {
    id: "05",
    imgUrl: login,
    category: "Frontend",
    title: "Google Login",
    description:
      "Google login page to log in with your google email using firebase.",
    technologies: ["React", "Styled Components", "Firebase", "Javascript"],
    siteUrl: "https://acgooglelogin.netlify.app/login",
  },
  {
    id: "06",
    imgUrl: portafolio,
    category: "Frontend",
    title: "Developer Portfolio",
    description: "Portfolio web landing page.",
    technologies: ["React", "CSS", "Mail JS", "Vite"],
    siteUrl: "https://acportfolioen.netlify.app/",
  },
  {
    id: "07",
    imgUrl: shopping,
    category: "Frontend",
    title: "Shopping Cart",
    description:
      "Shopping cart app where you can add products to a cart and pay for the items.",
    technologies: ["React", "CSS", "React Router", "Vite"],
    siteUrl: "https://acshoppingcart.netlify.app/",
  },
  {
    id: "08",
    imgUrl: acdrinks,
    category: "Frontend",
    title: "Drinks Finder",
    description: "Application to search for drink recipes.",
    technologies: ["React", "Bootstrap", "Vite"],
    siteUrl: "https://acdrinks.netlify.app/",
  },
  {
    id: "09",
    imgUrl: form,
    category: "Frontend",
    title: "CRUD Form",
    description:
      "Veterinary form where you can add patients with their symptoms.",
    technologies: ["React", "Tailwind", "Vite"],
    siteUrl: "https://petshopac.netlify.app/",
  },
  {
    id: "10",
    imgUrl: calculator,
    category: "Mobile",
    title: "Calculator App",
    description: "My firts app with flutter.",
    technologies: ["Flutter", "Dart", "Material App"],
    siteUrl: "https://github.com/acarrascocesa/fluttercalculator",
  },
  {
    id: "11",
    imgUrl: restserver,
    category: "Backend",
    title: "Node REST Server",
    description:
      "Rest server for the backend where you can add, update, delete users.",
    technologies: ["Node", "MongoDB", "Express"],
    siteUrl: "https://restserverac.up.railway.app/",
  },
  {
    id: "12",
    imgUrl: webserver,
    category: "Backend",
    title: "Node Webserver",
    description: "Webserver build with Node for the backend.",
    technologies: ["Node", "HTML", "Javascript", "CSS"],
    siteUrl: "https://node-webserver-ac.up.railway.app/",
  },
  {
    id: "13",
    imgUrl: weatherapp,
    category: "Frontend",
    title: "Weather App",
    description:
      "App to obtain the weather depending on your geographical location.",
    technologies: ["React", "Vite", "Javascript", "CSS"],
    siteUrl: "https://acweatherapp.netlify.app/",
  },
];

export default portfolio;
