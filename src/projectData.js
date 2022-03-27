import profileImg_1 from "./images/portfolio-website.png";
import profileImg_2 from "./images/design.png";
import profileImg_3 from "./images/final-project.png";

const projectData = [
  {
    id: 0,
    image: profileImg_1,
    title_1: "Portfolio Page",
    info_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus consectetur ea at temporibus aut veniam architecto consequatur quam ratione.",
    title_2: "What problem it solves",
    info_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    title_3: "Features",
    info_3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    liveLink: "https://adityamall.netlify.app/",
    githubLink: "https://github.com/iamadityamall/minimilist-portfolio",
  },
  {
    id: 1,
    image: profileImg_2,
    title_1: "Waste heat management system",
    info_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus consectetur ea at temporibus aut veniam architecto consequatur quam ratione.",
    title_2: "What problem it solves",
    info_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    title_3: "Features",
    info_3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    liveLink:
      "https://adityamall.netlify.app/projects/thermal-fluid/be-peltier-project.html",
    githubLink: "",
  },
  {
    id: 2,
    image: profileImg_3,
    title_1: "Peltier air cooler",
    info_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus consectetur ea at temporibus aut veniam architecto consequatur quam ratione.",
    title_2: "What problem it solves",
    info_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    title_3: "Features",
    info_3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus cupiditate fugiat voluptatum? Voluptatem possimus architecto perspiciatis, voluptatibus ratione repellendus?",
    liveLink:
      "https://adityamall.netlify.app/projects/thermal-fluid/diplo-pelt-project.html",
    githubLink: "",
  },
];

const otherProjectData = [
  {
    id: 0,
    icon: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
    title: "react projects",
    info: "using various state management hooks and framework, api's, map(), filter(), reduce()",
    addInfo: "create-react-app",
    liveLink: "https://am-rp.netlify.app/",
    githubLink: "https://github.com/iamadityamall/react-projects",
  },
  {
    id: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
    title: "javascript projects",
    info: "using es6 features, async await, fetch api, dom manipulation, classes",
    addInfo: "vanilla javascript",
    liveLink: "https://am-jp.netlify.app",
    githubLink: "https://github.com/iamadityamall/javascript-projects",
  },
  {
    id: 2,
    icon: "https://cdn1.vectorstock.com/i/1000x1000/33/10/ux-ui-design-icon-outline-vector-33243310.jpg",
    title: "frontend ui react projects",
    info: "consist of various components of website, navbar, cards, dashboard.",
    addInfo: "figma to code",
    liveLink: "https://am-feup.netlify.app",
    githubLink: "https://github.com/iamadityamall/front-end-ui-projects",
  },
];

export { projectData, otherProjectData };
