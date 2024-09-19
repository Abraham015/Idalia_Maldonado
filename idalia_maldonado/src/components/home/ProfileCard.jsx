// components/ProfileCard.js
import React from 'react';
import './home.css';
import Me from '../../assets/Foto2.jpeg';
import HeaderSocials from './HeaderSocials';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={Me} alt="" className="profile-picture" />
      <h2>Idalia Maldonado</h2>
      <p>Coordinación de proyectos tecnológicos</p>
      <HeaderSocials/>
    </div>
  );
}

export default ProfileCard;
