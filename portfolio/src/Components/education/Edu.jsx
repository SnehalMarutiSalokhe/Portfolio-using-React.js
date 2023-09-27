
import * as React from 'react';
import "./Edu.css";
import Card   from "./Card";


export default function Edu() {
    
    const Data = [
        {
          id: 1,
          category: "education",
          icon: "icon-graduation",
          year: "2021 - present (Expected Graduation Year: 2025)",
          title: "B.Tech/BE in Computer Science",
          desc: "Current CGPA: 9.03",
        },  
        {
          id: 2,
          category: "education",
          icon: "icon-graduation",
          year: "2020 - 2021",
          title: "12th Standard (HSC)",
          desc: "Maharashtra Board | Score: 93.17%",
        },
        
        {
          id: 3,
          category: "education",
          icon: "icon-graduation",
          year: "2018 - 2019",
          title: "10th Standard (SSC)",
          desc: "Maharashtra Board | Score: 92.60%",
        },    
        {
          id: 4,
          category: "experience",
          icon: "icon-briefcase",
          year: "2023 - present",
          title: "Web Designsigning",
          desc: "I am learning React.js form udemy",
        },
        {
          id: 5,
          category: "experience",
          icon: "icon-briefcase",
          year: "2022 - present",
          title: "Front-End Developer",
          desc: "I have learned the lagualges such as HTML and CSS from Youtube.",
        },
        {
          id: 6,
          category: "experience",
          icon: "icon-briefcase",
          year: "2022 - 2022",
          title: "Biginar Fulstack developer",
          desc: "I have completed Fulstack developer cource form Simplilearn,which was biginar level cource",
        },
      ];

  return (
   <div id="Education">
    <div  className="Edu">
            <h2 className="edu-title">Education</h2>
            <section className="Education container section">
        <div className="Education__container grid">

            <div className="timeline grid"> 
            <h4>Education</h4>
           {Data.map((val, id)=> {
            if(val.category === "education"){
                return (
                    <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                );
            }
            return null;
           })}


            </div>
           

            <div className="timeline grid"> 
            <h4>Other cources</h4>
           {Data.map((val,index)=> {
            if(val.category==="experience"){
                return (
                    <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>

                );
            }
            return null;
           })}
            </div>
        </div>
      </section>
       
    </div>
    </div>
  );
}


