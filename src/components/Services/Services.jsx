import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "../Services/ServicesCard/ServicesCard";
import { Heading } from "../Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="services"
      id="skills"
    >
      <Heading text="Skills" />
      <div className="services-cards">
        {services &&
          services?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
