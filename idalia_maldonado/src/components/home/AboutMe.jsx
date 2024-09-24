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
            Profesional en ingeniería de sistemas computacionales e inteligencia
            artificial con más de 20 años de experiencia en este ámbito, líder
            en desarrollo e innovación de tecnología, conferencista e
            investigadora, ha incorporado su experiencia profesional para formar
            a las futuras generaciones en ingeniería en México. Es maestra en
            Ciencias de la Computación por la University of Saskatchewan en
            Canadá y cuenta con una especialidad en Alta Dirección de Empresas
            por el IPADE Business School, fue la primer mujer en ser directora
            del Centro Nacional de Cálculo (CENAC) del Instituto Politécnico
            Nacional y forma parte del Consejo Coordinador de Mujeres
            Empresarias capitulo Ciudad de México.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
