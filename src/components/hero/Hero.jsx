import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BHAVESH SAWANT</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Web developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="https://github.com/BhaveshSawant20" target="_blank" rel="noopener noreferrer">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="https://www.linkedin.com/in/bhaveshsawant20/" target="_blank" rel="noopener noreferrer">
              <motion.button variants={textVariants}>
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="https://i.ibb.co/SdmQNYM/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Content Creator Podcaster
      </motion.div>
      <div className="imageContainer">
        <img src="https://i.ibb.co/wrwJnQ1/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
