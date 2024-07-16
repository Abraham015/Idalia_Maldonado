import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">English</h3>
                <span className="about__subtitle">Advanced (C1 Level)</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">French</h3>
                <span className="about__subtitle">Intermediate (B1 Level)</span>
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