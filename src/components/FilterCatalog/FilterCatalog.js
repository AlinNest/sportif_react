import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../index";
import cl from './FilterCatalog.module.css';
import SizeBar from "../SizeBar/SizeBar";
import ColorBar from "../ColorBar/ColorBar";
import { observer } from "mobx-react-lite";





const FilterCatalog = observer( () => {
  const {product} = useContext(Context);
  const { selectedItem } = product;
  const [isActiveSize, setActiveSize] = useState(false);
  const [isActiveColor, setActiveColor] = useState(false);
  const [isActivePrice, setActivePrice] = useState(false);
  const [isActiveRating, setActiveRating] = useState(false);


  const ToggleClassSize = () => {
    setActiveSize(!isActiveSize); 
   };
   const ToggleClassColor = () => {
    setActiveColor(!isActiveColor); 
   };
   const ToggleClassPrice = () => {
    setActivePrice(!isActivePrice); 
   };
   const ToggleClassRating = () => {
    setActiveRating(!isActiveRating); 
   };

  const Clean = (e) => {
    e.preventDefault();
    product.setSelectedItem({size:[], color:[], minPrice:'', maxPrice:'', rating:''})
    e.target.form.reset()
  }

  useEffect(() => {
    product.setSelectedItem(selectedItem)
  }, [product, selectedItem])
  
 
  
  return (
    <div className={cl.catalog_filter}>
      <form >
        <ul className={cl.list}>
          <li className={cl.filter}>
            <div className={cl.filter_header}>SIZE
              <span className={isActiveSize ? cl.filter_header_arrow + ' ' + cl.arrow_active : cl.filter_header_arrow} onClick={ToggleClassSize}></span>
            </div>
              <SizeBar show={isActiveSize} />
            <hr/>
          </li>
          <li className={cl.filter}>
             <div className={cl.filter_header}>COLOR
            <span className={isActiveColor ? cl.filter_header_arrow + ' ' + cl.arrow_active : cl.filter_header_arrow}  onClick={ToggleClassColor}></span>
          </div>
           <ColorBar show={isActiveColor}/> 
          <hr/>
        </li>
          <li className={cl.filter}>
            <div className={cl.filter_header}>Price
            <span className={isActivePrice ? cl.filter_header_arrow + ' ' + cl.arrow_active : cl.filter_header_arrow}  onClick={ToggleClassPrice}></span>
          </div>
          <div className={isActivePrice ? cl.catalog_menu_price + ' ' + cl.hide : cl.catalog_menu_price}>
            <input className={cl.catalog_menu_price_input + ' ' + cl.price} type="text" value={selectedItem.minPrice} id="price-min" placeholder="Min" name='price-min' onChange={(e) => product.setSelectedItem({...selectedItem, minPrice: e.target.value})}/>
            <span>-</span>
            <input className={cl.catalog_menu_price_input} type="text" value={selectedItem.maxPrice} id="price-max" placeholder="Max" name='price-max' onChange={(e) => product.setSelectedItem({...selectedItem, maxPrice: e.target.value})}/>
            <span>Usd</span>
          </div>
          <hr/>
        </li>
          <li className={cl.filter}> 
            <div className={cl.filter_header}>Rating
            <span className={isActiveRating ? cl.filter_header_arrow + ' ' + cl.arrow_active : cl.filter_header_arrow}  onClick={ToggleClassRating}></span>
          </div>
          <div className={isActiveRating ? cl.catalog_menu_rating + ' ' + cl.block_filter + ' ' + cl.menu_rating + ' ' + cl.hide : cl.catalog_menu_rating + ' ' + cl.block_filter + ' ' + cl.menu_rating}>
            <label htmlFor="rating">Min rating</label>
            <input className={cl.rating} type="number" name="rating" min="0" max="5" placeholder="0" id="rating" value={selectedItem.rating} onChange={(e) => product.setSelectedItem({...selectedItem, rating: e.target.value})}/>
            <span>Stars</span>
          </div>
          <hr/>
        </li>
        </ul>
          <button className={cl.clean} type="reset" onClick={e => Clean(e)}>Clean filters</button>
      </form>
      </div>
  );
});

export default FilterCatalog;