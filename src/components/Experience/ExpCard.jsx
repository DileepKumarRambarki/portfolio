import React from 'react';
import './Experience.css';
import {motion} from "framer-motion"
const ExpCard = ({ role, company, icon, desc,location,duration }) => {
  return (
    <motion.div
      className="exp-card"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // whileHover={{ scale: 1.03 }}
      // transition={{ duration: 0.6, ease: 'easeOut' }}
      // viewport={{ once: true, amount: 0.2 }}
      data-aos="fade-left"
    >

      <div className="exp-header">
        <img src={icon} alt={`${company} logo`} className="exp-icon" />
        <div>
          <h2 className="exp-role">{role}</h2>
          <h3 className="exp-company">{company}</h3>
            <h4 className='location'>{location}</h4>
            <h4 className='duration'>{duration}</h4>
        </div>
      </div>
      <div className="exp-desc">
        {
          desc.map((point,index)=>{
            return(
              <p key={index}>-{point}</p>
            )
          })
        }
      </div>
    </motion.div>
  );
};

export default ExpCard;
