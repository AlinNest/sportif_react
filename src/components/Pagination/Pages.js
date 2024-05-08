import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo } from "react";
import { Context } from "../../index";
import cl from './Pagination.module.css';



const Pages = observer(({result}) => {
  const {product} = useContext(Context);
  const pageCount = Math.ceil(product._totalCount / product._limit);
  const pages = [];

  for(let i = 0; i < pageCount; i++){
    pages.push(i + 1);
  }

 const handlePageClick = (event) => {
    const newOffset = (event.target.id * product._limit) % product._totalCount;
    product.setProductOffset(newOffset);
  }

  useEffect(() => {
    
  }, [product._totalCount, pageCount])

  return (
    <div className={cl.catalog_pagination}>
      {pages.map(page => 
          <button
            id={page}
            key={page}
            onClick={(e) => {
            product.setPage(page);
            handlePageClick(e);
            } }
            className={page === product._pages ? cl.pb + ' ' + cl.pag_active : cl.pb}
          >
            {page}
          </button>
        )}
    
    </div>
  );
});

export default Pages;