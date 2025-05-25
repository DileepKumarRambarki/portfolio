import React from 'react';
import "./Experience.css"
import ExpCard from "./ExpCard.jsx"
import { Heading } from "../Heading/Heading.jsx";
const Experience = ({exps}) => {
  // const exps=props.exps;
  return (
    <div className='exp-container' id="experience">
    <Heading text="Experience" />
    <div className='exp-box'>
      {
        exps.map((exp)=>{
          return(
            <ExpCard role={exp.role} company={exp.company} icon={exp.icon} location={exp.location} duration={exp.duration} desc={exp.desc} />
          )
        })
      }
    </div>
    </div>
    );
};

export default Experience;
