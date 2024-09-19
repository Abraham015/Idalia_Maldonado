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
