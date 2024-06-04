import "./Portfolio.css";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "RPS APP",
    img: "./rps.jpg",
    demoUrl: "https://rps-app-five.vercel.app/",
    desc: "A rock paper scissors app made from vanila JS. Please click See demo for the full site",
  },
  {
    id: 2,
    title: "Calculator APP",
    img: "./calculator.jpg",
    demoUrl: "https://calculator-app-three-tau.vercel.app/",
    desc: "A Calculator app made from vanila JS. Please click See demo for the full site",
  },
  {
    id: 3,
    title: "Admin Dashboard APP",
    img: "./dashboardapp.jpg",
    demoUrl: "https://admin-frontend-x70a.onrender.com/dashboard",
    desc: "A Fullstack Application with React, Node.js, Express, and MongoDB. It may take some time to load since it is deployed in Render",
  },
  {
    id: 4,
    title: "Auth APP",
    img: "./auth-app.jpg",
    demoUrl: "https://auth-app-ojcd.onrender.com",
    desc: "A Full-stack Authentication Application with React, Node.js, Express, Firebase, and MongoDB, utilizing CRUD functionality and can create an account via Google. Due to its deployment on Render, it may experience longer loading times.",
  },
  {
    id: 5,
    title: "Real Estate Marketplace APP",
    img: "./real-estate.jpg",
    demoUrl: "https://real-estate-tk35.onrender.com",
    desc: "Real Estate Marketplace APP is a comprehensive real estate marketplace built with cutting-edge technologies like React, Tailwind, Firebase, and MongoDB. It empowers both property seekers and owners with a user-friendly platform to navigate the real estate market seamlessly.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const openDemo = () => {
    window.open(item.demoUrl, "_blank");
  };

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
            <button onClick={openDemo}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio" ref={ref} id="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
