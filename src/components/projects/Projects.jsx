import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Connect Sphere",
    img: "https://i.ibb.co/BrgQpm4/Screenshot-2024-10-14-225448.png",
    desc: "ConnectSphere is a dynamic social media platform that allows users to share photos, like and comment on others' images, and connect through engaging visual content.",
    link: "https://connectsphere-azure.vercel.app/",
  },
  {
    id: 2,
    title: "Luxeva Ecommerce",
    img: "https://i.ibb.co/gDtt0L7/Screenshot-2024-10-14-224411.png",
    desc: "Luxeva is a trendy e-commerce platform specializing in fashionable clothing and stylish accessories for the modern shopper.",
    link: "https://github.com/BhaveshSawant20/Luxeva-Ecommerce",
  },
  {
    id: 3,
    title: "Coffee Creations",
    img: "https://i.ibb.co/pxc1GM9/Screenshot-2024-10-14-225919.png",
    desc: "Coffee Creations is a cozy coffee house website offering a wide variety of specialty coffees for every taste.",
    link: "https://github.com/BhaveshSawant20/Coffee-House-Website.git",
  },
  {
    id: 4,
    title: "To Do List Application",
    img: "https://i.ibb.co/dJVvbZz/Screenshot-2024-10-14-230032.png",
    desc: "A To-Do List web application that helps you organize, track, and manage tasks efficiently with features to add, edit, and delete items.",
    link: "https://github.com/BhaveshSawant20/A-Basic-To-Do-Webapp.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects Featured</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
