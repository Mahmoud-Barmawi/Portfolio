import { motion } from "motion/react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiSass,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "HTML",
    icon: <SiHtml5 />,
    textColor: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-800/20",
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    textColor: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-800/20",
  },
  {
    name: "SASS",
    icon: <SiSass />,
    textColor: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-800/20",
  },
  {
    name: "LESS",
    icon: <span className="text-lg font-bold">LESS</span>,
    textColor: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-800/20",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    textColor: "text-indigo-400",
    bgColor: "bg-teal-100 dark:bg-teal-800/20",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    textColor: "text-purple-700",
    bgColor: "bg-purple-100 dark:bg-purple-800/20",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-800/20",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    textColor: "text-blue-700",
    bgColor: "bg-blue-100 dark:bg-blue-800/20",
  },
  {
    name: "React",
    icon: <SiReact />,
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-800/20",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    textColor: "text-black dark:text-white",
    bgColor: "bg-neutral-200 dark:bg-neutral-800/50",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    textColor: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-800/20",
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    textColor: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-800/20",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    textColor: "text-zinc-700 dark:text-white",
    bgColor: "bg-zinc-200 dark:bg-zinc-800/50",
  },
  {
    name: "REST APIs",
    icon: <SiPostman />,
    textColor: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-800/20",
  },
  // Databases
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    textColor: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-800/20",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    textColor: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-800/20",
  },

  // Tools & Testing
  {
    name: "Git",
    icon: <SiGit />,
    textColor: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-800/20",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    textColor: "text-zinc-800 dark:text-zinc-200",
    bgColor: "bg-zinc-200 dark:bg-zinc-800/50",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="pb-10 px-4 max-w-[800px] mx-auto ">
      <h2 className="font-bold font-display sm:text-5xl text-3xl dark:text-[hsl(258,10%,80%)] text-[hsl(258,10%,40%)] tracking-tight mb-5">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto cursor-pointer">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.02, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl shadow-md dark:shadow-zinc-800  ${skill.bgColor}`}
          >
            <div className={`text-4xl ${skill.textColor}`}>{skill.icon}</div>
            <p className="font-medium text-sm text-zinc-800 dark:text-zinc-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
