import React from 'react';
import styled from '@emotion/styled';
import { WeatherRow } from './WeatherRow';
import { CardContainer } from '../../../Common/Cards';


const WeatherCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 0px;
`;

export function WeatherCard() {
  return (
    <WeatherCardContainer>
      <WeatherRow city="Montreal,CA" />
      <WeatherRow city="Saint-Avold,FR" />
    </WeatherCardContainer>
  );
}
