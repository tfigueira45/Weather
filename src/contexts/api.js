import { createContext, useState, useEffect } from "react";

const locationApiKey = "8082d923406246198d9d8951fa7a092c";
const weatherApiKey = "LW3CHSSCPTHUDGR654B5UJCSW";

export const DataContext = createContext();

async function getApiData(url) {
  let request = await fetch(url);
  let data = await request.json();

  return data;
}

async function getLocationData() {
  let location = await getApiData(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${locationApiKey}`
  );
  return getWeatherData(`${location.city}, ${location.region_iso_code}`);
}

async function getWeatherData(location) {
  let weather = await getApiData(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherApiKey}&unitGroup=metric&lang=pt`
  );

  return weather;
}

export async function searchWeatherData(q){
  try {
    let weather = await getWeatherData(q);
    return weather;

  } catch (error) {
    console.log(error); 
    return "e";
  }
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLocationData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}