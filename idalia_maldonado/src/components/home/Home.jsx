import React from 'react';
import './home.css';
import Header from '../header/Header';
import ProfileCard from './ProfileCard';
import AboutMe from './AboutMe';

const Home=()=>{
  return(
    <div className="home" id='home'>
      <div className="content">
        <ProfileCard/>
        <AboutMe/>
      </div>
    </div>
  )
}

export default Home;

/*const Home = () => {
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

export default Home*/