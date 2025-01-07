import { FaDesktop } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


type ProjetosProps = {
    title: string;
    image?: string;
    technologies: string[];
    description: string;
    repoLink: string;
    demoLink: string;
  };
  
  export default function Projetos({ 
    title, 
    image, 
    technologies, 
    description, 
    repoLink, 
    demoLink 
  }: ProjetosProps) {
    return (
      <section className="w-full flex justify-center items-center gap-10 text-start p-5 text-black">
        <article className="h-[100%] flex flex-col gap-4 ">
          {image && <img className="w-[500px]" loading="lazy" src={image} alt={`${title} screenshot`} />}
  
          <h3 className="font-bold text-2xl uppercase">{title}</h3>
  
          <ul className="flex justify-start flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <li 
                key={index} 
                className="bg-zinc-600/30 py-1 px-2 rounded-md text-xs select-none"
              >
                {tech}
              </li>
            ))}
          </ul>
  
          <p className="max-w-[500px] leading-7 h-[150px] overflow-x-auto">
            {description}
          </p>
  
          <div className="flex gap-3 text-xl font-bold bg-gradient-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">
            <a 
                className="flex items-center gap-2"
                href={repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Visitar o repositório de ${title}`}
            >
                Repositório <FaGithub className="text-purple-900"/>
            </a>
            <a 
                className="flex items-center gap-2"
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Ver demo de ${title}`}
            >
                Ver Demo <FaDesktop className="text-purple-900"/>
            </a>
          </div>
        </article>
      </section>
    );
  }
  