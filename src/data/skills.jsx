// src/data/skills.jsx
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJava,
  FaDocker, FaGithub
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress,
  SiC, SiCsharp, SiPostgresql, SiVuedotjs, SiAngular, SiMicrosoftsqlserver,
  SiDjango, SiMysql, SiVisualstudiocode
} from 'react-icons/si'

export const skillsByCategory = {
  "Languages": [
    { 
      name: 'Python', 
      badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
      icon: <FaPython className="text-4xl" />, 
      color: 'text-blue-400' 
    },
    { 
      name: 'JavaScript', 
      badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      icon: <FaJs className="text-4xl" />, 
      color: 'text-yellow-400' 
    },
    { 
      name: 'Java', 
      badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
      icon: <FaJava className="text-4xl" />, 
      color: 'text-red-500' 
    },
    { 
      name: 'C++', 
      badge: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      icon: <SiC className="text-4xl" />, 
      color: 'text-blue-600' 
    }
  ],
  "Frontend Development": [
    { 
      name: 'React', 
      badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      icon: <FaReact className="text-4xl" />, 
      color: 'text-cyan-400' 
    },
    { 
      name: 'Vue.js', 
      badge: 'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D',
      icon: <SiVuedotjs className="text-4xl" />, 
      color: 'text-green-500' 
    },
    { 
      name: 'Next.js', 
      badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
      icon: <SiNextdotjs className="text-4xl" />, 
      color: 'text-white' 
    },
    { 
      name: 'HTML5', 
      badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      icon: <FaHtml5 className="text-4xl" />, 
      color: 'text-orange-600' 
    },
    { 
      name: 'CSS3', 
      badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      icon: <FaCss3Alt className="text-4xl" />, 
      color: 'text-blue-500' 
    }
  ],
  "Backend Development": [
    { 
      name: 'Node.js', 
      badge: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
      icon: <FaNodeJs className="text-4xl" />, 
      color: 'text-green-600' 
    },
    { 
      name: 'Express.js', 
      badge: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
      icon: <SiExpress className="text-4xl" />, 
      color: 'text-white' 
    },
    { 
      name: 'Django', 
      badge: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white',
      icon: <SiDjango className="text-4xl" />, 
      color: 'text-green-700' 
    }
  ],
  "Databases": [
    { 
      name: 'MySQL', 
      badge: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
      icon: <SiMysql className="text-4xl" />, 
      color: 'text-blue-400' 
    },
    { 
      name: 'PostgreSQL', 
      badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
      icon: <SiPostgresql className="text-4xl" />, 
      color: 'text-blue-400' 
    },
    { 
      name: 'MongoDB', 
      badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      icon: <SiMongodb className="text-4xl" />, 
      color: 'text-green-500' 
    },
    { 
      name: 'SQL Server', 
      badge: 'https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white',
      icon: <SiMicrosoftsqlserver className="text-4xl" />, 
      color: 'text-red-600' 
    }
  ],
  "Tools & Technologies": [
    { 
      name: 'Git', 
      badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      icon: <FaGitAlt className="text-4xl" />, 
      color: 'text-orange-600' 
    },
    { 
      name: 'GitHub', 
      badge: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      icon: <FaGithub className="text-4xl" />, 
      color: 'text-white' 
    },
    { 
      name: 'Docker', 
      badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
      icon: <FaDocker className="text-4xl" />, 
      color: 'text-blue-400' 
    },
    { 
      name: 'VS Code', 
      badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white',
      icon: <SiVisualstudiocode className="text-4xl" />, 
      color: 'text-blue-500' 
    }
  ],
  "Methodologies & Practices": [
    { 
      name: 'RESTful API', 
      badge: 'https://img.shields.io/badge/RESTful_API-009688?style=for-the-badge',
      text: true
    },
    { 
      name: 'Version Control', 
      badge: 'https://img.shields.io/badge/Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white',
      text: true
    },
    { 
      name: 'Agile', 
      badge: 'https://img.shields.io/badge/Agile-2496ED?style=for-the-badge',
      text: true
    },
    { 
      name: 'OOP', 
      badge: 'https://img.shields.io/badge/OOP-ED8B00?style=for-the-badge',
      text: true
    },
    { 
      name: 'Database Design', 
      badge: 'https://img.shields.io/badge/Database_Design-316192?style=for-the-badge',
      text: true
    }
  ],
  "IT Support & Troubleshooting": [
    { 
      name: 'Level 1 Support', 
      badge: 'https://img.shields.io/badge/Level_1_Support-4CAF50?style=for-the-badge',
      text: true
    },
    { 
      name: 'Hardware Maintenance', 
      badge: 'https://img.shields.io/badge/Hardware_Maintenance-FF6F00?style=for-the-badge',
      text: true
    },
    { 
      name: 'OS Installation', 
      badge: 'https://img.shields.io/badge/OS_Installation-0078D6?style=for-the-badge&logo=windows&logoColor=white',
      text: true
    },
    { 
      name: 'Network Configuration', 
      badge: 'https://img.shields.io/badge/Network_Config-0A66C2?style=for-the-badge',
      text: true
    },
    { 
      name: 'Technical Documentation', 
      badge: 'https://img.shields.io/badge/Tech_Documentation-1976D2?style=for-the-badge',
      text: true
    }
  ]
}