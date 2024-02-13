import { Col } from "react-bootstrap";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt ="project img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <a href={link} target ="blank" >Live demo of Project <OpenInNewIcon /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

