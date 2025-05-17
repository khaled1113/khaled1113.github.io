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
  name: "Khalid Waleed",
  title: "Embedded Systems & PCB Designer",
  email: "hello@johndoe.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, California",
  bio: {
    paragraph1: "I’m a multidisciplinary engineer with expertise in embedded systems, web development, and mechanical design. My hands-on experience in product prototyping and iterative development enables me to create innovative solutions that integrate hardware and software. I thrive in fast-paced, collaborative environments—especially startups—where creativity and technical skill drive meaningful impact. I'm always open to new opportunities and collaborations that push the boundaries of technology.",
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
      degree: "BSc Electronics Engineering",
      institution: "Mansoura Higher Institute for Engineering and Technology",
      year: "2021"
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
