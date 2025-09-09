import TekStay_TN from "./TekStay_TN.png";
import GETYOURGUIED_TN from "./GETYOURGUIED_TN.png";
import HEYBRAIN_TN from "./HEYBRAIN_TN.png";
import CRUD_TN from "./CRUD_TN.png";
import WheatherWeb_TN from "./WheatherWeb_TN.png";
import TO_DO_LIST_TN from "./TO_DO_LIST_TN.png";
import WHITE_SIM_TN from "./WhiteSimulation.png";
import STREAMIFY_TN from "./streamify.png";

export const projects = [
    {
    id: "streamify",
    name: "Streamify – Real-Time Communication Platform",
    description: "A scalable real-time language exchange platform with support for 1-on-1 and group video calls, screen sharing, live chat with typing indicators, reactions, and theme customization. Built using Stream API and modern tech stack. Role: Developed full-stack features, integrated real-time video and chat using Stream, implemented protected routes with JWT, and built dynamic theming with Zustand state management.",
    thumbnailUrl: STREAMIFY_TN,
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Zustand",
      "TanStack Query",
      "JWT",
      "Stream API"
    ],
    githubUrl: "https://github.com/Mahmoud-Barmawi/Streamify",
    liveDemoUrl: "https://streamify-p04e.onrender.com/" 
  },
  {
    id: "white-simulation",
    name: "White Simulation – Graduation Project",
    description:
      "An interactive desktop app for exploring physics and math concepts through simulations, algorithm visualizations, and a physics sandbox. Role: Developed the app using Electron.js, implemented physics simulations with matter.js, and built the backend for saving and sharing collaborative notes.",
    thumbnailUrl: WHITE_SIM_TN,
    technologies: [
      "Electron.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Matter.js",
      "Supabase",
    ],
    githubUrl: "https://github.com/Mahmoud-Barmawi/White_Simulation",
     liveDemoUrl: "https://drive.google.com/file/d/18qfl-8PuUUVdIV2vL9l-WVJHs8zEFIkH/view"
  },
  {
    id: "trekstay",
    name: "TrekStay – Accommodation Booking System (Backend)",
    description:
      "Built a backend solution for accommodation bookings with user management, secure authentication, and Cloudinary media handling.",
    thumbnailUrl: TekStay_TN,
    technologies: ["Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/TrekStay",
    liveDemoUrl: "https://documenter.getpostman.com/view/27540287/2s9Ykn81p6"
  },
  {
    id: "getyourguide",
    name: "GetYourGuide – Travel Exploration Platform",
    description:
      "Developed a responsive travel platform to search for cruises, flights, and hotels, using external APIs for real-time data.",
    thumbnailUrl: GETYOURGUIED_TN,
    technologies: ["React.js", "RapidAPI", "Axios", "Formik", "Bootstrap"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/GetYourGuide",
     liveDemoUrl: "https://drive.google.com/file/d/1uNSdrgwJSC8hVp3A5LoeFRB7FRSrbQpr/view"
  },
  {
    id: "heybrain",
    name: "HeyBrain – Course Management Platform",
    description:
      "Built a platform for managing and categorizing online courses with a clean and responsive UI.",
    thumbnailUrl: HEYBRAIN_TN,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/HeyBrain",
     liveDemoUrl: "https://mahmoud-barmawi.github.io/HeyBrain/"
  },
  {
    id: "full-crud",
    name: "Full CRUD Operations",
    description:
      "Created a full CRUD web application with user notifications using SweetAlert for better UX.",
    thumbnailUrl: CRUD_TN,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "SweetAlerts"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/CRUD",
     liveDemoUrl: "https://mahmoud-barmawi.github.io/CRUD/"
  },
  {
    id: "weather-app",
    name: "Weather Website",
    description:
      "Developed a real-time weather app using a public weather API and modern UI design.",
    thumbnailUrl: WheatherWeb_TN,
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/Weather-app",
     liveDemoUrl: "https://mahmoud-barmawi.github.io/Weather-app/"
  },
  {
    id: "to-do-list",
    name: "To-Do List App",
    description:
      "Designed a simple to-do list with persistent tasks using localStorage and dynamic DOM updates.",
    thumbnailUrl: TO_DO_LIST_TN,
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/Mahmoud-Barmawi/To_Do_List",
     liveDemoUrl: ""
  },
];
