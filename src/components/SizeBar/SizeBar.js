import { observer } from "mobx-react-lite";
import React, {useEffect} from "react";
import { Context } from "../../index";
import { useContext } from "react";
import cl from './SizeBar.module.css';


const SizeBar = observer(({show}) => {
  const {product} = useContext(Context);
  const { selectedItem } = product;
  const sizes = [];


  for(let i = 0; i < product._products.length; i++){
    for(let key in product._products[i].size){
    sizes.push(product._products[i].size[key]);
  }
  }

  const newSizes = new Set(sizes);
  let uniqueSize = Array.from(newSizes);

  useEffect(() => {
    product.setSelectedItem(selectedItem)
   
  }, [selectedItem]);

  
  return (
    <div className={show ? cl.catalog_menu + ' ' + cl.card_size + ' ' + cl.hide : cl.catalog_menu + ' ' + cl.card_size} onChange={e => product.setSelectedItem({...selectedItem, size: [...selectedItem.size, e.target.value]})}>
      
      {uniqueSize.map(size =>
        <div >
          <input  id={`size${size}.0`} className={cl.checkbox} type="checkbox" value={size} name="size" />
           <label key={Math.random()} for={`size${size}.0`} style={{cursor: 'pointer'}}> 
            <span>{size}</span>
          </label>
        </div>
        )}
    </div>
  );
});

export default SizeBar;