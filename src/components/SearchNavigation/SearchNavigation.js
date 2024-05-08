import { observer } from "mobx-react-lite";
import React from "react";
import cl from '../SearchNavigation/SearchNavigation.module.css';


const SearchNavigation = observer(({searchQuery, setSearchQuery}) => {

  return (
          <div className={cl.navigation_search}>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={cl.search_navigation} type="search" placeholder="SEARCH"/>
          </div>
  );
});

export default SearchNavigation;