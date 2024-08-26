// components/AboutMe.js
import React from "react";
import "./home.css";
import Ab from "../../assets/Foto1.jpeg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <img src={Ab} alt="" className="about-me-image" />
        <div className="about-me-text">
          <h2>Acerca de mí</h2>
          <p>
            Más de 20 años de experiencia en el área de tecnología de
            información y desarrollo de sistemas en ambientes gubernamentales,
            corporativos, medianas empresas, firmas de consultoría y
            universitarios, siendo reconocida en distintos niveles por un alto
            enfoque al cliente, orientación a resultados, solución de problemas,
            innovación y mejora continua. El logro más importante en este año
            fue ser la primer institución educativa en el país en generar el
            software para el envío de títulos electrónicos de la matrícula de
            egresados del Instituto Politécnico Nacional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
