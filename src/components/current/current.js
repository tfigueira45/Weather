import React, {useContext} from "react";
import { WeatherContext } from '../../contexts/WeatherContext';
import MinMax from "../MinMax/MinMax";
import { images } from "../../assets/images/images";
import "./Current.css"
import ToggleUnit from "./ToggleUnit/ToggleUnit";
import { calcUnit } from "../../utils/calcUnit";
import { UnitContext } from "../../contexts/UnitContext";

function Current() {
  const { data } = useContext(WeatherContext);
  const { unit } = useContext(UnitContext);
  
  return (
    <div className="current flex">
      <div className="tempContainer centered">
        <img src={images[data.currentConditions.icon.replaceAll(/-/g,'_')]} alt={data.currentConditions.icon} />
        <span className="temperature">
          {calcUnit(unit, data.currentConditions.temp)}°
        </span>
        <ToggleUnit />
      </div>
      <MinMax data={data.days[0]} />
      <p className="desc">{data.currentConditions.conditions}</p>
    </div>
  )
}

export default Current;
