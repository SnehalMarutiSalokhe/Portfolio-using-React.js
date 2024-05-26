
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
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
      description: "Next.js | MongoDB | TypeScript | Tailwind CSS",
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
      title: "Cource App Dashboard",
      description: "Used -> React.js|Tailwind CSS|MUI",
      imgUrl: courceDashboard,
      link: "https://alemeno-assignment-orcin.vercel.app/",
    },
  ];

  const projects = [
    {
      title: "THE ALMOST FINAL COUNTDOWN",
      description: "Used -> React.js|Tailwind CSS|MUI",
      imgUrl: projImg1,
      link: "https://the-almost-final-countdown-by-react.vercel.app",
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
                    This section showcases various projects developed using
                    React.js, Tailwind CSS, and Material UI (MUI). Tab 1
                    contains low-level projects, demonstrating foundational
                    concepts of web development. These projects are built with a
                    combination of React.js for frontend logic, Tailwind CSS for
                    styling, and Material UI (MUI) for component design.
                  </p>

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


                      <Tab.Pane eventKey="second">
                         <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>   
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
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
