import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';


const apiKey = '6fab242a97455d7bbda28668ee6c028c';

const WeatherRowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  color: ${props => props.theme.colors.textLight};
`;

const Time = styled.div`
  position: absolute;
  top: 7px;
  left: 10px;
  color: ${props => props.theme.colors.textMedium};
  font-size: ${props => props.theme.card.state.size};
`;

const City = styled.div`
  position: absolute;
  top: 21px;
  left: 10px;
  font-size: ${props => props.theme.card.name.size};
`;

const Temperature = styled.div`
  position: absolute;
  top: 13px;
  right: 10px;
  font-size: 18px;
`;

const Icon = styled.div`
  position: absolute;
  top: 13px;
  right: 45px;
  font-size: 18px;
`;

export function WeatherRow(props) {
  const [weather, setWeather] = useState();

  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const result = (await axios.get(url)).data;
    const weatherInfo = {
      temp: Math.floor(result.main.temp),
      main: result.weather[0].main,
      city: result.name,
      timezone: result.timezone,
    };
    return weatherInfo;
  }

  useEffect(() => {
    (async function() {
      const result = await getWeather(props.city);
      setWeather(result);
    })();
  }, []);

  function format2Digits(number) {
    return ('0' + number).slice(-2);
  }
  
  let weatherIcon = null;
  let date = null;

  if (weather) {
    date = new Date(new Date().getTime() + ((14400 + weather.timezone) / 60) * 60000);
    switch(weather.main) {
      case 'Thunderstorm':
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
        break;
      case 'Drizzle':
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
        break;
      case 'Rain':
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        break;
      case 'Snow':
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
        break;
      case 'Clear':
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
        break;
      case 'Clouds':
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
        break;
      default:
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
  }

  return (
    <WeatherRowContainer>
      {weather ?
        <React.Fragment>
          <Time>{format2Digits(date.getHours())}:{format2Digits(date.getMinutes())}</Time>
          <City>{weather.city}</City>
          <Icon>{weatherIcon}</Icon>
          <Temperature>{weather.temp}&#176;</Temperature>
        </React.Fragment> : null
      }
    </WeatherRowContainer>
  );
}
