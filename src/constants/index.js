import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI-UX Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Development Program",
    company_name: "Newton School, Bengaluru",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    points: [
      "Proficiency in MERN stack: Building web applications using MongoDB, Express.js, React, and Node.js.",
      "Understanding of database management with MongoDB: Designing and managing databases using MongoDB's flexible document-based structure.",
      "Expertise in React framework: Creating interactive user interfaces with React for efficient front-end development.",
      "Full-stack problem-solving with MERN: Debugging and optimizing MERN applications for robust and seamless functionality.",
    ],
  },

  {
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    company_name: "Udemy-Jonas Schmedtmann",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - Dec 2022",
    points: [
      "Front-end development expertise: Creating responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.",
      "DOM manipulation: Master manipulating web page elements using JavaScript to create dynamic interactions.",
      "Asynchronous programming: Understand asynchronous operations, promises, and async/await for efficient non-blocking code execution.",
      "Modern JavaScript features: Explore advanced language features like modules, arrow functions, and destructuring assignments.",
    ],
  },
  {
    title: "The Ultimate React Course 2023: React, Redux & More",
    company_name: "Udemy-Jonas Schmedtmann",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Building dynamic web applications: Learn how to create interactive and responsive web applications using React and Redux.",
      "State management with Redux: Gain expertise in managing application state effectively using Redux.",
      "UI component development: Master the creation and reuse of reusable UI components in React.",
      "Integration with backend APIs: Learn how to integrate React applications with backend APIs to fetch and manipulate data.",
    ],
  },
  {
    title: "Tailwind CSS From Scratch | Learn By Building Projects",
    company_name: "Udemy-Brad Traversy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Project-based learning: Learn Tailwind CSS through 11 hands-on projects, gaining practical experience.",
      "Responsive UI design: Create visually appealing and responsive user interfaces using Tailwind CSS in real-world scenarios.",
      "Efficient utility classes: Utilize Tailwind CSS's extensive utility classes to streamline and expedite the styling process.",
      "Comprehensive skill development: Apply Tailwind CSS in 11 different projects, enhancing your web development proficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sagar proved me wrong.",
    name: "Ashutosh Naik",
    designation: "Web Developer",
    company: "Advantage Club",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sagar does.",
    name: "Gaurav Patil",
    designation: "Data Anaylist",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sagar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shubham Chauhan",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pig Game",
    description:
      "Experience strategic multiplayer dice fun with friends through our captivating Pig Game. JavaScript, HTML, and CSS combine to deliver engaging gameplay and a captivating UI design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://pig-game-sagar.vercel.app/",
  },
  {
    name: "Guess My Number",
    description:
      "Embark on a number guessing adventure with our interactive 'Guess My Number' game. Utilize your intuition and logic to crack the hidden number between 0 and 20, wrapped in a user-friendly experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://guess-my-number-game-sagar.vercel.app/",
  },
  {
    name: "Pricing Card",
    description:
      "Enhance your project's aesthetics with our pricing card Tailwind CSS UI component. Seamlessly display pricing plans, making your product's value clear. Elevate design effortlessly.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,

    source_code_link: "https://pricing-grid-sagar.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
