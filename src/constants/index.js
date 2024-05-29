import project1 from "../portfolio-assets/project-1.jpg";
import project2 from "../portfolio-assets/project-2.jpg";
import project3 from "../portfolio-assets/project-3.jpg";
import project4 from "../portfolio-assets/project-4.jpg";

export const HERO_CONTENT = `I am a passionate web developer with a keen intrest in developing web applications not only quickly but also in a way that looks ppealing for the user.I am currently honing my skills in NodeJS and React and am fluent in front-end technologies like JavScript,HTML,CSS and back-end like MySQL,Mongoose,MongoDB. `;

export const ABOUT_TEXT = `I am an enthusiastic and dedicated engineering student specializing in Information Technology,with a passion for creating user friendly and highly responsive web applications.I am currently honing my skills and knowledge at VESIT. I have learnt Html,CSS,JavaScript,NodeJS,MySQL and Mongoose.I also have a basic understanding in Java,C,C++ and hope to improve on these languages further in the near future. My hobbies are watching cricket,football,F1,tennis and reading books which help improve my vocabulary and clear my mind.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Spotify clone",
    image: project1,
    description:
      "A replica of spotify's main page.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Simon say's game",
    image: project2,
    description:
      "A simple game to play when you are bored.",
    technologies: ["HTML", "CSS","JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Weather Tracker",
    image: project4,
    description:
      "A platform which accurately displays the weather in any part of the world.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  
  phoneNo: "+91 8454029912 ",
  email: "ayushkaranth2005@gmail.com",
};