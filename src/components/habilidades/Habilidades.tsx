import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export default function Habilidades() {
    const skills = [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Javascript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-cyan-500" },
      { name: "ReactJs", icon: <RiReactjsLine />, color: "text-blue-400" },
      { name: "Typescript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "NextJs", icon: <RiNextjsFill />, color: "text-black" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    ];

    return (
      <section className="w-full lg:h-[100vh] md:h-[50vh] h-[100%] flex lg:flex-row flex-col justify-center items-center lg:gap-10 md:gap-5 gap-2 text-center lg:p-5 md:p-3 p-2 lg:px-0 md:px-5 px-5 text-black">
        <section className="max-w-4xl flex items-center flex-col gap-5">
          <h2 className="flex gap-2 text-start lg:text-6xl md:text-5xl text-4xl font-bold bg-gradient-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">Skills <FaCode className="text-gray-800"/></h2>
          <p className="text-start lg:text-xl md:text-2xl text-base lg:leading-8 md:leading-9 leading-7 lg:px-0 md:px-0 px-5">
            Essas são as principais ferramentas e tecnologias que utilizo no desenvolvimento de projetos, com foco em criar interfaces modernas, eficientes e responsivas no frontend.
          </p>
          <ul className="flex w-full lg:flex-row md:flex-wrap flex-wrap lg:gap-2 md:gap-3 gap-4 text-7xl lg:px-0 md:px-0 px-5">
            {skills.map((skill, index) => (
              <li
                key={index}
                className={`max-w-[90px] w-full flex justify-center items-center flex-col gap-1 ${skill.color}`}
              >
                {skill.icon}
                <span className="text-base text-black font-bold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
}