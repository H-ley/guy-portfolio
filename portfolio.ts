import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Guy-Dorlant MOUBAGHOU",
  title: "Salut à tous, Je suis Guy",
  description:
    "Jeune étudiant en cycle ingénieur Informatique et Réseaux, passionné de cybersécurité et tout ce qui touche aux systèmes et réseaux. Toujours en quête de nouvelles expériences, je reste ouvert à toutes opportunités qui me permettront d'accroître mes compétences et affiner ma posture professionnelle.",
  resumeLink: "https://drive.google.com/file/d/1s2iAidtWVJdUd8dA1XPru99BNyhHB4bo/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Leguide98",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "gmoubaghou.ir2026@esaip.org",
  linkedin: "https://www.linkedin.com/in/Guy MOUBAGHOU/",
  github: "https://github.com/Leguide98",
};

export const skillsSection: SkillsSectionType = {
  title: "Compétences",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Développement Full Stack",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Création d'applications à page unique '(SPA)' et de PWA réactives dans React.js"),
        emoji("⚡ Création de sites Web statiques réactifs à l'aide de Next.js"),
        emoji("⚡ Maîtrise de l'environnement LAN, WAN, SDN et des outils CISCO CCNA"),
        emoji("⚡ Maîtrise des outils rédactionnels comme Microsoft Word"),
        emoji("⚡ Maîtrise des outils de création visuelle comme Excel, Canva"),
        emoji("⚡ Maîtrise des outils de gestion de projet dont Trello"),
        emoji("⚡ Aisance orale"),
        emoji("⚡ Fairplay"),
        emoji("⚡ Autonomie et Rigueur"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};


export const educationInfo: EducationType[] = [
  {
    schoolName: "VELIKO tunovo",
    subHeader: "Spring ERASMUS",
    duration: "Mars 2024 - Juillet 2024",
    desc: "Semestre d'échange ERASMUS",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "ESAIP Saint-Barthélémy d'Anjou",
    subHeader: "Classe préparatoire aux grandes écoles",
    duration: "September 2023 - Juillet 2026",
    desc: "Majeure Cybersécurité",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Lycée LEON MBA Libreville",
    subHeader: "Classe préparatoire aux grandes écoles",
    duration: "September 2020 - Juillet 2023",
    desc: "Fillière Maths-Physique",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Collège Saint-Gabriel Mouila",
    subHeader: "Baccalauréat scientifique",
    duration: "September 2019 - Août 2020",
    desc: "Série C",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Bénévole",
    company: "HopHopFood",
    companyLogo: "/img/icons/common/hhf.png",
    date: "Novembre 2023 - Aujourd'hui",
    desc: "Volontaire service civique pour le compte de la structure HopHopFood basée à Angers. Assistance technique, médiatisation, fide2lisation, recherche de bénéficiaire et création de code HopHopFood",
  },
  {
    role: "Stagiaire professionnel",
    company: "BICIG Gabon",
    companyLogo: "/img/icons/common/bic.png",
    date: "Juillet 2024 - Septembre 2024",
    desc: "Mise en place, configuration et sécurisation du réseau WiFi de la banque. Totale maintenance informatique",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Guy-Dorlant MOUBAGHOU",
  description: greetings.description,
  author: "Guy MOUBAGHOU",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "",
  keywords: [
    
  ],
};
