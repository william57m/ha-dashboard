import React from 'react';
import styled from '@emotion/styled';

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
  const { weather } = props;

  function format2Digits(number) {
    return ('0' + number).slice(-2);
  }
  
  let weatherIcon = null;
  let date = null;

  if (weather) {
    date = new Date(new Date().getTime() + ((14400 + weather.timezone) / 60) * 60000);
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
      <TimeCityContainer>
        <Time>{format2Digits(date.getHours())}:{format2Digits(date.getMinutes())}</Time>
        <City>{weather.city}</City>
      </TimeCityContainer>
      <Icon><Image src={weatherIcon} /></Icon>
      <Temperature>{weather.temp}&#176;</Temperature>
    </WeatherRowContainer>
  );
}
