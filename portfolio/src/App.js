
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./Components/navbar/NavigationBar";
import GoToTop from "./Components/navbar/GoToTop";
import Banner from "./Components/banner/Banner";
import Skills from "./Components/skills/Skills";
import Edu from "./Components/education/Edu";
import Exp from "./Components/experiences/Exp";

function App() {
  return (
    <div className="App" >
    <NavigationBar/>
    <GoToTop/>
    <Banner/>
    <Skills/>
    <Edu/>
    <Exp/>
    </div>
  );
}

export default App;
