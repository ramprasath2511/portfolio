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
  sutherland,
  carrent,
  jobit,
  tripguide,
  threejs,
  pixalive,
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
    title: "Senior Flutter Developer",
    companyName: "Deliver E Hub Ltd",
    icon: deliveryapp,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
     "Led the front-end team using Agile and Kanban methodologies, collaborating closely with backend developers, UX designers, and stakeholders to deliver high-quality applications.",
      "Designed and developed robust, consumer-focused web applications using Flutter in collaboration with HTML, CSS, and Dart, ensuring seamless performance and cross-platform functionality. Additionally, built and deployed high-quality mobile applications for Android and iOS platforms from the same codebase",
      "Implemented advanced state management using Provider and Bloc patterns, ensuring scalable and maintainable application architecture",
      "Integrated REST APIs, WebSockets, and third-party services to enhance app performance and real-time communication. Familiar with token-based authentication and Magento’s V1 API structure",
      "Implemented advanced route optimization techniques using Python to enhance efficiency and minimize operational costs. Effectively integrated and communicated these optimizations with the core API, ensuring seamless data exchange and robust functionality across systems",
      "Utilized image capturing technology to automate key functionalities and extract text from images, streamlining processes and enhancing user experience. Additionally, integrated a video analysis feature powered by machine learning plugins within applications, enabling intelligent content analysis and advanced functionality",
      "Managed datasets in Google Cloud Storage and connected them to analytics tools",
      "Implemented push notifications, deep linking for native-like user experience using firebase. In addition to that Integrated in-app purchases and background services for the application",
      "Built and maintained CI/CD pipelines for seamless deployment, automated testing (unit, widget, integration testing), and version control using Git",
      "Deployed applications to the Google Play Store, Apple App Store, and Firebase Hosting, ensuring efficient release management",
      "Managing AWS services like  EC2 instances, configuring Security Groups, handling S3 storage, administering RDS databases, and setting up CloudWatch alerts with SNS notifications.",
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
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
