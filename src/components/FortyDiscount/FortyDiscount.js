import React from "react";
import cl from './FortyDiscount.module.css';
import short_9 from '../../assets/catalog/short_9.png';
import star from '../../assets/Star.png';
import starGrey from '../../assets/Star_grey.png';
import short_2 from '../../assets/catalog/short_2.png';
import short_3 from '../../assets/catalog/short_3.png';
import short_4 from '../../assets/catalog/short_4.png';



const FortyDiscount = () => {
  return (
    <section className={cl.section__fortydiscount}>
    <div className={cl.fortydiscount}>
    <div className={cl.fortydiscountheader1}>TGIF, INLET, AND MARCHAL'S COLLECTIONS</div>
    <div className={cl.fortydiscountheader2}>NOW 40% OFF!</div>
    <div className={cl.fortydiscountcards}>
      <div className={cl.fortydiscountcard}>
        <div className={cl.cart_img}>
          <img className={cl.cart_img_item} src={short_9} alt="short_9"/>
        </div>
        <div className={cl.cart_name}>Marchal's Original Cargo Short</div>
        <div className={cl.cart_star}>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
        </div>
        <div className={cl.cart_price}>As low as <span className={cl.price}>$40.99</span></div>
        <div className={cl.cart_button}>
          <button className={cl.cart_button_push}>ADD TO CART</button>
        </div>
      </div>
      <div className={cl.fortydiscountcard}>
        <div className={cl.cart_img}>
          <img className={cl.cart_img_item} src={short_2} alt="short_2"/>
        </div>
        <div className={cl.cart_name}>Inlet Original Short</div>
        <div className={cl.cart_star}>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
        </div>
        <div className={cl.cart_price}>As low as <span className={cl.price}>$38.99</span></div>
        <div className={cl.cart_button}>
          <button className={cl.cart_button_push}>ADD TO CART</button>
        </div>
      </div>
      <div className={cl.fortydiscountcard}>
        <div className={cl.cart_img}>
          <img className={cl.cart_img_item} src={short_3} alt="short_3"/>
        </div>
        <div className={cl.cart_name}>TGIF Pant</div>
        <div className={cl.cart_star}>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img className={cl.star_grey} src={starGrey} alt="star"/>
        </div>
        <div className={cl.cart_price}>As low as <span className={cl.price}>$40.99</span></div>
        <div className={cl.cart_button}>
          <button className={cl.cart_button_push}>ADD TO CART</button>
        </div>
      </div>
      <div className={cl.fortydiscountcard}>
        <div className={cl.cart_img}>
          <img className={cl.cart_img_item} src={short_4} alt="short_4"/>
        </div>
        <div className={cl.cart_name}>Inlet Original Pant</div>
        <div className={cl.cart_star}>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img src={star} alt="star"/>
          <img className={cl.star_grey} src={starGrey} alt="star"/>
        </div>
        <div className={cl.cart_price}>As low as <span className={cl.price}>$52.99</span></div>
        <div className={cl.cart_button}>
          <button className={cl.cart_button_push}>ADD TO CART</button>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
}

export default FortyDiscount;