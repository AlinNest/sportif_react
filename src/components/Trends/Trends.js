import React from "react";
import cl from './Trends.module.css';
import belts from '../../assets/belts.png';
import swim_trunk from '../../assets/swim_trunk.png';
import online_catalog from '../../assets/online_catalog.png';


const Trends = () => {
  return (
    <section className={cl.section_trends}>
    <div className={cl.trends}>
      <div className={cl.title_trends}>STAY IN TREND WITH SPORTIF</div>
      <div  className={cl.trends_block_cards}>
        <div className={cl.trends_cards}>
          <div className={cl.trends_card}>
            <div className={cl.trends_card_img}><img className={cl.cart_img_item} src={belts} alt="belts"/></div>
            <div className={cl.trends_card_title}>Don't Forget a Belt!</div>
            <div className={cl.trends_card_btn}>SHOP ALL BELTS</div>
          </div>
          <div className={cl.trends_card}>
            <div className={cl.trends_card_img}><img src={swim_trunk} alt="swim trunk"/></div>
            <div className={cl.trends_card_title}>Swim Trunk Styles on Sale!</div>
            <div className={cl.trends_card_btn}>SHOP ALL SWIM TRUNKS</div>
          </div>
          <div className={cl.trends_card}>
            <div className={cl.trends_card_img}><img src={online_catalog} alt="online catalog"/></div>
            <div className={cl.trends_card_title}>Shop Newest Online Catalog</div>
            <div className={cl.trends_card_btn}>SHOP NEWEST CATALOG</div>
          </div>
      </div>
    </div>
    </div>
  </section>
  );
}

export default Trends;