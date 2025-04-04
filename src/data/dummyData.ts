import { era } from "../types/era";
import { project } from "../types/project";

const projects: { [key: string]: project[] } = {
  firstSteps: [
    {
      title: "Hobby Website",
      description:
        "My first website very basic",
      technologies: ['HTML','CSS','JavaScript'],
      link: "https://shaughnanderson94.github.io/Hobby-project/",
      imageUrl: "/site1.png",
      altText: "Screenshot of a website giving information about nail art",
    },
    {
      title: "Project Gallery",
      description:
        "A portfolio I made to show off my first 4 projects. Like this site but much worse",
      technologies: ['HTML','CSS','JavaScript'],
      link: "https://shaughnanderson94.github.io/Project-gallery/",
      imageUrl: "/site2.png",
      altText: "A gallery showing off websites",
    },
    {
      title: "Film Database",
      description:
        "No actual database involved but its my first website with vaguely complicated JavaScript logic",
      technologies: ['HTML','CSS','JavaScript'],
      link: "https://shaughnanderson94.github.io/Movie--Database/",
      imageUrl: "/site3.png",
      altText: "a website where users can search for films",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Noughts and crosses if  you're a Brit. Building a game taught me a lot about logic",
      technologies: ['HTML','CSS','JavaScript'],
      link: "https://shaughnanderson94.github.io/Game/",
      imageUrl: "/site4.png",
      altText: "a website you can play tic tac toe",
    },
    {
      title: "Application Web Site",
      description:
        "A website showing off all my early work for my application to Founders and Coders spoilers I got on",
      technologies: ['HTML','CSS','JavaScript'],
      link: "https://shaughnanderson94.github.io/ApplicationWebsite/",
      imageUrl: "/site5.png",
      altText: "a website showing off my skill as a developer",
    },
  ],
  foundersAndCoders: [
    {
      title: "Desk Movement",
      description:
        "A demo for a website for people looking for remote work space in their area. Made as the final project for the course a website made with Next.js TypeScript and Supabase for data",
      technologies: ["Next", "TypeScript", "SQL"],
      link: "https://github.com/fac28/desk-mooovements",
      imageUrl: "/site7.png",
      altText: "A website displaying work spaces for remote workers traveling the world",
    },
    {
      title: "Private Servants",
      description:
        "A project to learn Next. A fake store front for buying politician's. Only runs locally",
      technologies: ["Next", "TypeScript", "SQL", "Node.js"],
      link: "https://github.com/fac28/private-servants",
      imageUrl: "/site9.png",
      altText: "A e-commerce website selling politicians",
    },
    {
      title: "Pet Programer",
      description:
        "A tomagachi like game about the life of a programer made in React",
      technologies: ["React", "javascript" , "Node.js"],
      link: "https://pet-programmer.netlify.app/",
      imageUrl: "/site8.png",
      altText: "A simple game interface where players select actions for a programer to perform",
    },
    {
      title: "TechYEScracy",
      description:
        "A website from a fake future where policies are decided by online voting used to learn authentication",
      technologies: ["SQL", "javascript" , "Node.js"],
      link: "https://pet-programmer.netlify.app/",
      imageUrl: "/images/fitness-app.png",
      altText: "A simple game interface where players select actions for a programer to perform",
    },
  ],
  enBloc: [
    {
      title: "Kyndly",
      description: "Ongoing open source charity project. A website for users to donate their used goods to refugees.",
      technologies: ["Next", "TypeScript", "SQL", "Node.js"],
      link: "https://cool-creponne-3e1272.netlify.app/",
      imageUrl: "/site6.png",
      altText: "A storefornt like interface for donating used goods",
    },
    {
      title: "Pathways",
      description: "A website made for the Gatsby charity group. Designed to help employers find T-level placements. Warning slow start up)",
      technologies: ["React", "Node.js", "javascript"],
      link: "https://pathways-front.netlify.app/",
      imageUrl: "/site10.png",
      altText: "A storefront like interface for donating used goods",
    },
    {
      title: "ILR Tool",
      description: "Cant make link till you have private version My first project with electron. Allows users to take their records and autmmaticly format them into a report file for the department of education ",
      technologies: ["electron", "javascript"],
      link: "https://github.com/username/image-recognition",
      imageUrl: "/site11.png",
      altText: "Icon for the department of edcuation",
    },
    {
      title: "Quiz Management System",
      description: "A tool for managing quizzes in a classroom ",
      technologies: ["Next", "TypeScript" , "SQL"],
      link: "https://fac-quizzes.netlify.app/",
      imageUrl: "/site12.png",
      altText: "a digital quiz taking up",
    },
  ],
};

export const eras: era[] = [
  {
    name: "First Steps",
    description:
      "Projects focused on building modern web applications and websites",
    projects: projects.firstSteps, 
  },
  {
    name: "Mobile Development Era",
    description: "Cross-platform mobile application development projects",
    projects: projects.mobileDevelopment,
  },
  {
    name: "Machine Learning Era",
    description:
      "Projects involving artificial intelligence and machine learning",
    projects: projects.machineLearning,
  },
];
