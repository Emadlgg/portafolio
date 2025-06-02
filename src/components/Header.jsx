import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Portafolio
            </a>
          </motion.div>

          <nav className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-6"
            >
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Sobre mí
              </a>
              <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Habilidades
              </a>
              <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Proyectos
              </a>
              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Contacto
              </a>
              <div className="flex space-x-4">
                <a href="https://github.com/Emadlgg/" target="_blank" rel="noopener noreferrer">
                  <FiGithub className="hover:text-indigo-600 dark:hover:text-indigo-400 transition" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/osman-edlg/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="hover:text-indigo-600 dark:hover:text-indigo-400 transition" size={20} />
                </a>
              </div>
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  )
}