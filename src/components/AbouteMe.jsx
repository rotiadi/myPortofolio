import React from "react";
import { motion } from "framer-motion";
import CardAboutMe from "./CardAboutMe";

const AbouteMe = () => {
  return (
    <div id="about-me">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CardAboutMe
          index="0"
          text="Hi! I'm a passionate web developer with a background in functional analysis. After completing a full-stack web development course at BeCode, I embarked on a journey to become a Junior Web Developer."
          image="/aboutm.jpeg"
          title="Who am I?"
        />
        <CardAboutMe
          index="1"
          text="I specialize in backend development using JavaScript, Express, and MongoDB/PostgreSQL for API development. My goal is to build scalable and efficient web applications while constantly learning and improving my skills."
          image="/aboutm.jpeg"
          title="Professional Life"
        />
        <CardAboutMe
          Life
          index="2"
          text="I come from the same country as Dacia and have a strong curiosity for technology. I'm always looking for ways to improve and challenge myself, whether in coding or other aspects of life."
          image="/aboutm.jpeg"
          title="Personal Life"
        />
        <CardAboutMe
          index="3"
          text="In my free time, I enjoy building projects, experimenting with new technologies, and playing games. I'm also interested in UI/UX design and adding creative animations to web applications."
          image="/aboutm.jpeg"
          title="Hobbies"
        />
      </motion.div>
    </div>
  );
};

export default AbouteMe;
