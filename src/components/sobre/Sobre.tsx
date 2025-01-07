import PerfilImg from "../perfilImg/PerfilImg"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function Sobre() {
    return (
      <section className="w-full lg:h-[80vh] md:h-[80vh] h-[100%] flex lg:flex-row flex-col justify-center items-center lg:gap-10 md:gap-5 gap-2 text-center lg:p-5 md:p-3 p-2 lg:px-0 md:px-0 px-5 text-black">
        <PerfilImg />
        <article className="flex lg:items-start items-center flex-col gap-5 lg:px-0 px-5">
          <h2 className="font-bold lg:text-start lg:text-7xl md:text-5xl text-3xl flex flex-col text-gray-800">
            Desenvolvedor 
            <span className="flex gap-2 bg-gradient-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">Front End <FaCode className="text-gray-800"/> </span>
          </h2>
          <h1 className="max-w-4xl text-start lg:text-xl md:text-2xl text-base lg:leading-8 md:leading-9 leading-7">
            Olá me chamo <strong>Lucas Gomes</strong>, Tenho 27 anos, Atualmente resido no rio de janeiro, Sou um desenvolvedor extremamente esforçado. Costumo dizer que 'O trabalho duro vence o dom natural.' Por isso, estou sempre me esforçando cada vez mais para ser um profissional melhor.
          </h1>
          <p className="max-w-4xl text-start lg:text-xl md:text-2xl text-base lg:leading-8 md:leading-9 leading-7">
            Possuo experiência como <strong>Front End</strong> utilizando <strong> Javascript, React, TypeScript, Tailwind Css, Bootstrap, e Sass</strong>, Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>.
          </p>
          <ul className="flex items-center gap-5 lg:text-xl md:text-xl text-base">
              <li>
                  <a className="flex items-center gap-1 hover:text-purple-900 transition-all duration-300 ease-in-out" href="https://github.com/lucasgomesdacruz" target="_blank" rel="noopener noreferrer" aria-label="Visitar GitHub de Lucas">Github <FaGithub /></a>
              </li>
              <li>
                  <a className="flex items-center gap-1 hover:text-purple-900 transition-all duration-300 ease-in-out" href="https://www.linkedin.com/in/lucaass1997/" target="_blank" rel="noopener noreferrer" aria-label="Visitar LinkedIn de Lucas">Linkedin <FaLinkedin /></a>
              </li>
          </ul>
        </article>
      </section>
    );
  }
  