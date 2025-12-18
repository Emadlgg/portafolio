# Portafolio Personal

[![Portafolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://portafolio-oedlg.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Un portafolio moderno y dinámico que muestra mis habilidades, proyectos y experiencia en desarrollo web.

## 🌐 Demo en Vivo

**[Ver Portafolio](https://portafolio-oedlg.vercel.app)**

## ✨ Características

- 🎨 **Diseño Moderno y Responsivo**: Interfaz atractiva que se adapta a todos los dispositivos
- 🌓 **Tema Claro/Oscuro**: Cambio dinámico entre modos con persistencia
- ⚡ **Animaciones Fluidas**: Transiciones suaves usando Framer Motion y Anime.js
- 📱 **Mobile First**: Optimizado para experiencia móvil
- 🚀 **Alto Rendimiento**: Carga rápida y optimización de recursos
- ♿ **Accesible**: Siguiendo las mejores prácticas de accesibilidad web
- 📧 **Formulario de Contacto**: Integración con servicio de email
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[React](https://reactjs.org/)** - Biblioteca de JavaScript para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animaciones para React
- **[Anime.js](https://animejs.com/)** - Librería JavaScript de animaciones

### Herramientas de Desarrollo
- **Vite** - Build tool de nueva generación
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formateador de código
- **Git** - Control de versiones

### Despliegue
- **Vercel** - Hosting y despliegue continuo

## 📂 Estructura del Proyecto

```
portfolio/
├── public/
│   ├── images/
│   ├── projects/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio
```bash
git clone https://github.com/Emadlgg/portafolio.git
```

2. Navega al directorio del proyecto
```bash
cd portfolio
```

3. Instala las dependencias
```bash
npm install
# o
yarn install
```

4. Inicia el servidor de desarrollo
```bash
npm run dev
# o
yarn dev
```

5. Abre tu navegador en `http://localhost:5173`

### Build para Producción

```bash
npm run build
# o
yarn build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview de Producción

```bash
npm run preview
# o
yarn preview
```

## 📋 Secciones del Portfolio

### 1. Hero/Inicio
- Presentación personal
- Call-to-action para descargar CV
- Enlaces a redes sociales

### 2. Sobre Mí
- Biografía profesional
- Fotografía personal
- Habilidades destacadas

### 3. Skills/Habilidades
- Tecnologías Frontend
- Tecnologías Backend
- Herramientas y Otras habilidades
- Visualización con íconos y barras de progreso

### 4. Proyectos
- Galería de proyectos destacados
- Descripción de cada proyecto
- Tecnologías utilizadas
- Enlaces a demo y código fuente

### 5. Experiencia
- Historial laboral
- Educación
- Certificaciones

### 6. Contacto
- Formulario de contacto funcional
- Información de contacto directo
- Mapa de ubicación (opcional)

## 🎨 Personalización

### Colores

Edita el archivo `tailwind.config.js` para personalizar los colores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        // Agrega más colores personalizados
      }
    }
  }
}
```

### Contenido

Actualiza los archivos en `src/data/` para modificar tu información personal, proyectos, habilidades, etc.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.


## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com) por los íconos
- [Unsplash](https://unsplash.com) por las imágenes de muestra
- [Hero Icons](https://heroicons.com) por los íconos UI
- [Google Fonts](https://fonts.google.com) por las tipografías

---

⭐ **¿Te gustó este proyecto? ¡Dale una estrella!** ⭐

Hecho con ❤️ por Osman