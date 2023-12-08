import { getApiData } from './ApiData';

const weatherApiKey = "LW3CHSSCPTHUDGR654B5UJCSW";

export async function getWeatherData(location) {
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
    return error;
  }
}

