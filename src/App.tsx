import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AllProjects } from "./pages/AllProjects";
import { ProjectDetails } from "./pages/ProjectDetails";

const SITE_URL = "https://mahmoudbarmawi.vercel.app/";
const SITE_TITLE = "Mahmoud Barmawi | Software Engineer";
const SITE_DESCRIPTION =
  "Creative and detail-oriented Software Engineer with hands-on experience building responsive, user-friendly web applications and backend services. Eager to learn and grow by working on real-world projects and following modern development practices.";
const SITE_IMAGE =
  "https://res.cloudinary.com/dzhww5qkc/image/upload/v1760544851/me_1_orbdmu.jpg";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahmoud Barmawi",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  image: SITE_IMAGE,
  sameAs: [
    "https://github.com/Mahmoud-Barmawi",
    "https://www.linkedin.com/in/mahmoud-barmawi/",
  ],
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Software Engineer, Full-Stack Developer, Backend Developer, React, TypeScript, Node.js, Mahmoud Barmawi, Portfolio"
        />
        <meta name="author" content="Mahmoud Barmawi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mahmoud Barmawi Portfolio" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:url" content={SITE_URL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 max-sm:min-w-full flex flex-col antialiased">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<AllProjects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
