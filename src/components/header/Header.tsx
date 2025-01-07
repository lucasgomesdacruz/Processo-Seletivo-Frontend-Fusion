import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen && window.innerWidth <= 900) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="nav w-full lg:h-[10vh] md:h-[8vh] h-[7vh] flex lg:justify-around justify-between items-center px-6 text-gray-800">
      <h2 className="text-4xl font-bold bg-gradient-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">
        LG
      </h2>
      <nav ref={menuRef}>
        <ul
          className={`nav-list flex items-center gap-5 text-gray-800 text-lg lg:flex ${
            isMenuOpen
              ? "absolute top-[7vh] left-0 w-full flex-col bg-gradient-to-b from-indigo-600 to-purple-900 text-white p-6"
              : "hidden"
          }`}
        >
          <li>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={() => setIsMenuOpen(false)}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#experiencia" onClick={() => setIsMenuOpen(false)}>
              Experiência
            </a>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden" onClick={toggleMenu} role="button"
        aria-label="Abrir menu">
        <FiMenu className="text-3xl cursor-pointer" />
      </div>
    </header>
  );
}
