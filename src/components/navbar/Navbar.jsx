import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bhavesh Sawant
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/not._.bhavesh/" target="_blank">
            <img src="https://i.ibb.co/34mkTpD/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bhaveshsawant20/" target="_blank">
            <img src="https://i.ibb.co/yBkfhZj/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/BhaveshSawant20" target="_blank">
            <img src="https://i.ibb.co/0X6tb6j/github.png" alt="" />
          </a>
          <a href="https://x.com/Bhavesh_2124#" target="_blank">
            <img src="https://i.ibb.co/W2Z7yq9/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
