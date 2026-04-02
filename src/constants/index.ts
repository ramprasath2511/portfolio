import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  redux,
  vue3,
  firebase,
  aws,
  git,
  figma,
  python,
  sataware,
  deliveryapp,
  zippd,
  sutherland,
  carrent,
  jobit,
  tripguide,
  threejs,
  pixalive,
  admin,
  chat,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "AWS and Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vue3",
    icon: vue3,
  },
];

const experiences: TExperience[] = [
    {
    title: "Software Engineer",
    companyName: "Zippd",
    icon: zippd,
    iconBg: "#0b0b0bff",
    date: "Mar 2026 - Present",
    points: [
     "Led the front‑end team using Agile/Kanban, collaborating with backend, UX, and stakeholders to deliver high‑quality applications.",
     "Built responsive, cross‑platform Flutter apps for web, Android, and iOS from a single codebase.",
     "Implemented scalable state management using Provider and Bloc.",
     "Integrated REST APIs, WebSockets, and third‑party services with secure token‑based authentication.",
     "Developed Python‑based route optimization and integrated it with core APIs for efficient operations.",
     "Implemented image text‑extraction and ML‑powered video analysis to enhance app intelligence.",
     "Managed datasets in Google Cloud Storage and connected them to analytics workflows.",
     "Integrated push notifications, deep linking, in‑app purchases, and background services using Firebase.",
     "Built CI/CD pipelines with automated testing and Git‑based version control.",
     "Deployed applications to Google Play, Apple App Store, and Firebase Hosting.",
     "Managed AWS services including EC2, S3, RDS, Security Groups, and CloudWatch alerts."
    ],  
   },
  {
    title: "Senior Flutter Developer",
    companyName: "Deliver E Hub Ltd",
    icon: deliveryapp,
    iconBg: "#383E56",
    date: "July 2022 - Mar 2026",
    points: [
      "Designed and developed robust, consumer-focused web applications using Flutter in collaboration with HTML, CSS, and Dart, ensuring seamless performance and cross-platform functionality.", 
      "Implemented advanced state management using Provider and Bloc patterns, ensuring scalable and maintainable application architecture",
      "Integrated REST APIs, WebSockets, and third-party services to enhance app performance and real-time communication. Familiar with token-based authentication and Magento’s V1 API structure",
      "Utilized image capturing technology to automate key functionalities and extract text from images, streamlining processes and enhancing user experience. Additionally, integrated a video analysis feature powered by machine learning plugins within applications, enabling intelligent content analysis and advanced functionality",
    ],
  },
  {
    title: "Web and Flutter Developer",
    companyName: "Tripalive.me tech Pvt Ltd",
    icon: pixalive,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2021",
    points: [
      "Migrating native apps to a hybrid framework",
      "Developed Mobile applications for social media domain with Flutter and REST API",
      "Designed, Developed and tested UI and UX with Flutter",
      "React web development for admin interfaces, including integration of app data analytics and visualization.",
      "Enhanced Front end, uploading and maintaining App Store and play store and also designed Flyers, letter pads, business cards and logos for promoting applications.",
     ],
  },
  {
    title: "Software Engineer",
    companyName: "Sataware Technologies",
    icon: sataware,
    iconBg: "#383E56",
    date: "Jan 2017 - Jan 2021",
    points: [
      "Developed Web and Mobile applications for E-commerce and health care domain with WordPress and REST API plugins An in-person tester and creating test cases for the product under development Designed and Developed UI and UX with Flutter, Adobe Illustrator, Photoshop and XD.",
      "Enhanced Front end for health care applications with HTML5 and CSS3. Managed SEO for Websites, also designed Flyers, letter pads, business cards and logos for promoting applications.",
      "Managed SEO Analyst team as a team leader and responsible for communicating with clients and team members to achieve targets.",
    ],
  },
  {
    title: "Programmer Analyst",
    companyName: "Sutherland Technologies, Inc",
    icon: sutherland,
    iconBg: "#E6DEDD",
    date: "July 2016 - July 2017",
    points: [
      "Enhanced Frontend with HTML, CSS, EXT JS Worked on SQL - Oracle scripts",
      "Adapt existing methods and procedures to create specialized solutions to intricate software problems",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ram proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ram does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ram optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I had the pleasure of working with Ramprasath as a Flutter developer, and he consistently delivered high-quality work. His ability to understand requirements quickly and manage time effectively made every project smoother. A reliable and dedicated team player—I highly recommend him.",
    name: "Mohammed Akeel",
    designation: "Senior developer",
    company: "Zippd",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Social Media app",
    description:
      "A mobile, enterprise‑level social media application that allows users to view a personalised feed, post content, like, and comment. It uses an Instagram‑style recommendation engine to efficiently suggest interests and categories.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Swift/Kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/ramprasath2511/socialmedia-app-",
  },
  {
    name: "Web Streaming",
    description:
      "A web application that allows users to stream movies, browse trending and recommended titles, explore genres, and discover films based on their viewing preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/ramprasath2511/reactjs_moviedux",
  },
  {
    name: "vehicle book",
    description:
      "A comprehensive travel booking platform that allows users to book vehicle, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Vue3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/ramprasath2511/BookingForm_Vue3",
  },
   {
    name: "RO Admin Panel",
    description:
      "The Centralized Admin Panel provides a real‑time, centralised view of all operations. It is designed to help administrators monitor, track performance, and ensure that every process follows the most efficient route.",
    tags: [
      {
        name: "Vue3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    sourceCodeLink: "https://github.com/ramprasath2511/react_timer",
  },
   {
    name: "Switch app",
    description:
      "A mobile messaging application that lets users chat instantly, share media, create group conversations, and stay connected through fast, secure communication.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "IOS/Android",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    sourceCodeLink: "https://github.com/ramprasath2511/switch-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
