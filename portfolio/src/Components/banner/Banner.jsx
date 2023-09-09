

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import GirlProgrammer from "./b_assets/GirlProgrammer.png";
import java from "./b_assets/java.png";
import Vscode from "./b_assets/vscode.png";

import Code from "./b_assets/code.svg";
import Css from "./b_assets/css.svg";
import Github from "./b_assets/github.svg";
import Lecode from "./b_assets/leetcode.svg";
import Reactic from "./b_assets/react.svg";
import Htmlic from "./b_assets/html.svg";
import javascript from "./b_assets/javascript.svg";


import "./Banner.css";

 export default function Banner() {
   const toRotate = [
     "Web Developer",
     "Web designer",
     "Competitive Programmer",
     "Content Writer",
   ];
   const [loopNum, setLoopNum] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const [text, setText] = useState("");
   const [delta, setDelta] = useState(1000); // Increase this value for a slower animation
   const period = 2000; // time between words typed

   useEffect(() => {
     let ticker = setInterval(() => {
       tick();
     }, delta);

     return () => {
       clearInterval(ticker);
     };
   });

   const tick = () => {
     let i = loopNum % toRotate.length;
     let fullText = toRotate[i];
     let updatedText = isDeleting
       ? fullText.slice(0, text.length - 1)
       : fullText.slice(0, text.length + 1);
     setText(updatedText);

     if (isDeleting) {
       setDelta((prevDelta) => prevDelta / 2);
     }

     if (!isDeleting && updatedText === fullText) {
       setIsDeleting(true);
       setDelta(period);
     } else if (isDeleting && updatedText === "") {
       setIsDeleting(false);
       setLoopNum(loopNum + 1);
       setDelta(500);
     }
   };

   return (
     <div className="banner-container">
       <section className="svg-background">
       <img src={Reactic} alt="Reactic" className="icon icon-react" />
       <img src={Reactic} alt="Reactic" className="icon icon-reactR" />
         <img src={Css} alt="css" className="icon icon-css" />
         <img src={Htmlic} alt="html" className="icon icon-html" />
         <img src={Code} alt="code" className="icon icon-code" />
         <img src={Github} alt="Github" className="icon icon-github" />
         <img src={Lecode} alt="Leetcode" className="icon icon-leetcode" />
         <img src={Vscode} alt="Vscode" className="icon icon-vscode" />
         <img src={javascript} alt="javascript" className="icon icon-javascript" />
         <img src={java} alt="javascript" className="icon icon-java" />
      
       </section>
       <section className="banner" id="home">
         <Container>
           <Row className="align-items-center">
             <Col xs={12} md={6} xl={7}>
               <div className="text-container">
                 <span className="tagline">Welcome to my Portfolio</span>
                 <h1>{`Hi I'm Snehal `} <span className="wrap">{text}</span></h1>
                 <p>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Dolorem eligendi fugiat officiis harum quidem. Aliquam in ullam
                   esse, voluptatibus excepturi soluta ex, dolores nemo doloribus
                   corporis quam necessitatibus eveniet. Odio.
                 </p>
               </div>
               <button onClick={() => console.log('connect')}> {`Let's Connect`}<ArrowCircleRightIcon size={25} /></button>
             </Col>
             <Col xs={12} md={6} xl={5}>
               {/* <img src={Rocket} alt="Rocket" /> */}
               <img src={GirlProgrammer} alt="Header Img" />
             </Col>
           </Row>
         </Container>
       </section>
     </div>
   );
}
