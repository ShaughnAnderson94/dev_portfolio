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
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      link: "https://github.com/username/fitness-app",
      imageUrl: "/images/fitness-app.png",
      altText: "Mobile app interface showing workout tracking features and nutrition logging dashboard",
    },
  ],
  machineLearning: [
    {
      title: "Image Recognition System",
      description: "Deep learning model for real-time image classification",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      link: "https://github.com/username/image-recognition",
      imageUrl: "/images/ml-project.png",
      altText: "Demonstration of image recognition system identifying objects in real-time",
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
