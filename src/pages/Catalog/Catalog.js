import React, {useContext, useMemo, useState} from "react";
import ProductList from "../../components/ProductList/ProductList";
import { observer } from "mobx-react-lite";
import cl from './Catalog.module.css';
import Navigation from "../../components/Navigation/Navigation";
import Arrow_1 from '../../assets/Arrow 1.png';
import FilterCatalog from "../../components/FilterCatalog/FilterCatalog";
import SearchNavigation from "../../components/SearchNavigation/SearchNavigation";
import { Context } from "../../index";
import { useEffect } from "react";


const Catalog = observer(() => {
  const {product} = useContext(Context);
  const { selectedItem, products } = product;
  const titleQuery = product._selectedTitles.name;
  const [searchQuery, setSearchQuery] = useState('');

  function filtersArraySizes (filtersCheck, products) {
    const array = [];

    filtersCheck.forEach((e) => {
      
      const size = Number(e);
      const value = products.includes(size);
      array.push(value);
    })
  
    if (array.length !== 0) {
      return array.includes(true);
  }
  }

  function filtersArrayColors (filtersCheck, products) {
    const array = [];

    filtersCheck.forEach((e) => {
      const value = products.includes(e);
      array.push(value);
    })
  
    if (array.length !== 0) {
      return array.includes(true);
  }
  }

 function filteredData(products, selected) {
  
    let filteredProducts = products;
   
     filteredProducts = products.filter( product => (
       
       (!selected.size.length || filtersArraySizes(selected.size, product.size)) &&
       (!selected.color.length || filtersArrayColors(selected.color, product.color)) &&
       (!selected.rating || product.rating >= selected.rating) &&
       (!selected.minPrice || product.price >= selected.minPrice) &&
       (!selected.maxPrice || product.price <= selected.maxPrice)
      ));

      const endOffset = product._productOffset + product._limit;
      const newProductsSet = filteredProducts.filter(product => product.title.toLowerCase() === titleQuery.toLowerCase());
      const newProductsFilter = newProductsSet.slice(product._productOffset, endOffset);
      product.setTotalCount(newProductsSet.length);


    return newProductsFilter;
  }

const sortedAndSearchedProducts = useMemo(() => {
  return product._products.filter(product => product.description.toLowerCase().includes(searchQuery) && product.title.toLowerCase() === titleQuery.toLowerCase())
}, [searchQuery, titleQuery])



 const result = useMemo(() => {
  const productsFiltered = filteredData(sortedAndSearchedProducts, selectedItem);

  return productsFiltered;
  
 }, [sortedAndSearchedProducts, selectedItem, product._productOffset, product._filterTitle]) 

 

useEffect(() => {
  product.setFilteredProducts(result)
}, [selectedItem, result, product])


  return (

    <section className={cl.catalogPage + ' ' + cl.section__main}>
      <section className={cl.section__navigation + ' ' + cl.pad}>
        <div className={cl.navigation}>
          <Navigation/>
          <SearchNavigation
           searchQuery={searchQuery}
           setSearchQuery={setSearchQuery}/>
        </div>
      </section>
      <section className={cl.section__catalog}>
        <div className={cl.catalog}>
          <FilterCatalog onClick={filteredData}/>
          <div className={cl.filter_icon}></div>
          <section className={cl.section__card}>
            <ProductList result={result}/>
          </section>
          <div>
            <a className={cl.button_down}href="#"><img src={Arrow_1} alt="Arrow"/></a> 
          </div> 
        </div>
      </section>
    </section>
  );
});

export default Catalog;