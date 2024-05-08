import React from "react";
import cl from './ShirtDiscount.module.css';
import { NavLink } from "react-router-dom";
import ecoths from '../../assets/ecoths.png';
import newPrint from '../../assets/new powel print shirt.png';
import {CATALOG_ROUTE} from '../../utils/consts';


const ShirtDiscount = () => {
  return (
    <section className={cl.section_shirtdiscount}>
    <div className={cl.shirtdiscount}>
      <div className={cl.cards_shirtdiscount}>
      <div className={cl.card_shirtdiscount}>
        <div><img className={cl.img_shirtdiscount} src={ecoths} alt="ECOTHS: NOW 30% OFF!"/></div>
        <div className={cl.item_shirtdiscount}>ECOTHS: NOW 30% OFF!</div>
        <div className={cl.decription_shirtdiscount}>Our entire Ecoths collection is on sale! Plus, for every Ecoths purchase we donate 3 meals to food banks across the United States. We’re over 400,000 meals in now.</div>
        <div className={cl.button_shirtdiscount}>
          <NavLink to={CATALOG_ROUTE}>SHOP ECOTHS SALE</NavLink>
        </div>
      </div>
      </div>
      <div className={cl.cards_shirtdiscount}>
        <div className={cl.card_shirtdiscount}>
          <div><img className={cl.img_shirtdiscount} src={newPrint} alt="ECOTHS: NOW 30% OFF!"/></div>
          <div className={cl.item_shirtdiscount}>NEW POWELL PRINT SHIRT</div>
          <div className={cl.decription_shirtdiscount}>New from Old Ranch Brands, the Powell short sleeve print shirt! Look effortlessly sharp in this lightweight cotton shirt with a classic shape and convenient features.</div>
          <div className={cl.button_shirtdiscount}>
            <NavLink to={CATALOG_ROUTE}>SHOP POWEL SHORT SLEEVE</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ShirtDiscount;