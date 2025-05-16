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

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

export const personalInfo: PersonalInfo & { certificates: Certificate[] } = {
  name: "John Doe",
  title: "Embedded Systems & PCB Designer",
  email: "hello@johndoe.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, California",
  bio: {
    paragraph1: "With over 8 years of experience in embedded systems and PCB design, I specialize in creating innovative hardware solutions from concept to production. My expertise combines electronics engineering with mechanical design skills for complete prototyping solutions.",
    paragraph2: "I've worked with startups and established companies across various industries, developing custom embedded systems, IoT devices, and industrial control systems that meet specialized requirements while maintaining reliability and performance."
  },
  skills: [
    "PCB Design (Altium, KiCad)",
    "Embedded C/C++",
    "3D Design (Fusion 360)",
    "Rapid Prototyping"
  ],
  education: [
    {
      degree: "MSc Electrical Engineering",
      institution: "Stanford University",
      year: "2016"
    },
    {
      degree: "BSc Electronics Engineering",
      institution: "MIT",
      year: "2014"
    }
  ],
  certificates: [
    {
      name: "Certified Embedded Systems Professional",
      issuer: "IEEE",
      year: "2018"
    },
    {
      name: "Autodesk Fusion 360 Certified Professional",
      issuer: "Autodesk",
      year: "2019"
    },
    {
      name: "Advanced PCB Design & Manufacturing",
      issuer: "Altium",
      year: "2020"
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
      icon: "fas fa-microchip",
      url: "https://hackaday.io/johndoe"
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:hello@johndoe.com"
    }
  ],
  profileImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80",
  aboutImage: "https://images.unsplash.com/photo-1581092335337-8dca9d5e7bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200&q=80"
};
