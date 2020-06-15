import React from 'react';
import styled from '@emotion/styled';
import { WeatherRow } from './WeatherRow';
import { CardContainer } from '../../../Controls/Cards/Card';


const WeatherCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
`;

export function WeatherCard() {
  return (
    <WeatherCardContainer>
      <WeatherRow city="Montreal" />
      <WeatherRow city="Saint-Avold" offset={6} />
    </WeatherCardContainer>
  );
}
