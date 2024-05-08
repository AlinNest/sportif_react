import React from "react";
import cl from './FiftyYears.module.css';
import Arrow_1 from '../../assets/Arrow 1.png';



const FiftyYears = () => {
  return (
    <section className={cl.section_fiftyyears}>
    <div className={cl.fiftyyears}>
      <div className={cl.title_fiftyyears}>FAMILY OWNED LEGACY</div>
      <div className={cl.description_fiftyyears}>We are proud to celebrate over 50 years of excellence as a family owned and operated business.</div>
      <div className={cl.button_fiftyyears}><a href="#">ABOUT US</a></div>
      <div>
        <a className={cl.button_down} href="#"><img src={Arrow_1} alt="Arrow"/></a> 
      </div> 
    </div>
  </section>
  );
}

export default FiftyYears;