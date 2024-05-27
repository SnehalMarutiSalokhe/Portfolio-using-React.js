import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import "./CodingProfiles.css";
import TrackVisibility from "react-on-screen";

export const CodingProfiles = () => {
  return (
    <section className="coding-profiles" id="coding-profiles">
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
                  <h2>Coding Profiles</h2>
                  <p>
                    Check out my coding profiles on LeetCode, GeeksforGeeks, and
                    CodeChef.
                  </p>
                  <Tab.Container id="coding-profiles-tabs" defaultActiveKey="leetcode">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="leetcode">LeetCode</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="gfg">GeeksforGeeks</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="codechef">CodeChef</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="leetcode">
                        <Row>
                          <Col size={12}>
                            <div className="iframe-container">
                              <a
                                href="https://leetcode.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                              >
                                Go to LeetCode
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="gfg">
                        <Row>
                          <Col size={12}>
                            <iframe
                              src="https://www.geeksforgeeks.org"
                              title="GeeksforGeeks"
                              className="responsive-iframe"
                            ></iframe>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="codechef">
                        <Row>
                          <Col size={12}>
                            <iframe
                              src="https://www.codechef.com"
                              title="CodeChef"
                              className="responsive-iframe"
                            ></iframe>
                          </Col>
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
    </section>
  );
};

export default CodingProfiles;
