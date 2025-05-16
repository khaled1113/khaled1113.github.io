export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Apps",
    description: "A complete e-commerce solution with customer portal, inventory management, and analytics dashboard.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/johndoe/ecommerce-platform"
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Corporate",
    description: "Responsive corporate website with custom CMS integration for a financial services company.",
    technologies: ["Next.js", "Strapi", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/corporate-demo",
    githubUrl: "https://github.com/johndoe/corporate-website"
  },
  {
    id: 3,
    title: "Fitness Tracker App",
    category: "Web Apps",
    description: "Progressive web app for tracking workouts, nutrition, and fitness goals with data visualization.",
    technologies: ["Vue.js", "Firebase", "D3.js"],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/fitness-demo",
    githubUrl: "https://github.com/johndoe/fitness-tracker"
  },
  {
    id: 4,
    title: "Real Estate Platform",
    category: "Web Apps",
    description: "Property listing platform with advanced search, map integration, and virtual tours.",
    technologies: ["React", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/realestate-demo",
    githubUrl: "https://github.com/johndoe/real-estate-platform"
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Corporate",
    description: "Customizable analytics dashboard with real-time data visualization and reporting tools.",
    technologies: ["Angular", "Node.js", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/analytics-demo",
    githubUrl: "https://github.com/johndoe/analytics-dashboard"
  },
  {
    id: 6,
    title: "E-Learning Platform",
    category: "Web Apps",
    description: "Online learning platform with course creation tools, student tracking, and interactive content.",
    technologies: ["React", "Django", "AWS"],
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/elearning-demo",
    githubUrl: "https://github.com/johndoe/elearning-platform"
  },
  {
    id: 7,
    title: "Online Store",
    category: "E-commerce",
    description: "Feature-rich e-commerce store with product recommendations and secure checkout.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/store-demo",
    githubUrl: "https://github.com/johndoe/online-store"
  },
  {
    id: 8,
    title: "Portfolio Generator",
    category: "Web Apps",
    description: "Tool that helps developers create and customize professional portfolio websites.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/portfolio-demo",
    githubUrl: "https://github.com/johndoe/portfolio-generator"
  },
  {
    id: 9,
    title: "Marketplace App",
    category: "E-commerce",
    description: "Multi-vendor marketplace platform with integrated payment processing and seller dashboard.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/marketplace-demo",
    githubUrl: "https://github.com/johndoe/marketplace-app"
  }
];
