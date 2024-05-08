import React, { useContext, useEffect } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import cl from './ItemBasket.module.css';



const ItemBasket = observer(({addToBasketProducts}) => {
  const { product } = useContext(Context);

 const Increment = (el) => {
   el.quantity += 1;
 }

 const Decrement = (el) => {
  if(el.quantity > 0) {
    el.quantity -= 1;
  }
  
  if(el.quantity < 1){
    DeleteItem(el.article);
  }
  
}


  
 const DeleteItem = (article) => {
  product.setAddToBasketProducts(addToBasketProducts.filter(el => el.article !== article))
 }

    useEffect(() => {

    }, [addToBasketProducts])


  return (
    <React.Fragment>
          {addToBasketProducts.length > 0 
          ?
          addToBasketProducts.map(prod => (
            
            <li className={cl.cart_content__item} key={Math.random()} id={prod.article}>
            <img src={prod.image} alt={prod.description} className={cl.card_product__img}/>
            <div className={cl.card_product__text}>
              <h3 className={cl.card_product__title}>{prod.description}</h3>
              <div className={cl.card_product__content}>
                <div className={cl.card_product__color}>COLOR:
                  <span className={cl.color_card} id="article-color">
                    <input type="color" value={prod.color} disabled=""/>
                  </span>
                </div>
                <div className={cl.card_product__size}>SIZE:
                  <span className={cl.color_card} id="article-size">{prod.size}</span>
                </div>
                <div className={cl.card_product__quantity}>
                  <span className={cl.quantity_decr} onClick={() => Decrement(prod)}>-</span>
                  <span className={cl.quantity}>{prod.quantity}</span>
                  <span className={cl.quantity_incr} onClick={() => Increment(prod)}>+</span>
                </div>
                <div className={cl.card_product__size}>Price:
                  <span className={cl.color_card}>$</span><span className={cl.card_product__price}>{prod.price}</span>
                </div>
                <div className={cl.card_product__size}>Sum:
                  <span className={cl.color_card}>$</span><span className={cl.card_product__sum}>{new Intl.NumberFormat().format(prod.price*prod.quantity)}</span>
                </div>
                <div className={cl.card_product__delete} onClick={() => {DeleteItem(prod.article)}}>
                  <button  aria-label="Delete product"></button>
                </div>
              </div>
            </div>  
          </li>
          ))
         :
         <div>
          Сart is empty
         </div>
}
         </React.Fragment>
  );
})

export default ItemBasket;