import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductStore from './store/ProductStore';

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>
);


