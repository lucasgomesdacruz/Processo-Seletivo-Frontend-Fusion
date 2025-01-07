import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="h-[10vh] text-gray-800 lg:py-6 md:py-4 py-1">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex space-x-6 mt-4">
          <li>
            <a
              href="https://www.linkedin.com/in/lucaass1997/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="link para linkedin de lucas gomes"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="mailto:lucaass1997rp@gmail.com"
              className="hover:text-red-400"
              aria-label="link para email de lucas gomes"
            >
              <FaEnvelope size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5521992117045"
              className="hover:text-green-400"
              aria-label="link para whatsapp de lucas gomes"
            >
              <FaWhatsapp size={24} />
            </a>
          </li>
        </ul>
        <p className="text-xs text-gray-800 mt-4">&copy; {new Date().getFullYear()} Lucas Gomes. Todos direitos reservados.</p>
      </div>
    </footer>
  );
}
