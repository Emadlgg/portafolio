// src/components/About.jsx
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa'

export default function About() {
  const education = [
    {
      degree: 'B.S. Computer Science & Information Technology',
      institution: 'Universidad del Valle de Guatemala',
      period: '2023 - Present',
      icon: <FaGraduationCap className="text-3xl" />,
      color: 'emerald'
    },
    {
      degree: 'Computer Science Technician',
      institution: 'Centro Educativo Técnico Laboral Kinal',
      period: '2017 - 2022',
      icon: <FaAward className="text-3xl" />,
      color: 'teal'
    }
  ]

  const experience = [
    {
      title: 'Full Stack Developer',
      description: 'Desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos relacionales',
      icon: <FaBriefcase className="text-2xl" />,
      color: 'emerald'
    },
    {
      title: 'IT Support Specialist',
      description: 'Soporte técnico nivel 1, mantenimiento de hardware, instalación de sistemas operativos y configuración de redes',
      icon: <FaBriefcase className="text-2xl" />,
      color: 'cyan'
    }
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-300 leading-relaxed"
            >
              <p className="text-lg">
                Soy una persona apasionada por la tecnología, pero también profundamente interesada en la
                manera en que esta se relaciona con las personas. Considero que el desarrollo de software no solo implica resolver problemas técnicos, sino también 
                comprender el contexto humano en el que se inserta cada solución.
              </p>
              <p className="text-lg">
                Mi enfoque va más allá del código: busco construir herramientas que conecten con las personas, 
                que sean accesibles, intuitivas y útiles en la vida cotidiana. Valoro el aprendizaje constante y 
                encuentro inspiración en el arte, la música, la naturaleza y las experiencias que ofrecen una perspectiva más 
                amplia sobre el mundo.
              </p>
              <p className="text-lg">
                Cada proyecto es resultado de un proceso de exploración y crecimiento, en el que busco unir precisión 
                técnica con sensibilidad creativa. Mi propósito es desarrollar soluciones que no solo funcionen, sino que también generen 
                valor auténtico para quienes las utilizan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
                  <FaBriefcase />
                  Experiencia
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className={`border-l-4 border-${exp.color}-500 pl-4`}>
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`text-${exp.color}-400 mt-1`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Educación
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-${edu.color}-500 to-${edu.color}-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 group-hover:border-emerald-500/50 transition-all duration-300">
                    <div className={`inline-block p-4 bg-${edu.color}-500/10 rounded-xl mb-4 text-${edu.color}-400`}>
                      {edu.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className={`text-${edu.color}-400 text-sm font-semibold flex items-center gap-2`}>
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      {edu.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}