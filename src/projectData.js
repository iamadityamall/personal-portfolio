import profileImg_1 from "./images/portfolio-website.png";
import profileImg_2 from "./images/design.png";
import profileImg_3 from "./images/final-project.png";

const projectData = [
  {
    id: 0,
    image: profileImg_1,
    title_1: "Portfolio Page",
    info_1:
      "Needed a presence on the internet, so that people can find my work easily. This is my first portfolio page.",
    title_2: "What problem it solves?",
    info_2:
      "Provide authenticity and credibility of my work as self taught developer. Make me available and searchable for new clients.",
    title_3: "Features",
    info_3:
      "Made with html, css and javascripts. some animations and transition features incorporated with delays.",
    liveLink: "https://adityamall-old.netlify.app/",
    githubLink: "https://github.com/iamadityamall/minimilist-portfolio",
  },
  {
    id: 1,
    image: profileImg_2,
    title_1: "Waste heat management system",
    info_1:
      "Build and designed a portable fridge cum mini oven, using principle of seeback effect of peltier plates.",
      title_2: 'What problem it solves?',
    info_2:
      "Since peltier plates dissipates a lot of waste heat, which justs adds up to enviroment temperature. We thought of utilizing this heat for heating purpose where pulses and welding rods can be kept dry in low humidity in rainy season ad cooling side used to store beverages.",
    title_3: "Features",
    info_3:
      "Temperature drop of 6 degree celsius from 24 to 19 deg. While the hot side rose to 55 to 60deg celsius with 30% humidity. Used cpu fans and heatsinks for heat transfer with thermocole for insulation",
    liveLink:
      "https://adityamall-old.netlify.app/projects/thermal-fluid/be-peltier-project.html",
    githubLink: "",
  },
  {
    id: 2,
    image: profileImg_3,
    title_1: "Peltier air cooler",
    info_1:
      "Build a peltier air cooler with a relative humidity of 80%.",
    info_2:
      "Carring a huge air conditoiner to work is not a feasible solution. So here we build an portable air cooler working on peltier plates which would consume less electricity, be portable and thus weights less for your pockets.",
    title_3: "Features",
    title_2: "What problems it solved?",
    info_3:
      "Obtained temperature drop of 4 degree celsius from 27 deg to 23 deg. relative humidity obtain from bulb test was around 80%.",
    liveLink:
      "https://adityamall-old.netlify.app/projects/thermal-fluid/diplo-pelt-project.html",
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
