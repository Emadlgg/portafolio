import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/Emadlgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/osman-edlg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Osman_E61"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/emadlg_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiInstagram size={24} />
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center">
            © {new Date().getFullYear()} Portafolio. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}