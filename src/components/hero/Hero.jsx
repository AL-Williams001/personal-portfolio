import "./Hero.css";
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
      duration: 40,
    },
  },
};

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById("portfolio");
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeFilePath = "/arthur-williams.pdf"; // Adjust the file name as needed
    window.open(resumeFilePath, "_blank");
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Arthur Lynn Williams</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVariants} onClick={scrollToPortfolio}>
              See my latest Projects
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={handleDownloadResume}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        animate="animate"
        initial="initial"
      >
        WEB DEVELOPER
      </motion.div>
    </div>
  );
};

export default Hero;
