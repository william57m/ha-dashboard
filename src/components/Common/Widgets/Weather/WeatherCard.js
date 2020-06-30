import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { WeatherRow } from './WeatherRow';
import { CardContainer, CardTitle } from '../../../Common/Cards';
import { getWeather } from '../../../../stores/weather';

const WeatherCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 0px;
  cursor: unset;
`;

const cities = [
  'Montreal,CA',
  'Saint-Avold,FR'
]

export function WeatherCard() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    (async function() {
      const promises = cities.map((city) => getWeather(city));
      const results = await Promise.all(promises);
      setWeather(results);
    })();
  }, []);

  return (
    <WeatherCardContainer>
      <CardTitle>Météo</CardTitle>
      {weather && weather.map((w) => (
        <WeatherRow key={w.city} weather={w} />
      ))}
    </WeatherCardContainer>
  );
}
