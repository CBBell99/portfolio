import tinyapp from "./images/tinyapp.png";
import githubFinder from "./images/githubFinder.png";
import houseMarketplace from "./images/house-marketplace.png";
import loyaltree from "./images/loyaltree.png";
import pdfmerge from './images/pdfmerge.png';

const projects = [
  {
    name: 'PDF Merge',
    // liveSite:
    code: 'https://github.com/CBBell99/pdf-merge',
    img: pdfmerge,
  },
  {
    name: 'loyalTree',
    // liveSite: 'https://loyal-tree-o4fwg0lqd-cbbell99.vercel.app/',
    code: 'https://github.com/CBBell99/loyalTree',
    description:
      'Full-Stack Web Application for small businesses to conduct gift card transactions using QR codes and users to purchase digital gift cards',
    img: loyaltree,
  },
  {
    name: 'Github Finder',
    liveSite: 'https://github-finder-xi-two.vercel.app/',
    code: 'https://github.com/CBBell99/github-finder',
    description:
      'Web application the makes a call to the Github API to display Github user statistics',
    img: githubFinder,
  },
  {
    name: 'House Marketplace',
    liveSite: 'https://house-marketplace-blush.vercel.app/',
    code: 'https://github.com/CBBell99/house-marketplace',
    description:
      'React Web Application that allows users to buy/rent and sell houses.  Teaching tool for various libraries including firebase, leaflet and  toastify',
    img: houseMarketplace,
  },
  // {
  //   name: "Interview Scheduler",
  //   liveSite: "",
  //   code: "https://github.com/CBBell99/scheduler",
  //   description:
  //     "a SPA that allows a user to book an interview.  Used as a tool to learn React",
  //   img: "",
  // },
  {
    name: 'TinyApp',
    code: 'https://github.com/CBBell99/tinyapp',
    description:
      'URL shortening service like tinyURL or bit.ly, used to demonstrate backend skills using Node.js and Express.js.',
    img: tinyapp,
  },
];

const socials = {
  github: 'https://github.com/CBBell99',
  instagram: 'https://www.instagram.com/humperpump/',
  linkedin: 'https://www.linkedin.com/in/chrisbeckertonbell/',
};
export { projects, socials };
