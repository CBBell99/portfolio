import tinyapp from "./images/tinyapp.png";
import githubFinder from "./images/githubFinder.png";
import houseMarketplace from "./images/house-marketplace.png";

const skillsList = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    name: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg",
    name: "Ruby",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
    name: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "TailwindCSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    name: "NodeJS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
    name: "PostgreSQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
    name: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    name: "Express.js",
  },
];

const projects = [
  {
    name: "TinyApp",
    liveSite: "",
    code: "https://github.com/CBBell99/tinyapp",
    description:
      "URL shortening service like tinyURL or bit.ly, used to demonstrate backend skills using Node.js and Express.js.",
    img: tinyapp,
  },
  {
    name: "Github Finder",
    liveSite: "https://github-finder-xi-two.vercel.app/",
    code: "https://github.com/CBBell99/github-finder",
    description:
      "Web application the makes a call to the Guthub API to display Github user statistics",
    img: githubFinder,
  },
  {
    name: "House Marketplace",
    liveSite: "https://house-marketplace-blush.vercel.app/",
    code: "https://github.com/CBBell99/house-marketplace",
    description:
      "React Web Application that allows users to buy/rent and sell houses.  Teaching tool for various libraries including firebase, leaflet and  toastify",
    img: houseMarketplace,
  },
  // {
  //   name: "Interview Scheduler",
  //   liveSite: "",
  //   code: "https://github.com/CBBell99/scheduler",
  //   description:
  //     "a SPA that allows a user to book an interview.  Used as a tool learn React",
  //   img: "",
  // },
  {
    name: "loyalTree",
    liveSite: "",
    code: "https://github.com/CBBell99/loyalTree",
    description:
      "Full-Stack Web Application for small businesses to conduct gift card transactions using QR codes and users to purchase digital gift cards",
    img: "",
  },
];

export { skillsList, projects };
