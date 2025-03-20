import React from "react";
import { motion } from "framer-motion";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

      <section id="projects">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <CardProject
            title="Tic Tac Toe"
            image="/tictactow.jpeg"
            description="A TicTacToe game built with React. It is a two-player game where players take turns to place their mark on the board. The first player to get three of their marks in a row wins the game."
            appLink="https://roti-tictactoe.netlify.app/"
            gitLink={["https://github.com/rotiadi/TicTacToe"]}
            tags={["React", "JavaScript", "CSS"]}
          />

          <CardProject
            title="To Do App"
            image="/todo.jpeg"
            description="A simple to do app built with DOM manipulation. It allows users to add, edit, and delete tasks. The app also has a filter feature that allows users to filter tasks by their status."
            appLink="https://delicate-kitten-287616.netlify.app/"
            gitLink={["https://github.com/rotiadi/intro-react"]}
            tags={["React", "JavaScript", "CSS"]}
          />
          <CardProject
            title="Estia Project"
            image="/estia-logo.png"
            description="A simple to do app built with DOM manipulation. It allows users to add, edit, and delete tasks. The app also has a filter feature that allows users to filter tasks by their status."
            gitLink={["https://github.com/vasiliki0217/Project-Estia-Backend"]}
            tags={["Node.js", "Express", "PostgreSQL"]}
          />
          <CardProject
            title="Tapi"
            image="/pencil.svg"
            description="An application that allows users to learn 
          a new language by translating words or expressions.
           Is made like a game and the user needs to fill the spaces from the sentences provided by the application"
            gitLink={[
              "https://github.com/tareqitos/tapi-backend",
              "https://github.com/tareqitos/tapi",
            ]}
            tags={["Node.js", "Express", "MongoDB"]}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
