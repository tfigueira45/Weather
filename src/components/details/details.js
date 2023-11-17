import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import "./details.css"


const leftList = [
  { label: "Umidade", key: "humidity" },
  { label: "Sensação Térmica", key: "feelslike" },
  { label: "Vento", key: "windspeed" }
]

const rightList = [
  { label: "Índice de UV", key: "uvindex" },
  { label: "Chuva", key: "precipprob" },
  { label: "Visibilidade", key: "visibility" },
];

function Details() {
  const data = useContext(DataContext);

  function List({list}){
    return (
      <ul>
          {list.map(({ label, key }) => (
            <li key={key}>
              <span className="label">{label}</span>
              <span className="value" >{data.currentConditions[key]}</span>
            </li>
          ))}
      </ul>
    )
  }

  return (
    <div className="details">
      <List list={leftList} />
      <List list={rightList} />
    </div>
  );
}

export default Details;
