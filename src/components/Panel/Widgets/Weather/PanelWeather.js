import React from 'react';
import { Title } from '../../../Common';
import { PanelSection } from '../Common';
import { WeatherCard } from './WeatherCard';


export function PanelWeather(props) {
  return (
    <PanelSection>
      <Title>Météo</Title>
      <WeatherCard hass={props.hass} />
    </PanelSection>
  );
};
