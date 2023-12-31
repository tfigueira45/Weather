import { getApiData } from './ApiData';
import { getWeatherData } from './WeatherData'

const locationApiKey = "8082d923406246198d9d8951fa7a092c";

export async function getLocationData() {
  try {
    let location = await getApiData(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${locationApiKey}`
    );
    return getWeatherData(`${location.city}, ${location.region_iso_code}`);
  } catch (error) {
    console.error(`Location Data Error =\n`, error);
    throw error;
  }
}
