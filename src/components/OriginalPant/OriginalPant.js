import React from "react";
import cl from './OriginalPant.module.css';
import { NavLink } from "react-router-dom";
import {CATALOG_ROUTE} from '../../utils/consts';


const OriginalPant = () => {
  return (
    <section className={cl.section_original_pants}>
    <div className={cl.original_pants}>
      <div className={cl.title_original_pants}>SPORTIF ORIGINAL PANT</div>
      <div className={cl.decription_original_pants}>Our classic nautical cargo pants are built to last and designed to exceed your expectations! Crafted from our stretch twill blend that offers the comfort of cotton, the wrinkle resistance of polyester and the mobility of Lycra®.</div>
      <div className={cl.button_original_pants}>
      <NavLink className={cl.button_original_pants_link} to={CATALOG_ROUTE}>SHOP SPORTIF ORIGINAL PANT</NavLink>
      </div>
    </div>
  </section>
  );
}

export default OriginalPant;