import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../utils/consts";
import cl from './ProductItem.module.css';


const ProductItem = observer(({productItem, addToCard}) => {

  const history = useNavigate();

  return (

   <div key={Math.random()}  className={cl.fortydiscountcard}  id={productItem.article} >
        <div style={{cursor: 'pointer'}} border="light" onClick={() => history(CATALOG_ROUTE + '/' + productItem.article)}>
          <div className={cl.cart_img}>
            <img className={cl.cart_img_item} id={productItem.article} src={productItem.image} alt={productItem.description}/>
          </div>
          <div className={cl.cart_name}>{productItem.description}</div>
          </div>
          <div className={cl.rating}>
            <div className={cl.rating_body}>
            <div className={cl.rating_active} style={{width: `${(productItem.rating/0.05)}%`}}>
            <div className={cl.rating_items}>
              <input className={cl.rating_item} type="radio" value="1" name="rating"/>
              <input className={cl.rating_item} type="radio" value="2" name="rating"/>
              <input className={cl.rating_item} type="radio" value="3" name="rating"/>
              <input className={cl.rating_item} type="radio" value="4" name="rating"/>
              <input className={cl.rating_item} type="radio" value="5" name="rating"/>
            </div>
            </div>
            </div>
         </div>
         <div className={cl.cart_price}>As low as <span className={cl.currency}></span><span className={cl.price}>${productItem.price}</span></div>
         
         <div className={cl.cart_color}>
            {productItem.color.map(el => 
              <span key={Math.random()} className={cl.colors} style={{backgroundColor: `${el}`}}></span>
            )}
         </div>
        
         <div className={cl.cart_button}>
          <button className={cl.cart_button_push} id={productItem.article} onClick={() => {addToCard(productItem)}}>ADD TO CART</button>
        </div>
    </div> 
  );
});

export default ProductItem;