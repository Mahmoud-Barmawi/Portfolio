import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AllProjects } from "./pages/AllProjects";
import { ProjectDetails } from "./pages/ProjectDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 max-sm:min-w-full flex flex-col  antialiased">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
