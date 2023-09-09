import { useState ,useEffect} from "react";

import './NavigationBar.css';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';



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
  }, [])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);

  }
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand  style={{ width: '200px'}} href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Experience" className={activeLink === 'Experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Experience')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">

              <div className="social-icon">
                <a href="/"><img src={navIcon1} alt="insta" /></a>
                <a href="/"><img src={navIcon2} alt="linkedin" /></a>
                <a href="/"><img src={navIcon3} alt="linkedin" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
                <button className="vvd"><span>Let’s Connect</span></button>
              {/* </HashLink> */}
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavigationBar;