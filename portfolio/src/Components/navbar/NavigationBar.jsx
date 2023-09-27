import { useState, useEffect } from "react";
// import { Link  } from 'react-scroll';

import "./NavigationBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand style={{ width: "200px" }} href="/home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            ></Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Education"
              className={
                activeLink === "Education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#Experience"
              className={
                activeLink === "Experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#Experience"
              className={
                activeLink === "Experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/snehal-salokhe-88132a259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/SnehalMarutiSalokhe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="mailto:snehalsalokhe23@gmail.com">
                <img src={navIcon3} alt="Mail" />
              </a>
            </div>

            {/* <HashLink to='#connect'> */}
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
            {/* </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
