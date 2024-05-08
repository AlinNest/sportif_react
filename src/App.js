import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Footer from "./components/Footer/Footer";




const App = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
       <NavBar/>
      <div className="flex_container"></div>
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
