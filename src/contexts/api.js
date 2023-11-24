import { createContext, useState, useEffect } from "react";

const locationApiKey = "8082d923406246198d9d8951fa7a092c";
const weatherApiKey = "LW3CHSSCPTHUDGR654B5UJCSW";
const accuWeatherApiKey = "1rw6ZU0OMrGOWjnAG2k4IYQxPxVDmQtA"

export const DataContext = createContext();

export async function getApiData(url) {
  let request = await fetch(url);
  let data = await request.json();

  return data;
}

async function getLocationData() {
  let locationName = await getApiData(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${locationApiKey}`
  );

  let locationCode = await getApiData(
    `http://dataservice.accuweather.com/locations/v1/search?apikey=${accuWeatherApiKey}&q=${`${locationName.city}, ${locationName.region_iso_code}`}``}`
  )
  
  return locationCode.Key
}

async function getWeatherData(location) {
  let weather = await getApiData(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherApiKey}&unitGroup=metric&lang=pt`
  );

  return weather;
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLocationData();
      console.log(result)
      setData(result);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}