import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
    javascript,
    html,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    laravel,
    express,
    mysql,
    smktelkom,
    aspirasi,
    changram,
    blur
  } from "../assets";
  
  export const navLinks = [
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
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "UP SMK Telkom Jakarta",
      icon: smktelkom,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Making Web Application",
        "Maintenance Web Application",
        "Add some features for Web Application",
        "Design Web Application"
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "social media app",
      description:
        "this social media app is my firt project using Mern stack",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mui",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: blur,
      source_code_link: "https://github.com/",
      status: "done"
    },
    {
      name: "Aspiration Web",
      description:
        "Web-based platform that allows users/student to make their aspiration and the admin will be process it",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "livewire",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: aspirasi,
      source_code_link: "https://github.com/PhantamsCWK/AspirasiRakyat-V2",
      status: "done"
    },
    {
      name: "Changram",
      description:
        "Web application that enables users to make post, like post, read another post likely instagram users can personalize their account with what they want ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: changram,
      source_code_link: "https://github.com/PhantamsCWK/social-media-app-V2",
      status: "on progress"
    },
  ];

  const contactList = [
    {
      type: "phone",
      name: "+62-896-3990-3653",
      click: "+62-896-3990-3653",
      icon: AiOutlinePhone
    },
    {
      type: "email",
      name: "chandrawijaya270805@gmail.com",
      click: "chandrawijaya270805@gmail.com",
      icon: AiOutlineMail
    },
    {
      type: "instagram",
      name: "@chanwisuma",
      click: "https://www.instagram.com/chanwisuma/?hl=id",
      icon: AiOutlineInstagram
    },
    {
      type: "linkedin",
      name: "Chandra Wijaya Kusuma",
      click: "https://www.linkedin.com/in/chandra-wijaya-kusuma-a4564122a/",
      icon: AiOutlineLinkedin
    },
    {
      type: "github",
      name: "PhantamsCWK",
      click: "https://github.com/PhantamsCWK",
      icon: AiOutlineGithub
    },

  ]
  
  export { technologies, experiences, projects, contactList };