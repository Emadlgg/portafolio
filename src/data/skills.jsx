import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaPython,
  FaJava
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress,
  SiC,
  SiCsharp,
  SiPostgresql,
  SiVuedotjs,
  SiAngular,
  SiMicrosoftsqlserver
} from 'react-icons/si'

export const skillsByCategory = {
  "Frontend": [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vue', icon: <SiVuedotjs /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
  ],
  "Backend": [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C#', icon: <SiCsharp /> }
  ],
  "Bases de Datos": [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> }
  ],
  "Herramientas": [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'GitHub', icon: <FaGitAlt /> },
    { name: 'API REST', icon: <FaNodeJs /> }
  ]
}