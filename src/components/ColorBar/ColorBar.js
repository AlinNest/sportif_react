import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "../../index";
import { useContext } from "react";
import cl from './ColorBar.module.css';




const ColorBar = observer(({show}) => {
  const {product} = useContext(Context);
  const { selectedItem } = product;
  const colors = [];

  for(let i = 0; i < product._products.length; i++){
    for(let key in product._products[i].color){
      colors.push(product._products[i].color[key]);
  }
  }

  const newColors = new Set(colors);
  const uniqueColors = Array.from(newColors);

  
  return (
    <div className={show ? cl.catalog_menu + ' ' + cl.card_colors + ' ' + cl.hide : cl.catalog_menu + ' ' + cl.card_colors} onChange={e => product.setSelectedItem({...selectedItem, color: [...selectedItem.color, e.target.value]})}>
      
      {uniqueColors.map(color =>

        <div>     
          <input id={`color${color}.0`} className={cl.checkbox} type="checkbox" value={color} name="color"/>
          <label key={Math.random()} for={`color${color}.0`} style={{backgroundColor: color}}></label>
        </div> 
        )}
    </div>
  );
});

export default ColorBar;