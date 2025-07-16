import {
  mobile,
  phone,
  bartar,
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
  docker,
  starbucks,
  butterfly,
  chatbot,
  bazaar,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Phone Software Repair",
    icon: backend,
  },
  {
    title: "Unlocking Services",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Mobile",
    icon: phone
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Phone unlocking and repair Engineer",
    company_name: "Bartar Mobile repair shop",
    icon: bartar,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - dec 2024",
    points: [
      "I am the main engineer and Phone programmer of Bartar mobile service.",
      "I unlock more than 4000 phones and i repair solve problems of more than 15 customers daily.",
      "I create and edit diferents flashiing files in to solve problems for people in diferent brands of phone.",
      "I also have online services for phone programmers. ",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Butterfly",
    description:
      "Butterfly a social media platform that allows users to search, connect each other, share their photoes like instgram, like and comment and comucite to each other. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: butterfly,
    source_code_link: "https://github.com/GhulamHussainJafari/Butterfly",
  },
  {
    name: "Hussain Ai Chatbot",
    description:
      "Hussain Ai chatbot is a powerful chatbot that use api of chatgpt which users can ask questions from it and it answers very exact and quick .",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "chatgptapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/GhulamHussainJafari/Hussain-AI-Chatbot",
  },
  {
    name: "Digital Bazaar",
    description:
      "Digital Bazaar is a e-commerce web application that you can buy your need by credit card in easy way and advanced",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "payload cms",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bazaar,
    source_code_link: "https://github.com/GhulamHussainJafari/digital-bazaar",
  },
];

export { services, technologies, experiences, testimonials, projects };
