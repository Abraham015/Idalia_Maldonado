import React from "react";
import "./about.css";
import Ab from "../../assets/Foto1.jpeg";
import AboutBox from "./AboutBox";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Acerca de mí</h2>
      <div className="about__container grid">
        <img src={Ab} alt="" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              Más de 20 años de experiencia en el área de tecnología de
              información y desarrollo de sistemas en ambientes gubernamentales,
              corporativos, medianas empresas, firmas de consultoría y
              universitarios, siendo reconocida en distintos niveles por un alto
              enfoque al cliente, orientación a resultados, solución de
              problemas, innovación y mejora continua. El logro mas importante
              en este año fue ser la primer institución educativa en el país en
              generar el software para el envío de títulos electrónicos de la
              matricula de egresados del Instituto Politécnico Nacional.
            </p>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
