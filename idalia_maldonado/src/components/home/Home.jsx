import React from 'react';
import './home.css';
import Me from '../../assets/Foto2.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Idalia Maldonado</h1>
        <span className="home__education">Coordinación de proyectos tecnologicos</span>
        <HeaderSocials/>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home