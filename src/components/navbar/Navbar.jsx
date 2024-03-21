import "./Navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Arthur Lynn Williams
        </motion.span>
        <div className="social social-icons">
          <a href="https://www.facebook.com/profile.php?id=100069824875015">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/arthurlynnwilliams/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/AL-Williams001">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/alblackman01/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
