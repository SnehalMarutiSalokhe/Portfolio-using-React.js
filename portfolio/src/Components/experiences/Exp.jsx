import React, { useState } from "react";
import "./Exp.css";
import { Steps } from "antd";
import colorSharp from "../../assets/img/color-sharp.png";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const titleColor = "White";
const descriptionColor = "gray";

export default function Exp() {
  const [value, setValue] = useState("0");

  const handleChange = (key: string) => {
    setValue(key);
  };

  return (
    <div id="Experience">
      <div className="Exp-container">
      <h2>Experience</h2>
        <div className="Exp" >
          <Steps current={2} percent={60}>
            <Steps.Step
              title={<span style={{ color: titleColor }}>Content Writer</span>}
              description={
                <span style={{ color: descriptionColor }}>GeeksForGeeks</span>
              }
            />
            <Steps.Step
              title={<span style={{ color: titleColor }}>Web developer</span>}
              description={
                <span style={{ color: descriptionColor }}>CodeClause</span>
              }
            />
            <Steps.Step
              title={
                <span style={{ color: titleColor }}>Software trainee</span>
              }
              description={
                <span style={{ color: descriptionColor }}>
                  Collab Vison Infosolution
                </span>
              }
            />
          </Steps>
          <img className="Exp-image-left" src={colorSharp} alt="colorsharp" />

        </div>

        <div className="Exp-detail">
          <Tab.Container
            activeKey={value}
            onSelect={(key) => handleChange(key)}
          >
          
            <div className="app-bar">
              <Nav variant="pills" className="mb-3">
                <Nav.Item>
                  <Nav.Link className="nav-link-pill" eventKey="0">
                    Content Writing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link-pill" eventKey="1">
                    Web Developer
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link-pill" eventKey="2">
                    Software Trainee
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="0">
                <div className="Exp_detail-tab">
                  <h5>Content Writer</h5>
                  <p>GeeksforGeeks</p>
                  <p>Apr 2023 - Jul 2023 (3 months)</p>
                  <p>
                    <big>
                      <u>Skill:</u>
                    </big>{" "}
                    Computer science Fundamentals
                  </p>
                  <p>
                    During this time period, I wrote some articles for the
                    GeeksforGeeks website.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <div className="Exp_detail-tab">
                  <h5>Web Developer</h5>
                  <p>CodeClause</p>
                  <p>May 2023 - Jun 2023 (2 months)</p>
                  <p>
                    <big>
                      <u>Skill:</u>
                    </big>{" "}
                    HTML, CSS, JavaScript
                  </p>
                  <p>I worked as a web development intern.</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <div className="Exp_detail-tab">
                  <h5>Software Trainee</h5>
                  <p>Collab Vision Infosolutions</p>
                  <p>Jul 2023 - Present (1 month)</p>
                  <p>
                    <big>
                      <u>Skill:</u>
                    </big>{" "}
                    React.js, HTML, CSS, JavaScript
                  </p>
                  <p>I worked as a React developer intern.</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

      </div>
    </div>
  );
}
