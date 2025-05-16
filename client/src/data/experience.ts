export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    position: "Lead Hardware Engineer",
    company: "IoT Innovations Inc.",
    period: "2020 - Present",
    description: "Lead embedded systems design for industrial and consumer IoT products. Design PCBs from concept to production using Altium Designer. Create rapid prototypes with 3D printed enclosures using Fusion 360. Manage a team of 5 engineers and coordinate with manufacturing partners.",
    technologies: ["PCB Design", "Embedded Systems", "Fusion 360", "STM32", "IoT"]
  },
  {
    position: "Senior PCB Designer",
    company: "ElectroTech Solutions",
    period: "2018 - 2020",
    description: "Designed complex multi-layer PCBs for medical devices and industrial control systems. Implemented design for manufacturability (DFM) best practices. Created comprehensive documentation and worked closely with contract manufacturers for successful production runs.",
    technologies: ["Altium Designer", "KiCad", "Signal Integrity", "Power Electronics", "Medical Devices"]
  },
  {
    position: "Embedded Systems Engineer",
    company: "Smart Robotics Co.",
    period: "2016 - 2018",
    description: "Developed firmware for robotic control systems using C/C++. Designed sensor interface boards and motor control circuits. Created 3D models for prototype enclosures and mechanical parts. Participated in product validation and field testing.",
    technologies: ["Embedded C/C++", "ARM Cortex-M", "3D Modeling", "RTOS", "Robotics"]
  }
];
