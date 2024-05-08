import React from "react";
import { NavLink } from "react-router-dom";
import { ACCESSORIES_ROUTE, HOME_ROUTE, PANTS_ROUTE, SHIRTS_ROUTE, SHORTS_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import cl from './Footer.module.css';

const Footer = observer(() => {
 

  return (
    
    <footer>
    <section className={cl.footer_main}>
      <div className={cl.footer}>
       <div className={cl.footer_column}>
        <div className={cl.footer_column_title}><a href="#">ORDERING ONLINE</a></div>
        <div className={cl.footer_column_item}><a href="#">Account Login</a></div>
        <div className={cl.footer_column_item}><a href="#">Our Guarantee</a></div>
        <div className={cl.footer_column_item}><a href="#">Sportif Stretch Guide</a></div>
        <div className={cl.footer_column_item}><a href="#">Size Chart & Sizing Information</a></div>
        <div className={cl.footer_column_item}><a href="#">Hemming Information</a></div>
        <div className={cl.footer_column_item}><a href="#">Ordering & Payment</a></div>
        <div className={cl.footer_column_item}><a href="#">Shipping Information</a></div>
        <div className={cl.footer_column_item}><a href="#">Returns</a></div>
       </div>
       <div className={cl.footer_column}>
        <div className={cl.footer_column_title}><a href="#">ABOUT SPORTIF</a></div>
        <div className={cl.footer_column_item}><a href="#">COVID-19 Response
        </a></div>
        <div className={cl.footer_column_item}><a href="#">History
        </a></div>
        <div className={cl.footer_column_item}><a href="#">Legacy
        </a></div>
        <div className={cl.footer_column_item}><a href="#">Good Sam Program
        </a></div>
        <div className={cl.footer_column_item}><a href="#">Privacy & Security</a></div>
        <div className={cl.footer_column_item}><a href="#">Terms & Conditions
        </a></div>
        <div className={cl.footer_column_item}><a href="#">Careers</a></div>
       </div>
       <div className={cl.footer_column}>
        <div className={cl.footer_column_title}><a href="#">QUICK LINKS</a></div>
        <div className={cl.footer_column_item}><a href="#">FAQs
        </a></div>
        <div className={cl.footer_column_item}><a href="#">Shop Online Catalog</a></div>
        <div className={cl.footer_column_item}><a href="#">Contact Us</a></div>
       </div>
       <div className={cl.footer_column}>
        <div className={cl.footer_column_title}><a href="#">GET TO KNOW US
        </a></div>
        <div className={cl.footer_column_item_promo}>Sign up for our weekly newsletter and get a 10% off coupon by email for your first order!</div>
        <div className={cl.footer_column_item}>Sign Up for Our Newsletter:</div>
        <div className={cl.sign_up}>
        <input  className={cl.sign_up_email} type="text" placeholder="EMAIL ADDRESS"/>
        <button className={cl.subscribe}>SUBSCRIBE</button>
        </div>
       </div> 
      </div>
    </section>
    <section className={cl.footer_signature}>
      <div className={cl.signature}>©2021 Sportif Mailorder. All Rights Reserved.</div>
    </section>
  </footer>
  );
});

export default Footer;