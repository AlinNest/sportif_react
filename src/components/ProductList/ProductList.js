import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo } from "react";
import { Context } from "../../index";
import ProductItem from "../ProductItem/ProductItem";
import cl from '../ProductList/ProductList.module.css';
import Pages from "../Pagination/Pages";



const ProductList = observer(({result}) => {
  const {product} = useContext(Context);


 const addToCard = (productAddToCard) => {
   let isInArray = false
  const newProductToCard = {
      article: productAddToCard.article, 
      size: '',
      color:'', 
      price: productAddToCard.price, 
      rating: productAddToCard.rating, 
      image: productAddToCard.image, 
      title: productAddToCard.title, 
      description: productAddToCard.description,
      quantity: 1,
  }

  product._addToBasketProducts.forEach(el => {
    if(el.article === productAddToCard.article) {
      isInArray = true
       el.quantity += 1;
    }})

    if(!isInArray){
      product.setAddToBasketProducts([...product._addToBasketProducts, newProductToCard])
    }
 }


  return (
   <div>
          <div className={cl.catalog_cards}>
            { result.length !== 0
            ?
            result.map(productItem =>
              <ProductItem
                key={productItem.article}
                productItem={productItem}
                addToCard={addToCard}
              />
              )
              :
              <h1 className={cl.text}>
              No products found
            </h1>
            }
          </div>
          <Pages result={result}/>
      </div>
      );
})

export default ProductList;
