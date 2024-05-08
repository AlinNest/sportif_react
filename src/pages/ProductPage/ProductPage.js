import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { NavLink, useParams } from "react-router-dom";
import cl from './ProductPage.module.css';
import { observer } from "mobx-react-lite";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter 1.svg';
import pinterest from '../../assets/pinterest.svg';
import link from '../../assets/link.svg';
import free_delivery from '../../assets/free-delivery.svg';
import exchange from '../../assets/exchange.svg';
import Navigation from "../../components/Navigation/Navigation";
import { CATALOG_ROUTE } from "../../utils/consts";


const ProductPage = observer( () => {

  const {product} = useContext(Context);
  const params = useParams(); 

  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  

  const AddToCard = (productAddToCard) => {
    
    let isInArray = false
    const newProductToCard = {
      article: productAddToCard.article, 
      size: productAddToCard.size,
      color: productAddToCard.color, 
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


   
    useEffect(() => {
      
      
    }, [product, product._addToBasketProducts])

  return (
    
   <div key={Math.random()} className={cl.productPage} id={product.article}>
      
      {product._products.map(product => Number(params.id) === product.article
      
       ? 
       
      <section key={Math.random()}  className={cl.section__card}>
        <div className={cl.navigation}>
        <Navigation/>
        <div className={cl.navigation_shorts}><NavLink to={CATALOG_ROUTE}>{product.title}</NavLink></div>
        <div className={cl.navigation_shorts}><NavLink>{product.description}</NavLink></div>
      </div>
      
       
       <div className={cl.card_product} id={product.article}>
          
            <div className={cl.card_product_img}>
              <div className={cl.cart_image_max} id="cart-max">
                <img className={cl.cart_img_item_max} id={product.article} src={isActive ? product.image : product.image2} alt={product.description}/>
              </div> 
              <div className={cl.cart_image_min}>
                <div className={isActive ? cl.cart_min_activ : cl.cart_min} onClick={ToggleClass}>
                <img className={cl.cart_img_item_mini}  id={product.article} src={product.image} alt={product.description}/>
                </div> 
                <div className={!isActive ? cl.cart_min_activ : cl.cart_min} onClick={ToggleClass}>
                <img className={cl.cart_img_item_mini}  id={product.article} src={product.image2} alt={product.description}/>
                </div> 
              </div> 
            </div>
            <div className={cl.card_content} id={product.article}>
              <div className={cl.card_name}>{product.description}</div>
              <div className={cl.card_rating}>
                <div className={cl.rating_body}>
                  <div className={cl.rating_active} style={{width: `${product.rating/0.05}%`}}>
                    <div className={cl.rating_items}>
                      <input type="radio" className={cl.rating_item} value="1" name="rating"/>
                      <input type="radio" className={cl.rating_item} value="2" name="rating"/>
                      <input type="radio" className={cl.rating_item} value="3" name="rating"/>
                      <input type="radio" className={cl.rating_item} value="4" name="rating"/>
                      <input type="radio" className={cl.rating_item} value="5" name="rating"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cl.card_price}>As low as
                <div className={cl.card_price_content}>
                  <span>$</span>
                  <div className={cl.price_card}>{product.price}</div>
                </div>
              </div>
              <div className={cl.menu_color + ' ' + cl.card_colors}>COLOR:
                <div className={cl.card_colors} id={`article-color${product.article}`}></div>
                  {product.color.map(color => 
                    <div key={color}>   
                    <input id={`color${color}.0`} className={cl.checkbox} type="radio" value={color} name="color" onChange={e => product={...product, color: e.target.value}}/>
                    <label for={`color${color}.0`} style={{backgroundColor: color}}></label>
                  </div> 
                  )}
                
              </div>
              <div className={cl.card_color + " " + cl.card_size}>SIZE:
                <div className={cl.card_size} id={`article-size${product.article}`}></div>
                {product.size.map(size => 
                    <div key={size}>   
                    <input id={`size${size}.0`} className={cl.checkbox} type="radio" value={size} name="size" onChange={e => product={...product, size: e.target.value}}/>
                    <label for={`size${size}.0`}><span>{size}</span></label>
                  </div> 
                  )}
              </div>
              <div className={cl.card_buttons}>
                <button className={cl.card_button + ' ' + cl.card_button_bag} onClick={() => {AddToCard(product)}}>ADD TO BAG</button>
                <button className={cl.card_button + ' ' + cl.card_button_wishlist}>ADD TO WISHLIST</button>
              </div>
              <div className={cl.card_color}>
                <a href="#"><img className={cl.fb} src={facebook}alt="fb"/></a>  
                <a href="#"><img className={cl.fb} src={twitter} alt="tw"/></a>
                <a href="#"><img className={cl.fb} src={pinterest} alt="pint"/></a>
                <a href="#"><img className={cl.fb} src={link} alt="link"/></a>
              </div>
              <div className={cl.free_shopping}>
                <div className={cl.free_header}>- Worry Free Shopping -</div>
                <div className={cl.free_line}></div>
                <div className={cl.free_content}>
                  <div className={cl.free_content_left}>
                    <div><img src={free_delivery} alt="delivery"/></div>
                    <div className={cl.free_content_left_text}>FREE PRIORITY SHIPPING ON ORDERS $99+*</div>
                  </div>
                  <div className={cl.free_content_left}>
                    <div><img src={exchange} alt="exchange"/></div>
                    <div className={cl.free_content_left_text}>FREE RETURNS & EXCHANGES*</div>
                  </div>
                </div>
              </div>
            </div>
         </div>

        </section>
       : 
       null
        
      )}
   </div>
  );
});


export default ProductPage;