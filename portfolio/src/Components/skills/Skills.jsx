import React from "react";
import "./Skills.css";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp2.png";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="Skills">
      <section className="skill">
        <Container>
          <img
            className="background-image-right"
            src={colorSharp}
            alt="arrowimg"
          />

          <Row>
            <Col>
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  I possess a strong proficiency in programming, particularly
                  in C++ and C, where I have earned recognition with a Golden
                  Badge in C and a Silver Badge in C++. I excel in
                  problem-solving and hold a solid foundation in computer
                  science fundamentals. Additionally, I am skilled in web
                  development, with expertise in React.js, enabling me to create
                  responsive and user-friendly web applications.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="skillMtr" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="skillMtr" />
                    <h5>Competitive Programming</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="skillMtr" />
                    <h5>Computer Science Fundamentals</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="skillMtr" />
                    <h5>Technical Content Writing</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Skills;
