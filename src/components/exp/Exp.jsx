import { useRef } from "react";
import "./exp.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://i.ibb.co/Kzhq5QT/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Internships</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>I Did</motion.b> So Far.
          </h1>
          {/* LinkedIn profile link for "My Work Experience" button */}
          <a href="https://www.linkedin.com/in/bhaveshsawant20/" target="_blank" rel="noopener noreferrer">
            <button>My Work Experience</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cloud Intern</h2>
          <p>
            During my Cloud internship at iFuture Technologies,
            I gained practical experience in cloud infrastructure 
            management by working with platforms like AWS to deploy 
            and scale applications. I also collaborated on optimizing cloud 
            resources for efficiency and security within real-world projects.
          </p>
          <a href="https://www.linkedin.com/posts/bhaveshsawant20_cloudcomputing-internshipexperience-ifuturetechnologies-activity-7251826633148383232-9lUQ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Development Intern</h2>
          <p>
            During my Full Stack Development internship at CipherByte Technologies, 
            I worked on developing and maintaining web applications using both frontend 
            and backend technologies. This experience allowed me to enhance my skills in 
            building user interfaces, managing databases, and integrating APIs to create 
            seamless user experiences.
          </p>
          <a href="https://www.linkedin.com/posts/bhaveshsawant20_certificate-full-stack-development-cipherbyte-activity-7254363358391402496-R3DW?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development Intern</h2>
          <p>
            During my 1-month Web Development internship at Prodigy Infotech,
            I worked on building responsive and visually appealing websites using HTML, 
            CSS, and JavaScript. I also collaborated with the team to implement best 
            practices in web design and optimize performance for user engagement.
          </p>
          <a href="https://www.linkedin.com/posts/bhaveshsawant20_certificate-web-development-prodigy-infotech-activity-7249289972497698820-HKi9?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DSA Intern</h2>
          <p>
            During my DSA internship at InternPe, I focused on enhancing my 
            understanding of data structures and algorithms through practical 
            problem-solving and coding challenges. This experience allowed me 
            to develop efficient algorithms and optimize solutions, significantly 
            improving my analytical and programming skills.
          </p>
          <a href="https://www.linkedin.com/posts/bhaveshsawant20_dsa-c-internshipexperience-activity-7256900121781489664-nCZi?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
