import React from 'react';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../utils/consts";
import cl from './ListSearchGoods.module.css';


const ListSearchGoods = observer( ({products, searchQuery}) => {


  const history = useNavigate();
 
    return (
      <div className={cl.filterDescription}>
       {products.map(product => 
       <div className={cl.title}  key={Math.random()} id={product.article} style={{cursor: 'pointer'}} onClick={() => history(CATALOG_ROUTE + '/' + product.article)}>
        <li>
          <div className={cl.h1}>{product.description}</div>
          </li>
          </div> ).slice(0, 5)}
      </div>
      

)});

export default ListSearchGoods;