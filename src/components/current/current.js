import React, {useContext} from "react";
import { DataContext } from "../../contexts/api";
import "./current.css"

function Current() {
  const data = useContext(DataContext);

  return data ? (
    <div className="current">
      <div className="tempContainer">
        <img src={`/images/${data.currentConditions.icon}.png`} alt={data.currentConditions.icon} />
        <span className="temperature">
          {data.currentConditions.temp}°
        </span>
      </div>
      <p className="minMax">
        {`${data.days[0].tempmin}°/${data.days[0].tempmax}°`}
      </p>
      <p className="desc">{data.currentConditions.conditions}</p>
    </div>
  ) : (
    <div className="current"></div>
  )
}

export default Current;
