// src/components/Skills.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillsByCategory } from '../data/skills'

const SkillBadge = ({ skill, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  if (skill.text) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
      >
        <img 
          src={skill.badge} 
          alt={skill.name}
          className="h-8 w-auto"
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer group"
    >
      <div className={`${skill.color} mb-3 transform group-hover:scale-110 transition-transform`}>
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>

          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, skillList], catIndex) => (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="text-2xl font-semibold mb-8 text-emerald-400 text-center"
                >
                  {category}
                </motion.h3>
                
                {category === "Methodologies & Practices" || category === "IT Support & Troubleshooting" ? (
                  <div className="flex flex-wrap gap-4">
                    {skillList.map((skill, index) => (
                      <SkillBadge key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillList.map((skill, index) => (
                      <SkillBadge key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}