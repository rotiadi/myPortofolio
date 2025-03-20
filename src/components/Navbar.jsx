import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navbarHeight = 40;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact-me"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
