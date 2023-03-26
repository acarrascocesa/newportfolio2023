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
import weatherapp from "../images/weatherapp.png";
import webserver from "../images/webserver.png";


const portfolio = [
    {
      id: "01",
      imgUrl: food,
      category: "Frontend",
      title: "Food Recipes App",
      description:
        "App to search for food recipes",
      technologies: ["React", "Sass", "Axios", "Vite"],
      siteUrl: "https://acfood.netlify.app/",
    },
    {
        id: "02",
        imgUrl: crypto,
        category: "Frontend",
        title: "Crypto Trade",
        description:
          "App to convert cryptocurrencies to different currencies such as US, DOP, etc.",
        technologies: ["React", "Styled Components", "Axios", "Vite"],
        siteUrl: "https://accryptos.netlify.app/",
      },
      {
        id: "03",
        imgUrl: pokedex,
        category: "Frontend",
        title: "Pokedex APP",
        description:
          "Application to search for pokemon by name or type that shows you their properties, abilities, attacks, etc.",
        technologies: ["React", "CSS", "Axios", "Vite"],
        siteUrl: "https://acpokedex.netlify.app/",
      },
      {
        id: "04",
        imgUrl: login,
        category: "Frontend",
        title: "Google Login",
        description:
          "Google login page to log in with your google email using firebase.",
        technologies: ["React", "Styled Components", "Firebase", "Javascript"],
        siteUrl: "https://acgooglelogin.netlify.app/login",
      },
      {
        id: "05",
        imgUrl: portafolio,
        category: "Frontend",
        title: "Developer Portfolio",
        description:
          "Portfolio web landing page.",
        technologies: ["React", "CSS", "Mail JS", "Vite"],
        siteUrl: "https://acportfolioen.netlify.app/",
      },
      {
        id: "06",
        imgUrl: shopping,
        category: "Frontend",
        title: "Shopping Cart",
        description:
          "Shopping cart app where you can add products to a cart and pay for the items.",
        technologies: ["React", "CSS", "React Router", "Vite"],
        siteUrl: "https://acshoppingcart.netlify.app/",
      },
      {
        id: "07",
        imgUrl: acdrinks,
        category: "Frontend",
        title: "Drinks Finder",
        description:
          "Application to search for drink recipes.",
        technologies: ["React", "Bootstrap", "Vite"],
        siteUrl: "https://acdrinks.netlify.app/",
      },
      {
        id: "08",
        imgUrl: form,
        category: "Frontend",
        title: "CRUD Form",
        description:
          "Veterinary form where you can add patients with their symptoms.",
        technologies: ["React", "Tailwind", "Vite"],
        siteUrl: "https://petshopac.netlify.app/",
      },
      {
        id: "09",
        imgUrl: calculator,
        category: "Mobile",
        title: "Calculator App",
        description:
          "My firts app with flutter.",
        technologies: ["Flutter", "Dart", "Material App"],
        siteUrl: "https://github.com/acarrascocesa/fluttercalculator",
      },
      {
        id: "10",
        imgUrl: restserver,
        category: "Backend",
        title: "Node REST Server",
        description:
          "Rest server for the backend where you can add, update, delete users.",
        technologies: ["Node", "MongoDB", "Express"],
        siteUrl: "https://restserverac.up.railway.app/",
      },
      {
        id: "11",
        imgUrl: webserver,
        category: "Backend",
        title: "Node Webserver",
        description:
          "Webserver build with Node for the backend.",
        technologies: ["Node", "HTML", "Javascript", "CSS"],
        siteUrl: "https://node-webserver-ac.up.railway.app/",
      },
      {
        id: "12",
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