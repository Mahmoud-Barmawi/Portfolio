import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Mail, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";
export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return <div>Error: ThemeContext not available</div>;
  const { theme, toggleTheme } = themeContext;
  let location = useLocation();
  let [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") setShowNavbar(true);
    else setShowNavbar(false);
  }, [location.pathname]);

  return (
    <nav className="w-full flex items-center justify-between sm:h-20 h-14 sm:border-0 border-b border-zinc-400">
      <div className=" xl:px-0 px-5 flex items-center justify-between w-full max-w-[1024px] mx-auto select-none ">
        <div className="">
          <Link to="/">
       

            <svg
              className="w-8 h-8 text-black dark:text-white"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={5}
                y={5}
                width={90}
                height={90}
                rx={15}
                stroke="currentColor"
                strokeWidth={8}
              />
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize={60}
                fill="currentColor"
              >
                M
              </text>
            </svg>
          </Link>
        </div>

        {showNavbar && (
          <div className="text-stone-900 dark:text-stone-50 ">
            <ul className="flex flex-row justify-center gap-4 font-medium max-sm:hidden">
              {["About", "Projects", "Skills"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLocaleLowerCase()}`}
                    className="shared-nav-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="text-center flex items-center justify-center gap-4 ">
          <a
            href="mailto:mahmoudbarmawi926@gmail.com"
            aria-label="Send email to Mahmoud"
            title="Email me"
            className={` ${
              theme === "dark" ? "text-zinc-50" : "text-zinc-950"
            } `}
          >
            <Mail className="sm:w-[25px]" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="cursor-pointer"
          >
            {theme === "dark" ? (
              // <Sun className="w-10 sm:w-[25px] text-zinc-50" />
              <Sun className="sm:w-[25px]  text-zinc-50" />
            ) : (
              // <Moon className="w-10 sm:w-[25px] text-zinc-950 " />
              <Moon className="sm:w-[25px] text-zinc-950" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
