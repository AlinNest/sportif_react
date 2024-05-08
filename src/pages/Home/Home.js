import React from "react";
import cl from './Home.module.css';
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import FortyDiscount from "../../components/FortyDiscount/FortyDiscount";
import MainTrousers from "../../components/MainTrousers/MainTrousers";
import ShirtDiscount from '../../components/ShirtDiscount/ShirtDiscount';
import OriginalPant from "../../components/OriginalPant/OriginalPant";
import Trends from '../../components/Trends/Trends';
import FiftyYears from "../../components/FiftyYears/FiftyYears";

const Home = () => {
  return (
    <div className={cl.block}>
    <FirstScreen/>
    <FortyDiscount/>
    <MainTrousers/>
    <ShirtDiscount/>
    <OriginalPant/>
    <Trends/>
    <FiftyYears/>
    </div>
  );
}

export default Home;