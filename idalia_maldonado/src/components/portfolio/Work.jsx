import React from "react";
import "./work.css";
import Carousel from "./Carousel";
import Portfolio from "./Portfolio";

const Resume = () => {
  return (
    <section className="work_container container" id="work">
      <div className="resume-container">
        <div className="section_work">
        <h2 className="work_title">Trabajos</h2>
          <Carousel />
        </div>
        <div className="section_portfolio">
          
        <h2 className="work_title">Entrevistas y publicaciones</h2>
          <Portfolio/>
        </div>
      </div>
    </section>
  );
};

export default Resume;
