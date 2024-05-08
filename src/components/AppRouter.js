import React from "react";
import { Routes, Route,  } from "react-router-dom";
import { Routers } from "../routers";
import Home from "../pages/Home/Home";



const AppRouter = () => {
  
 
  return (
     <Routes>
      {Routers.map(({path, element}) => {
         return <Route key={Math.random()} path={path} element={element} exact></Route>}
      )}
      <Route path='*' element={<Home/>}/>
    </Routes>
  );
}

export default AppRouter;