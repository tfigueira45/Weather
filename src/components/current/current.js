import React, {useContext} from "react";
import { DataContext } from "../../contexts/api";
import "./current.css"

function Current() {
  const data = useContext(DataContext);

  return (
    <div className="current flex">
      <div className="tempContainer flex">
        <img src={`Weather/images/${data.currentConditions.icon}.png`} alt={data.currentConditions.icon} />
        <span className="temperature">
          {data.currentConditions.temp}°
        </span>
      </div>
      <p className="minMax">
        {`${data.days[0].tempmin}°/${data.days[0].tempmax}°`}
      </p>
      <p className="desc">{data.currentConditions.conditions}</p>
    </div>
  )
}

export default Current;
