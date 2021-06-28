import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from 'homekit-react-components';
import { WeatherRow } from './WeatherRow';
import { CardTitle } from '../CardTitle';
import { getWeather } from '../../stores/weather';

const WeatherCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 0px;
  cursor: unset;
`;

export function WeatherCard() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    (async function() {
      const promises = props.cities.map((city) => getWeather(city));
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
