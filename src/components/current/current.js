import React, {useContext} from "react";
import { DataContext } from "../../contexts/api";
import MinMax from "../MinMax/MinMax";
import "./Current.css"

function Current() {
  const { data } = useContext(DataContext);
  
  return (
    <div className="current flex">
      <div className="tempContainer flex">
        <img src={`Weather/images/${data.currentConditions.icon}.png`} alt={data.currentConditions.icon} />
        <span className="temperature">
          {data.currentConditions.temp}°
        </span>
      </div>
      <MinMax data={data.days[0]} />
      <p className="desc">{data.currentConditions.conditions}</p>
    </div>
  )
}

export default Current;
