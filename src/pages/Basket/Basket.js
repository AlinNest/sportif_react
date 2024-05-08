import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import cl from './Basket.module.css';
import { Context } from "../..";
import ItemBasket from "../../components/UI/ItemBasket/ItemBasket";

const Basket = observer(({show}) => {
  const { product } = useContext(Context);
  const { addToBasketProducts } = product;

  let sumOrder= 0;
 
  addToBasketProducts.forEach(el => sumOrder += el.price * el.quantity)

    useEffect(() => {

    }, [addToBasketProducts, product])


  return (
    <div className={cl.basketPage}>
      <div className={show ? cl.cart_content + ' ' + cl.cart_content_active : cl.cart_content} >
        <ul className={cl.cart_content__list}>
        <ItemBasket addToBasketProducts={addToBasketProducts}/>
          </ul>
            <div className={cl.cart_content__bottom}>
              <div className={cl.cart_content__fullprice}>
                <span>Total price:</span>
                <span className={cl.fullpriceCurrency + ' ' + cl.color_card}>$ </span><span className={cl.fullprice}>{new Intl.NumberFormat().format(sumOrder)}</span>
              </div>
                <button className={cl.cart_content__btn  + ' ' +  cl.btn}>Order</button>
            </div>
      </div>               
    </div>
  );
})

export default Basket;