import axios from 'axios';

const API_KEY = '1c93a84b979573facbdb5c297980c4a6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//{city name}&appid={API key}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

