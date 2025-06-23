import { Link } from "react-router";
import { projects } from "../projects/myProject.ts";

export const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-[800px] mx-auto p-2">
        <p className="font-bold font-display sm:text-5xl text-3xl dark:text-[hsl(258,10%,80%)] text-[hsl(258,10%,40%)] tracking-tight mb-5">
          Projects
        </p>

        <div className="lg:px-0 px-5 grid sm:grid-cols-2 grid-cols-1 gap-14 sm:w-full w-[420px] max-w-full mx-auto mb-20">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index}>
              <Link
                to={`/projects/${project.id}`}
                className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-[1.04] rounded-2xl h-full overflow-hidden
                           backdrop-blur-lg bg-zinc-200 dark:bg-zinc-800/40 border border-zinc-500/40
                           shadow-[0px_1px_4px_-1px_rgba(0,0,0,0.08)] hover:shadow-[0px_4px_14px_rgba(0,0,0,0.12)]"
              >
                <div className="w-full">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 flex flex-col pb-6 px-6">
                  <span className="font-mono font-semibold text-xl dark:text-white text-zinc-900">
                    {project.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center ">
          <Link to="/projects">
            <button className=" cursor-pointer relative flex gap-x-1 font-inter-tight items-center dark:bg-orange-500  hover:dark:bg-orange-600  bg-zinc-900 hover:bg-zinc-950 text-sm dark:text-zinc-900 text-orange-500 font-semibold sm:px-8 px-4 py-2.5 rounded-md transition-colors">
              All Projects
            
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
