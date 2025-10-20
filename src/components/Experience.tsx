import { experience } from "../Utils/myExperience.ts";

export const Experience = () => {
  return (
    <section id="experience  ">
      <div className="max-w-[800px] mx-auto px-4 z-10 -mt-24 ">
        <div className="mb-5 select-none">
          <h2 className="font-bold font-display sm:text-5xl text-3xl dark:text-[hsl(258,10%,80%)] text-[hsl(258,10%,40%)] tracking-tight">
            Experience
          </h2>
        </div>

        {experience.map((exp, index) => (
          <article
            key={index}
            className="relative rounded-xl p-6 mb-6 backdrop-blur-lg bg-zinc-200 dark:bg-zinc-800/30 border border-zinc-500/50 text-lg text-zinc-900 dark:text-zinc-50 leading-relaxed tracking-wide shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex flex-wrap items-center mb-2  text-xl">
              <h3 className="font-semibold">{exp.jobTitle} at&nbsp;</h3>
              <a
                href="https://orienteed.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-medium underline hover:text-orange-700"
              >
                {exp.companyName}
              </a>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <time>{exp.startDate}</time> - <time>{exp.endDate}</time>
            </p>

            <ul className="list-disc pl-6 space-y-1">
              {exp.whatILearned?.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
