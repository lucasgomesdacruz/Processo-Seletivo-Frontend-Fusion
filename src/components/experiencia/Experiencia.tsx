import Projetos from "../../components/projetos/Projetos";

import devmotor from "../../assets/devmotor.webp"
import ticket from "../../assets/ticketcontrole.webp"
import webcarros from "../../assets/webcarros.webp"
import { FaCode } from "react-icons/fa";

export default function Experiencia() {
    return (
      <section className="lg:h-[90vh] md:[100%] h-[100%] flex flex-col justify-center items-center gap-5 p-2">

          <h2 className="flex gap-2 text-start lg:text-6xl md:text-5xl text-4xl font-bold bg-gradient-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">Experiência <FaCode className="text-gray-800"/></h2>

          <section className="max-w-[90vw] flex lg:flex-row flex-col">
            <Projetos
              title="Ticket Controle"
              image={ticket}
              technologies={[
                "Next.js",
                "Prisma",
                "MongoDB",
                "NextAuth",
                "React Hook",
                "Tailwind CSS"
              ]}
              description="Ticket Controle é um sistema web desenvolvido com Next.js, Prisma ORM, MongoDB e TailwindCSS para gerenciar clientes e chamados de atendimento de forma eficiente e fácil."
              repoLink="https://github.com/lucasgomesdacruz/Chamados"
              demoLink="https://chamados-pi.vercel.app/"
            />

            <Projetos
              title="WebCarros"
              image={webcarros}
              technologies={[
                "React",
                "Typescript",
                "TailwindCss",
                "Firebase",
              ]}
              description="WebCarros é uma plataforma de e-commerce para compra e venda de carros, desenvolvida com React, TypeScript e Vite, Listagem de Carros: Veja todos os carros disponíveis para compra, Adicione e remova carros do seu Dashboard, Detalhes do Carro: Informações detalhadas sobre cada carro, Finalização de Compra: Conclua a compra dos carros atravéz do whatsapp do anunciante Autenticação: Cadastro e login de usuários usando Firebase."
              repoLink="https://github.com/lucasgomesdacruz/webCarros"
              demoLink="https://web-carros-dun.vercel.app/"
            />

            <Projetos
              title="Dev motors"
              image={devmotor}
              technologies={[
                "Next.js",
                "Typescript",
                "Sass",
                "CosmicJs",
                "REST API",
              ]}
              description="Desenvolvido utilizando Next.js e SCSS , consome conteúdo de um CMS usando a Cosmic API. O site oferece uma experiência de usuário suave com design responsivo e uma UI moderna. Ele exibe várias seções, como serviços, informações de contato e muito mais, todas preenchidas dinamicamente com dados da Cosmic. Ele inclui recursos como uma página inicial, página de serviços e detalhes de contato, com tratamento de erros adicional e estados de carregamento para garantir uma navegação perfeita."
              repoLink="https://github.com/lucasgomesdacruz/devmotors"
              demoLink="https://devmotors-teal.vercel.app/"
            />
          </section>
      </section>
    );
  }
  