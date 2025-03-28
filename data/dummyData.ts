import { era } from "../types/era";
import { project } from "../types/project";

const projects: { [key: string]: project[] } = {
  webDevelopment: [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      link: "https://github.com/username/portfolio",
      imageUrl: "/images/portfolio.png",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "https://github.com/username/ecommerce",
      imageUrl: "/images/ecommerce.png",
    },
  ],
  mobileDevelopment: [
    {
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      link: "https://github.com/username/fitness-app",
      imageUrl: "/images/fitness-app.png",
    },
  ],
  machineLearning: [
    {
      title: "Image Recognition System",
      description: "Deep learning model for real-time image classification",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      link: "https://github.com/username/image-recognition",
      imageUrl: "/images/ml-project.png",
    },
  ],
};

export const eras: era[] = [
  {
    name: "Web Development Era",
    description:
      "Projects focused on building modern web applications and websites",
    projects: projects.webDevelopment,
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
