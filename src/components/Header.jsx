// src/components/Header.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header({ activeSection, isScrolled }) {
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
        activeSection === href.slice(1)
          ? 'text-emerald-400'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
      {activeSection === href.slice(1) && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
          initial={false}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
          >
            Osman de León
          </motion.div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home">Inicio</NavLink>
            <NavLink href="#about">Sobre mí</NavLink>
            <NavLink href="#skills">Habilidades</NavLink>
            <NavLink href="#projects">Proyectos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com/Emadlgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.linkedin.com/in/osman-edlg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}