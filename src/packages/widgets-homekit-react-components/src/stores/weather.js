import axios from 'axios';


const apiKey = '6fab242a97455d7bbda28668ee6c028c';

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const result = (await axios.get(url)).data;
  const weatherInfo = {
    temp: Math.floor(result.main.temp),
    main: result.weather[0].main,
    city: result.name,
    timezone: result.timezone,
    iconId: result.weather[0].icon
  };
  return weatherInfo;
}
