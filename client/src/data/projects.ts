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
    title: "Smart Home Control System",
    category: "IoT Devices",
    description: "Complete smart home control system with custom PCB design, embedded firmware, and mobile app interface.",
    technologies: ["Altium", "STM32", "BLE", "Fusion 360"],
    image: "https://images.unsplash.com/photo-1558002038-10058c430025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/smarthome-demo",
    githubUrl: "https://github.com/johndoe/smarthome-system"
  },
  {
    id: 2,
    title: "Industrial Monitoring System",
    category: "Industrial",
    description: "Rugged industrial sensor network for monitoring manufacturing equipment with real-time alerts and data analytics.",
    technologies: ["PCB Design", "ARM Cortex-M", "MQTT", "Node-RED"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4e2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/industrial-demo",
    githubUrl: "https://github.com/johndoe/industrial-monitoring"
  },
  {
    id: 3,
    title: "Precision Agriculture Drone",
    category: "Robotics",
    description: "Autonomous drone system for agricultural monitoring with custom sensor suite, control board, and data processing.",
    technologies: ["KiCad", "Embedded C++", "Fusion 360", "Telemetry"],
    image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/agdrone-demo",
    githubUrl: "https://github.com/johndoe/precision-ag-drone"
  },
  {
    id: 4,
    title: "Wearable Health Monitor",
    category: "Medical",
    description: "Low-power wearable device for continuous health monitoring with medical-grade sensors and wireless data transmission.",
    technologies: ["Altium", "BLE", "FreeRTOS", "Power Management"],
    image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/healthmonitor-demo",
    githubUrl: "https://github.com/johndoe/wearable-health-monitor"
  },
  {
    id: 5,
    title: "Custom CNC Controller",
    category: "Industrial",
    description: "High-precision CNC machine controller with custom motion control algorithms and advanced safety features.",
    technologies: ["PCB Design", "FPGA", "Motion Control", "Fusion 360"],
    image: "https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/cnc-demo",
    githubUrl: "https://github.com/johndoe/cnc-controller"
  },
  {
    id: 6,
    title: "Battery Management System",
    category: "Energy",
    description: "Advanced BMS for lithium battery packs with cell balancing, protection circuits, and thermal management.",
    technologies: ["Altium", "STM32", "Power Electronics", "Thermal Design"],
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/bms-demo",
    githubUrl: "https://github.com/johndoe/battery-management"
  },
  {
    id: 7,
    title: "Automated Pet Feeder",
    category: "Consumer",
    description: "Smart pet feeding system with custom mechanical design, portion control, and mobile app integration.",
    technologies: ["KiCad", "ESP32", "3D Printing", "Fusion 360"],
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/petfeeder-demo",
    githubUrl: "https://github.com/johndoe/pet-feeder"
  },
  {
    id: 8,
    title: "Open Source Dev Board",
    category: "Education",
    description: "Feature-rich development board for embedded systems education with comprehensive documentation and example projects.",
    technologies: ["Eagle", "ARM Cortex-M", "USB-C PD", "Education"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/devboard-demo",
    githubUrl: "https://github.com/johndoe/open-dev-board"
  },
  {
    id: 9,
    title: "Environmental Monitoring Station",
    category: "IoT Devices",
    description: "Solar-powered environmental monitoring station with multiple sensors, data logging, and LoRaWAN connectivity.",
    technologies: ["Altium", "RaspberryPi", "LoRaWAN", "Solar Power"],
    image: "https://images.unsplash.com/photo-1509391539104-9c17a5819d4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    demoUrl: "https://example.com/envstation-demo",
    githubUrl: "https://github.com/johndoe/environmental-station"
  }
];
