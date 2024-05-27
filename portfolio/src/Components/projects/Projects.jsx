import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import health from "../../assets/img/health.jpeg";
import projImg1s from "../../assets/img/project-img1s.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import picPerfectorImg from "../../assets/img/pic-perfector-img.png";
import collegeLevelDiscussionForum from "../../assets/img/college-level-discussion-forum-img.png";
import courceDashboard from "../../assets/img/courceDashboard.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "PICPERFECTOR",
      description: "Next.js || MongoDB || TypeScript || Tailwind CSS",
      imgUrl: picPerfectorImg,
      link: "https://pic-perfector-dusky.vercel.app/",
    },
    {
      title: "College Level Discussion Forum",
      description: "MongoDB||Express.js||React.js||Node.js||socket.io",
      imgUrl: collegeLevelDiscussionForum,
      link: "https://college-level-discussion-forum.vercel.app",
    },
    {
      title: "THE ALMOST FINAL COUNTDOWN",
      description: "React.js || Tailwind CSS || MUI",
      imgUrl: projImg1s,
      link: "https://the-almost-final-countdown-by-react.vercel.app",
    },
  ];

  const projects = [
    {
      title: "Cource App Dashboard",
      description: "React.js|Tailwind CSS|MUI",
      imgUrl: courceDashboard,
      link: "https://alemeno-assignment-orcin.vercel.app/",
    },
    {
      title: "Investment Calculator",
      description: "Used -> React.js|Tailwind CSS|MUI",
      imgUrl: projImg2,
      link: "https://investment-calculator-snehalmarutisalokhe.vercel.app",
    },
    {
      title: "Tic-Tac-Toe",
      description: "Used -> React.js|Tailwind CSS|MUI",
      imgUrl: projImg3,
      link: "https://tic-tac-toe-game-using-reactjs.vercel.app",
    },
  ];
  const Easyprojects = [
    {
      title: "Health Tracking System",
      description: "c++",
      imgUrl: health,
      link: "https://github.com/SnehalMarutiSalokhe/health-tracking-system",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This section showcases various projects developed using MERN
                    stack, Next.js, React.js, Tailwind CSS, and Material UI
                    (MUI) and C++.
                  </p>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 0,
                      listStyle: "none",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Tab 1 contains projects using advanced technologies like
                      Next.js, React.js and MongoDB.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Tab 2 features projects utilizing React.js and Tailwind CSS.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Tab 3 includes simpler projects such as a health tracking
                      system in C++.
                    </li>
                  </ul>
                  {/* =========================tabs========================== */}

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* =========================first========================== */}

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* =========================second========================== */}

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* =========================third========================== */}

                      <Tab.Pane eventKey="third">
                        <Row>
                          {Easyprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
