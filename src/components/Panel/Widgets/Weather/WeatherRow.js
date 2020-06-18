import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCloud,
//   faBolt,
//   faCloudRain,
//   faCloudShowersHeavy,
//   faSnowflake,
//   faSun,
//   faSmog,
// } from '@fortawesome/free-solid-svg-icons';

// Weather icons
import {
  DayClearIcon,
  DayPartlyCloudyIcon,
  NightClearIcon,
  NightPartlyCloudyIcon,
  FogIcon,
  CloudyIcon,
  ShowerIcon,
  SnowIcon,
  ThunderstormIcon,
} from '../../../../resources/icon/weather';

const apiKey = '6fab242a97455d7bbda28668ee6c028c';

const WeatherRowContainer = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  padding: 10px;
  align-items: center;
  box-sizing: border-box;
`;

const TimeCityContainer = styled.div`
  flex-grow: 1;
`;

const Time = styled.div`
  color: ${props => props.theme.colors.textMedium};
  font-size: ${props => props.theme.card.state.size};
`;

const City = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.card.name.size};
`;

const Temperature = styled.div`
  width: 36px;
  text-align: right;
  color: ${props => props.theme.colors.textLight};
  font-size: 18px;
`;

const Icon = styled.div`
  width: 22px;
  text-align: center;
`;

const Image = styled.img`
  height: auto;
  width: auto;
  max-height: 18px;
  max-width: 22px;
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
      iconId: result.weather[0].icon
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
    // switch(weather.main) {
    //   case 'Thunderstorm':
    //     weatherIcon = faBolt;
    //     break;
    //   case 'Drizzle':
    //     weatherIcon = faCloudRain;
    //     break;
    //   case 'Rain':
    //     weatherIcon = faCloudShowersHeavy;
    //     break;
    //   case 'Snow':
    //     weatherIcon = faSnowflake;
    //     break;
    //   case 'Clear':
    //     weatherIcon = faSun;
    //     break;
    //   case 'Clouds':
    //     weatherIcon = faCloud;
    //     break;
    //   default:
    //     weatherIcon = faSmog;
    // }
    switch(weather.iconId) {
      case '01d': // Clear
        weatherIcon = DayClearIcon;
        break;
      case '01n':
        weatherIcon = NightClearIcon;
        break;
      case '02d': // Partly Cloudy
        weatherIcon = DayPartlyCloudyIcon;
        break;
      case '02n':
        weatherIcon = NightPartlyCloudyIcon;
        break;
      case '03d': // Cloud
        weatherIcon = CloudyIcon;
        break;
      case '03n':
        weatherIcon = CloudyIcon;
        break;
      case '04d': // Heavy cloud
        weatherIcon = CloudyIcon;
        break;
      case '04n':
        weatherIcon = CloudyIcon;
        break;
      case '09d': // Light Rain
        weatherIcon = ShowerIcon;
        break;
      case '09n':
        weatherIcon = ShowerIcon;
        break;
      case '10d': // Heavy Rain
        weatherIcon = ShowerIcon;
        break;
      case '10n':
        weatherIcon = ShowerIcon;
        break;
      case '11d': // Thunderstorm
        weatherIcon = ThunderstormIcon;
        break;
      case '11n':
        weatherIcon = ThunderstormIcon;
        break;
      case '13d': // Snow
        weatherIcon = SnowIcon;
        break;
      case '13n':
        weatherIcon = SnowIcon;
        break;
      case '50d': // Mist
        weatherIcon = FogIcon;
        break;
      case '50n':
        weatherIcon = FogIcon;
        break;
      default:
        weatherIcon = CloudyIcon;
    }
  }

  return (
    <WeatherRowContainer>
      {weather ?
        <React.Fragment>
          <TimeCityContainer>
            <Time>{format2Digits(date.getHours())}:{format2Digits(date.getMinutes())}</Time>
            <City>{weather.city}</City>
          </TimeCityContainer>
          <Icon><Image src={weatherIcon} /></Icon>
          <Temperature>{weather.temp}&#176;</Temperature>
        </React.Fragment> : null
      }
    </WeatherRowContainer>
  );
}
