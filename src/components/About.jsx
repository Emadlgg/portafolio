import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-indigo-600 dark:border-indigo-400 pb-2">Sobre mí</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHKLTPCjYBOpA/profile-displayphoto-shrink_400_400/B56Zcu.KvfHgAg-/0/1748839738773?e=1754524800&v=beta&t=fK3xdAA2cSPtUVKop5DsuCj7CG0qrNRL-HNymquqwk8" 
                  alt="Osman de León"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Soy una persona apasionada por la tecnología, pero también profundamente interesada en la
                manera en que esta se relaciona con las personas. Considero que el desarrollo de software no solo implica resolver problemas técnicos, sino también 
                comprender el contexto humano en el que se inserta cada solución. Mi enfoque va más allá del código: busco construir herramientas que conecten con las personas, 
                que sean accesibles, intuitivas y útiles en la vida cotidiana.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Más allá del entorno de desarrollo, valoro el aprendizaje constante, tanto en el 
                ámbito tecnológico como en otros aspectos de la vida. Me interesa entender cómo piensan y sienten 
                las personas, cómo se comunican con las máquinas, y cómo podemos facilitar ese diálogo. Al mismo tiempo, 
                encuentro inspiración en el arte, la música, la naturaleza y las experiencias que ofrecen una perspectiva más 
                amplia sobre el mundo que habitamos y creamos.
              </p>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                Este portafolio reúne una parte esencial del camino que he recorrido hasta ahora, marcado por desafíos, 
                aprendizajes y una profunda curiosidad por entender tanto la lógica del código como la complejidad del ser humano. 
                Cada proyecto aquí expuesto es resultado de un proceso de exploración y crecimiento, en el que he buscado unir precisión 
                técnica con sensibilidad creativa. Mi propósito es desarrollar soluciones que no solo funcionen, sino que también generen 
                valor auténtico para quienes las utilizan.
              </p>
              <a
                href="/tu-cv.pdf" 
                download
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition inline-block"
              >
                CV Info
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}