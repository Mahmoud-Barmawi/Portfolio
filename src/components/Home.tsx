import { Education } from "./Education";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <Experience/>
      <Education/>
      <Projects />
      <Skills />
    </>
  );
};
