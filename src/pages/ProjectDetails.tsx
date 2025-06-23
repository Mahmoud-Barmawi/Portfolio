import { Link, useParams } from "react-router";
import { projects } from "../projects/myProject";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-xl font-semibold text-red-500 dark:text-red-400">
          Project not found 😢
        </p>
      </motion.div>
    );
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  return (
    <motion.div
      className="container mx-auto px-4 py-12 max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-4 flex justify-start items-center">
        <Link to="/projects">
          <button className="cursor-pointer relative flex items-center gap-x-1 font-inter-tight dark:bg-orange-600 hover:dark:bg-orange-500 bg-zinc-900 hover:bg-zinc-950 text-sm dark:text-zinc-900 text-orange-500 font-semibold sm:px-8 px-4 py-2.5 rounded-md transition-colors">
            <span className="align-middle">Projects</span>
          </button>
        </Link>
      </div>
      <motion.div
        className="rounded-2xl shadow-lg dark:shadow-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-10"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.img
          src={project.thumbnailUrl}
          alt={project.name}
          className="rounded-xl mb-6 w-100  mx-auto object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          {project.name}
        </h1>

        <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
            Technologies Used:
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="inline-block bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-lg hover:opacity-90 transition"
          >
            View on GitHub <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
