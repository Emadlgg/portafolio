import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('Mensaje enviado con éxito!')
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-indigo-600 dark:border-indigo-400 pb-2">Contacto</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <FiMail className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:osmanemanuel2004@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                    >
                      osmanemanuel2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <FiMapPin className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-300">Guatemala, Guatemala</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <FiPhone className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <a
                      href="https://wa.me/50241972946"
                      target="_blank"
                      rel="noopener noreferrer"
                      
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                    >
                      +502 41972946
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-full"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}