import React, { useContext, useMemo, useState }  from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import logo from "../../assets/logo.png";
import basket from "../../assets/shopping-basket.png";
import cl from './NavBar.module.css';
import Basket from "../../pages/Basket/Basket";
import TitleBar from "../TitleBar/TitleBar";
import { Context } from "../../index";
import ListSearchGoods from "../ListSearchGoods/ListSearchGoods";

const NavBar = observer(() => {
  const {product} = useContext(Context);
  const [isActive, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const titleQuery = product._selectedTitles.name;
  const { addToBasketProducts } = product;

  let quantity = 0;
 
  addToBasketProducts.forEach(el => quantity += el.quantity)

 
 

  const ToggleClass = () => {
    setActive(!isActive); 
   };

  
 const searchedProducts = useMemo(() => {
    
    return product._products.filter(product => product.description.toLowerCase().includes(searchQuery) && product.title.toLowerCase() === titleQuery.toLowerCase())
        
  }, [product._products, searchQuery, product._selectedTitles.name])


 
 
  return (
    
        <div>
          <header className={cl.header}>
            <div className={cl.nav_container  + ' ' +   cl.pad}>
              <div className={cl.logo}>
                <NavLink to={HOME_ROUTE}><img className={cl.logo_img} src={logo} alt="SPOTiFUSA"/></NavLink>
              </div>
              <div className={cl.header_burger}>
                <span></span>
              </div>
              <div className={cl.menu}>
                <nav className={cl.menu__body}>
                  <ul className={cl.menu__list}>
                  <TitleBar/>
                    <li className={cl.menu__item}>
                      <div className={cl.header__cart  + ' ' + cl.cart}>
                      <NavLink className={cl.menu__link  + ' ' +  cl.link__basket} to='#'
                        onClick={ToggleClass}
                        style={{visibility: 'visible', opacity: 1}}
                        >
                        <img className={cl.basket} src={basket} alt="basket"/>
                        <span className={cl.cart__quantity}>{quantity}</span>
                      </NavLink>
                      </div>
                    </li>
                  </ul>
                </nav>
              <form action="#">
                <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={cl.search__main} type="search" placeholder="SEARCH ENTIRE STORE HERE"/>
                 {(searchQuery !== '') 
                  ?
                  <ListSearchGoods products={searchedProducts} searchQuery={searchQuery}/>
                  :
                  null
                 }
              </form>
              </div>
              <Basket
               show={isActive} />
            </div>
         </header>
        </div>
  );
});

export default NavBar;