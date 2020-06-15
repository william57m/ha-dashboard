import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { WeatherRow } from './WeatherRow';
import { CardContainer } from '../../Controls/Cards/Card';


const apiKey = '6fab242a97455d7bbda28668ee6c028c';

const WeatherCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
`;

export function WeatherCard() {
  const [weather1, setWeather1] = useState();
  const [weather2, setWeather2] = useState();

  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const result = (await axios.get(url)).data;
    const weatherInfo = {
      temp: Math.floor(result.main.temp),
      main: result.weather[0].main,
      city: result.name
    };
    return weatherInfo;
  }

  useEffect(() => {
    (async function() {
      const resultMontreal = await getWeather('montreal');
      setWeather1(resultMontreal);
      const resultStAvold = await getWeather('saint-avold');
      setWeather2(resultStAvold);
    })();
  }, []);

  return (
    <WeatherCardContainer>
      {weather1 && weather2 ?
        <React.Fragment>
          <WeatherRow {...weather1} />
          <WeatherRow {...weather2} offset={6} />
        </React.Fragment> : null
      }
    </WeatherCardContainer>
  );
}
