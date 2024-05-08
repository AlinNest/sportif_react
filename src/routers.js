import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductPage from "./pages/ProductPage/ProductPage";
import { HOME_ROUTE, CATALOG_ROUTE } from "./utils/consts";


export const Routers = [
  {
    path: HOME_ROUTE,
    element: <Home/>
  },
 {
    path: CATALOG_ROUTE,
    element: <Catalog/>
  },
  {
    path: CATALOG_ROUTE + '/:id',
    element: <ProductPage/>
  },
];