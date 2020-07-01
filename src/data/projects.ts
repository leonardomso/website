interface Project {
  date: string;
  title: string;
  description: string;
  link: string;
}

type Projects = Array<Project>;

const projects: Projects = [
  {
    date: "☆ 32.2k",
    title: "33 Concepts Every JavaScript Developer Should Know",
    description:
      "A repository of concepts for developers master in JavaScript.",
    link: "https://github.com/leonardomso/33-js-concepts",
  },
  {
    date: "☆ 70",
    title: "Awesome Finite State Machines and Statecharts",
    description:
      "A curated list of awesome resources related to finite state machines and statecharts.",
    link: "https://github.com/leonardomso/awesome-fsm",
  },
  {
    date: "☆ 37",
    title: "Rehawk",
    description:
      "A powerful and lightweight library to work with audio in React applications.",
    link: "https://github.com/leonardomso/rehawk",
  },
  {
    date: "☆ 35",
    title: "React Google Static Maps",
    description: "A React component wrapper to use the Google Static Maps API.",
    link: "https://github.com/leonardomso/react-google-static",
  },
];

export default projects;
