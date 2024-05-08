import { observer } from "mobx-react-lite";
import React from "react";
import cl from '../Navigation/Navigation.module.css';
import { NavLink } from "react-router-dom";
import { CATALOG_ROUTE, HOME_ROUTE } from "../../utils/consts";




const Navigation = observer(() => {

  return (
        <div className={cl.navigation}>
          <div className={cl.navigation_home}><NavLink to={HOME_ROUTE}>Home</NavLink></div>
          <div className={cl.navigation_shorts}><NavLink to={CATALOG_ROUTE}>Catalog</NavLink></div>
        </div>
  );
});

export default Navigation;