import React, {useContext} from "react";
import { DataContext } from '../../contexts/WeatherContext';
import MinMax from "../MinMax/MinMax";
import { images } from "../../assets/images/images";
import "./Current.css"
import ToggleUnit from "./ToggleUnit/ToggleUnit";

function Current() {
  const { data } = useContext(DataContext);
  
  return (
    <div className="current flex">
      <div className="tempContainer flex">
        <img src={images[data.currentConditions.icon.replaceAll(/-/g,'_')]} alt={data.currentConditions.icon} />
        <span className="temperature">
          {data.currentConditions.temp}°
        </span>
        <ToggleUnit />
      </div>
      <MinMax data={data.days[0]} />
      <p className="desc">{data.currentConditions.conditions}</p>
    </div>
  )
}

export default Current;
