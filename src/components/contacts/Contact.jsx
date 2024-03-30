import "./Contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h2n6oh1", "template_01ayb1y", formRef.current, {
        publicKey: "lSs9jNBNpQMCNCyKm",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const handleDownloadResume = () => {
    const resumeFilePath = "/arthur-williams.pdf"; // Adjust the file name as needed
    window.open(resumeFilePath, "_blank");
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Get in touch</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Email</h2>
          <span>arthurlynnwilliams01@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+63 945 3163 943</span>
        </motion.div>
        <motion.button
          onClick={handleDownloadResume}
          variants={variants}
          className="resumeButton"
        >
          Download Resume
        </motion.button>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={10} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Something went wrong"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
