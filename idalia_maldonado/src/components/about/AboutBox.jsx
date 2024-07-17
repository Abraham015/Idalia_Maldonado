import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">Participacion en Consejo Coordinador de Mujeres Empresarias CCME</h3>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">Miembro de STEM</h3>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">German</h3>
                <span className="about__subtitle">Basic (A2 Level)</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">Chinese</h3>
                <span className="about__subtitle">Basic (A1 Level)</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox