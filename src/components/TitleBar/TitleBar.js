import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Context } from "../../index";
import { useContext } from "react";
import cl from './TitleBar.module.css';
import { NavLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../../utils/consts";



const TitleBar = observer(() => {
  const {product} = useContext(Context);
  const [filteredData, setFilteredData] = useState(product._products);
  const { filteredProducts } = product;

 
 const filterList = (title) => {
    
    if(filteredProducts){
    const newProductsSet = filteredProducts.filter(product => product.title === title.name)
    product.setSelectedTitle(title);
    product.setFilterTitle(newProductsSet);
  }else{
    const newProductsSet = filteredData.filter(product => product.title === title.name)
    product.setSelectedTitle(title);
    product.setFilterTitle(newProductsSet);
  }
  }


  useEffect(() => {
   
  }, [product._filterTitle, filteredData, filteredProducts])

  return (
    <div className={cl.menu__list}>
      
      {product._titles.map(title =>
      <li
        className={title.id === product._selectedTitles.id ? cl.menu__item + ' ' + cl.menu__link + ' ' + cl.active : cl.menu__item + ' ' + cl.menu__link}
         onClick={() => {filterList(title)}}
         key={title.id}
         title={title}
          >
          <NavLink to={CATALOG_ROUTE}>{title.name}</NavLink>
         </li>
        )}
    </div>
  );
});

export default TitleBar;