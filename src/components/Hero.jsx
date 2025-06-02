import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="home" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hola, soy <span className="text-indigo-600 dark:text-indigo-400">Osman Emanuel de León García</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-600 dark:text-gray-300">
            Explorador de tecnología y humanidad a través del código
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
            Entre líneas de código y rayos de sol, encuentro el equilibrio entre comprender a las máquinas y vivir plenamente como humano.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
            >
              Contactarme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}