import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillsByCategory } from '../data/skills'

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const categoryTitle = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            <span className="border-b-4 border-primary-500 pb-2">
              Habilidades Técnicas
            </span>
          </h2>

          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="mb-8">
                <motion.h3
                  variants={categoryTitle}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-200"
                >
                  {category}
                </motion.h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      className="skill-card"
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}