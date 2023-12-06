import getApiData from './ApiData';

const weatherApiKey = "LW3CHSSCPTHUDGR654B5UJCSW";

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

export default getWeatherData;