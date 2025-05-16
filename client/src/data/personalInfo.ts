export interface SocialLink {
  icon: string;
  url: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Bio {
  paragraph1: string;
  paragraph2: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: Bio;
  skills: string[];
  education: Education[];
  socialLinks: SocialLink[];
  profileImage: string;
  aboutImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Frontend Developer",
  email: "hello@johndoe.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, California",
  bio: {
    paragraph1: "With over 8 years of experience in web development, I specialize in creating elegant, user-friendly interfaces that prioritize both aesthetics and functionality. My approach combines technical expertise with a keen eye for design.",
    paragraph2: "I've worked with startups and established companies across various industries, helping them build digital products that meet their business objectives while delighting their users."
  },
  skills: [
    "React & Next.js",
    "TailwindCSS",
    "UI/UX Design",
    "TypeScript"
  ],
  education: [
    {
      degree: "MSc Computer Science",
      institution: "Stanford University",
      year: "2016"
    },
    {
      degree: "BSc Software Engineering",
      institution: "MIT",
      year: "2014"
    }
  ],
  socialLinks: [
    {
      icon: "fab fa-github",
      url: "https://github.com/johndoe"
    },
    {
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/johndoe"
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/johndoe"
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:hello@johndoe.com"
    }
  ],
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80",
  aboutImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200&q=80"
};
