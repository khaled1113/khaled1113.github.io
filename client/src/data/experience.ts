export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    position: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: "Lead frontend development for multiple client projects, focusing on responsive design, accessibility, and performance optimization. Mentored junior developers and collaborated with the design team to create cohesive user experiences.",
    technologies: ["React", "Redux", "TailwindCSS", "TypeScript"]
  },
  {
    position: "Frontend Developer",
    company: "WebSolutions Ltd.",
    period: "2018 - 2020",
    description: "Developed and maintained responsive websites and web applications for various clients. Implemented new features and optimized existing codebases for better performance and maintainability.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack"]
  },
  {
    position: "Junior Web Developer",
    company: "Digital Agency Co.",
    period: "2016 - 2018",
    description: "Assisted the development team in building responsive websites and implementing UI designs. Worked on bug fixes and small feature implementations while learning modern web development practices.",
    technologies: ["HTML5", "CSS3", "jQuery", "Bootstrap"]
  }
];
