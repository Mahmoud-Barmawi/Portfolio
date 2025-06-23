export const About = () => {
  return (
    <section id="about" className="py-10 px-4 ">
      <div className="max-w-[800px] mx-auto ">
           <div className="mb-5 select-none">
            <p className="font-bold font-display sm:text-5xl text-3xl dark:text-[hsl(258,10%,80%)] text-[hsl(258,10%,40%)] tracking-tight">
              About Me
            </p>
          </div>
        <div className="relative rounded-xl p-3 backdrop-blur-lg bg-zinc-200  dark:bg-zinc-800/30 border border-zinc-500/50 ">
       

          <p className="text-lg text-zinc-900 dark:text-zinc-50 leading-relaxed  tracking-wide">
            I’m a Computer Engineering graduate from{" "}
            <span className="font-semibold text-orange-600  underline">
              <a
                href="https://www.najah.edu/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                An-Najah National University
              </a>
            </span>
            , located in Nablus, Palestine. My passion for technology began in
            high school and grew stronger throughout university. During my
            academic journey, I gained a variety of skills and found myself
            increasingly drawn to{" "}
            <span className="font-semibold text-orange-600 ">
              web development
            </span>
            . I started building interactive projects using modern frameworks
            and tools. For my graduation project, I developed a desktop
            application called{" "}
            <span className="font-semibold text-orange-600 ">
              "White Simulation"
            </span>
            . I’m passionate about crafting smooth, responsive user interfaces
            and continuously seek to grow by working on real-world projects and
            solving practical challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
