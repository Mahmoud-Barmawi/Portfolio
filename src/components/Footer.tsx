import { Link } from "react-router";
export const Footer = () => {
  return (
    <footer id="contact" className=" flex items-center justify-between h-12  border-0 border-t border-zinc-400">
      <div className=" xl:px-0 px-5 flex items-center justify-between w-full max-w-[1024px] mx-auto select-none ">
        <div >
          <Link to="">
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

        
      

        <div className="text-zinc-950 dark:text-zinc-100 flex items-center font-semibold">
           <a href="mailto:mahmoudbarmawi926@gmail.com" className="" title="Email me" >
                Contact
            </a>
        </div>
      </div>
    </footer>
  );
};
