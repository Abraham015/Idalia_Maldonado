  import React,{ useState }  from 'react';
  import './portfolio.css';
  import Menu from './Menu';

  const Portfolio = () => {
    const [items, setItems]=useState(Menu);
    const filterItem=(categoryItem)=>{
      const updatedItems=Menu.filter((curElem)=>{
        return curElem.category===categoryItem;
      })

      setItems(updatedItems);
    }
    return (
      <section className="work">
        <div className="work__filters">
          <span className="work__item" onClick={()=>setItems(Menu)}>Todo</span>
          <span className="work__item" onClick={()=>filterItem("Entrevista")}>Entrevistas</span>
          <span className="work__item" onClick={()=>filterItem("Publicaciones")}>Publicaciones</span>
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