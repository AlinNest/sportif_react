import React from "react";
import cl from './FirstScreen.module.css';
import { NavLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../../utils/consts";
import main_banner from '../../assets/main_banner.png'


const FirstScreen = () => {
  return (
    <section className={cl.section__main}>
    <div className={cl.main + ' ' +cl.pad}>
      <div className={cl.main_body}>
        <h2 className={cl.main_header}>BEST SELLING STRETCH SHORTS</h2>
        <div className={cl.main_text}>Get the perfect fit with 6 different inseam lengths.</div>
        <div className={cl.main_button}><NavLink to={CATALOG_ROUTE}>SHOP ALL SHORTS</NavLink></div>
      </div>
      <div className={cl.main_img}>
      <NavLink to={CATALOG_ROUTE}>
        <img className={cl.main__banner} src={main_banner} alt="main banner"/>
      </NavLink>
      </div>
    </div>
  </section>
  );
}

export default FirstScreen;