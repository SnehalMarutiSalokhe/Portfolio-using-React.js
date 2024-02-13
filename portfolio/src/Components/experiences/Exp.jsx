import "./Exp.css";
import { Steps } from "antd";
import colorSharp from "../../assets/img/color-sharp.png";
import Experiences from "./Experiences";


const titleColor = "white";
const descriptionColor = "gray";

export default function Exp() {
 
  return (
    <div id="Experience">
      
      <div className="Exp-container">
      <h2>Experience</h2>
        <div className="Exp">
          <Steps current={2} percent={60}>
            <Steps.Step
              title={<span style={{ color: titleColor }}>Content Writer</span>}
              description={
                <span style={{ color: descriptionColor }}>GeeksForGeeks</span>
              }
            />
            <Steps.Step
              title={<span style={{ color: titleColor }}>Web Developer</span>}
              description={
                <span style={{ color: descriptionColor }}>CodeClause</span>
              }
            />
            <Steps.Step
              title={
                <span style={{ color: titleColor }}>Software Trainee</span>
              }
              description={
                <span style={{ color: descriptionColor }}>
                  Collab Vision Infosolution
                </span>
              }
            />
          </Steps>
          <img
            className="Exp-image-left"
            src={colorSharp}
            alt="Colorful Sharp Logo"
          />
        </div>

        <div className="Exp-detail">
        <Experiences/>

        </div> 
      </div>
    </div>
  );
}
