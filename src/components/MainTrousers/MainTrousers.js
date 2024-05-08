import React from "react";
import cl from './MainTrousers.module.css';
import { NavLink } from "react-router-dom";
import trousers_main from '../../assets/trousers_main.png';
import {CATALOG_ROUTE} from '../../utils/consts';


const MainTrousers = () => {
  return (
    <section className={cl.section__main_trousers}>
      <div className={cl.main + ' ' + cl.pad}>
      <div className={cl.main_img + ' ' + cl.trours_img}>
        <NavLink to={CATALOG_ROUTE}>
          <img className={cl.main__banner} src={trousers_main} alt="main banner"/>
        </NavLink>
      </div>
      <div className={cl.main_body_trousers}>
        <h2 className={cl.main_header_trousers}>OUR BESTSELLING PANTS</h2>
        <div className={cl.main_text + ' ' + cl.trours_text}>Our classic cargo pants are built to last and designed to exceed your expectations! From Frequent Traveler to Hatteras to Trinidad, we have the perfect fit for you!</div>
        <div className={cl.main_button}>
          <NavLink to={CATALOG_ROUTE}>SHOP ALL PANTS</NavLink>
        </div>
      </div>
    </div>
  </section>
    
  );
}

export default MainTrousers;