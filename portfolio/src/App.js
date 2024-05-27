
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


import NavigationBar from "./Components/navbar/NavigationBar";
import GoToTop from "./Components/navbar/GoToTop";
import Banner from "./Components/banner/Banner";
import Skills from "./Components/skills/Skills";
import Edu from "./Components/education/Edu";
import Exp from "./Components/experiences/Exp";
import Projects from "./Components/projects/Projects";
// import CodingProfiles from "./Components/codingProfiles/CodingProfiles";
import Resume from "./Components/education/Resume";

function App() {
  return (
    <div className="App" >
    <NavigationBar/>
    <GoToTop/>
    <Banner/>
    <Skills/>     
    <Projects/>
    <Edu/>
    <Exp/>
    {/* <CodingProfiles/> */}
    <Resume/>
    
    <NavigationBar/>

    </div>
  );
}

export default App;
