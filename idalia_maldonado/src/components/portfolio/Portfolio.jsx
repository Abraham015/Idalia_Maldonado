import React,{ useState }  from 'react';
import './portfolio.css';
import Menu from './Menu';
import Carousel from './Carousel';

const Portfolio = () => {
  const [items, setItems]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updatedItems=Menu.filter((curElem)=>{
      return curElem.category===categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section__title">Trabajos</h2>
      
      <Carousel/>
      <div className="work__filters">
        <span className="work__item" onClick={()=>setItems(Menu)}>Todo</span>
        <span className="work__item" onClick={()=>filterItem("FullStack")}>Entrevistas</span>
        <span className="work__item" onClick={()=>filterItem("FrontEnd")}>Publicaciones</span>
      </div>
      <div className="work__container grid">
        {items.map((elem)=>{
          const{id, image,title, category, link}=elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href={link} className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio