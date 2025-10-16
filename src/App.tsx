import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AllProjects } from "./pages/AllProjects";
import { ProjectDetails } from "./pages/ProjectDetails";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Mahmoud Barmawi | Frontend Engineer</title>
        <meta
          name="description"
          content="I'm Creative and detail-oriented Frontend Engineer with hands-on experience in building responsive and user-friendly web applications. Eager to learn and grow by working on real-world projects and following modern development practices."
        />
        <meta
          name="keywords"
          content="Frontend Engineer, React Developer, TypeScript, Mahmoud Barmawi, Portfolio"
        />
        <meta name="author" content="Mahmoud Barmawi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mahmoudbarmawi.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mahmoud Barmawi Portfolio" />
        <meta
          property="og:title"
          content="Mahmoud Barmawi | Frontend Engineer"
        />
        <meta
          property="og:description"
          content="I'm Creative and detail-oriented Frontend Engineer with hands-on experience in building responsive and user-friendly web applications. Eager to learn and grow by working on real-world projects and following modern development practices."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzhww5qkc/image/upload/v1760544851/me_1_orbdmu.jpg"
        />
        <meta property="og:url" content="https://mahmoudbarmawi.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mahmoud Barmawi",
      "jobTitle": "Frontend Engineer",
      "url": "https://mahmoudbarmawi.vercel.app/",
      "image": "https://res.cloudinary.com/dzhww5qkc/image/upload/v1760544851/me_1_orbdmu.jpg",
      "sameAs": [
        "https://github.com/Mahmoud-Barmawi",
        "https://www.linkedin.com/in/mahmoud-barmawi/"
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-zinc-50 dark:bg-midnight  max-sm:min-w-full flex flex-col  antialiased">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
